<template>
	<!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>업체정보</li>
				<li>자사정보 수정7</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<div class="formWidth">
				<h3 class="h3Tit">회사 정보</h3>
				<div class="boxSt mt20">
					<div class="flex">
						<div class="formTit flex-shrink0 width170px">승인 계열사
							<!-- 툴팁 -->
							<i class="fas fa-question-circle toolTipSt ml5">
								<div class="toolTipText" style="width:420px">
									<ul class="dList">
										<li><div>승인된 계열사의 입찰에만 참여할 수 있습니다.</div></li>
										<li><div>승인 계열사에 없는 계열사의 입찰에 참여를 하려면 유선으로 해당 계열사에 등록요청 하시기 바랍니다.</div></li>
									</ul>
								</div>
							</i>
							<!-- //툴팁 -->
						</div>
						<div class="width100">
							<textarea class="textareaStyle height100px overflow-y-scroll" onkeydown="resize(this)" onkeyup="resize(this)" placeholder="">일진건설
일진머티리얼즈
일진유니스코
일진다이아몬드
							</textarea>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 1</div>
						<div class="width100">공공장소 청소 및 유사 서비스업 품목류</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="width100">사업 시설 유지관리 및 고용 서비스업 품목류</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">회사명 <span class="star">*</span></div>
						<div class="width100"><input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="비트큐브"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">대표자명 <span class="star">*</span></div>
						<div class="width100"><input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="강대표"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">사업자등록번호 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="123">
							<span style="margin:0 10px">-</span>
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="12">
							<span style="margin:0 10px">-</span>
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="12345">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">법인번호 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="123456">
							<span style="margin:0 10px">-</span>
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="1234567">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">자본금 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="10,000,000">
							<div class="ml10">원</div>
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">설립년도 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="" value="2021">
							<div class="ml10">년</div>
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">대표전화 <span class="star">*</span></div>
						<div class="width100">
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content"  placeholder="" value="02-1234-1234">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">팩스</div>
						<div class="width100">
							<input type="text" name="" id="" class="inputStyle maxWidth-max-content" placeholder="">
						</div>
					</div>
					<div class="flex mt10">
						<div class="formTit flex-shrink0 width170px">회사주소 <span class="star">*</span></div>
						<div class="width100">
							<div class="flex align-items-center width100">
								<input type="text" name="" id="" class="inputStyle maxWidth-max-content readonly" placeholder="주소 조회 클릭" readonly>
								<a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="주소 조회">주소 조회</a>
							</div>
							<div class="mt5"><input type="text" name="" id="" class="inputStyle readonly" placeholder="" readonly></div>
							<div class="mt5"><input type="text" name="" id="" class="inputStyle" placeholder="상세 주소 입력"></div>
						</div>
					</div>
					<div class="flex mt10">
						<div class="formTit flex-shrink0 width170px">사업자등록증 <span class="star">*</span></div>
						<div class="width100">
							<!-- 다중파일 업로드 -->
							<div class="upload-box">
								<input type="file" id="file-input">
								<div class="uploadTxt">
									<i class="fa-regular fa-upload"></i>
									<div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
								</div>
							</div>
							<div class="uploadPreview" id="preview">
							</div>
							<!-- //다중파일 업로드 -->
						</div>
					</div>
					<div class="flex mt10">
						<div class="formTit flex-shrink0 width170px">첨부파일 <span class="star">*</span>
							<!-- 툴팁 -->
							<i class="fas fa-question-circle toolTipSt ml5">
								<div class="toolTipText" style="width:420px">
									<ul class="dList">
										<li><div>첨부파일은 간단한 업체 소개 자료 등의 파일을 첨부해 주십시오.</div></li>
										<li><div>1개  이상의 파일을 첨부하실 경우 Zip으로 압축하여 첨부해 주십시오</div></li>
										<li><div>파일은 10M 이상을 초과할 수 없습니다.</div></li>
									</ul>
								</div>
							</i>
							<!-- //툴팁 -->
						</div>
						<div class="width100">
							<!-- 다중파일 업로드 -->
							<div class="upload-box">
								<input type="file" id="file-input2">
								<div class="uploadTxt">
									<i class="fa-regular fa-upload"></i>
									<div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
								</div>
							</div>
							<div class="uploadPreview" id="preview2">
							</div>
							<!-- //다중파일 업로드 -->
						</div>
					</div>
				</div>

				<div class="text-center mt30">
					<a href="javascript:void(0)" class="btnStyle btnOutlineRed" title="취소">취소</a>
					<a href="javascript:void(0)" data-toggle="modal" data-target="#companySave" class="btnStyle btnPrimary" title="저장">저장</a>
				</div>

				<h3 class="h3Tit mt50">관리자 정보</h3>
				<div class="boxSt mt20">
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">이름</div>
						<div class="width100">이순신</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">이메일</div>
						<div class="width100">james@bitcube.co.kr</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">아이디</div>
						<div class="width100">jameskang</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">휴대폰</div>
						<div class="width100">010-1234-1234</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">유선전화</div>
						<div class="width100">02-123-1234</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">직급</div>
						<div class="width100">대리</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">부서</div>
						<div class="width100">개발부</div>
					</div>
				</div>

			</div>
		</div>
		<!-- //contents -->

		<!-- 저장 -->
		<div class="modal fade modalStyle" id="companySave" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">수정하신 정보로 저장됩니다.<br>저장 시 수정이력도 저장됩니다.<br><br>저장 하시겠습니까?</div>
						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#companySave2" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //저장 -->

		<!-- 저장 후 -->
		<div class="modal fade modalStyle" id="companySave2" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">업체정보를 수정하였습니다.</div>
						<div class="modalFooter">
							<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //저장 후 -->

	</div>
	<!-- //본문 -->
</template>
  <script>
  import _ from "lodash";
  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  

  
  export default {
    name: "partnerCompUpdate",
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