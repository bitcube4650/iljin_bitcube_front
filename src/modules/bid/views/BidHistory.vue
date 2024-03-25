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
                        <Calendar @update-date="fnUpdateStartDate" calendarId="startDate" classProps="datepicker inputStyle" :initDate="searchParams.startDate"></Calendar>
                        <span style="margin:0 10px">~</span>
                        <Calendar @update-date="fnUpdateEndDate" calendarId="endDate" classProps="datepicker inputStyle" :initDate="searchParams.endDate"></Calendar>
                    </div>
                    <div class="sbTit width80px ml50" v-if="lotteMat">분류군</div>
                    <div class="flex align-items-center width300px" v-if="lotteMat">
                        <select v-model="searchParams.matDept" class="selectStyle">
                            <option value="">사업부</option>
                            <option v-for="(data1, index) in lotteMatCode.matDept" :key="'dept_'+index" :value="data1.codeVal">{{ data1.codeName }}</option>
                        </select>
                        <select v-model="searchParams.matProc" class="selectStyle ml10">
                            <option value="">공정</option>
                            <option v-for="(data2, index) in lotteMatCode.matProc" :key="'proc_'+index" :value="data2.codeVal">{{ data2.codeName }}</option>
                        </select>
                        <select v-model="searchParams.matCls" class="selectStyle ml10">
                            <option value="">분류</option>
                            <option v-for="(data3, index) in lotteMatCode.matCls" :key="'cls_'+index" :value="data3.codeVal">{{ data3.codeName }}</option>
                        </select>
                    </div>
                </div>
                <div class="flex align-items-center height50px mt10">
                    <div class="sbTit width100px">입찰번호</div>
                    <div class="width280px">
                        <input type="text" v-model="searchParams.biNo" class="inputStyle" placeholder="" @keydown.enter="fnSearchInit(0)">
                    </div>
                    <div class="sbTit width80px ml50">입찰명</div>
                    <div class="width300px">
                        <input type="text" v-model="searchParams.biName" class="inputStyle" placeholder="" @keydown.enter="fnSearchInit(0)">
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
                    </select>
                </div>
                <div class="flex-shrink0">
                    <a @click="fnExcelDown" class="btnStyle btnPrimary" title="엑셀 다운로드">엑셀 다운로드 <i class="fa-light fa-arrow-down-to-line ml10"></i></a>
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
                            <th v-if="lotteMat">사업부</th>
                            <th v-if="lotteMat">공정</th>
                            <th v-if="lotteMat">분류</th>
                            <th v-if="lotteMat">공장동</th>
                            <th v-if="lotteMat">라인</th>
                            <th v-if="lotteMat">호기</th>
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
                            <td v-if="lotteMat">{{ data.matDept }}</td>
                            <td v-if="lotteMat">{{ data.matProc }}</td>
                            <td v-if="lotteMat">{{ data.matCls }}</td>
                            <td v-if="lotteMat">{{ data.matFactory }}</td>
                            <td v-if="lotteMat">{{ data.matFactoryLine }}</td>
                            <td v-if="lotteMat">{{ data.matFactoryCnt }}</td>
                            <td class="text-left">{{ data.biName }}</td>
                            <td class="text-right">{{ data.bdAmt | numberWithCommas }}</td>
                            <td class="text-right">{{ data.succAmt | numberWithCommas }}</td>
                            <td class="text-left">{{ data.custName }}</td>
                            <td><a @click="$refs.joinCustList.initModal(data.biNo)" data-toggle="modal" data-target="#companiesNum" class="textUnderline" title="투찰 정보 페이지가 열림">{{ data.joinCustCnt }}</a></td>
                            <td>{{ data.estStartDate }}</td>
                            <td>{{ data.estCloseDate }}</td>
                            <td class="end">{{ data.userName }}</td>
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

        <joinCustList ref="joinCustList" />
    </div>
    <!-- //본문 -->
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import Calendar from "@/components/Calendar.vue";
import cmmn from "../../../../public/js/common.js";
import joinCustList from "../components/BidJoinCustListPop.vue";

export default {
    name: "bidHistory",
    components: {
        Pagination,
        Calendar,
        joinCustList
    },
    data() {
        return {
            searchParams: {						//조회조건
                biNo : ''						//조회조건 : 입찰번호
            ,	biName : ''						//조회조건 : 입찰명
            ,   startDate : ''                  //조회조건 : 입찰완료 - 시작일
            ,   endDate : ''                    //조회조건 : 입찰완료 - 종료일
            ,   matDept : ''                    //조회조건 : 분류군 - 사업부
            ,   matProc : ''                    //조회조건 : 분류군 - 공정
            ,   matCls : ''                     //조회조건 : 분류군 - 분류
            ,	size : 10						//10개씩 보기
            ,	page : 0						//클릭한 페이지번호
            },
            listPage: {},						//리스트
            lotteMat : false,
            lotteMatCode : {}                   //조회조건 롯데매트리얼즈 코드
        }
    },
    filters: {
        numberWithCommas(val) {
			if(!val) return '';
			else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
    },
    methods: {
        //조회조건 날짜 셋팅
        fnUpdateEndDate(val){
            this.searchParams.endDate = val;
        },
        fnUpdateStartDate(val){
            this.searchParams.startDate = val;
        },
        //입찰완료 이력 조회
        fnSearchInit(page) {
            
            if (page >= 0) this.searchParams.page = page;
            this.retrieve();
            
        },
        async retrieve() {
            
            this.$store.commit('loading');
            await this.$http.post('/api/v1/bidComplete/history', this.searchParams).then((response) => {
                if(response.data.code != '999'){
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
        async fnLotteMatFlag(){
            if(this.$store.state.loginInfo.custCode === "02"){
                this.lotteMat = true;
                this.fnLotteMatCode();
            }
        },
        async fnLotteMatCode(){
            this.$store.commit('loading');
            await this.$http.post('/api/v1/bidComplete/lotteMatCode', {}).then((response) => {
                if(response.data.code != '999'){
                    this.lotteMatCode = response.data.data;
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
        //엑셀다운로드
        fnExcelDown(){

        }
    },
    beforeMount() {},
    mounted() {
        //검색조건 날짜 초기셋팅
        this.searchParams.endDate = cmmn.getCurretDate();
        this.searchParams.startDate = cmmn.strDateAddDay(this.searchParams.endDate, -365);
        this.fnLotteMatFlag();
        this.fnSearchInit(0);
    },
};
</script>