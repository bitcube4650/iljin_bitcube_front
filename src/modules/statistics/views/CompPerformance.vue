<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>통계</li>
        <li>회사별 입찰실적</li>
      </ul>
    </div>
    <!-- //conHeader -->
    <!-- contents -->
    <div class="contents">
      <div class="conTopBox">
        <ul class="dList">
          <li><div>조회기간 입찰완료일 기준으로 각 계열사의 입찰 실적을 나타냅니다.</div></li>
          <li><div>통계 실적 Data는 사용권한이 시스템 관리자 일 경우 모든 계열사, 감사사용자일 경우 선택된 계열사를 대상으로 합니다.(감사사용자 계열사 선택은 시스템 관리자가 관리합니다.)</div></li>
        </ul>
      </div>

      <!-- searchBox -->
      <div class="searchBox mt20">
        <div class="flex align-items-center">
          <div class="sbTit width100px">입찰완료일</div>
          <div class="flex align-items-center width280px">
            <input type="text" class="datepicker inputStyle" title="월 입력란">
            <span style="margin:0 10px">~</span>
            <input type="text" class="datepicker inputStyle" title="월 입력란">
          </div>
          <div class="sbTit width80px ml50">계열사</div>
          <div class="flex align-items-center width280px">
            <select name="" class="selectStyle">
              <option value="">전체</option>
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
            <th>회사명</th>
            <th>입찰건수</th>
            <th>예산금액(1)</th>
            <th>낙찰금액(2)</th>
            <th>차이(1)-(2)</th>
            <th class="end">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">일진전기</td>
            <td class="text-right">1</td>
            <td class="text-right">10,000,000</td>
            <td class="text-right">9,000,000</td>
            <td class="text-right">1,000,000</td>
            <td class="end"></td>
          </tr>
          <tr>
            <td class="text-left">롯데에너지머티리얼즈</td>
            <td class="text-right">1,012</td>
            <td class="text-right">100,000,0001</td>
            <td class="text-right">110,000,000</td>
            <td class="text-right textHighlight">-10,000,000</td>
            <td class="end"></td>
          </tr>
          <tr>
            <td class="text-left">일진다이아몬드</td>
            <td class="text-right">4</td>
            <td class="text-right">1,000</td>
            <td class="text-right">900</td>
            <td class="text-right">100</td>
            <td class="end"></td>
          </tr>								
        </tbody>
        <tfoot>
          <tr>
            <th class="text-left">계</th>
            <th class="text-right">1,017</th>
            <th class="text-right">110,001,000</th>
            <th class="text-right">119,000,900</th>
            <th class="text-right textHighlight">-9,000,100</th>
            <th class="end"></th>
          </tr>
        </tfoot>
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
</template>
  <script>
  import cmmn from "../../../../public/js/common.js"
  
  export default {
    name: "compPerformance",
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
      cmmn.applyCal();
    },
  };
  </script>