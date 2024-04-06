<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>통계</li>
                <li>입찰상세내역</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="conTopBox">
                <ul class="dList">
                    <li><div>조회기간 입찰완료일 기준으로 각 계열사의 낙찰된 입찰정보와 투찰 정보를 확인할 수 있습니다.</div></li>
                    <li><div>참여업체수를 클릭하면 투찰 업체들의 투찰가 및 투찰 일시를 보실 수 있습니다.</div></li>
                </ul>
            </div>

            <!-- searchBox -->
            <div class="searchBox mt20">
                <div class="flex align-items-center">
                    <div class="sbTit width100px">입찰완료일</div>
                    <div class="flex align-items-center width280px">
                        <Calendar @update-date="fnUpdateStartDate" calendarId="startDate" classProps="datepicker inputStyle" :initDate="searchParams.startDate"></Calendar>
                        <span style="margin:0 10px">~</span>
                        <Calendar @update-date="fnUpdateEndDate" calendarId="endDate" classProps="datepicker inputStyle" :initDate="searchParams.endDate"></Calendar>
                    </div>
                    <div class="sbTit width80px ml50">계열사</div>
                    <div class="flex align-items-center width280px">
                        <select v-model="searchParams.interrelatedCustCode" class="selectStyle" @change="fnSearchInit(0)">
                            <option value="">전체</option>
                            <option  v-for="(cust, idx) in interrelatedCustCode" :key="idx" :value="cust.interrelatedCustCode">{{ cust.interrelatedNm }}</option>
                        </select>
                    </div>
                    <a @click="fnSearchInit(0)" class="btnStyle btnSearch">검색</a>
                </div>
            </div>
            <!-- //searchBox -->

            <div class="flex align-items-center justify-space-between mt40">
                <div class="width100">
                    전체 : <span class="textMainColor"><strong>{{ listPage.totalElements ? listPage.totalElements.toLocaleString() : 0 }}</strong></span>건
                    <select @change="fnSearchInit(0)" v-model="searchParams.size" class="selectStyle maxWidth140px ml20">
                        <option value="10">10개씩 보기</option>
                        <option value="20">20개씩 보기</option>
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                    </select>
                </div>
                <div class="flex-shrink0">
                    <a @click="fnExceldown" class="btnStyle btnPrimary" title="엑셀 다운로드">엑셀 다운로드 <i class="fa-light fa-arrow-down-to-line ml10"></i></a>
                </div>
            </div>

            <table class="tblSkin1 mt10">
                <colgroup>
                    <col style="">
                </colgroup>
                <thead>
                    <tr>
                        <th>입찰번호</th>
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
                    <tr v-for="(data, index) in listPage.content" :key="index">
                        <td>{{ data.biNo }}</td>
                        <td class="text-left">{{ data.biName }}</td>
                        <td class="text-right">{{ data.bdAmt | numberWithCommas }}</td>
                        <td class="text-right">{{ data.succAmt | numberWithCommas }}</td>
                        <td>{{ data.custName }}</td>
                        <td><a @click="$refs.joinCustList.initModal(data.biNo)" data-toggle="modal" data-target="#companiesNum" class="textUnderline" title="투찰 정보 페이지가 열림">{{ data.joinCustCnt | numberWithCommas }}</a></td>
                        <td>{{ data.estStartDate }}</td>
                        <td>{{ data.estCloseDate }}</td>
                        <td class="end">{{ data.userName }}</td>
                    </tr>
                    <tr v-if="listPage.content.length == 0">
                        <td class="end" colspan="9">조회된 데이터가 없습니다.</td>
                    </tr>
                </tbody>
            </table>

            <!-- pagination -->
            <div class="row mt40">
                <div class="col-xs-12">
                    <pagination @searchFunc="fnSearchInit" :page="listPage"/>
                </div>
            </div>
            <!-- //pagination -->

        </div>
        <!-- //contents -->

        <!-- 투찰정보 팝업 -->
        <joinCustList ref="joinCustList" />
    </div>
    <!-- //본문 -->
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import Calendar from "@/components/Calendar.vue";
import cmmn from "../../../../public/js/common.js";
import joinCustList from "@/modules/bid/components/BidJoinCustListPop.vue";

export default {
    name: "biddingDetail",
    components: {
        Pagination,
        Calendar,
        joinCustList,
    },
    data() {
        return {
            searchParams: {						//조회조건
                size : 10						//10개씩 보기
            ,	page : 0						//클릭한 페이지번호
            ,   startDate : ''                  //조회조건 : 입찰완료 - 시작일
            ,   endDate : ''                    //조회조건 : 입찰완료 - 종료일
            ,   interrelatedCustCode : ''       //조회조건 : 계열사코드
            },
            listPage: {},						//리스트
            interrelatedCustCode: [],           //감사사용자 계열사리스트 
        };
    },
    filters: {
        numberWithCommas(val) {
            if (!val) return "";
            else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
    methods: {
        //감사사용자 계열사 코드 리스트
        fnSrcInterreleatedCustCode(){

            this.$store.commit('loading');
            this.$http.post('/api/v1/statistics/interrelatedCustCodeList', {}).then((response) => {
                if(response.data.code == 'OK'){
                    this.interrelatedCustCode = response.data.data;
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
        //조회조건 날짜 셋팅
        fnUpdateEndDate(val){
            this.searchParams.endDate = val;
        },
        fnUpdateStartDate(val){
            this.searchParams.startDate = val;
        },
        //통계 리스트 조회
        fnSearchInit(page) {
            
            if (page >= 0) this.searchParams.page = page;
            this.retrieve();
            
        },
        async retrieve() {
            
            this.$store.commit('loading');
            await this.$http.post('/api/v1/statistics/bidDetailList', this.searchParams).then((response) => {
                if(response.data.code == 'OK'){
                    this.listPage = response.data.data;
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
        fnExceldown(){
            let time = cmmn.formatDate(new Date(), "yyyy_mm_dd");
            let params = Object.assign({}, this.searchParams);
            params.fileName = "입찰_상세_내역_" + time;

            this.$store.commit("loading");
            this.$http.post("/api/v1/excel/statistics/bidDetailList/downLoad", params, {responseType: "blob",}).then((response) => {
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
            }).catch((error) => {
                // 오류 처리
                console.error("Error:", error);
                this.$swal({
                    type: "warning",
                    text: "엑셀 다운로드 중 오류가 발생했습니다.",
                });
            }).finally(() => {
                this.$store.commit("finish"); // 로딩 상태 종료
            });
        }
    },
    beforeMount() {},
    mounted() {
        this.fnSrcInterreleatedCustCode();
        //검색조건 날짜 초기셋팅
        this.searchParams.endDate = cmmn.getCurretDate();
        this.searchParams.startDate = cmmn.strDateAddDay(this.searchParams.endDate, -30);
        this.fnSearchInit(0);
    },
};
</script>