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
            <div>진행중<a  @click="moveBiddingPage('noticing')" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.noticing }}</span>건</a></div>
            <div>낙찰 (12개월)<a  @click="moveBiddingPage('completed')" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.completed }}</span>건</a></div>
        </div>
        <div class="myState" v-if="company == 'cust'">
            <div>진행중<a  @click="moveBiddingPage('noticing')" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.noticing }}</span>건</a></div>
            <div>낙찰 (12개월)<a  @click="moveBiddingPage('awarded')" class="myStateNum" title="전자입찰 페이지로 이동"><span>{{ bidInfo.awarded }}</span>건</a></div>
        </div>
        <!-- //좌측 입찰상태 표시 -->
        <!-- LNB -->
        <ul class="conLeft">
            <li class="depth2None active"><router-link to="/"><span><i class="fa-light fa-desktop"></i></span>메인</router-link></li> <!-- 하위메뉴 없을 때 depth2None 추가 -->
            <li>         
                <router-link to=""><span><i class="fa-light fa-file-contract"></i></span>전자입찰</router-link>
                <div class="depth2Lnb">
                    <ul>
                        <li v-if="company == 'inter'" ><router-link to="/bid/progress">입찰계획</router-link></li>
                        <li><a  @click="clickBidStatus">입찰진행</a></li>
                        <li><a  @click="clickBidComplete">입찰완료</a></li>
                        <li v-if="company == 'inter'"><router-link to="/bid/history">입찰이력</router-link></li>
                    </ul>
                </div>
            </li>
            <li>         
                <router-link to=""><span><i class="fa-light fa-bullhorn"></i></span>공지</router-link>
                <div class="depth2Lnb">
                    <ul>
                        <li><router-link to="/notice">공지사항</router-link></li>
                        <li><a  @click="clickFaq">FAQ</a></li>
                        <li><a  @click="downloadMenual">메뉴얼</a></li>
                    </ul>
                </div>
            </li>
            <li v-if="(userAuth == '1' && company == 'cust') || ((userAuth == '1' || userAuth == '2' || userAuth == '4') && company == 'inter')"><!--권한! v-if="(userAuth == '1' && company == 'cust') || ((userAuth == '1' || userAuth == '2' || userAuth == '4') && company == 'inter')"-->         
                <a ><span><i class="fa-light fa-buildings"></i></span>업체정보</a>
                <div class="depth2Lnb">
                    <ul>
                        <li v-if="company == 'inter'"><router-link to="/company/partner/approval">업체승인</router-link></li>
                        <li v-if="company == 'inter'"><router-link to="/company/partner/management">업체관리</router-link></li>
                        <li v-if="company == 'cust'"><router-link to="/company/partner">자사정보</router-link></li>
                        <li v-if="company == 'cust'"><router-link to="/company/partner/user">사용자관리</router-link></li>
                    </ul>
                </div>
            </li>
            <li v-if="company == 'inter' && (userAuth == '1' || userAuth == '4' )"><!--권한! v-if="company == 'inter' && (userAuth == '1' || userAuth == '4' )"-->         
                <a ><span><i class="fa-light fa-chart-pie-simple"></i></span>통계</a>
                <div class="depth2Lnb">
                    <ul>
                        <li><router-link to="/statistics/performance/company">회사별 입찰실적</router-link></li>
                        <li><router-link to="/statistics/performance/detail">입찰실적 상세내역</router-link></li>
                        <li><router-link to="/statistics/status">입찰현황</router-link></li>
                        <li><router-link to="/statistics/detail">입찰 상세내역</router-link></li>
                    </ul>
                </div>
            </li>
            <li v-if="company == 'inter' && userAuth == '1'"><!--권한! v-if="company == 'inter' && userAuth == '1'"-->         
              <a ><span><i class="fa-light fa-memo-circle-info"></i></span>정보관리</a>
                <div class="depth2Lnb">
                    <ul>
                        <li><router-link to="/info/group/user">사용자관리</router-link></li>
                        <li><router-link to="/info/group/item">품목관리</router-link></li>
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
                        <div class="alertText1">로그아웃 하시겠습니까?</div>
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


        },
        clickBidProgress(){//입찰계획 클릭
            this.$router.push({name:"bidProgress"});
        },
        clickBidStatus(){//입찰진행 클릭
            if(this.company == 'inter'){//그룹사인 경우
                this.$router.push({name:"bidStatus"});
            }else{//협력사인 경우
                this.$router.push({name:"partnerBidStatus"});
            }
        },
        clickBidComplete(){//입찰완료 클릭
            if(this.company == 'inter'){//그룹사인 경우
                this.$router.push({name:"bidComplete"});
            }else{//협력사인 경우
                this.$router.push({name:"partnerBidComplete"});
            }

        },
        clickNotice(){//공지사항 클릭
            this.$router.push({name:"notice"});
        },
        clickFaq(){//faq 클릭
            if(this.company == 'inter' && this.userAuth == '1'){//그룹사인 경우 권한! this.company == 'inter' && this.userAuth == '1'
                this.$router.push({name:"adminFaq"});
            }else{//협력사인 경우
                this.$router.push({name:"userFaq"});
            }
        },
        async downloadMenual(){//메뉴얼 다운로드

            try {
                this.$store.commit('loading');
                const response = await this.$http.post(
                    "/api/v1/menual/downloadMenual",
                    {},
                    { responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
                );
                                  
                // 파일 다운로드를 위한 처리
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "전자입찰_매뉴얼.ppt"); // 다운로드될 파일명 설정
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                this.$store.commit('finish');
            } catch (error) {
                console.error("Error downloading file:", error);
                this.$store.commit('finish');
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
            
            if(keyword == 'completed' || keyword == 'awarded'){//입찰완료로 이동
                this.$router.push({name:"partnerBidComplete" , params: { 'flag': keyword }});
            }else{//입찰진행으로 이동
                this.$router.push({name:"partnerBidStatus" , params: { 'flag': keyword }});
            }
            
        }
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>