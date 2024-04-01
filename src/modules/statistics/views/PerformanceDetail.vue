<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>통계</li>
        <li>입찰실적 상세내역</li>
      </ul>
    </div>
    <!-- //conHeader -->
    <!-- contents -->
    <div class="contents">
      <div class="conTopBox">
        <ul class="dList">
          <li><div>조회기간 입찰완료일 기준으로 각 계열사의 상세 입찰 실적을 나타냅니다.</div></li>
        </ul>
      </div>

      <!-- searchBox -->
      <div class="searchBox mt20">
        <div class="flex align-items-center">
          <div class="sbTit width100px">입찰완료일</div>
          <div class="flex align-items-center width280px">
            <input type="text" id="startDay" class="datepicker inputStyle" title="월 입력란" readonly>
            <span style="margin:0 10px">~</span>
            <input type="text" id="endDay" class="datepicker inputStyle" title="월 입력란" readonly>
          </div>
        </div>
        <div class="flex align-items-center height50px mt10">
          <div class="sbTit width100px">품목</div>
          <div class="flex align-items-center">
            <input type="text" class="inputStyle width250px readonly" v-model="itemName" placeholder="우측 검색 버튼을 클릭해 주세요">
            <a @click="$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
          </div>
          <div class="sbTit mr30 ml50">계열사</div>
          <div class="width250px">
            <select @change="fnSearchInit(0)" v-model="coInter" class="selectStyle">
              <option value="">전체</option>
              <option v-for="(data,idx) in coInterList" :key="idx" :value="data.interrelatedCustCode">{{data.interrelatedNm}}</option>
            </select>
          </div>
          <a @click="fnSearchInit(0)" class="btnStyle btnSearch">검색</a>
        </div>
      </div>
      <!-- //searchBox -->

      <div class="flex align-items-center justify-space-between mt40">
        <div class="width100">
          전체 : <span class="textMainColor"><strong>{{ listPage.totalElements ? listPage.totalElements.toLocaleString() : 0 }}</strong></span>건
            <select @change="fnSearchInit(0)" v-model="size" class="selectStyle maxWidth140px ml20">
              <option value="10">10개씩 보기</option>
              <option value="20">20개씩 보기</option>
              <option value="30">30개씩 보기</option>
              <option value="50">50개씩 보기</option>
          </select>
        </div>
        <div class="flex-shrink0">
          <a @click="excelDown" class="btnStyle btnPrimary" title="엑셀 다운로드">엑셀 다운로드 <i class="fa-light fa-arrow-down-to-line ml10"></i></a>
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
              <th>입찰명</th>
              <th>입찰 품명</th>
              <th>예산금액</th>
              <th>낙찰금액</th>
              <th>계약금액</th>
              <th>참여업체수</th>
              <th>낙찰사</th>
              <th>제출시작일</th>
              <th>제출마감일</th>
              <th>투찰최고가(1)</th>
              <th>투찰최저가(2)</th>
              <th>편차(1)-(2)</th>
              <th class="end">재입찰횟수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data,idx) in listPage.content" :key="idx">
              <td class="text-left">{{data.biNo}}</td>
              <td class="text-right">{{ data.biName}}</td>
              <td class="text-right">{{ data.itemName}}</td>
              <td class="text-right">{{ data.bdAmt.toLocaleString() }}</td>
              <td class="text-right">{{ data.succAmt.toLocaleString()}}</td>
              <td class="text-right">{{data.realAmt.toLocaleString()}}</td>
              <td class="text-left">{{data.custCnt.toLocaleString()}}</td>
              <td> {{ data.custName }}</td>
              <td>{{data.estStartDate}}</td>
              <td class="text-right">{{ data.estCloseDate}}</td>
              <td class="text-right">{{data.esmtAmtMax.toLocaleString()}}</td>
              <td class="text-right">{{data.esmtAmtMin.toLocaleString()}}</td>
              <td class="text-right">{{data.esmtAmtDev.toLocaleString()}}</td>
              <td class="text-right end">{{data.reBidCnt.toLocaleString()}}</td>
            </tr>
            <tr v-show="listPage.content == 0 ">
              <td colspan="14">조회된 데이터가 없습니다.</td>
            </tr>			
          </tbody>
        </table>
      </div>

        <!-- pagination -->
        <div class="row mt40">
            <div class="col-xs-12">
              <pagination @searchFunc="fnSearchInit" :page="listPage"/>
            </div>
        </div>
        <!-- //pagination -->

    </div>
    <!-- //contents -->
    <!-- 품목 선택 팝업 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem"/>
  </div>
  <!-- //본문 -->
</template>
  <script>
  import cmmn from "../../../../public/js/common.js"
  import ItemPop from "@/components/ItemPop.vue";
  import Pagination from "@/components/Pagination.vue";

  export default {
    name: "performanceDetail",
    components: {
      ItemPop,
      Pagination
    },
    data() {
      return {
        coInterList : [], //  계열사 리스트
        coInter : '', // 선택된 계열사
        itemCode : '', // 품목 코드
        itemName : '', // 품목 이름
        size : 10, //10개씩 보기
        page : 0,	//클릭한 페이지번호
        listPage : {} //리스트
      };
    },
    async mounted() {
      cmmn.applyCal();
      const vm = this
      await vm.selectCoInterList()
      //달력
      $('#startDay').datepicker('setDate', '-1M')
      $('#endDay').datepicker('setDate', 'today')
      if(vm.$route.params.interrelatedCustCode != undefined){
        $('#startDay').val(this.$route.params.startDay)
        $('#endDay').val(this.$route.params.endDay)
        vm.coInter = vm.$route.params.interrelatedCustCode
      }
      await vm.fnSearchInit(0)
    },   
     methods: {
      //협락사 리스트 불러 오는 메소드
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
      callbackItem(data) {
          const vm = this
          vm.itemCode = data.itemCode
          vm.itemName = data.itemName
          this.$forceUpdate()
      },
      //입찰실적 상세내역 리스트
      async selectBiInfoList(){
        const vm = this
        
        let params = {
          itemCode : vm.itemCode,
          startDay : $('#startDay').val(),
          endDay : $('#endDay').val(),
          size : vm.size,
          page : vm.page
        }

        if(this.$store.state.loginInfo.userAuth == 1){
          params.coInter = vm.coInter
        }else{
          params.coInter = vm.coInter == '' ? vm.coInterList.map(item => item.interrelatedCustCode).join(',') : vm.coInter
        }

          vm.$store.commit("loading");

          await this.$http.post('/api/v1/statistics/biInfoDetailList', params).then((response) => {
            if(response.data.code != '999'){
              this.listPage = response.data.data
            }else{
                this.$swal({
                    type: "warning",
                    text: response.data.msg,
                });
            }
            }).finally(() => {
                this.$store.commit("finish");
            });
      },
      fnSearchInit(page) {
          if (page >= 0) this.page = page;
          this.selectBiInfoList();
        },
      //excelDown
      excelDown(){
        const vm = this
        const time = cmmn.formatDate(new Date(), "yyyy_mm_dd");

        let params = {
          itemCode : vm.itemCode,
          startDay : $('#startDay').val(),
          endDay : $('#endDay').val(),
          fileName : "입찰실적 상세내역" + time
        }

        if(this.$store.state.loginInfo.userAuth == 1){
          params.coInter = vm.coInter
        }else{
          params.coInter = vm.coInter == '' ? vm.coInterList.map(item => item.interrelatedCustCode).join(',') : vm.coInter
        }

        this.$store.commit("loading");
        this.$http
          .post("/api/v1/excel/statistics/biInfoDetailList/downLoad", params, {
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
  };
  </script>