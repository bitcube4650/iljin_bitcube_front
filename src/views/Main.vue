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
            <div class="mainBanner" v-if="custType === 'inter' && custCode === '02'"><img src="/images/mainBanner01_lotte.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>
            <div class="mainBanner" v-else-if="custType === 'inter' && custCode === '07'"><img src="/images/mainBanner01_jtv.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>
            <div class="mainBanner" v-else><img src="/images/mainBanner01.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>
            <div class="mainConLayout">
                <div class="mcl_left mainConBox">
                    <h2 class="h2Tit">전자입찰</h2>
                    <div class="biddingList">
                        <a  class="biddingStep1">
                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>입찰계획</div>
                            <div class="biddingListRight"><span>{{ bidInfo.planning }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  class="biddingStep2">
                            <div class="biddingListLeft"><i class="fa-light fa-comments"></i>입찰공고</div>
                            <div class="biddingListRight"><span>{{ bidInfo.progress + bidInfo.rebid }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  class="biddingStep3">
                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>개찰대상</div>
                            <div class="biddingListRight"><span>{{ bidInfo.beforeOpening + bidInfo.beforeReopening }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  class="biddingStep4">
                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>개찰</div>
                            <div class="biddingListRight"><span>{{ bidInfo.opening }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>입찰완료 (12개월)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.completed }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>유찰 (12개월)</div>
                            <div class="biddingListRight"><span>{{ bidInfo.unsuccessful }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                    </div>
                </div>
                <div class="mcl_right">
                    <div class="mainConBox">
                        <h2 class="h2Tit">협력업체<a  title="협력업체 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                        <div class="cooperativ">
                            <a  title="미승인 업체 페이지로 이동">
                                <span class="cooperativ_tit">미승인 업체</span>
                                <span class="cooperativ_num">{{ partnerInfo.request }}</span>
                            </a>
                            <a  title="승인 업체 (인증서 제출) 페이지로 이동">
                                <span class="cooperativ_tit">승인 업체</span>
                                <span class="cooperativ_num">{{ partnerInfo.approval }}</span>
                            </a>
                            <a  title="삭제 업체 페이지로 이동">
                                <span class="cooperativ_tit">삭제 업체</span>
                                <span class="cooperativ_num">{{ partnerInfo.deletion }}</span>
                            </a>
                        </div>
                    </div>
                    <div class="mainConBox">
                        <h2 class="h2Tit">공지사항<router-link to="/notice" title="공지사항 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></router-link></h2>
                        <div class="notiList">
                            <a v-for="(val, idx) in listPage.content" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
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
        <NoticeDetailPopup />
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
        bidInfo: {},
        partnerInfo: {},
        custType: '',
        custCode: ''
    }
  },
  mounted() {
    const params = {id: this.$options.name , title: '', content: '', userName: '', custCode: '', size: '5'};

    this.custType = this.$store.state.loginInfo.custType; 

    if(this.custType == 'inter'){//계열사인 경우

        params.custCode = this.$store.state.loginInfo.custCode;//무슨 계열사인지
        this.custCode = this.$store.state.loginInfo.custCode;

    }else{//협력사인 경우

        params.custCode = '';

    }  

    //파라미터 초기값 세팅
    if (this.$store.state.searchParams.id == params.id) {

        this.searchParams = Object.assign(params, this.$store.state.searchParams);
    
    } else {
    
        this.searchParams = params;
    
    }

    this.selectNotice();//공지사항 조회
    this.selectBidCnt();//전자입찰 건수 조회
    this.selectPartnerCnt();//협력사 업채수 조회


  },
  filters:{

  },
  methods: {

    async selectNotice() {//공지사항 조회

        this.custType = this.$store.state.loginInfo.custType; 

        //계열사의 경우 계열사 회원에게 공개되는 공지사항을 위해 custCode 데이터 입력
        if(this.custType == 'inter'){//계열사인 경우
            this.searchParams.custCode = this.$store.state.loginInfo.custCode;//무슨 계열사인지
        }else{//협력사인 경우
            this.searchParams.custCode = '';
        } 

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
    async selectBidCnt() {//전자입찰 건수 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/main/selectBidCnt', this.searchParams);
            this.bidInfo = response.data;
            console.log('메인화면에서 출력하는 전자입찰',this.bidInfo );
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }
            
    },
    async selectPartnerCnt() {//협력사 업채수 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/main/selectPartnerCnt', this.searchParams);
            this.partnerInfo = response.data;
            console.log('메인화면에서 출력하는 업채수',this.partnerInfo );
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }

    }

  },
};

</script>
