<template>

	<!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>전자입찰</li>
				<li>입찰완료 상세</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<div class="formWidth">
				<h3 class="h3Tit">입찰기본정보</h3>
				<div class="boxSt mt20">
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">입찰번호</div>
						<div class="width100">{{ data.biNo }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">입찰명</div>
						<div class="width100">{{ data.biName }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">품목</div>
						<div class="width100">{{ data.itemName }} 품목류</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">입찰방식</div>
						<div class="width100">{{ data.biMode | ftBiMode }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">입찰참가자격</div>
						<div class="width100">{{ data.bidJoinSpec }}</div>
					</div>
					<div class="flex mt20">
						<div class="formTit flex-shrink0 width170px">특수조건</div>
						<div class="width100">
							<div class="overflow-y-scroll boxStSm width100" style="height:50px">
								{{ data.specialCond }}
							</div>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">현장설명일시</div>
						<div class="width100">{{ data.spotDate }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">현장설명장소</div>
						<div class="width100">{{ data.spotArea }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
						<div class="width100">{{ data.succDeciMeth }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">입찰참가업체</div>
						<div class="width100">
							<div class="overflow-y-scroll boxStSm width100" style="height:50px">
								<a v-for="(cust, idx) in data.custList" :key="idx" @click="$refs.custUserPop.initModal(cust.custCode)" data-toggle="modal" data-target="#custUserPop" class="textUnderline">{{ cust.custName }}<span v-if="data.custList.length != (idx+1)">, </span></a>
							</div>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">금액기준</div>
						<div class="width100">{{ data.amtBasis }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">결제조건</div>
						<div class="width100">{{ data.payCond }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">예산금액</div>
						<div class="width100">{{ data.bdAmt | numberWithCommas }} 원</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">입찰담당자</div>
						<div class="width100">{{ data.damdangName }}</div>
					</div>
				</div>

				<template v-if="data.interrelatedCustCode == '02'">
				<h3 class="h3Tit mt50">입찰분류</h3>
				<div class="boxSt mt20">
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">분류군</div>
						<div class="flex align-items-center width100">
							<select class="selectStyle" disabled>
								<option value="">{{ data.matDept }}</option>
							</select>
							<select class="selectStyle" style="margin:0 10px" disabled>
								<option value="">{{ data.matProc }}</option>
							</select>
							<select class="selectStyle" disabled>
								<option value="">{{ data.matCls }}</option>
							</select>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">공장동</div>
						<div class="width100">{{ data.matFactory }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="flex align-items-center width100">
							<div class="formTit flex-shrink0 width170px">라인</div>
							<div class="width100">{{ data.matFactoryLine }}</div>
						</div>
						<div class="flex align-items-center width100 ml80">
							<div class="formTit flex-shrink0 width170px">호기</div>
							<div class="width100">{{ data.matFactoryCnt }}</div>
						</div>
					</div>
				</div>
				</template>

				<h3 class="h3Tit mt50">입찰공고 추가등록 사항</h3>
				<div class="boxSt mt20">
					<div class="flex align-items-center">
						<div class="flex align-items-center width100">
							<div class="formTit flex-shrink0 width170px">제출시작일시</div>
							<div class="width100">{{ data.estStartDate }}</div>
						</div>
						<div class="flex align-items-center width100 ml80">
							<div class="formTit flex-shrink0 width170px">제출마감일시</div>
							<div class="width100">{{ data.estCloseDate }}</div>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="flex align-items-center width100">
							<div class="formTit flex-shrink0 width170px">개찰자</div>
							<div class="width100">{{ data.estOpener }}</div>
						</div>
						<div class="flex align-items-center width100 ml80">
							<div class="formTit flex-shrink0 width170px">입찰공고자</div>
							<div class="width100">{{ data.gongoName }}</div>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="flex align-items-center width100">
							<div class="formTit flex-shrink0 width170px">낙찰자</div>
							<div class="width100">{{ data.estBidder }}</div>
						</div>
						
					</div>
					<div class="flex align-items-center mt20">
						<div class="flex align-items-center width100">
							<div class="formTit flex-shrink0 width170px">입회자1</div>
							<div class="width100">{{ data.openAtt1 }}</div>
						</div>
						<div class="flex align-items-center width100 ml80">
							<div class="formTit flex-shrink0 width170px">입회자2</div>
							<div class="width100">{{ data.openAtt2 }}</div>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="flex align-items-center width100">
							<div class="formTit flex-shrink0 width170px">내역방식</div>
							<div class="width100">{{ data.insMode | ftInsMode }}</div>
						</div>
						<div class="flex align-items-center width100 ml80">
							<div class="formTit flex-shrink0 width170px">납품조건</div>
							<div class="width100">{{ data.supplyCond }}</div>
						</div>
					</div>
					<div class="flex mt20">
						<div class="formTit flex-shrink0 width170px">세부내역</div>
						<div class="width100" v-if="data.insMode == '1'">
							<a v-for="(specFile, idx) in data.specFile" :key="'file_'+idx" @click="downloadFile(specFile)" class="textUnderline">{{ specFile.fileNm }}</a>
						</div>
						<div class="width100" v-else-if="data.insMode == '2'">
							<table class="tblSkin1">
								<colgroup>
									<col style="">
								</colgroup>
								<thead>
									<tr>
										<th>품목명</th>
										<th>규격</th>
										<th>수량</th>
										<th>단위</th>
										<th>실행단가</th>
										<th class="end">합계</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(spec, idx) in data.specInput" :key="idx">
										<td class="text-left">{{ spec.name }}</td>
										<td class="text-right">{{ spec.ssize }}</td>
										<td class="text-right">{{ spec.orderQty | numberWithCommas }}</td>
										<td class="text-right">{{ spec.unitcode }}</td>
										<td class="text-right">{{ spec.orderUc | numberWithCommas }}</td>
										<td class="text-right end">{{ spec.orderQty * spec.orderUc | numberWithCommas }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="flex mt20">
						<div class="formTit flex-shrink0 width170px">첨부파일</div>
						<div class="width100">
							<div v-for="(file, idx) in data.fileList" :key="idx" :class="(idx == 0 ? '' : 'mt5 ') + (file.fileFlag == '1' ? 'textHighlight' : '')">
								<span class="mr20">{{ file.fileFlag | ftFileFlag }}</span><a @click="downloadFile(file)" class="textUnderline">{{ file.fileNm }}</a>
							</div>
						</div>
					</div>
					<div class="flex align-items-center mt20" v-if="data.ingTag == 'A3' && data.whyA3">
						<div class="formTit flex-shrink0 width170px">재입찰사유</div>
						<div class="width100">{{ data.whyA3 }}</div>
					</div>
					<div class="flex align-items-center mt20" v-if="data.whyA7">
						<div class="formTit flex-shrink0 width170px">유찰사유</div>
						<div class="width100">{{ data.whyA7 }}</div>
					</div>
				</div>

				<h3 class="h3Tit mt50">업체견적 사항 <strong class="textHighlight">(개찰 전까지 견적금액 및 내역파일은 암호화되어 보호됩니다)</strong></h3>
				<div class="conTopBox mt20">
					<ul class="dList">
						<li><div>재 입찰일 경우 참가업체명을 클릭하면 차수 별 견적제출 이력을 볼 수 있습니다.</div></li>
						<li><div>견적 상세 확인은 상세를 클릭하시면 확인하실 수 있습니다.</div></li>
					</ul>
				</div>
				<div class="boxSt mt20">
					<table class="tblSkin1">
						<colgroup>
							<col style="">
						</colgroup>
						<thead>
							<tr>
								<th>입찰참가업체명</th>
								<th>견적금액(총액)</th>
								<th>견적</th>
								<th>제출일시</th>
								<th>담당자</th>
								<th>기타첨부파일</th>
								<th>구분</th>
								<th class="end">낙찰일시</th>
							</tr>
						</thead>
						<tbody>
							<template v-for="(cust, idx) in data.custList">
							<tr>
								<td class="text-left">
									<a @click="$refs.submitHistPop.initModal(data.biNo, cust.custCode, cust.custName, cust.damdangName, cust.esmtCurr);" class="textUnderline" data-toggle="modal" data-target="#submitHistPop">{{ cust.custName }}</a>
								</td>
								<td class="text-overflow" v-text="ftEsmtAmt(cust)"></td>
								<td><a @click="data.insMode == '1' && cust.esmtYn == '2' ? fnCustSpecFileDown(cust.fileNm, cust.filePath) : ''" :class="(cust.esmtYn == '2' ? 'textUnderline textMainColor ' : '') + (cust.esmtYn == '2' && data.insMode == '2' ? 'detailBtn' : '')">{{ cust.esmtYn | ftEsmtYn }}</a></td>
								<td>{{ cust.submitDate }}</td>
								<td>{{ cust.damdangName }}</td>
								<td><img v-if="cust.etcPath" @click="fnCustSpecFileDown(cust.etcFile, cust.etcPath)" src="/images/icon_etc.svg" class="iconImg" alt="etc"></td>
								<td class="textHighlight">{{ cust.succYn | ftSuccYn }}</td>
								<td class="end">{{ cust.updateDate }}</td>
							</tr>
							<tr class="detailView">
								<td colspan="8" class="end">
									<table class="tblSkin2">
										<colgroup>
											<col style="">
										</colgroup>
										<thead>
											<tr>
												<th>품목명</th>
												<th>규격</th>
												<th>수량</th>
												<th>단위</th>
												<th>실행단가</th>
												<th class="end">합계</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(spec, idx2) in cust.bidSpec" :key="'spec_'+idx2">
												<td class="text-left">{{ spec.name }}</td>
												<td class="text-left">{{ spec.ssize }}</td>
												<td class="text-right">{{ spec.orderQty | numberWithCommas }}</td>
												<td>{{ spec.unitcode }}</td>
												<td class="text-right">{{ spec.esmtUc / spec.orderQty | numberWithCommas }}</td>
												<td class="text-right end">{{ spec.esmtUc | numberWithCommas }}</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
							</template>
						</tbody>
					</table>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">낙찰 추가 합의사항</div>
						<div class="width100">{{ data.addAccept }}</div>
					</div>
				</div>

				<div class="text-center mt50">
					<a @click="fnBack" class="btnStyle btnOutline" title="목록">목록</a>
					<a data-toggle="modal" data-target="#resultsReport2" class="btnStyle btnSecondary" title="입찰결과 보고서">입찰결과 보고서</a>
					<a data-toggle="modal" data-target="#realAmtSave" class="btnStyle btnPrimary" title="실제 계약금액">실제 계약금액
						<i class="fas fa-question-circle toolTipSt ml5">
							<div class="toolTipText" style="width: 480px">
								<ul class="dList">
									<li><div>낙찰 금액과 실제계약금액이 다를 경우 실제 계약금액을 입력합니다. </div></li>
									<li><div>실제계약금액과 낙찰금액이 같을 경우 입력하지 않아도 됩니다. </div></li>
									<li><div class="textHighlight">낙찰금액과 실제계약금액이 다를 경우 클릭하여 실제 계약금액을 입력해 주십시오. </div></li>
								</ul>
							</div>
						</i>
					</a>
				</div>
			</div>
		</div>
		<!-- //contents -->

		<!-- 실제 계약금액 -->
		<div class="modal fade modalStyle" id="realAmtSave" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width: 100%; max-width: 550px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:return false;" class="ModalClose" data-dismiss="modal" title="닫기">
							<i class="fa-solid fa-xmark"></i>
						</a>
						<h2 class="modalTitle">실제 계약금액</h2>
						<div class="modalTopBox">
							<ul>
								<li>
								<div>
									낙찰금액과 실제계약금액이 다를 경우 실제계약금액을 작성해 주십시오
								</div>
								</li>
							</ul>
						</div>
						<div class="flex align-items-center mt20">
							<div class="formTit flex-shrink0 width170px" style="padding-left:20px;">실제계약금액</div>
							<div class="width100"><input type="text" class="inputStyle inputSm" v-model="realAmt" placeholder="숫자만 입력"/></div>
						</div>
						<div class="modalFooter">
							<a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a class="modalBtnCheck" data-toggle="modal" title="저장" @click="fnSave">저장</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--입찰결과보고서-->
		<report :data="data"/>

		<!-- 입찰이력 -->
		<SubmitHistPop ref="submitHistPop"/>

		<!-- 협력사 사용자 팝업 -->
		<CustUserPop ref="custUserPop" />
	</div>
	<!-- //본문 -->

</template>
<script>
import report from '../components/BidCompleteResultReport.vue';
import CustUserPop from "@/modules/company/components/CustUserPop.vue";
import SubmitHistPop from "@/modules/company/components/SubmitHistoryPop.vue";
import cmmn from "../../../../public/js/common.js";

export default {
	name: "bidCompleteDetail",
	components: {
		report,
		CustUserPop,
		SubmitHistPop,
	},
	data() {
		return {
			biNo : ''
		,   data : {}
		,   realAmt : ''
		}
	},
	filters:{
		ftBiMode(val){
			if(val == 'A'){ return '지명경쟁입찰'}
			else if(val == 'B'){ return '일반경쟁입찰'}
		},
		ftInsMode(val){
			if(val == '1'){ return '파일등록'}
			else if(val == '2'){ return '직접입력'}
		},
		numberWithCommas(val) {
			if(!val) return '';
			else {
				val = Math.round(val);
				return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
		ftFileFlag(val){
			if(val == '0'){ return '대내용'}
			else if(val == '1'){ return '대외용'}
		},
		ftSuccYn(val){
			if(val == 'Y'){ return '낙찰'}
			else if(val == 'N'){ return ''}
		},
		ftEsmtYn(val){
			if(val == '0'){ return ''}
			else if(val == '1'){ return '공고확인'}
			else if(val == '2'){ return '상세'}
		}
	},
	methods: {
		//그룹사 입찰완료 상세 조회
		async fnDataDetail(){
			let searchParams = {
				biNo : this.biNo
			}

			this.$store.commit('loading');
			await this.$http.post('/api/v1/bidComplete/detail', searchParams).then((response) => {
				if(response.data.status != '999'){
					this.data = response.data.data;
				}else{
					this.$swal({
						type: "warning",
						text: response.data.msg,
					});
				}
			}).finally(() => {
				this.$store.commit("finish");
			});
			
		},
		//목록으로
		fnBack(){
			this.$router.go(-1);
		},
		//파일 다운로드
		async downloadFile(fileInfo){

			try {
				this.$store.commit('loading');
				const response = await this.$http.post(
					"/api/v1/bidComplete/fileDown",
					{ fileId: fileInfo.filePath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
					{ responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
				);

				// 파일 다운로드를 위한 처리
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", fileInfo.fileNm); // 다운로드될 파일명 설정
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				this.$store.commit('finish');
			} catch (error) {
				console.error("Error downloading file:", error);
				this.$store.commit('finish');
			}
		},
		//실제계약금액 저장
		fnSave(){
			let params = {
				realAmt : this.realAmt
			,	biNo : this.biNo
			}
			this.$store.commit("loading");
			this.$http.post("/api/v1/bidComplete/updRealAmt", params).then((response) => {
				$("#realAmtSave").modal("hide");
				if(response.data.status != '999'){
					this.$swal({
						type: "info",
						text: "실제계약금액을 저장하였습니다."
					});
				}else{
					this.$swal({
						type: "warning",
						text: response.data.msg,
					});
				}
			}).finally(()=>{
				$("#realAmtSave").modal("hide");
				this.$store.commit("finish");
			});
		},
		//파일 다운로드 파라미터 셋팅
		fnCustSpecFileDown(fileNm, filePath){

			if(!cmmn.isEmpty(fileNm) && !cmmn.isEmpty(filePath)){
				let fileInfo = {
					filePath : filePath
				,   fileNm : fileNm
				}

				this.downloadFile(fileInfo);
			}
		},
		ftEsmtAmt(cust){
			if(cmmn.isEmpty(cust.esmtAmt)) return ''
			else {
				let esmtCurr = cmmn.defaultIfEmpty(cust.esmtCurr, '');
				let esmtAmt = cust.esmtAmt;
				return esmtCurr + (esmtCurr != '' ? ' ' : '') + esmtAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		}
	},
	beforeMount() {
		this.biNo = this.$route.params.biNo;
	},
	mounted() {
		this.fnDataDetail();
	},
};
</script>