<template>
        <!-- conLeft -->
        <div class="conLeftWrap">
        <!-- 프로필 드롭다운2 -->
        <div class="profileDropWrap2">
            <a  class="profileDrop2">{{ this.$store.state.loginInfo.userName }} 님<i class="fa-solid fa-sort-down"></i></a>
            <div class="profileDropMenu2">
                <a @click="changeStatus('info')" data-toggle="modal" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
                <a @click="changeStatus('pwd')" data-toggle="modal" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
                <a  data-toggle="modal" data-target="#logout" title="로그아웃"><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a>
            </div>
        </div>
        <!-- //프로필 드롭다운2 -->
        <!-- 좌측 입찰상태 표시 -->
        <div class="myState" v-if="company == 'inter'">
            <div>진행중<a  @click="moveBiddingPage()" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.ing }}</span>건</a></div>
            <div>낙찰 (12개월)<a  @click="moveBiddingPage('completed')" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.completed }}</span>건</a></div>
        </div>
        <div class="myState" v-if="company == 'cust'">
            <div>진행중<a  @click="moveBiddingPage()" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.ing }}</span>건</a></div>
            <div>낙찰 (12개월)<a  @click="moveBiddingPage('awarded')" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.awarded }}</span>건</a></div>
        </div>
        <!-- //좌측 입찰상태 표시 -->
        <!-- LNB -->
        <ul class="conLeft">
            <li v-bind:class="$route.path === '/' ? 'active' : ''"><a href="/"><span><i class="fa-light fa-desktop"></i></span>메인</a></li>
            <li v-bind:class="$route.path === '/bid/progress' || $route.path === '/bid/status' || $route.path === '/bid/partnerStatus' || $route.path === '/bid/complete' || $route.path === '/bid/partnerComplete' || $route.path === '/bid/history' ? 'active' : ''">         
                <router-link to=""><span><i class="fa-light fa-file-contract"></i></span>전자입찰</router-link>
                <div class="depth2Lnb" v-bind:class="$route.path === '/bid/progress' || $route.path === '/bid/status' || $route.path === '/bid/partnerStatus' || $route.path === '/bid/complete' || $route.path === '/bid/partnerComplete' || $route.path === '/bid/history' ? 'currentDiv' : ''">
                    <ul>
                        <li v-if="company == 'inter'" v-bind:class="{ 'active': $route.path === '/bid/progress' }"><a href="/bid/progress">입찰계획</a></li>
                        <li v-bind:class="{ 'active': $route.name === 'bidStatus' || $route.name === 'partnerBidStatus' }"><a  @click="clickBidStatus">입찰진행</a></li>
                        <li v-bind:class="{ 'active': $route.name === 'bidComplete' || $route.name === 'partnerBidComplete'}"><a  @click="clickBidComplete">입찰완료</a></li>
                        <li v-if="company == 'inter'" v-bind:class="{ 'active': $route.path === '/bid/history' }"><a href="/bid/history">낙찰이력</a></li>
                    </ul>
                </div>
            </li>
            <li v-bind:class="$route.path === '/notice' || $route.name === 'adminFaq' || $route.name === 'userFaq' ? 'active' : ''">         
                <router-link to=""><span><i class="fa-light fa-bullhorn"></i></span>공지</router-link>
                <div class="depth2Lnb" v-bind:class="$route.path === '/notice' || $route.name === 'adminFaq' || $route.name === 'userFaq' ? 'currentDiv' : ''">
                    <ul>
                        <li v-bind:class="{ 'active': $route.path === '/notice' }"><a href="/notice">공지사항</a></li>
                        <li v-bind:class="{ 'active': $route.name === 'adminFaq' || $route.name === 'userFaq'}"><a @click="clickFaq">FAQ</a></li>
                        <li><a :href="company == 'cust'? '/installFile/전자입찰_매뉴얼_업체.pdf' : '/installFile/전자입찰_매뉴얼_본사.pdf'" download="전자입찰_메뉴얼.pdf">메뉴얼</a></li>
                    </ul>
                </div>
            </li>
            <li v-bind:class="$route.path === '/company/partner/approval' || $route.path === '/company/partner/management' || $route.path === '/company/partner' || $route.path === '/company/partner/user' ? 'active' : ''" v-if="(userAuth == '1' && company == 'cust') || ((userAuth == '1' || userAuth == '2' || userAuth == '4') && company == 'inter')">      
                <a ><span><i class="fa-light fa-buildings"></i></span>업체정보</a>
                <div class="depth2Lnb" v-bind:class="$route.path === '/company/partner/approval' || $route.path === '/company/partner/management' || $route.path === '/company/partner' || $route.path === '/company/partner/user' ? 'currentDiv' : ''">
                    <ul>
                        <li v-if="company == 'inter'" v-bind:class="{ 'active': $route.path === '/company/partner/approval' }"><a href="/company/partner/approval">업체승인</a></li>
                        <li v-if="company == 'inter'" v-bind:class="{ 'active': $route.path === '/company/partner/management' }"><a href="/company/partner/management">업체관리</a></li>
                        <li v-if="company == 'cust'" v-bind:class="{ 'active': $route.path === '/company/partner' }"><a href="/company/partner">자사정보</a></li>
                        <li v-if="company == 'cust'" v-bind:class="{ 'active': $route.path === '/company/partner/user' }"><a href="/company/partner/user">사용자관리</a></li>
                    </ul>
                </div>
            </li>
            <li v-bind:class="$route.path === '/statistics/performance/company' || $route.path === '/statistics/performance/detail' || $route.path === '/statistics/status' || $route.path === '/statistics/detail' ? 'active' : ''" v-if="company == 'inter' && (userAuth == '1' || userAuth == '4' )">    
                <a ><span><i class="fa-light fa-chart-pie-simple"></i></span>통계</a>
                <div class="depth2Lnb" v-bind:class="$route.path === '/statistics/performance/company' || $route.path === '/statistics/performance/detail' || $route.path === '/statistics/status' || $route.path === '/statistics/detail' ? 'currentDiv' : ''">
                    <ul>
                        <li v-bind:class="{ 'active': $route.path === '/statistics/performance/company' }"><a href="/statistics/performance/company">회사별 입찰실적</a></li>
                        <li v-bind:class="{ 'active': $route.path === '/statistics/performance/detail' }"><a href="/statistics/performance/detail">입찰실적 상세내역</a></li>
                        <li v-bind:class="{ 'active': $route.path === '/statistics/status' }"><a href="/statistics/status">입찰현황</a></li>
                        <li v-bind:class="{ 'active': $route.path === '/statistics/detail' }"><a href="/statistics/detail">입찰 상세내역</a></li>
                    </ul>
                </div>
            </li>
            <li v-bind:class="$route.path === '/info/group/user' || $route.path === '/info/group/item' ? 'active' : ''" v-if="company == 'inter' && userAuth == '1'">     
              <a ><span><i class="fa-light fa-memo-circle-info"></i></span>정보관리</a>
                <div class="depth2Lnb" v-bind:class="$route.path === '/info/group/user' || $route.path === '/info/group/item' ? 'currentDiv' : ''">
                    <ul>
                        <li v-bind:class="{ 'active': $route.path === '/info/group/user' }"><a href="/info/group/user">사용자관리</a></li>
                        <li v-bind:class="{ 'active': $route.path === '/info/group/item' }"><a href="/info/group/item">품목관리</a></li>
                    </ul>
                </div>
            </li>
        </ul>
        <!-- //LNB -->

        <!-- 로그아웃 -->
        <div class="modal fade modalStyle" id="logout" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a  class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div v-if="$store.state.loginInfo.sso == true" class="alertText1">그룹웨어 로그아웃이 선행되야 로그아웃이 됩니다.<br>아닌경우 다시 자동 로그인 처리됩니다.<br>로그아웃을 진행하시겠습니까?</div>
                        <div v-if="$store.state.loginInfo.sso == false" class="alertText1">로그아웃 하시겠습니까?</div>
                        <div class="modalFooter">
                            <a  class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a  @click="logout" class="modalBtnCheck" data-toggle="modal" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //로그아웃 -->

        <!--비밀번호 확인 팝업-->
        <CheckPwd />
    </div>
    <!-- //conLeft -->
  
    <!--*참고* :   작업 편의성을 위해 권한! 주석처리-->
  </template>
  
  <script>
