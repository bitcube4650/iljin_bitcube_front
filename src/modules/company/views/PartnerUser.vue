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