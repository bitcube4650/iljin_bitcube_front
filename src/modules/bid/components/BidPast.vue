<template>
    <!-- 과거입찰내역 -->
	<div class="modal fade modalStyle" id="pastBid" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:800px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:return false;" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">과거입찰내역</h2>
					
					<div class="modalSearchBox mt20">
						<div class="flex align-items-center">
							<div class="sbTit mr30">입찰번호</div>
							<div class="width150px">
								<input type="text" name="" id="" class="inputStyle" placeholder="">
							</div>
							<div class="sbTit mr30 ml50">입찰명</div>
							<div class="width150px">
								<input type="text" name="" id="" class="inputStyle" placeholder="">
							</div>
							<a href="javascript:return false;" class="btnStyle btnSearch">검색</a>
						</div>
					</div>
					<table class="tblSkin1 mt30">
						<colgroup>
							<col style="">
						</colgroup>
						<thead>
							<tr>
								<th>입찰번호</th>
								<th>입찰명</th>
								<th>제출마감일시</th>
								<th>입찰방식</th>
								<th>상태</th>
								<th>내역</th>
								<th class="end">선택</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>C202401005</td>
								<td>직물재배업 품목류</td>
								<td>2024-01-10 13:00</td>
								<td>지명</td>
								<td>입찰완료</td>
								<td>엑셀파일</td>
								<td class="end"><a href="javascript:return false;" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
							</tr>
							<tr>
								<td>C202401005</td>
								<td>직물재배업 품목류</td>
								<td>2024-01-10 13:00</td>
								<td>지명</td>
								<td>유찰</td>
								<td>직접입력</td>
								<td class="end"><a href="javascript:return false;" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
							</tr>
						</tbody>
					</table>
					<!-- pagination -->
					<div class="row mt30">
						<div class="col-xs-12">
							<div class="pagination1 text-center">
								<a href="javascript:return false;" title="10페이지 이전 페이지로 이동"><i class="fa-light fa-chevrons-left"></i></a>
								<a href="javascript:return false;" title="이전 페이지로 이동"><i class="fa-light fa-chevron-left"></i></a>
								<a href="javascript:return false;" title="1페이지로 이동" class="number active">1</a>
								<a href="javascript:return false;" title="2페이지로 이동" class="number">2</a>
								<a href="javascript:return false;" title="3페이지로 이동" class="number">3</a>
								<a href="javascript:return false;" title="4페이지로 이동" class="number">4</a>
								<a href="javascript:return false;" title="5페이지로 이동" class="number">5</a>
								<a href="javascript:return false;" title="다음 페이지로 이동"><i class="fa-light fa-chevron-right"></i></a>
								<a href="javascript:return false;" title="10페이지 다음 페이지로 이동"><i class="fa-light fa-chevrons-right"></i></a>
							</div>
						</div>
					</div>
					<!-- //pagination -->
					<div class="modalFooter">
						<a href="javascript:return false;" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //과거입찰내역 -->
</template>
  <script>

  export default {
    name: "bidPast",
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