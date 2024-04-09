<template>
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
                    <li><div>입찰완료는 결과가 선정 또는 비선정 된 입찰 목록을 보여줍니다. (입찰번호 또는 입찰명을 클릭하시면 상세내용을 확인할 수 있습니다)</div></li>
                </ul>
            </div>

            <!-- searchBox -->
            <div class="searchBox mt20">
                <div class="flex align-items-center">
                    <div class="sbTit mr30 width100px">입찰완료일</div>
                    <div class="flex align-items-center width280px">
                        <Calendar @update-date="fnUpdateStartDate" calendarId="startDate" classProps="datepicker inputStyle" :initDate="searchParams.startDate"></Calendar>
                        <span style="margin:0 10px">~</span>
                        <Calendar @update-date="fnUpdateEndDate" calendarId="endDate" classProps="datepicker inputStyle" :initDate="searchParams.endDate"></Calendar>
                    </div>
                    <div class="sbTit mr30 ml50 width100px">완료상태</div>
                    <div class="flex align-items-center width300px">
                        <input type="checkbox" id="progress1-1" v-model="searchParams.succYn_Y" class="checkStyle"><label for="progress1-1">선정(낙찰)</label>
                        <input type="checkbox" id="progress1-2" v-model="searchParams.succYn_N" class="checkStyle"><label for="progress1-2" class="ml50">비선정(유찰포함)</label>
                    </div>
                </div>
                <div class="flex align-items-center height50px mt10">
                    <div class="sbTit mr30 width100px">입찰번호</div>
                    <div class="width280px">
                        <input type="text" v-model="searchParams.biNo" class="inputStyle" placeholder="" @keydown.enter="fnSearchInit(0)">
                    </div>
                    <div class="sbTit mr30 ml50 width100px">입찰명</div>
                    <div class="width280px">
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
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
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
                    <tr v-for="(data, idx) in listPage.content" :key="idx">
                        <td><a @click="clickPartnerBidCompleteDetail(data.biNo)" class="textUnderline" title="입찰번호">{{ data.biNo }}</a></td>
                        <td class="text-left"><a @click="clickPartnerBidCompleteDetail(data.biNo)" class="textUnderline" title="입찰명">{{ data.biName }}</a></td>
                        <td>{{ data.bidOpenDate }}</td>
                        <td>{{ data.biMode | ftBiMode }}</td>
                        <td :style="data.succYn == 'Y' ? 'color:red;' : ''">{{ data.succYn | ftSuccYn }}</td>
                        <td>{{ data.insMode | ftInsMode }}</td>
                        <td class="end"><i class="fa-light fa-paper-plane-top"></i> <a :href="'mailto:' + data.userEmail " class="textUnderline" title="담당자">{{ data.userName }}</a></td>
                    </tr>
                    <tr v-if="listPage.content.length == 0">
                        <td class="end" colspan="7">조회된 데이터가 없습니다.</td>
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
    </div>
    <!-- //본문 -->
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import Calendar from "@/components/Calendar.vue";
import cmmn from "../../../../public/js/common.js";

export default {
    name: "partnerBidComplete",
    components: {
        Pagination,
        Calendar
    },
    data() {
        return {
            searchParams: {						//조회조건
                biNo : ''						//조회조건 : 입찰번호
            ,	biName : ''						//조회조건 : 입찰명
            ,	succYn_Y : true					//조회조건 : 선정(낙찰)
            ,	succYn_N : true					//조회조건 : 비선정
            ,	size : 10						//10개씩 보기
            ,	page : 0						//클릭한 페이지번호
            ,   startDate : ''                  //조회조건 : 입찰완료 - 시작일
            ,   endDate : ''                    //조회조건 : 입찰완료 - 종료일
            },
            listPage: {},						//리스트
        }
    },
    filters:{
        ftBiMode(val){
            if(val == 'A'){ return '지명'}
            else if(val == 'B'){ return '일반'}
        },
        ftSuccYn(val){
            if(val == 'Y'){ return '선정(낙찰)'}
            else if(val == 'N'){ return '비선정'}
        },
        ftInsMode(val){
            if(val == '1'){ return '파일'}
            else if(val == '2'){ return '직접입력'}
        }
    },
    methods: {
        //입찰완료 조회조건 날짜 셋팅
        fnUpdateEndDate(val){
            this.searchParams.endDate = val;
        },
        fnUpdateStartDate(val){
            this.searchParams.startDate = val;
        },
        //협력사 입찰완료 상세
        clickPartnerBidCompleteDetail(biNo){
            this.$router.push({name:"partnerBidCompleteDetail", params: { 'biNo': biNo }});
        },
        //협력사 입찰완료 리스트 조회
        fnSearchInit(page) {
            
            if(!this.searchParams.succYn_Y && !this.searchParams.succYn_N){
                alert("완료상태를 선택해주세요.");
                return false;
            }
            if (page >= 0) this.searchParams.page = page;
            this.retrieve();
            
        },
        async retrieve() {// 입찰완료 리스트 조회

            this.$store.commit('loading');
            await this.$http.post('/api/v1/bidComplete/partnerList', this.searchParams).then((response) => {
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
    },
    beforeMount() {
        let flag = this.$route.params.flag;
        if(flag == 'awarded'){
            this.searchParams.succYn_Y = true;
            this.searchParams.succYn_N = false;
        }else if(flag == 'unsuccessful'){
            this.searchParams.succYn_Y = false;
            this.searchParams.succYn_N = true;
        }
    },
    mounted() {
        //검색조건 날짜 초기셋팅
        this.searchParams.endDate = cmmn.getCurretDate();
        this.searchParams.startDate = cmmn.strDateAddDay(this.searchParams.endDate, -365);
        this.fnSearchInit(0);
    },
};
</script>