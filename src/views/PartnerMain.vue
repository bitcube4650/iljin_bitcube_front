<template>

    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>메인</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="mainBanner"><img :src="imgUrl" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>

            <div class="mainConLayout">
                <div class="mcl_left mainConBox">
                    <h2 class="h2Tit">전자입찰</h2>
                    <div class="biddingList" style="margin-top: 70px;">
                        <a @click="moveBiddingPage('noticing')" class="biddingStep1">
                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>미투찰(재입찰 포함)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.noticing }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a @click="moveBiddingPage('submitted')" class="biddingStep2">
                            <div class="biddingListLeft"><i class="fa-light fa-check-to-slot"></i>투찰한 입찰</div>
                            <div class="biddingListRight"><span>{{ bidInfo.submitted }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <!-- <a @click="moveBiddingPage('confirmation')" class="biddingStep3">
                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>재입찰</div>
                            <div class="biddingListRight"><span>{{ bidInfo.confirmation }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a> -->
                        <a @click="moveBiddingPage('awarded')" class="biddingStep4">
                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>낙찰(12개월)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.awarded }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a @click="moveBiddingPage('unsuccessful')" class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>비선정(12개월)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.unsuccessful }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                    </div>
                </div>
                <div class="mcl_right">
                    <div class="mainConBox">
                        <h2 class="h2Tit">입찰완료 (12개월)<router-link to="/bid/partnerComplete" title="입찰 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></router-link></h2>
                        <div class="biddingCompleted">
                            <a class="bcStep1" title="공고되었던 입찰 페이지로 이동" style="cursor: default;">
                                <i class="fa-light fa-file-lines"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">공고되었던 입찰</div>
                                    <div class="bcNum"><span>{{ completeInfo.posted }}</span>건</div>
                                </div>
                            </a>
                            <a @click="moveBiddingPage('awardedAll')" class="bcStep2" title="투찰했던 입찰 페이지로 이동">
                                <i class="fa-light fa-message-check"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">투찰했던 입찰</div>
                                    <div class="bcNum"><span>{{ completeInfo.submitted }}</span>건</div>
                                </div>
                            </a>
                            <a @click="moveBiddingPage('awarded')" class="bcStep3" title="낙찰된 입찰 페이지로 이동">
                                <i class="fa-light fa-clipboard-check"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">낙찰된 입찰</div>
                                    <div class="bcNum"><span>{{ completeInfo.awarded }}</span>건</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="mainConBox">
                        <h2 class="h2Tit">공지사항<router-link to="/notice" title="공지사항 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></router-link></h2>
                        <div class="notiList">
                            <a v-for="(val, idx) in listPage.content" @click="setDetailData(val)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                <span class="notiTit"><span v-if="val.bco == 'ALL'">[공통] </span>{{ val.btitle }}</span>
                                <span class="notiDate">{{ val.bdate.substring(0,10) }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //contents -->

        <!--공지사항 상세 팝업-->
        <NoticeDetailPopup :dataFromMain="detailData" ref="noticePop" />

        <pwdInit />
    </div>
    <!-- //본문 -->




</template>

<script>
import NoticeDetailPopup from "@/components/NoticeDetailPopup.vue";
import pwdInit from "@/components/ChangePwdInit.vue";





export default {
  name: 'partnerMain',
  components: {
    NoticeDetailPopup,
    pwdInit,
  },
  data() {
    return {
        searchParams: {},	
		listPage: {},
        detailData: {},
        compInfo: [],
        imgUrl: this.$store.state.mainImg,
        bidInfo: {},
        completeInfo: {},
        custType : this.$store.state.loginInfo.custType,
        custCode : this.$store.state.loginInfo.custCode
    }
  },
  filters:{

  },
  mounted() {
    const params = {id: this.$options.name , title: '', content: '', userName: '', size: '5'};

    //파라미터 초기값 세팅
    if (this.$store.state.searchParams.id == params.id) {

        this.searchParams = Object.assign(params, this.$store.state.searchParams);
    
    } else {
    
        this.searchParams = params;
    
    }

    this.selectNotice();//공지사항 조회
    this.selectPartnerBidCnt();//전자입찰 건수 조회
    this.selectCompletedBidCnt();//입찰완료 조회
    this.fnChkPwChangeEncourage();//비밀번호 변경 권장
  },
  methods: {
    async selectNotice() {//공지사항 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/notice/noticeList', this.searchParams);
            this.listPage = response.data;
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }
    },
    setDetailData(data){//공지사항 상세 팝업 데이터 set
        this.plusClickNum(data.bno);// 조회수 +1
        this.detailData = data;
        this.detailData.bcontent = this.detailData.bcontent.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
    plusClickNum(bno){// 조회수 +1
        this.$http.post('/api/v1/notice/updateClickNum', { 'bno': bno});
    },
    async selectPartnerBidCnt() {//전자입찰 건수 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/main/selectPartnerBidCnt', this.searchParams);
            this.bidInfo = response.data;
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }
            
    },
    async selectCompletedBidCnt(){//입찰완료 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/main/selectCompletedBidCnt', this.searchParams);
            this.completeInfo = response.data;
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }

    },
    moveBiddingPage(keyword){//입찰페이지 이동
        
        if(keyword == 'awarded' || keyword == 'awardedAll' || keyword == 'unsuccessful'){//입찰완료로 이동
            this.$router.push({name:"partnerBidComplete" , params: { 'flag': keyword }});
        }else{//입찰진행으로 이동
            this.$router.push({name:"partnerBidStatus" , params: { 'flag': keyword }});
        }
        
    },
    async fnChkPwChangeEncourage(){
        let params = {
            userId : this.$store.state.loginInfo.userId,
            isGroup : false
        }
        this.$store.commit('loading');
        await this.$http.post("/api/v1/main/chkPwChangeEncourage", params).then((response) => {
            if (response.data.code == "OK") {
                if(response.data.data){
                    $('#pwInitModal').modal('show');
                }
            }
        }).finally(() => {
            this.$store.commit("finish");
        });
    }

  },
};

</script>
