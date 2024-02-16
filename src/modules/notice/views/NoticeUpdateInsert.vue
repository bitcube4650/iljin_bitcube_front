<template>
    <!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>공지사항</li>
				<li>공지사항 등록/수정</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<h3 class="h3Tit">공지사항</h3>
			<div class="boxSt mt20">
				<div class="flex align-items-center">
					<div class="formTit flex-shrink0 width170px">제목</div>
					<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="[공통] 일진전자입찰 공지 테스트"></div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">공지대상</div>
					<div class="flex width100">
						<input type="radio" name="bm2" value="" id="bm2_1" class="radioStyle" checked=""><label for="bm2_1">공통</label>
						<div>
							<input type="radio" name="bm2" value="" id="bm2_2" class="radioStyle"><label for="bm2_2" data-toggle="modal" data-target="#AffiliateSelect">계열사</label>
							<p class="mt5 ml30">일진씨엔에스, 롯데에너지머트리얼즈, 전주방송, 일진건설</p>
						</div>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">작성자</div>
					<div class="width100">강감찬</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">공지일시</div>
					<div class="width100">등록 또는 수정한 날짜로 저장됩니다.</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">조회수</div>
					<div class="width100">2,491</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">조회수</div>
					<div class="width100">2,491</div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">첨부파일</div>
					<div class="width100">
						<!-- 다중파일 업로드 -->
						<div class="upload-boxWrap">
							<div class="upload-box">
								<input type="file" id="file-input">
								<div class="uploadTxt">
									<i class="fa-regular fa-upload"></i>
									<div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
								</div>
							</div>
							<div class="uploadPreview" id="preview">
							</div>
						</div>
						<!-- //다중파일 업로드 -->
					</div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">공지내용</div>
					<div class="width100">
						<textarea class="textareaStyle notiBox overflow-y-auto" onkeydown="resize(this)" onkeyup="resize(this)" placeholder="" style="height:400px">1. 스쿼즈닙룰 제작 및 성적서 제출
2. 검토 후 현장납품
3. 검토 후 현장납품
						</textarea>
					</div>
				</div>
			</div>

			<div class="text-center mt50">
				<a href="javascript:void(0)" class="btnStyle btnOutline" title="목록">목록</a>
				<a href="javascript:void(0)" data-toggle="modal" data-target="#notiSave" class="btnStyle btnPrimary" title="저장">저장</a>
			</div>
		</div>
		<!-- //contents -->
	</div>
	<!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";
  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  

  
  export default {
    name: "noticeUpdateInsert",
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