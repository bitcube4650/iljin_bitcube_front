<template>
<div>
	<!-- 품목 선택 -->
	<div class="modal fade modalStyle" id="itemSelect" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:800px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">품목 선택</h2>
					<div class="modalTopBox">
						<ul>
							<li><div>검색 창에 품목명 또는 품목코드를 입력하시고 엔터 또는 [품목조회]버튼을 클릭하시고 품목을 선택해 주십시오.</div></li>
							<li><div>품목코드는 2017년부터 적용되는 한국표준산업분류 10차 개정 자료를 기준으로 합니다.</div></li>
						</ul>
					</div>
					
					<div class="modalSearchBox mt20">						
						<div class="flex align-items-center">
							<div style="width:calc(100% - 120px)">
								<select name="" class="selectStyle">
									<option value="">품목그룹 전체</option>
								</select>
								<input type="text" name="" id="" class="inputStyle mt10" placeholder="품목명 또는 품목코드 입력 조회">
							</div>
							<a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
						</div>
					</div>
					<table class="tblSkin1 mt30">
						<colgroup>
							<col style="">
						</colgroup>
						<thead>
							<tr>
								<th>품목코드</th>
								<th>품목명</th>
								<th class="end">선택</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>011</td>
								<td class="text-left">직물재배업 품목류</td>
								<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
							</tr>
							<tr>
								<td>011</td>
								<td class="text-left">직물재배업 품목류</td>
								<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
							</tr>
						</tbody>
					</table>
					<!-- pagination -->
					<div class="row mt30">
						<div class="col-xs-12">
							<div class="pagination1 text-center">
								<a href="javascript:void(0)" title="10페이지 이전 페이지로 이동"><i class="fa-light fa-chevrons-left"></i></a>
								<a href="javascript:void(0)" title="이전 페이지로 이동"><i class="fa-light fa-chevron-left"></i></a>
								<a href="javascript:void(0)" title="1페이지로 이동" class="number active">1</a>
								<a href="javascript:void(0)" title="2페이지로 이동" class="number">2</a>
								<a href="javascript:void(0)" title="3페이지로 이동" class="number">3</a>
								<a href="javascript:void(0)" title="4페이지로 이동" class="number">4</a>
								<a href="javascript:void(0)" title="5페이지로 이동" class="number">5</a>
								<a href="javascript:void(0)" title="다음 페이지로 이동"><i class="fa-light fa-chevron-right"></i></a>
								<a href="javascript:void(0)" title="10페이지 다음 페이지로 이동"><i class="fa-light fa-chevrons-right"></i></a>
							</div>
						</div>
					</div>
					<!-- //pagination -->
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //품목 선택 -->
</div>
</template>

<script>

export default {
  name: 'CustTypePop',
  data() {
    return {
      idSearch: {},
    }
  },
  methods: {
    initModal() {
      this.idSearch = {};
    },
    onlyNumber(e) {
      if (!/\d/.test(event.key) && event.key !== '.') return e.preventDefault();
    },
    validate(e) {  
      e.preventDefault();
      if (this.idSearch.regnum1 == null || this.idSearch.regnum2 == null || this.idSearch.regnum3 == null || this.idSearch.userName == null || this.idSearch.userEmail == null) {
        $("#idSearchAlert").modal("show"); 
        return;
      }
      $("#idSearchConfirm").modal("show"); 
    },
    send(e) {  
      e.preventDefault(); 
      this.$store.commit("loading");
      this.$http
      .post('/login/idSearch', this.idSearch)
      .then((response) => {
        $("#idSearchConfirm").modal("hide"); 
        if (response.data.code == 'ok') {
          $("#idSearch").modal("hide");
          this.$swal({
            type: "info",
            text: "이메일로 전송되었습니다."
          });
        } else {
          this.$swal({
            type: "warning",
            text: "아이디를 찾을 수 없습니다."
          });

        }
      })
      .finally(() => {
        this.$store.commit("finish");
      });
    }
  }
};
</script>

