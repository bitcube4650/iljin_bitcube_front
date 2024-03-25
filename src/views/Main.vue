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
                    <div class="biddingList">
                        <a @click="moveBiddingPage('planning')" class="biddingStep1">
                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>입찰계획</div><!--공고전 상태-->
                            <div class="biddingListRight"><span>{{ bidInfo.planning }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  @click="moveBiddingPage('noticing')" class="biddingStep2">
                            <div class="biddingListLeft"><i class="fa-light fa-comments"></i>입찰공고</div><!--공고는 되었지만 개찰은 안된 상태(재입찰 포함)-->
                            <div class="biddingListRight"><span>{{ bidInfo.noticing }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  @click="moveBiddingPage('beforeOpening')" class="biddingStep3">
                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>개찰대상</div><!--공고는 되었는데 공고 기간이 지난 입찰(재입찰 포함)-->
                            <div class="biddingListRight"><span>{{ bidInfo.beforeOpening }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  @click="moveBiddingPage('opening')" class="biddingStep4">
                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>개찰</div><!--개찰은 되었지만 업체 선정이 안된 상태-->
                            <div class="biddingListRight"><span>{{ bidInfo.opening }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  @click="moveBiddingPage('completed')" class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>입찰완료 (12개월)</div><!--업체선정까지 완료된 상태(업체 선정된 시점이 12개월 이내)-->
                            <div class="biddingListRight"><span>{{ bidInfo.completed }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a  @click="moveBiddingPage('unsuccessful')" class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>유찰 (12개월)</div><!--유찰된 시점이 12개월이내-->
                            <div class="biddingListRight"><span>{{ bidInfo.unsuccessful }}</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                    </div>
                </div>
                <div class="mcl_right">
                    <div class="mainConBox">
                        <h2 class="h2Tit">협력업체<a @click="movePartnerManagement('')" title="협력업체 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                        <div class="cooperativ">
                            <router-link to="/company/partner/approval" title="미승인 업체 페이지로 이동">
                                <span class="cooperativ_tit">미승인 업체</span>
                                <span class="cooperativ_num">{{ partnerInfo.request }}</span>
                            </router-link>
                            <a @click="movePartnerManagement('approval')" title="승인 업체 (인증서 제출) 페이지로 이동">
                                <span class="cooperativ_tit">승인 업체</span>
                                <span class="cooperativ_num">{{ partnerInfo.approval }}</span>
                            </a>
                            <a @click="movePartnerManagement('deletion')" title="삭제 업체 페이지로 이동">
                                <span class="cooperativ_tit">삭제 업체</span>
                                <span class="cooperativ_num">{{ partnerInfo.deletion }}</span>
                            </a>
                        </div>
                    </div>
                    <div class="mainConBox" style="height: 436px;">
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
        compInfo: [],
        imgUrl: '',
        bidInfo: {},
        partnerInfo: {},
        detailData: {},
        custType : this.$store.state.loginInfo.custType,
        custCode : this.$store.state.loginInfo.custCode
    }
  },
  mounted() {
    const params = {id: this.$options.name , title: '', content: '', userName: '', size: '8'};
    
    //파라미터 초기값 세팅
    if (this.$store.state.searchParams.id == params.id) {

        this.searchParams = Object.assign(params, this.$store.state.searchParams);
    
    } else {
    
        this.searchParams = params;
    
    }

    this.selectCompInfo();//url에 맞는 배너 이미지 경로 set
    this.selectNotice();//공지사항 조회
    this.selectBidCnt();//전자입찰 건수 조회
    this.selectPartnerCnt();//협력사 업채수 조회


  },
  filters:{

  },
  methods: {

    async selectCompInfo(){//업체정보 조회하여 url에 맞는 배너 경로 set

        try {
            this.$store.commit('loading');
            const response = await this.$http.post('/login/interrelatedList', { 'custCode': this.$store.state.loginInfo.custCode});
            this.compInfo = response.data;
 
            var url = window.location.href;
            if(url.includes('ebid.jtv.co.kr')){//전주방송인 경우
                
                this.compInfo.forEach(item => {
                    if(item.interrelatedCustCode == '07'){
                        this.imgUrl = item.imgPath2;
                    }
                });

            }else if(url.includes('l-ebid.iljin.co.kr')){//롯데에너지머티리얼즈인 경우

                this.compInfo.forEach(item => {
                    if(item.interrelatedCustCode == '02'){
                        this.imgUrl = item.imgPath2;
                    }
                });
                
            }else{//일진전기로 조회되는 배너path로 set

                this.compInfo.forEach(item => {
                    if(item.interrelatedCustCode == '01'){
                        this.imgUrl = item.imgPath2;
                    }
                });

            }
            
            this.$store.commit('finish');
        } catch(err) {
            console.log(err)
            this.$store.commit('finish');
        }

    },
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
    async selectBidCnt() {//전자입찰 건수 조회

        try {
            this.$store.commit('loading');
            this.$store.commit('searchParams', this.searchParams);
            const response = await this.$http.post('/api/v1/main/selectBidCnt', this.searchParams);
            this.bidInfo = response.data;
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
    movePartnerManagement(keyword){//업체관리로 이동
        this.$router.push({name:"PartnerManagement" , params: { 'flag': keyword }});
    },
    moveBiddingPage(keyword){//입찰페이지 이동
        if(keyword == 'planning'){//입찰계획 이동

            this.$router.push({name:"bidProgress" , params: { 'flag': keyword }});

        }else if(keyword == 'completed' || keyword == 'unsuccessful'){//입찰완료 이동

            this.$router.push({name:"bidComplete" , params: { 'flag': keyword }});

        }else{//입찰진행 이동

            this.$router.push({name:"bidStatus" , params: { 'flag': keyword }});

        }
        
    }

  },
};

</script>
