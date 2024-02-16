<template>
    <div>
      <!-- wrap -->
      <div id="wrap">
        <!--헤더-->
        <Header />

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
							<li>전자입찰</li>
							<li>입찰완료</li>
						</ul>
					</div>
					<!-- //conHeader -->
					<!-- contents -->
					<div class="contents">
						<div class="conTopBox">
							<ul class="dList">
								<li><div>입찰완료는 결과가 선정 또는 비선정 된 입찰 목록을 보여줍니다.. (입찰번호 또는 입찰명을 클릭하시면 상세내용을 확인할 수 있습니다)</div></li>
							</ul>
						</div>

						<!-- searchBox -->
						<div class="searchBox mt20">
							<div class="flex align-items-center">
								<div class="sbTit mr30">입찰번호</div>
								<div class="width250px">
									<input type="text" name="" id="" class="inputStyle" placeholder="">
								</div>
								<div class="sbTit mr30 ml50">입찰명</div>
								<div class="width250px">
									<input type="text" name="" id="" class="inputStyle" placeholder="">
								</div>
							</div>
							<div class="flex align-items-center height50px mt10">
								<div class="sbTit mr30">완료상태</div>
								<div class="flex align-items-center width100">
									<input type="checkbox" id="progress1-1" name="" class="checkStyle"><label for="progress1-1">선정(낙찰)</label>
									<input type="checkbox" id="progress1-2" name="" class="checkStyle"><label for="progress1-2" class="ml50">비선정</label>
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
						</div>
						<table class="tblSkin1 mt10">
							<colgroup>
								<col style="width:12%">
								<col style="">
								<col style="width:15%">
								<col style="width:10%" span="4">
							</colgroup>
							<thead>
								<tr>
									<th>입찰번호</th>
									<th>입찰명</th>
									<th>입찰공고일시</th>
									<th>입찰방식</th>
									<th>결과</th>
									<th>내역</th>
									<th class="end">담당자</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a @click="clickPartnerBidCompleteDetail" class="textUnderline" title="C202401005">C202401005</a></td>
									<td class="text-left"><a @click="clickPartnerBidCompleteDetail" class="textUnderline" title="직물재배업 품목류">직물재배업 품목류</a></td>
									<td>2024-01-09 13:00</td>
									<td>지명</td>
									<td>비선정</td>
									<td>파일</td>
									<td class="end"><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="홍길동">홍길동</a></td>
								</tr>
								<tr>
									<td><a @click="clickPartnerBidCompleteDetail" class="textUnderline" title="C202401005">C202401005</a></td>
									<td class="text-left"><a @click="clickPartnerBidCompleteDetail" class="textUnderline" title="축산업 품목류">축산업 품목류</a></td>
									<td>2024-01-09 13:00</td>
									<td>일반</td>
									<td class="textHighlight">선정(낙찰)</td>
									<td>직접입력</td>
									<td class="end"><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="이순신">이순신</a></td>
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

  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "partnerBidComplete",
    components: {
      Menu,
      Header,
      Footer,
    },
    data() {
      return {

      }
    },
    methods: {
		clickPartnerBidCompleteDetail(){
			this.$router.push({name:"partnerBidCompleteDetail"});
		}
    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>