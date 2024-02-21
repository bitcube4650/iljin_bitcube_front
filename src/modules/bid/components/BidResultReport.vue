<template>
    <!-- 입찰결과 보고서 -->
    <div class="modal fade modalStyle" id="resultsReport2" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:800px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">입찰결과 보고서</h2>
					<h4 class="h4Tit mt20">입찰정보</h4>
					<div class="modalBoxSt mt10">
						<div class="flex align-items-center">
							<div class="formTit flex-shrink0 width170px">입찰번호</div>
							<div class="width100">C202401005</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰명</div>
							<div class="width100">CB3호 스퀴즈닙롤 스페어롤 신규구매 件</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰방식</div>
							<div class="width100">지명경쟁입찰</div>
						</div>
						<div class="flex mt10">
							<div class="formTit flex-shrink0 width170px">특수조건</div>
							<div class="width100">
								1. 스쿼즈닙룰 제작 및 성적서 제출<br>
								2. 검토 후 현장납품
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">현장설명일시</div>
							<div class="width100">2014-01-11 13:00</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">현장설명장소</div>
							<div class="width100">접견실</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
							<div class="width100">최저가&내부적격심사</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰일시</div>
							<div class="width100">2024-01-11 13:00 ~ 2024-01-15 15:00</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">납품조건</div>
							<div class="width100">지정지역도착도</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">금액기준</div>
							<div class="width100">VAT 별도</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">예산금액</div>
							<div class="width100">231,232,400 원</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">입찰담당자</div>
							<div class="width100">강입찰</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width170px">계열사공유</div>
							<div class="width100">비공유</div>
						</div>
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
							<tr>
								<td>1</td>
								<td class="text-left">비트큐브</td>
								<td>강대표</td>
								<td class="text-right">KRW 1,000,000</td>
								<td class="text-right">95.0%</td>
								<td class="end">낙찰</td>
							</tr>
							<tr>
								<td>2</td>
								<td class="text-left">레드코사인㈜</td>
								<td>홍길동</td>
								<td class="text-right">KRW 950,000</td>
								<td class="text-right">97.5%</td>
								<td class="end"></td>
							</tr>
							<tr>
								<td>3</td>
								<td class="text-left">아무로솔테크</td>
								<td>이순신</td>
								<td class="text-right">KRW 950,000</td>
								<td class="text-right">97.5%</td>
								<td class="end"></td>
							</tr>
						</tbody>
					</table>

					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						<a href="#" class="modalBtnCheck" data-toggle="modal" title="인쇄하기">인쇄하기</a>
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
    components: {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>