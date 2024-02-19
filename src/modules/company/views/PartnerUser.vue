<template>
	<!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>업체정보</li>
				<li>사용자관리</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<div class="conTopBox">
				<ul class="dList">
					<li><div>전자입찰 시스템을 사용할 수 있는 사용자 목록입니다.</div></li>
					<li><div>사용자명을 클릭하면 정보 확인 후 수정하실 수 있습니다.</div></li>
				</ul>
			</div>

			<!-- searchBox -->
			<div class="searchBox mt20">
				<div class="flex align-items-center">
					<div class="sbTit mr30">사용자명</div>
					<div class="flex align-items-center width200px">
						<input type="text" name="" id="" class="inputStyle" placeholder="">
					</div>
					<div class="sbTit mr30 ml50">로그인 ID</div>
					<div class="flex align-items-center width200px">
						<input type="text" name="" id="" class="inputStyle" placeholder="">
					</div>
					<div class="sbTit mr30 ml50">상태</div>
					<div class="flex align-items-center width200px">
						<select name="" class="selectStyle maxWidth140px ml20">
							<option value="">정상</option>
						</select>
					</div>
					<a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
				</div>
			</div>
			<!-- //searchBox -->

			<div class="flex align-items-center justify-space-between mt40">
				<div class="width100">
					전체 : <span class="textMainColor"><strong>00</strong></span>건
					<select name="" class="selectStyle maxWidth140px ml20">
						<option value="">10개씩 보기</option>
						<option value="">20개씩 보기</option>
					</select>
				</div>
				<div class="flex-shrink0">
					<a href="javascript:void(0)" data-toggle="modal" data-target="#userReg2" class="btnStyle btnPrimary" title="사용자 등록">사용자 등록</a>
				</div>
			</div>

			<table class="tblSkin1 mt10">
				<colgroup>
					<col style="">
				</colgroup>
				<thead>
					<tr>
						<th>사용자명</th>
						<th>아이디</th>
						<th>직급</th>
						<th>부서</th>
						<th>전화번호</th>
						<th>휴대폰</th>
						<th>사용권한</th>
						<th>사용여부</th>
						<th class="end">소속사</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a href="javascript:void(0)" data-toggle="modal" data-target="#userModi1-1" class="textUnderline notiTitle" title="홍길동 자세히 보기">홍길동</a></td>
						<td><a href="javascript:void(0)" data-toggle="modal" data-target="#userModi1-1" class="textUnderline notiTitle" title="Hong123 자세히 보기">Hong123</a></td>
						<td>사원</td>
						<td>IT</td>
						<td>02-123-1234</td>
						<td>010-1234-1234</td>
						<td>각사관리자</td>
						<td>사용</td>
						<td class="end">일진다이아몬드</td>
					</tr>
				</tbody>
			</table>

			<!-- pagination -->
			<div class="row mt40">
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

		</div>
		<!-- //contents -->


<!--/////////////////////////////////////////////////////////////////////////////////////////////////////-->
		<!-- 모달창 -->	


		<!-- 사용자 등록 -->
		<div class="modal fade modalStyle" id="userReg2" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:600px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<h2 class="modalTitle">사용자 등록</h2>
						<div class="flex align-items-center">
							<div class="formTit flex-shrink0 width120px">이름 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="ex) sample@iljin.co.kr"></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">아이디 <span class="star">*</span></div>
							<div class="flex align-items-center width100">
								<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인"></div>
								<a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">비밀번호</div>
							<div class="width100">
								<input type="password" name="" id="" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
							<div class="width100">
								<input type="password" name="" id="" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
						</div>					
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">직급</div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">부서</div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
						</div>

						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#userModi1-1-save" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //사용자 등록 -->

		<!-- 사용자수정 -->
		<div class="modal fade modalStyle" id="userModi1-1" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:600px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<h2 class="modalTitle">사용자 수정</h2>
						<div class="flex align-items-center">
							<div class="formTit flex-shrink0 width120px">이름 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="이순신"></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="james@iljin.co.kr"></div>
						</div>
						<div class="flex align-items-center mt20">
							<div class="formTit flex-shrink0 width120px">아이디</div>
							<div class="width100">jameskang</div>
						</div>
						<div class="flex align-items-center mt20">
							<div class="formTit flex-shrink0 width120px">비밀번호</div>
							<div class="width100">
								<input type="password" name="" id="" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
							<div class="width100">
								<input type="password" name="" id="" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
							</div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="010-1234-1234"></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="02-123-1234"></div>
						</div>					
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">직급</div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="과장"></div>
						</div>
						<div class="flex align-items-center mt10">
							<div class="formTit flex-shrink0 width120px">부서</div>
							<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="경영지원"></div>
						</div>

						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:void(0)" class="btnStyle btnOutlineRed" data-toggle="modal" data-target="#userModi1-1-del" title="삭제">삭제</a>
							<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#userModi1-1-save" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //사용자수정 -->

		<!-- 사용자수정 삭제 -->
		<div class="modal fade modalStyle" id="userModi1-1-del" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">삭제된 사용자는 로그인 하실 수 없습니다.<br>사용자를 삭제 하시겠습니까?</div>
						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#userModi1-1-del-ok" title="삭제">삭제</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //사용자수정 삭제 -->

		<!-- 사용자수정 삭제 완료 -->
		<div class="modal fade modalStyle" id="userModi1-1-del-ok" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">사용자를 삭제하였습니다.</div>
						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //사용자수정 삭제 완료 -->

		<!-- 사용자수정 저장 -->
		<div class="modal fade modalStyle" id="userModi1-1-save" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">입력하신 회원정보로 저장됩니다.<br>저장 하시겠습니까?</div>
						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#userModi1-1-save-ok" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //사용자수정 저장 -->

		<!-- 사용자수정 저장 완료 -->
		<div class="modal fade modalStyle" id="userModi1-1-save-ok" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">저장되었습니다.</div>
						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //사용자수정 저장 완료 -->
	</div>
	<!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";
  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  

  
  export default {
    name: "partnerUser",
    components: {
      Menu,
      Header,
      Footer
    },
    data() {
      return {

      };
    },
    methods: {
     
    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>