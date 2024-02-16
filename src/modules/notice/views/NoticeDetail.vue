<template>
    <div>
      <!-- wrap -->
      <div id="wrap">
        <!--헤더-->
        <Header />
        <!--//헤더-->
        <!-- //conLeft -->
        <div class="contentWrap">
            <!--메뉴-->
            <Menu />
            <!--//메뉴-->
            <!-- conRightWrap -->
            <div class="conRightWrap">
            	<!-- 본문 -->
				<div class="conRight">
					<!-- conHeader -->
					<div class="conHeader">
						<ul class="conHeaderCate">
							<li>공지사항</li>
							<li>공지사항 상세</li>
						</ul>
					</div>
					<!-- //conHeader -->
					<!-- contents -->
					<div class="contents">
						<h3 class="h3Tit">공지사항</h3>
						<div class="boxSt mt20">
							<div class="flex align-items-center">
								<div class="formTit flex-shrink0 width170px">제목</div>
								<div class="width100">[공통] 일진전자입찰 공지 테스트</div>
							</div>
							<div class="flex align-items-center mt20">
								<div class="formTit flex-shrink0 width170px">작성자</div>
								<div class="width100">강감찬</div>
							</div>
							<div class="flex align-items-center mt20">
								<div class="formTit flex-shrink0 width170px">공지일시</div>
								<div class="width100">2024-01-11 15:00</div>
							</div>
							<div class="flex align-items-center mt20">
								<div class="formTit flex-shrink0 width170px">조회수</div>
								<div class="width100">2,491</div>
							</div>
							<div class="flex align-items-center mt20">
								<div class="formTit flex-shrink0 width170px">첨부파일</div>
								<div class="width100">
									<a href="javascript:void(0)" class="textUnderline">일진입찰_세부파일_첨부1.docx</a>
								</div>
							</div>
							<div class="flex mt20">
								<div class="formTit flex-shrink0 width170px">공지내용</div>
								<div class="width100">
									<div class="overflow-y-scroll notiBox width100" style="height:400px">
										1. 스쿼즈닙룰 제작 및 성적서 제출<br>
										2. 검토 후 현장납품
									</div>
								</div>
							</div>
						</div>

						<div class="text-center mt50">
							<a href="javascript:void(0)" class="btnStyle btnOutline" title="목록">목록</a>
						</div>
					</div>
					<!-- //contents -->
				</div>
				<!-- //본문 -->
            <!-- 서브 푸터 -->
            <div class="footer">
              <Footer />
            </div>
          </div>
  
          <!-- //서브 푸터 -->
        </div>
      </div>
    </div>
  </template>
  <script>
  import _ from "lodash";
  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  

  
  export default {
    name: "noticeDetail",
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