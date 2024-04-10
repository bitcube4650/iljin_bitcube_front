<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>전자입찰</li>
                <li>입찰진행</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="conTopBox">
                <ul class="dList">
                    <li><div>입찰진행은 입찰공고 되고 입찰 완료되기 전까지의 상태를 가진 입찰입니다. (입찰번호 또는 입찰명을 클릭하시면 상세내용을 확인할 수 있습니다)</div></li>
                    <li><div>견적 제출이 가능한 입찰은 입찰번호, 입찰명 그리고 제출시작일시가 파란색으로 표기 됩니다.(견적 가능은 미투찰 상태에서 제출시작시간이 지난 입찰입니다.)</div></li>
                </ul>
            </div>

            <!-- searchBox -->
            <div class="searchBox mt20">
                <div class="flex align-items-center">
                    <div class="sbTit mr30">입찰번호</div>
                    <div class="width250px">
                        <input type="text" class="inputStyle" placeholder="" v-model="searchParams.bidNo" @keyup.enter.prevent="search(0)" maxlength="10" />
                    </div>
                    <div class="sbTit mr30 ml50">입찰명</div>
                    <div class="width250px">
                        <input type="text" class="inputStyle" placeholder="" v-model="searchParams.bidName" @keyup.enter.prevent="search(0)" maxlength="50" />
                    </div>
                </div>
                <div class="flex align-items-center height50px mt10">
                    <div class="sbTit mr30">입찰방식</div>
                    <div class="flex align-items-center width100">
                        <input type="checkbox" id="progress1-1" class="checkStyle" v-model="searchParams.bidModeA" /><label for="progress1-1">지명</label>
                        <input type="checkbox" id="progress1-2" class="checkStyle" v-model="searchParams.bidModeB" /><label for="progress1-2" class="ml50">일반</label>
                    </div>
                    <div class="sbTit mr30 ml50">투찰상태</div>
                    <div class="flex align-items-center width100">
                        <input type="checkbox" id="s1-1" class="checkStyle" v-model="searchParams.esmtYnN" /><label for="s1-1">미투찰(재입찰 포함)</label>
                        <input type="checkbox" id="s1-2" class="checkStyle" v-model="searchParams.esmtYnY" /><label for="s1-2" class="ml50">투찰</label>
                    </div>
                    <a class="btnStyle btnSearch" @click.prevent="search(0)">검색</a>
                </div>
            </div>
            <!-- //searchBox -->

            <div class="flex align-items-center justify-space-between mt40">
                <div class="width100">전체 : <span class="textMainColor"><strong>{{listPage.totalElements? listPage.totalElements.toLocaleString(): 0}}</strong></span>건
                    <select v-model="searchParams.size" @change="search(0)" class="selectStyle maxWidth140px ml20">
                        <option value="10">10개씩 보기</option>
                        <option value="20">20개씩 보기</option>
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                    </select>
                </div>
            </div>
            <table class="tblSkin1 mt10">
                <colgroup>
                    <col style="width: 12%" />
                    <col style="" />
                    <col style="width: 14%" />
                    <col style="width: 14%" />
                    <col style="width: 10%" span="4" />
                </colgroup>
                <thead>
                    <tr>
                        <th>입찰번호</th>
                        <th>입찰명</th>
                        <th>제출시작일시</th>
                        <th>제출마감일시</th>
                        <th>입찰방식</th>
                        <th>투찰상태</th>
                        <th>내역</th>
                        <th class="end">담당자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(val, idx) in listPage.content" :key="idx">
                        <td>
                            <a @click="clickPartnerBidStatusDetail(val.biNo)" class="textUnderline" :class="isPastDate(val.estStartDate) && !isPastDate(val.estCloseDate) && val.esmtYn != '2' ? 'blueHighlight' : ''" style="cursor: pointer" >{{ val.biNo }}</a>
                        </td>
                        <td class="text-left">
                            <a @click="clickPartnerBidStatusDetail(val.biNo)" class="textUnderline" :class="isPastDate(val.estStartDate) && !isPastDate(val.estCloseDate) && val.esmtYn != '2'  ? 'blueHighlight' : ''" style="cursor: pointer">{{ val.biName }}</a>
                        </td>
                        <td :class="isPastDate(val.estStartDate) && !isPastDate(val.estCloseDate) && val.esmtYn != '2' ? 'blueHighlight' : ''">
                            <i class="fa-regular fa-timer"></i>{{ val.estStartDate }}
                        </td>
                        <td>{{ val.estCloseDate }}</td>
                        <td>{{ val.biMode | ftBiMode }}</td>
                        <td><span v-text="fnIngTag(val)" :class="val.esmtYn == '2' ? 'blueHighlight' : ''" :style="(val.esmtYn == undefined || val.esmtYn == null || val.esmtYn == 0 || val.esmtYn == 1 ) && !isPastDate(val.estCloseDate) ? 'color:red;' : '' "></span></td>
                        <td>{{ val.insMode | ftInsMode }}</td>
                        <td class="end">
                            <i class="fa-light fa-paper-plane-top"></i>
                            <a :href="'mailto:' + val.damdangEmail" class="textUnderline" title="담당자 메일">{{ val.damdangName }}</a>
                        </td>
                    </tr>
                    <tr v-if="listPage.content == undefined || listPage.content == null || listPage.content.length == 0">
                        <td class="end" colspan="8">조회된 데이터가 없습니다.</td>
                    </tr>
                </tbody>
            </table>

            <!-- pagination -->
            <div class="row mt40">
                <div class="col-xs-12">
                    <pagination @searchFunc="search" :page="listPage" />
                </div>
            </div>
            <!-- //pagination -->
        </div>
        <!-- //contents -->
    </div>
    <!-- //본문 -->
