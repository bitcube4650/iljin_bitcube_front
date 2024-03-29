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
            <input type="text" id="startDay" class="datepicker inputStyle" readonly>
            <span style="margin:0 10px">~</span>
            <input type="text" id="endDay" class="datepicker inputStyle" readonly>
          </div>
          <div class="sbTit width80px ml50">계열사</div>
          <div class="flex align-items-center width280px">
            <select @change="selectBiInfoList" v-model="coInter" class="selectStyle">
              <option value="">전체</option>
              <option v-for="(data,idx) in coInterList" :key="idx" :value="data.interrelatedCustCode">{{data.interrelatedNm}}</option>
            </select>
          </div>
          <a @click="selectBiInfoList" class="btnStyle btnSearch">검색</a>
        </div>
      </div>
      <!-- //searchBox -->

      <div class="flex align-items-center justify-space-between mt40">
        <div class="width100">
          전체 : <span class="textMainColor"><strong>{{ biInfoList.length }}</strong></span>건
        </div>
        <div class="flex-shrink0">
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
            <th>회사명</th>
            <th>입찰건수</th>
            <th>예산금액(1)</th>
            <th>낙찰금액(2)</th>
            <th>차이(1)-(2)</th>
            <th class="end">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data ,idx) in biInfoList" :key="idx" >
            <td class="text-left" ><a @click="moveDetail(data.interrelatedCustCode)" class="textUnderline">{{ data.interrelatedNm }}</a></td>
            <td class="text-right">{{data.cnt.toLocaleString() }}</td>
            <td class="text-right">{{data.bdAnt.toLocaleString() }}</td>
            <td class="text-right">{{data.succAmt.toLocaleString() }}</td>
            <td :class="0 > data.mamt ? 'text-right textHighlight' : 'text-right'">{{data.mamt.toLocaleString() }}</td>
            <td class="end"></td>
          </tr>
          <tr v-show="biInfoList.length == 0 ">
            <td colspan="6">조회된 데이터가 없습니다.</td>
          </tr>						
        </tbody>
        <tfoot>
          <tr v-if="biInfoList.length > 0">
            <th class="text-left">계</th>
            <th class="text-right">{{ biInfoSum.cnt.toLocaleString()}}</th>
            <th class="text-right">{{ biInfoSum.bdAnt.toLocaleString()}}</th>
            <th class="text-right">{{ biInfoSum.succAmt.toLocaleString()}}</th>
            <th :class=" 0 > biInfoSum.mamt  ? 'text-right textHighlight' : 'text-right'">{{ biInfoSum.mamt.toLocaleString()}}</th>
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
    name: "compPerformance",
    components: {

    },
    data() {
      return {
        coInterList : [], //  계열사 리스트
        coInter : '', // 선택된 계열사
        biInfoList : [], // 회사별 입찰실적 리스트
        biInfoSum : {}, // 회사별 입찰실적 하단 합계
        routerStartDay :  '', // 상세로 이동할 때 시작일
        routerEndDay :  '', // 상세로 이동할 때 종료일
        biInfoListExcel : [] // 회사별 입찰실적 리스트 총 합까지 엑셀로 보내기 위한 변수
      };
    },
    async mounted() {
      //달력
      
      cmmn.applyCal();
      $('#startDay').datepicker('setDate', '-1M')
      $('#endDay').datepicker('setDate', 'today')
      this.routerStartDay = $('#startDay').val()
      this.routerEndDay = $('#endDay').val()
      await this.selectCoInterList()
      await this.selectBiInfoList()

      
    },
    methods:{
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
      //회사별 입찰실적 불러 오는 메소드
      async selectBiInfoList(){
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
            "/api/v1/statistics/biInfoList", params
          );
          const data = response.data[0].concat()
          vm.biInfoListExcel = data
          vm.biInfoList = data.slice(0, data.length - 1)
          vm.biInfoSum = data[data.length - 1];
          /*
          if(vm.biInfoSum != undefined){
            vm.biInfoSum.cnt = vm.biInfoSum.cnt.toLocaleString()
            vm.biInfoSum.bdAnt = vm.biInfoSum.bdAnt.toLocaleString()
            vm.biInfoSum.succAmt = vm.biInfoSum.succAmt.toLocaleString()
            vm.biInfoSum.mamt = vm.biInfoSum.mamt.toLocaleString()
          }
          */
          vm.routerStartDay = $('#startDay').val()
          vm.routerEndDay = $('#endDay').val()
          vm.$store.commit("finish")
        } catch (err) {
          console.log(err);
          vm.$store.commit("finish")
        }
      },
      //회사명 클릭 시 입찰 상세내역으로 이동하는 메소드
      moveDetail(interrelatedCustCode){
        const vm = this
        vm.$router.push({name:"performanceDetail" , params: { 'interrelatedCustCode': interrelatedCustCode,'startDay' : vm.routerStartDay,'endDay' : vm.routerEndDay }});//상세 페이지 이동
      },
      //excelDown
      excelDown(){
        const time = cmmn.formatDate(new Date(), "yyyy_mm_dd");
        const params = {
          biInfoList : this.biInfoListExcel,
          fileName : "회사별 입찰실적" + time
        }

        this.$store.commit("loading");
        this.$http
          .post("/api/v1/excel/statistics/biInfoList/downLoad", params, {
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
    }
  };
  </script>