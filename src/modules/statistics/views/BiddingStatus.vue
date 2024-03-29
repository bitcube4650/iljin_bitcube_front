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
              <select @change="selectbidPresentList" v-model="coInter" class="selectStyle">
                <option value="">전체</option>
                <option v-for="(data,idx) in coInterList" :key="idx" :value="data.interrelatedCustCode">{{data.interrelatedNm}}</option>
              </select>
            </div>
            <a @click="selectbidPresentList" class="btnStyle btnSearch">검색</a>
          </div>
        </div>
        <!-- //searchBox -->

        <div class="flex align-items-center justify-space-between mt40">
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
            <tr v-for="(data ,idx) in bidPresentList" :key="idx" >
              <td class="text-left" ><a @click="moveDetail(data.interrelatedCustCode)" class="textUnderline">{{ data.interrelatedNm }}</a></td>
              <td class="text-right">{{data.planCnt.toLocaleString() }}</td>
              <td class="text-right">{{data.planAmt.toLocaleString() }}</td>
              <td class="text-right">{{data.ingCnt.toLocaleString() }}</td>
              <td class="text-right">{{data.ingAmt.toLocaleString() }}</td>
              <td class="text-right">{{data.succCnt.toLocaleString() }}</td>
              <td class="text-right">{{data.succAmt.toLocaleString() }}</td>
              <td class="text-right">{{data.custCnt.toLocaleString() }}</td>
              <td class="text-right">{{data.regCustCnt }}</td>
              <td class="end"></td>
            </tr>
            <tr v-show="bidPresentList.length == 0 ">
              <td colspan="6">조회된 데이터가 없습니다.</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="text-left">계</th>
              <th class="text-right">{{ biInfoSum.planCnt}}</th>
              <th class="text-right">{{ biInfoSum.planAmt}}</th>
              <th class="text-right">{{ biInfoSum.ingCnt}}</th>
              <th class="text-right">{{ biInfoSum.ingAmt}}</th>
              <th class="text-right">{{ biInfoSum.succCnt}}</th>
              <th class="text-right">{{ biInfoSum.succAmt}}</th>
              <th class="text-right">{{ biInfoSum.custCnt}}</th>
              <th class="text-right">{{ biInfoSum.regCustCnt}}</th>
              <th class="end"></th>
            </tr>
          </tfoot>
        </table>
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
        coInterList : [], //  계열사 리스트
        coInter : '', // 선택된 계열사
        bidPresentList : [], // 리스트
        biInfoSum : {}, // 하단 합계
      };
    },
    async mounted() {
      //달력
      cmmn.applyCal();
      $('#startDay').datepicker('setDate', '-1M');
      $('#endDay').datepicker('setDate', 'today' );
      this.selectbidPresentList();
    },
    methods: {
      //계열사 리스트 불러 오는 메소드
      async selectCoInterList(){
        const vm = this
        try {
          vm.$store.commit("loading");
          const response = await vm.$http.post(
            "/api/v1/statistics/coInterList",
          );
          vm.coInterList = response.data[0]

          vm.$store.commit("finish");
        } catch (err) {
          console.log(err);
          vm.$store.commit("finish");
        }
      },
      //리스트 조회
      async selectbidPresentList(){
        const vm = this
        
        let params = {
          coInter : vm.coInter == '' ?  vm.coInter : vm.coInterList.map(item => item.interrelatedCustCode),
          startDay : $('#startDay').val(),
          endDay : $('#endDay').val()
        }

        if(this.$store.state.loginInfo.userAuth == 1){
          params.coInter = vm.coInter
        }else{
          if(vm.coInter == ''){
            params.coInter =  vm.coInterList.map(item => item.interrelatedCustCode).join(',')
          }else{
            params.coInter = vm.coInter
            params.coInterVal = 'Y'
          }
        }

        try {
          vm.$store.commit("loading");
          const response = await vm.$http.post(
            "/api/v1/statistics/bidPresentList", params
          );
          console.log(response)
          const data = response.data[0]

          console.log('data')
          console.log(this.data)

          vm.bidPresentList = data.slice(0, data.length - 1)

          console.log('bidPresentList')
          console.log(this.bidPresentList)

          vm.biInfoSum = data[data.length - 1];
          if(vm.biInfoSum != undefined){
            vm.biInfoSum.planCnt = vm.biInfoSum.planCnt.toLocaleString()
            vm.biInfoSum.planAmt = vm.biInfoSum.planAmt.toLocaleString()
            vm.biInfoSum.ingCnt = vm.biInfoSum.ingCnt.toLocaleString()
            vm.biInfoSum.ingAmt = vm.biInfoSum.ingAmt.toLocaleString()
            vm.biInfoSum.succCnt = vm.biInfoSum.succCnt.toLocaleString()
            vm.biInfoSum.succAmt = vm.biInfoSum.succAmt.toLocaleString()
            vm.biInfoSum.custCnt = vm.biInfoSum.custCnt.toLocaleString()
            vm.biInfoSum.regCustCnt = vm.biInfoSum.regCustCnt
          }
          vm.routerStartDay = $('#startDay').val()
          vm.routerEndDay = $('#endDay').val()
          vm.$store.commit("finish");
        } catch (err) {
          console.log(err);
          vm.$store.commit("finish");
        }
    },
    beforeMount() {},
  }
}
  </script>