</template>
<style scoped>
.blueHighlight {
    color: #0109d0 !important;
}
</style>
<script>
import mixin from "../service/mixin.js";
import Pagination from "@/components/Pagination.vue";

export default {
    name: "partnerBidStatus",
    components: {
        Pagination,
    },
    data() {
        return {
            searchParams: {
                bidNo : ''
            ,   bidName : ''
            ,   bidModeA : true
            ,   bidModeB : true
            ,   esmtYnN : true
            ,   esmtYnY : true
            ,	size : 10						//10개씩 보기
            ,	page : 0						//클릭한 페이지번호
            },
            listPage: {},
        };
    },
    mixins: [mixin],
    methods: {
        search(page) {
            if(!this.searchParams.bidModeA && !this.searchParams.bidModeB){
                this.$swal({
                    type: "warning",
                    text: "입찰방식을 선택해주세요.",
                });
                return false;
            }

            if(!this.searchParams.esmtYnN && !this.searchParams.esmtYnY){
                this.$swal({
                    type: "warning",
                    text: "투찰상태을 선택해주세요.",
                });
                return false;
            }

            if (page >= 0) this.searchParams.page = page;
            this.retrieve();
        },

        async retrieve() {

            this.$store.commit('loading');
            await this.$http.post('/api/v1/bidPtStatus/statuslist', this.searchParams).then((response) => {
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

        fnIngTag(data){
            let ingTag = data.ingTag;
            let esmtYn = data.esmtYn;

            if(ingTag == 'A3' && (esmtYn == '0' || esmtYn == '1')){
                return '미투찰(재입찰)'
            }else if(esmtYn == null || esmtYn == undefined || esmtYn == '' || esmtYn == '0' || esmtYn == '1'){
                return '미투찰'
            }else if(esmtYn == '2'){
                return '투찰'
            }
            return '';
        },

        clickPartnerBidStatusDetail(biNo) {
            this.$router.push({name:"partnerBidStatusDetail", params: { 'biNo': biNo }});
        },
        isPastDate(dateString) {
            const currentDate = new Date();
            const targetDate = new Date(dateString);
            return targetDate < currentDate;
        },
    },
    beforeMount() {},
    mounted() {

        if (this.$route.params.flag === "noticing") {
            this.searchParams.esmtYnN = true;
            this.searchParams.esmtYnY = false;
        } else if (this.$route.params.flag === "submitted") {
            this.searchParams.esmtYnN = false;
            this.searchParams.esmtYnY = true;
        }
        
        this.retrieve();
    },
};
</script>