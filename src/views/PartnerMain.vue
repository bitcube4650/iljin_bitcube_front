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
            <div class="mainBanner"><img src="/images/mainBanner01.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>

            <div class="mainConLayout">
                <div class="mcl_left mainConBox">
                    <h2 class="h2Tit">전자입찰</h2>
                    <div class="biddingList">
                        <a href="javascript:void(0)" class="biddingStep1">
                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>입찰공고</div>
                            <div class="biddingListRight"><span>{{ bidInfo.noticing }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep2">
                            <div class="biddingListLeft"><i class="fa-light fa-check-to-slot"></i>투찰한 입찰</div>
                            <div class="biddingListRight"><span>{{ bidInfo.submitted }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep3">
                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>낙찰확인대상</div>
                            <div class="biddingListRight"><span>{{ bidInfo.confirmation }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep4">
                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>낙찰(12개월)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.awarded }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>유찰(12개월)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.unsuccessful }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                    </div>
                </div>
                <div class="mcl_right">
                    <div class="mainConBox">
                        <h2 class="h2Tit">입찰완료 (12개월)<a href="javascript:void(0)" title="입찰 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                        <div class="biddingCompleted">
                            <a href="javascript:void(0)" class="bcStep1" title="공고되었던 입찰 페이지로 이동">
                                <i class="fa-light fa-file-lines"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">공고되었던 입찰</div>
                                    <div class="bcNum"><span>{{ completeInfo.posted }}</span>건</div>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="bcStep2" title="투찰했던 입찰 페이지로 이동">
                                <i class="fa-light fa-message-check"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">투찰했던 입찰</div>
                                    <div class="bcNum"><span>{{ completeInfo.submitted }}</span>건</div>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="bcStep3" title="낙찰된 입찰 페이지로 이동">
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
                                <span class="notiTit">{{ val.btitle }}</span>
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
    </div>
    <!-- //본문 -->




</template>

<script>
import NoticeDetailPopup from "@/components/NoticeDetailPopup.vue";





export default {
  name: 'Main',
  components: {
    NoticeDetailPopup
  },
  data() {
    return {
        searchParams: {},	
		listPage: {},
        detailData: {},
        bidInfo: {},
        completeInfo: {},
        custType: '',
        custCode: ''
    }
  },
  filters:{

  },
  mounted() {
    const params = {id: this.$options.name , title: '', content: '', userName: '', custCode: '', size: '5'};

    this.custType = this.$store.state.loginInfo.custType; 

    params.custCode = this.$store.state.loginInfo.custCode;

    //파라미터 초기값 세팅
    if (this.$store.state.searchParams.id == params.id) {

        this.searchParams = Object.assign(params, this.$store.state.searchParams);
    
    } else {
    
        this.searchParams = params;
    
    }

    this.selectNotice();//공지사항 조회
    this.selectPartnerBidCnt();//전자입찰 건수 조회
    this.selectCompletedBidCnt();//입찰완료 조회
  },
  methods: {
    /*
    select count(1) from t_bi_info_mat tbim where tbim.ING_TAG in('A1', 'A3') 
    select count(1) from t_bi_info_mat tbim inner join t_bi_info_mat_cust tbimc on(tbim.BI_NO = tbimc.BI_NO) where tbim.ING_TAG in('A1', 'A2', 'A3', 'A7') and tbimc.CUST_CODE = 217
    select count(1) from t_bi_info_mat tbim inner join t_bi_info_mat_cust tbimc on(tbim.BI_NO = tbimc.BI_NO) where tbim.ING_TAG in('A5') and tbimc.CUST_CODE = 217
    select count(1) from t_bi_info_mat tbim inner join t_bi_info_mat_cust tbimc on(tbim.BI_NO = tbimc.BI_NO) where tbim.ING_TAG in('A5') and tbimc.SUCC_YN = 'Y' and (tbimc.UPDATE_DATE  >= CURDATE() - INTERVAL 12 MONTH ) and tbimc.CUST_CODE = 10
    select count(1) from t_bi_info_mat tbim inner join t_bi_info_mat_cust tbimc on(tbim.BI_NO = tbimc.BI_NO) where tbim.ING_TAG in('A7') and (tbim.UPDATE_DATE >= CURDATE() - INTERVAL 12 month) and tbimc.CUST_CODE = 217


    select count(1) from t_bi_info_mat tbim where tbim.ING_TAG in('A5') and (tbim.UPDATE_DATE >= CURDATE() - INTERVAL 12 month);
    select count(1) from t_bi_info_mat tbim inner join t_bi_info_mat_cust tbimc on(tbim.BI_NO = tbimc.BI_NO) where tbim.ING_TAG in('A5') and (tbim.UPDATE_DATE >= CURDATE() - INTERVAL 12 month) and tbimc.CUST_CODE = 10;
    select count(1) from t_bi_info_mat tbim inner join t_bi_info_mat_cust tbimc on(tbim.BI_NO = tbimc.BI_NO) where tbim.ING_TAG in('A5') and (tbim.UPDATE_DATE >= CURDATE() - INTERVAL 12 month) and tbimc.SUCC_YN = 'Y' and tbimc.CUST_CODE = 10;

    */
    async selectNotice() {//공지사항 조회

        this.custType = this.$store.state.loginInfo.custType; 

        this.searchParams.custCode = this.$store.state.loginInfo.custCode;

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
        this.detailData = data;
        this.detailData.bcontent = this.detailData.bcontent.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
    async selectPartnerBidCnt() {//전자입찰 건수 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/main/selectPartnerBidCnt', this.searchParams);
            this.bidInfo = response.data;
            console.log('메인화면에서 출력하는 전자입찰',this.bidInfo );
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
            console.log('메인화면에서 출력하는 완료입찰',this.completeInfo );
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }

    }

  },
};

</script>
