<template>
	<!-- 입찰결과 보고서 -->
	<div class="modal fade modalStyle printDiv" id="resultsReport" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:800px">
			<div class="modal-content">
				<div class="modal-body">
					<a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">{{ title }}</h2>
					<h4 class="h4Tit mt20">입찰정보</h4>
					<div class="modalBoxSt mt10">
						<div class="flex align-items-center">
							<div class="formTit flex-shrink0 width170px">입찰번호</div>
							<div class="width100">{{ data.biNo }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰명</div>
							<div class="width100">{{ data.biName }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰방식</div>
							<div class="width100">{{ data.biMode | ftBiMode }}</div>
						</div>
						<div class="flex align-items-center mt10" v-if="flag == 'progress'">
							<div class="formTit flex-shrink0 width170px">입찰참가자격</div>
							<div class="width100">{{ data.bidJoinSpec }}</div>
						</div>
						<div class="flex mt10">
							<div class="formTit flex-shrink0 width170px">특수조건</div>
							<div class="width100">
								<pre style="background-color: white;">{{ data.specialCond }}</pre>
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">현장설명일시</div>
							<div class="width100">{{ data.spotDate }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">현장설명장소</div>
							<div class="width100">{{ data.spotArea }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
							<div class="width100">{{ data.succDeciMeth }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰일시</div>
							<div class="width100">{{ data.estStartDate }} ~ {{ data.estCloseDate }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">납품조건</div>
							<div class="width100">{{ data.supplyCond }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">금액기준</div>
							<div class="width100">{{ data.amtBasis }}</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">예산금액</div>
							<div class="width100">{{ data.bdAmt | numberWithCommas }} 원</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰담당자</div>
							<div class="width100">{{ data.damdangName }}</div>
						</div>
						<!-- <div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">계열사공유</div>
							<div class="width100">비공유</div>
						</div> -->
					</div>

					<h4 class="h4Tit mt20">투찰 내역</h4>
					<table class="tblSkin1 mt10">
						<colgroup>
							<col style="">
						</colgroup>
						<thead>
							<tr>
								<th>순위</th>
								<th>업체명</th>
								<th>대표자</th>
								<th>낙찰금액</th>
								<th>예산대비</th>
								<th class="end">구분</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(cust, idx) in data.custList" :key="idx">
								<td>{{ idx+1 }}</td>
								<td class="text-left">{{ cust.custName }}</td>
								<td>{{ cust.presName }}</td>
								<td class="text-right">{{ cust.esmtCurr }} {{ cust.esmtAmt | numberWithCommas }}</td>
								<td class="text-right" v-text="fnBdComp(cust.esmtAmt)"></td>
								<td class="end">{{ cust.succYn | ftSuccYn }}</td>
							</tr>
						</tbody>
					</table>

					<div class="modalFooter">
						<a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						<a @click="fnPrint" class="modalBtnCheck" title="인쇄하기">인쇄하기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //입찰결과 보고서 -->
</template>
<script>
export default {
	name: "bidResultReport",
	components: {},
	props: {
		data : {
			type:Object
		,	default:{}
		},
		title : {
			type:String
		,	default:"입찰결과 보고서"
		},
		flag : {
			type:String
		,	default:"complete"
		}
	},
	data() {
		return {}
	},
	filters:{
		ftBiMode(val){
			if(val == 'A'){ return '지명경쟁입찰'}
			else if(val == 'B'){ return '일반경쟁입찰'}
		},
		ftSuccYn(val){
			if(val == 'Y'){ return '낙찰'}
			else if(val == 'N'){ return ''}
		},
		numberWithCommas(val) {
			if(!val) return '0';
			else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
	},
	methods: {
		//인쇄하기
		fnPrint(){
			const printContents = document.querySelector('.printDiv').innerHTML;
			const html = document.querySelector('html');
			const printDiv = document.createElement("DIV");
			printDiv.className = "print-div modalStyle";
			html.appendChild(printDiv);
			printDiv.innerHTML = printContents;
			printDiv.querySelector(".modalFooter").style.display = "none";
			printDiv.querySelector(".ModalClose").style.display = "none";
			printDiv.querySelector(".modal-dialog").style.cssText = "width:100%; max-width:700px";
			document.body.style.display = 'none';
			window.print();
			document.body.style.display = 'block';
			$(".print-div").remove();
		},
		//예산대비 계산
		fnBdComp(esmtAmt){
			if(this.data.bdAmt <= 0){
				return '';
			}else{
				let rtn = ((this.data.bdAmt - (this.data.bdAmt - esmtAmt)) / this.data.bdAmt * 100)
				return rtn.toFixed(1) + "%";
			}
		}
	},
};
</script>