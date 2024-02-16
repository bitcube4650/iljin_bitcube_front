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
							<li>공지</li>
							<li>FAQ</li>
						</ul>
					</div>
					<!-- //conHeader -->
					<!-- contents -->
					<div class="contents">

						<!-- 가입관련은 faq1, 입찰관련 faq2, 인증서관련 faq3으로 필터됌 -->
						<div class="tabStyle tab3 faqList">
							<a href="javascript:void(0)" data-filter=".faq1" class="active">가입관련</a>		
							<a href="javascript:void(0)" data-filter=".faq2">입찰관련</a>
							<a href="javascript:void(0)" data-filter=".faq3">인증서관련</a>
						</div>
						<div class="faq_item_wrap">
							<div class="faq_item faq1">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">가입관련 FAQ 1</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										가입관련 FAQ 답변 내용 1 가입관련 FAQ 답변 내용 1 가입관련 FAQ 답변 내용 1 가입관련 FAQ 답변 내용 1 가입관련 FAQ 답변 내용 1 가입관련 FAQ 답변 내용 1<br>
										가입관련 FAQ 답변 내용 1 가입관련 FAQ 답변 내용 1
									</div>
								</div>
							</div>
							<div class="faq_item faq2">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">입찰관련 FAQ 1</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										입찰관련 FAQ 답변 내용 1 입찰관련 FAQ 답변 내용 1 입찰관련 FAQ 답변 내용 1<br>
										입찰관련 FAQ 답변 내용 1 입찰관련 FAQ 답변 내용 1
									</div>
								</div>
							</div>
							<div class="faq_item faq3">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">인증서관련 FAQ 1</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										인증서관련 FAQ 답변 내용 1 인증서관련 FAQ 답변 내용 1 인증서관련 FAQ 답변 내용 1<br>
										인증서관련 FAQ 답변 내용 1 인증서관련 FAQ 답변 내용 1
									</div>
								</div>
							</div>
							<div class="faq_item faq1">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">가입관련 FAQ 2</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										가입관련 FAQ 답변 내용 2 가입관련 FAQ 답변 내용 2 가입관련 FAQ 답변 내용 2<br>
										가입관련 FAQ 답변 내용 2 가입관련 FAQ 답변 내용 2
									</div>
								</div>
							</div>
							<div class="faq_item faq2">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">입찰관련 FAQ 2</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										입찰관련 FAQ 답변 내용 2 입찰관련 FAQ 답변 내용 2 입찰관련 FAQ 답변 내용 2<br>
										입찰관련 FAQ 답변 내용 2 입찰관련 FAQ 답변 내용 2
									</div>
								</div>
							</div>
							<div class="faq_item faq3">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">인증서관련 FAQ 2</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										인증서관련 FAQ 답변 내용 2 인증서관련 FAQ 답변 내용 2 인증서관련 FAQ 답변 내용 2<br>
										인증서관련 FAQ 답변 내용 2 인증서관련 FAQ 답변 내용 2
									</div>
								</div>
							</div>
							<div class="faq_item faq1">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">가입관련 FAQ 3</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										가입관련 FAQ 답변 내용 3 가입관련 FAQ 답변 내용 3 가입관련 FAQ 답변 내용 3<br>
										가입관련 FAQ 답변 내용 3 가입관련 FAQ 답변 내용 3
									</div>
								</div>
							</div>
							<div class="faq_item faq2">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">입찰관련 FAQ 3</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										입찰관련 FAQ 답변 내용 3 입찰관련 FAQ 답변 내용 3 입찰관련 FAQ 답변 내용 3<br>
										입찰관련 FAQ 답변 내용 3 입찰관련 FAQ 답변 내용 3
									</div>
								</div>
							</div>
							<div class="faq_item faq3">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">인증서관련 FAQ 3</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										인증서관련 FAQ 답변 내용 3 인증서관련 FAQ 답변 내용 3 인증서관련 FAQ 답변 내용 3<br>
										인증서관련 FAQ 답변 내용 3 인증서관련 FAQ 답변 내용 3
									</div>
								</div>
							</div>
							<div class="faq_item faq1">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">가입관련 FAQ 4</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										가입관련 FAQ 답변 내용 4 가입관련 FAQ 답변 내용 4 가입관련 FAQ 답변 내용 4<br>
										가입관련 FAQ 답변 내용 4 가입관련 FAQ 답변 내용 4
									</div>
								</div>
							</div>
							<div class="faq_item faq2">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">입찰관련 FAQ 4</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										입찰관련 FAQ 답변 내용 4 입찰관련 FAQ 답변 내용 4 입찰관련 FAQ 답변 내용 4<br>
										입찰관련 FAQ 답변 내용 4 입찰관련 FAQ 답변 내용 4
									</div>
								</div>
							</div>
							<div class="faq_item faq3">
								<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">인증서관련 FAQ 4</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
								<div class="faqAn">
									<span class="faqA">A.</span>
									<div class="faqTxt">
										인증서관련 FAQ 답변 내용 4 인증서관련 FAQ 답변 내용 4 인증서관련 FAQ 답변 내용 4<br>
										인증서관련 FAQ 답변 내용 4 인증서관련 FAQ 답변 내용 4
									</div>
								</div>
							</div>
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
    name: "userFaq",
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