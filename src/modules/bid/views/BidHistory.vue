<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>전자입찰</li>
                <li>입찰이력</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="conTopBox">
                <ul class="dList">
                    <li><div>조회기간 입찰완료일 기준으로 소속사의 낙찰된 입찰정보와 투찰 정보를 확인할 수 있습니다.</div></li>
                    <li><div>참여업체수를 클릭하면 투찰 업체들의 투찰가 및 투찰 일시를 보실 수 있습니다.</div></li>
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
                    <div class="sbTit width80px ml50">분류군</div>
                    <div class="flex align-items-center width300px">
                        <select name="" class="selectStyle">
                            <option value="">사업부</option>
                        </select>
                        <select name="" class="selectStyle ml10">
                            <option value="">공정</option>
                        </select>
                        <select name="" class="selectStyle ml10">
                            <option value="">분류</option>
                        </select>
                    </div>
                </div>
                <div class="flex align-items-center height50px mt10">
                    <div class="sbTit width100px">입찰번호</div>
                    <div class="width280px">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit width80px ml50">입찰명</div>
                    <div class="width300px">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
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

            <div class="tblScroll">
                <table class="tblSkin1 mt10">
                    <colgroup>
                        <col style="">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>입찰번호</th>
                            <th>사업부</th>
                            <th>공정</th>
                            <th>분류</th>
                            <th>공장동</th>
                            <th>라인</th>
                            <th>호기</th>
                            <th>입찰명</th>
                            <th>예산금액</th>
                            <th>낙찰금액</th>
                            <th>낙찰사</th>
                            <th>참여업체수</th>
                            <th>제출시작일</th>
                            <th>제출마감일</th>
                            <th class="end">입찰담당자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>입찰번호</td>
                            <td>사업부</td>
                            <td>공정</td>
                            <td>분류</td>
                            <td>공장동</td>
                            <td>라인</td>
                            <td>호기</td>
                            <td class="text-left">롯데에너지머티리얼즈</td>
                            <td class="text-right">100,000,000</td>
                            <td class="text-right">110,000,000</td>
                            <td class="text-left">레드코사인</td>
                            <td><a href="javascript:void(0)" data-toggle="modal" data-target="#companiesNum" class="textUnderline" title="투찰 정보 페이지가 열림">2</a></td>
                            <td>2023-12-16</td>
                            <td>2023-12-18</td>
                            <td class="end">강감찬</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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


  export default {
    name: "bidHistory",
    components: {
 
    },
    data() {
      return {

      }
    },
    methods: {

    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>