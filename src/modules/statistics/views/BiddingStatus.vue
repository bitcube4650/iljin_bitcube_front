<template>
    <!-- 본문 -->
    <div class="conRight">
      <!-- conHeader -->
      <div class="conHeader">
        <ul class="conHeaderCate">
          <li>통계</li>
          <li>입찰현황</li>
        </ul>
      </div>
      <!-- //conHeader -->
      <!-- contents -->
      <div class="contents">
        <div class="conTopBox">
          <ul class="dList">
            <li><div>조회 기간은 입찰완료 에만 적용되고 나머지는 기간과 관계없이 현재 상태의 개수와 건수를 나타냅니다.</div></li>
          </ul>
        </div>

        <!-- searchBox -->
        <div class="searchBox mt20">
          <div class="flex align-items-center">
            <div class="sbTit width100px">조회기간</div>
            <div class="flex align-items-center width280px">
              <input type="text" id="startDay" class="datepicker inputStyle" title="월 입력란">
              <span style="margin:0 10px">~</span>
              <input type="text" id="endDay" class="datepicker inputStyle" title="월 입력란">
            </div>
            <div class="sbTit width80px ml50">계열사</div>
            <div class="flex align-items-center width280px">
              <select name="" class="selectStyle">
                <option value="">전체</option>
              </select>
            </div>
            <a class="btnStyle btnSearch">검색</a>
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
          <div class="flex flex-shrink0">
            <p class="align-self-end mr20">(단위 : 백만원)</p>
            <a href="" class="btnStyle btnPrimary" title="엑셀 다운로드">엑셀 다운로드 <i class="fa-light fa-arrow-down-to-line ml10"></i></a>
          </div>
        </div>

        <table class="tblSkin1 mt10">
          <colgroup>
            <col style="">
            <col style="width:10%">
            <col style="width:15%">
            <col style="width:15%">
            <col style="width:15%">
            <col style="width:10%">
          </colgroup>
          <thead>
            <tr>
              <th rowspan="2">회사명</th>
              <th colspan="2">입찰계획</th>
              <th colspan="2">입찰진행</th>
              <th colspan="3">입찰완료(유찰제외)</th>
              <th rowspan="2">등록 업체수</th>
              <th rowspan="2" class="end">기타</th>
            </tr>
            <tr>
              <th>건수</th>
              <th>예산금액</th>
              <th>건수</th>
              <th>예산금액</th>
              <th>건수</th>
              <th>낙찰금액</th>
              <th>업체수/건수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">일진전기</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">4.0</td>
              <td class="text-right">10</td>
              <td class="end"></td>
            </tr>
            <tr>
              <td class="text-left">일진전기</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">4.0</td>
              <td class="text-right">10</td>
              <td class="end"></td>
            </tr>
            <tr>
              <td class="text-left">일진전기</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">1</td>
              <td class="text-right">10,000,000</td>
              <td class="text-right">4.0</td>
              <td class="text-right">10</td>
              <td class="end"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="text-left">계</th>
              <th class="text-right">1,017</th>
              <th class="text-right">110,001,000</th>
              <th class="text-right">1,017</th>
              <th class="text-right">110,001,000</th>
              <th class="text-right">1,017</th>
              <th class="text-right">110,001,000</th>
              <th class="text-right">4</th>
              <th class="text-right">60</th>
              <th class="end"></th>
            </tr>
          </tfoot>
        </table>

        <!-- pagination -->
        <div class="row mt40">
          <div class="col-xs-12">
            <div class="pagination1 text-center">
              <a title="10페이지 이전 페이지로 이동"><i class="fa-light fa-chevrons-left"></i></a>
              <a title="이전 페이지로 이동"><i class="fa-light fa-chevron-left"></i></a>
              <a title="1페이지로 이동" class="number active">1</a>
              <a title="2페이지로 이동" class="number">2</a>
              <a title="3페이지로 이동" class="number">3</a>
              <a title="4페이지로 이동" class="number">4</a>
              <a title="5페이지로 이동" class="number">5</a>
              <a title="다음 페이지로 이동"><i class="fa-light fa-chevron-right"></i></a>
              <a title="10페이지 다음 페이지로 이동"><i class="fa-light fa-chevrons-right"></i></a>
            </div>
          </div>
        </div>
        <!-- //pagination -->

      </div>
      <!-- //contents -->
    </div>
    <!-- //본문 -->
</template>
  <script>
  import cmmn from "../../../../public/js/common.js"
  
  export default {
    name: "biddingStatus",
    components: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    beforeMount() {},
    mounted() {
      //달력
      cmmn.applyCal()
      $('#startDay').datepicker('setDate', '-1M')
      $('#endDay').datepicker('setDate', 'today' )
    },
  };
  </script>