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
          <div class="width100">
            
          </div>
          <div class="flex flex-shrink0">
            <p class="align-self-end mr20"></p>
            <a @click="excelDown" class="btnStyle btnPrimary" title="엑셀 다운로드">엑셀 다운로드 <i class="fa-light fa-arrow-down-to-line ml10"></i></a>
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
              <td class="text-left" >{{ data.interrelatedNm }}</td>
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
              <td colspan="10">조회된 데이터가 없습니다.</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th class="text-left">계</th>
              <th class="text-right">{{ biInfoSum.planCnt.toLocaleString()}}</th>
              <th class="text-right">{{ biInfoSum.planAmt.toLocaleString()}}</th>
              <th class="text-right">{{ biInfoSum.ingCnt.toLocaleString()}}</th>
              <th class="text-right">{{ biInfoSum.ingAmt.toLocaleString()}}</th>
              <th class="text-right">{{ biInfoSum.succCnt.toLocaleString()}}</th>
              <th class="text-right">{{ biInfoSum.succAmt.toLocaleString()}}</th>
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
        biInfoSum : {planCnt:0, planAmt:0, ingCnt:0, ingAmt:0, succCnt:0, succAmt:0, custCnt:0, regCustCnt:0}, // 하단 합계
      };
    },
    async mounted() {
      //달력
      cmmn.applyCal();
      $('#startDay').datepicker('setDate', '-1M');
      $('#endDay').datepicker('setDate', 'today' );
      this.selectCoInterList();
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
          //coInter : vm.coInter,
          startDay : $('#startDay').val(),
          endDay : $('#endDay').val()
        }

        if(this.$store.state.loginInfo.userAuth == 1){
          params.coInter = vm.coInter
        }else{
          if(vm.coInter == ''){
            params.coInter =  vm.coInterList.map(item => item.interrelatedCustCode)
          }else{
            params.coInter = vm.coInter
          }
        }

        try {
          vm.$store.commit("loading");
          const response = await vm.$http.post(
            "/api/v1/statistics/bidPresentList", params
          );
          const data = response.data[0]
          if(data.length > 1){
            vm.bidPresentList = data.slice(0, data.length - 1);

            vm.biInfoSum.planCnt = 0;
            vm.biInfoSum.planAmt = 0;
            vm.biInfoSum.ingCnt = 0;
            vm.biInfoSum.ingAmt = 0;
            vm.biInfoSum.succCnt = 0;
            vm.biInfoSum.succAmt = 0;
            vm.biInfoSum.custCnt = 0;
            vm.biInfoSum.regCustCnt = 0;

            vm.biInfoSum = data[data.length - 1];
            // console.log(vm.biInfoSum);
          }

          vm.$store.commit("finish");
        } catch (err) {
          vm.biInfoSum.planCnt = 0;
          vm.biInfoSum.planAmt = 0;
          vm.biInfoSum.ingCnt = 0;
          vm.biInfoSum.ingAmt = 0;
          vm.biInfoSum.succCnt = 0;
          vm.biInfoSum.succAmt = 0;
          vm.biInfoSum.custCnt = 0;
          vm.biInfoSum.regCustCnt = 0;

          console.log(err);
          vm.$store.commit("finish");
        }
    },
    
    //excelDown
    excelDown(){
      const vm = this
      const time = cmmn.formatDate(new Date(), "yyyy_mm_dd");

      const params = {
        coInter : vm.coInter == '' ?  vm.coInter : vm.coInterList.map(item => item.interrelatedCustCode),
        startDay : $('#startDay').val(),
        endDay : $('#endDay').val(),
        fileName : "입찰현황" + time
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

      this.$store.commit("loading");
      this.$http
        .post("/api/v1/excel/statistics/bidPresentList/downLoad", params, {
          responseType: "blob",
        })
        .then((response) => {
          if (response.status === 200) {
            // 응답이 성공적으로 도착한 경우
            const url = window.URL.createObjectURL(new Blob([response.data])); // 응답 데이터를 Blob 형식으로 변환하여 URL을 생성합니다.
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", params.fileName + ".xlsx"); // 다운로드할 파일명을 설정합니다.
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url); // 임시 URL을 해제합니다.
          } else {
            this.$swal({
              // 오류 처리
              type: "warning",
              text: "엑셀 다운로드 중 오류가 발생했습니다.",
            });
          }
        })
        .catch((error) => {
          // 오류 처리
          console.error("Error:", error);
          this.$swal({
            type: "warning",
            text: "엑셀 다운로드 중 오류가 발생했습니다.",
          });
        })
        .finally(() => {
          this.$store.commit("finish"); // 로딩 상태 종료
        });
      }
    },
    beforeMount() {},
  }
  </script>