import CheckPwd from "@/components/CheckPwd.vue";
import cmmn from "../../public/js/common.js";

  export default {
    name: 'Menu',
    components: {
        CheckPwd
    },
    data() {
      return {
        company: '',
        userAuth: '',
        searchParams: {},
        bidInfo: {}
      };
    },
    created() {
        //계열사인지 협력사인지
        this.company = this.$store.state.loginInfo.custType; 

        //권한
        this.userAuth = this.$store.state.loginInfo.userAuth;
    },
    mounted(){
        //console.log('user info ', this.$store.state.loginInfo);
        cmmn.applyPub();//퍼블리싱 js 파일 적용

        if(this.company == 'inter'){
            this.selectBidCnt();//전자입찰 건수 조회
        }else{
            this.selectPartnerBidCnt();//협력사 전자입찰 건수 조회
        }
    },
    methods: {
        //로그아웃
        logout() {

            $('#logout').modal('hide');//로그아웃 모달창 닫기

            this.$http
                .get('/logout')
                .then(() => {
                    this.$store.commit('logout');
                    this.$cookie.delete('loginInfo');//로그인 유저정보 삭제

                })
                .catch((e) => {
                    console.error(e);
                })
            this.$router.push('/');


        },
        clickBidProgress(){//입찰계획 클릭
            this.$router.push({name:"bidProgress"}).catch(()=>{});
        },
        clickBidStatus(){//입찰진행 클릭
            if(this.company == 'inter'){//그룹사인 경우
                //this.$router.push({name:"bidStatus"}).catch(()=>{});
                location.href = '/bid/status';
            }else{//협력사인 경우
                //this.$router.push({name:"partnerBidStatus"}).catch(()=>{});
                location.href = '/bid/partnerStatus';
            }
        },
        clickBidComplete(){//입찰완료 클릭
            if(this.company == 'inter'){//그룹사인 경우
                //this.$router.push({name:"bidComplete"}).catch(()=>{});
                location.href = '/bid/complete';
            }else{//협력사인 경우
                //this.$router.push({name:"partnerBidComplete"}).catch(()=>{});
                location.href = '/bid/partnerComplete';
            }

        },
        clickNotice(){//공지사항 클릭
            this.$router.push({name:"notice"}).catch(()=>{});
        },
        clickFaq(){//faq 클릭
            if(this.company == 'inter' && this.userAuth == '1'){//그룹사인 경우 권한! this.company == 'inter' && this.userAuth == '1'
                //this.$router.push({name:"adminFaq"}).catch(()=>{});
                location.href = '/notice/faq/admin';
            }else{//협력사인 경우
                //this.$router.push({name:"userFaq"}).catch(()=>{});
                location.href = '/notice/faq/user';
            }
        },
        async selectBidCnt() {//계열사 전자입찰 건수 조회

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
        async selectPartnerBidCnt() {//협력사 전자입찰 건수 조회

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
        changeStatus(word){//비밀번호 변경인지 개인정보 수정인지 update
            this.$store.commit('updatePwdOrInfo', word);
            $('#mody1').modal('show');
        },
        moveBiddingPage(keyword){//입찰페이지 이동

            if(keyword == 'completed'){//계열사 낙찰이력으로 이동

                //this.$router.push({name:"bidHistory" , params: { 'flag': keyword }}).catch(()=>{});
                location.href = '/bid/history?flag='+keyword;

            }else if( keyword == 'awarded'){//협력사 입찰완료로 이동
                
                //this.$router.push({name:"partnerBidComplete" , params: { 'flag': keyword }}).catch(()=>{});
                location.href = '/bid/partnerComplete?flag='+keyword;

            }else{//입찰진행으로 이동

                if(this.company == 'inter'){

                    //this.$router.push({name:"bidStatus" , params: { 'flag': keyword }}).catch(()=>{});
                    location.href = '/bid/status';
                }else{
                    
                    //this.$router.push({name:"partnerBidStatus" , params: { 'flag': keyword }}).catch(()=>{});
                    location.href = '/bid/partnerStatus?flag='+keyword;

                }
                
            }
            
        },
        clickCssApply(){//클릭한 메뉴 css

        }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .clickedDiv {
        display: block !important;
    }
    .currentDiv {
        display: block !important;
    }
  </style>