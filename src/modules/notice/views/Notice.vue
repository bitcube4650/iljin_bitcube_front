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
                        <li>공지사항</li>
                    </ul>
                </div>
                <!-- //conHeader -->
                <!-- contents -->
                <div class="contents">

                    <!-- searchBox -->
                    <div class="searchBox">
                        <div class="flex align-items-center">
                            <div class="sbTit mr30">제목</div>
                            <div class="width200px">
                                <input type="text" name="" id="" class="inputStyle" placeholder="">
                            </div>
                            <div class="sbTit mr30 ml50">내용</div>
                            <div class="width200px">
                                <input type="text" name="" id="" class="inputStyle" placeholder="">
                            </div>
                            <div class="sbTit mr30 ml50">등록자</div>
                            <div class="width200px">
                                <input type="text" name="" id="" class="inputStyle" placeholder="">
                            </div>
                            <a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
                        </div>
                    </div>
                    <!-- //searchBox -->

                    <div class="flex align-items-center justify-space-between mt40">
                        <div class="width100">
                            전체 : <span class="textMainColor"><strong>100</strong></span>건
                            <select name="" class="selectStyle maxWidth140px ml20">
                                <option value="">10개씩 보기</option>
                                <option value="">20개씩 보기</option>
                            </select>
                        </div>
                        <div >
                            <a href="group_sub02_1_1.html" class="btnStyle btnPrimary" title="공지등록">공지등록</a>
                        </div>
                    </div>
                    <table class="tblSkin1 mt10">
                        <colgroup>
                            <col style="width:7%">
                            <col style="">
                            <col style="width:10%">
                            <col style="width:10%">
                            <col style="width:10%">
                            <col style="width:10%">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>순번</th>
                                <th>제목</th>
                                <th>첨부파일</th>
                                <th>등록자</th>
                                <th>등록일시</th>
                                <th class="end">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1234</td>
                                <td class="text-left"><a @click="clickNoticeDetail" class="textUnderline notiTitle" title="공지사항 자세히 보기">[공통] 공지사항 테스트</a></td>
                                <td><i class="fa-regular fa-file-lines notiFile"></i></td>
                                <td>홍길동</td>
                                <td>2024-01-10 13:00</td>
                                <td class="end">2,000</td>
                            </tr>
                            <tr>
                                <td>1234</td>
                                <td class="text-left"><a @click="clickNoticeDetail" class="textUnderline notiTitle" title="공지사항 자세히 보기">[일진전기] 2024년 협력사 등록안내</a></td>
                                <td><i class="fa-regular fa-file-lines notiFile"></i></td>
                                <td>홍길동</td>
                                <td>2024-01-10 13:00</td>
                                <td class="end">2,000</td>
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
    name: "notice",
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
        clickNoticeDetail(){
            this.$router.push({name:"noticeDetail"});
        }
    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>