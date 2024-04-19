<template>
  <div>
    <div class="loginBg">
      <div class="inner">
        <div class="loginWrap">
          <div class="loginLeft">
            <div class="loginLogo">
              <!--<img :src="imgUrl" class="img-responsive" alt="일진그룹 로고">-->
            </div>
            <h1><img :src="imgUrl" class="img-responsive" alt="일진그룹 로고"></h1>
            <input type="text" v-model="loginInfo.loginId" autocomplete="name" name="username" placeholder="아이디" autofocus="" class="loginInputStyle">
            <input type="password" v-model="loginInfo.loginPw" autocomplete="new-password" name="password" @keypress.enter="login" class="loginInputStyle mt10" placeholder="비밀번호">
            <div class="loginFindWrap">
              <input type="checkbox" id="chkID" v-model="rememberMe" class="loginCheckStyle"><label for="chkID">아이디 저장</label>
              <ul class="loginFind">
                <li><a href="#" @click="$refs.idSearchPop.initModal()" data-toggle="modal" data-target="#idSearch" title="아이디 찾기">아이디 찾기</a></li>
                <li><a href="#" @click="$refs.pwSearchPop.initModal()" data-toggle="modal" data-target="#pwSearch" title="비밀번호 찾기">비밀번호 찾기</a></li>
              </ul>
            </div>
            <div class="loginBtnWrap">
              <a  @click.prevent="login" class="btnLoginPrimary" title="로그인">로그인</a>
              <router-link to="/signup"  class="btnLoginOutline mt10" title="회원가입">회원가입</router-link>
            </div>
          </div>
          <div class="loginRight">
            <h2><span>투명</span>합니다.</h2>
            <h2><span>함께</span>합니다.</h2>
            <h2><span>미래</span>를 엽니다.</h2>
            <h3>" CLEAR, UNITED, OPENING THE FUTURE "</h3>
            <div class="loginRight">
              <h3 style="font-size: 30PX;color:#F3B352;font-weight: 550;">IT HelpDesk</h3>
              <h3 style="margin-top: 5px;font-size: 30px;font-weight: 550;">Tel : 080-707-9100</h3>
            </div>
          </div>
        </div>
        <div class="loginFooter">
          <div class="inner">
            <div class="loginFootLeft"><img :src="footerImg" class="img-responsive" alt="일진그룹 로고"></div>
            <div class="loginFootCenter">
              <a href="#"  @click="clickCertificate" title="공동인증서">공동인증서</a>
              <a href="#" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
              <a href="#" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
            </div>
            <div class="loginFootRight" v-if="showIljin">
              <div class="loginSelectStyle">
                <button class="selLabel">ILJIN FAMILY</button>
                <ul class="optionList">
                  <li class="optionItem"><a href="http://www.iljin.co.kr" target="_blank">일진홀딩스</a></li>
                  <li class="optionItem"><a href="http://www.iljinelec.co.kr" target="_blank">일진전기</a></li>
                  <li class="optionItem"><a href="http://www.iljindiamond.co.kr" target="_blank">일진다이아몬드</a></li>
                  <li class="optionItem"><a href="http://www.iljindisplay.co.kr" target="_blank">일진디스플레이</a></li>
                  <li class="optionItem"><a href="http://www.iljinsteel.co.kr" target="_blank">일진제강</a></li>
                  <li class="optionItem"><a href="http://alpinion.co.kr/" target="_blank">알피니언 메디칼시스템</a></li>
                  <li class="optionItem"><a href="http://www.jtv.co.kr" target="_blank">전주방송</a></li>
                  <li class="optionItem"><a href="http://www.hysolus.co.kr/" target="_blank">일진하이솔루스</a></li>
                  <li class="optionItem"><a href="http://www.iljincns.com" target="_blank">일진C&amp;S</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footAddr" v-if="showIljin">
            전자입찰 문의: IT HelpDesk ( 080 - 707 - 9100 ) &nbsp e-mail : ithelpdesk@iljin.co.kr<br>
            서울특별시 마포구 마포대로 45(도화동) 일진빌딩<br>© ILJIN ALL RIGHTS RESERVED.
          </div>
          <div class="footAddr" v-else>
            전자입찰 문의: IT HelpDesk ( 080 - 707 - 9100 ) &nbsp e-mail : ithelpdesk@iljin.co.kr
          </div>
        </div>
      </div>
    </div>
    
    <!-- 아이디 or 비밀번호 확인 -->
    <div class="modal fade modalStyle" id="loginAlert" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:420px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <div class="alertText1">아이디 또는 비밀번호를 확인해 주십시오</div>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //아이디 or 비밀번호 확인 -->

    <!-- 아이디 찾기 팝업 -->
    <id-search-pop ref="idSearchPop"/>

    <!-- 비밀번호 찾기 팝업 -->
    <pw-search-pop ref="pwSearchPop"/>

    <!-- 비밀번호 찾기 팝업 -->
    <temp-change-pwd ref="tempChangePwd"/>

    <!-- 업체등록절차 -->
    <enrollment-process />

    <!-- 업무안내 -->
    <bidding-guide />
  </div>
</template>

<script>
import IdSearchPop from "@/components/IdSearchPop.vue";
import PwSearchPop from "@/components/PwSearchPop.vue";
import TempChangePwd from "@/components/TempChangePwd.vue";
import EnrollmentProcess from "@/components/EnrollmentProcess.vue";
import BiddingGuide from "@/components/BiddingGuide.vue";

export default {
  props: {
    loginId: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      required: false,
    },
  },
  name: 'Login',
  components: {
    IdSearchPop,
    PwSearchPop,
    TempChangePwd,
    EnrollmentProcess,
    BiddingGuide
  },
  data() {
    return {
      loginInfo: {
        custType: '',
        custCode: '',
        custName: '',
        userId: '',
        userName: '',
        userAuth: '',
        token: ''
      },
      imgUrl: '/images//loginLogo_iljin.svg',
      rememberMe: false,
      showIljin: true,
      footerImg: ''
    }
  },
  methods: {
    loginFail() {
      $("#loginAlert").modal("show"); 
    },
    changePwd() {
      $("#tempChangePwdPop").modal("show"); 
      this.$refs.tempChangePwd.initModal(this.loginInfo.loginId);
      this.loginInfo.loginId = '';
      this.loginInfo.loginPw = '';
    },
    async login() {  
      //아이디 빈 문자열 제거
      var id = this.loginInfo.loginId;
      this.loginInfo.loginId = id.replace(/\s/g, "");

      if (this.loginInfo.loginId == null || this.loginInfo.loginId == '') {
        this.$swal({type: "warning",text: "아이디를 입력해 주십시오"});
        return;
      }
      if (this.loginInfo.loginPw == null || this.loginInfo.loginPw == '') {
        this.$swal({type: "warning",text: "비밀번호를 입력해 주십시오"});
        return;
      }
      try {
        this.$store.commit('loading');
        const response = await this.$http.post('/login', this.loginInfo);
        const loginInfo = Object.assign({}, response.data);
        
        this.$store.commit('login', loginInfo);
        this.$cookie.set('loginInfo', JSON.stringify(loginInfo));
        if (this.rememberMe) {
          this.$cookie.set('rememberUserId', loginInfo.userId);
        } else {
          this.$cookie.delete('rememberUserId');
        }
        this.$http.defaults.headers['x-auth-token'] = loginInfo.token;
        this.$store.commit('finish');
      } catch(err) {
          this.$store.commit('finish');
          console.log(err);
          if (err.response.status == 423) {
            this.changePwd();

          } else {
            this.loginFail();
          }
      }
    },
    async ssoLogIn() {
      console.log("Now Loged in!!!!")
      try {
        this.$store.commit('loading');
        const response = await this.$http.post('/login/sso', this.loginInfo);
        const loginInfo = Object.assign({}, response.data);
        
        this.$store.commit('login', loginInfo);
        this.$cookie.set('loginInfo', JSON.stringify(loginInfo));
        this.$http.defaults.headers['x-auth-token'] = loginInfo.token;
        this.$store.commit('finish');
      } catch(err) {
        this.$store.commit('finish');
        this.loginFail();
      }
    },
    clickCertificate(){//공동인증서안내 클릭
      window.open("https://www.tradesign.net/ra/iljin1", "_blank", "width=800,height=600");
    }
  },
  created() {
    this.loginInfo.loginId = this.$route.query['loginId'];
    this.loginInfo.token = this.$route.query['token'];

    if(this.loginInfo.loginId === undefined || this.loginInfo.loginId === '') {
      // Step.1 - 초기화
      //rathonsso.init();

      // Step.2 - SSO 인증 & 갱신
      // true: Authentication Required
      // false: Authentication Successful
      //let result = rathonsso.requestAuthentication()
      //console.log("requestAuthentication: " + result)
      //if(!result) {
      //  this.ssoLogIn();
      //}
    }
      // 초기화 backend와의 통신이 느릴경우를 대비 
      var host = document.location.href.match(/http[s]*:\/\/([a-zA-Z0-9\-\.]*)/)[1];
      if (host.indexOf('jtv') != -1) {//전주방송인 경우
          this.imgUrl = '/images/loginLogo_jtv.svg';
          this.footerImg = '/images/loginLogo_jtv.svg';
          this.showIljin = false;
      } else if (host.indexOf('l-ebid') != -1) {//롯데에너지머티리얼즈인 경우
          this.imgUrl = '/images/loginLogo_lotte.svg';
          this.footerImg = '/images/loginLogo_lotte.svg';
          this.showIljin = false;
      } else {//일진전기로 조회되는 로고path로 set
          this.imgUrl = '/images//loginLogo_iljin.svg';
          this.footerImg = '/images/footerLogo.svg';
          this.showIljin = true;
      }
  },
  beforeMount() {
    // 페이지 리로드를 위해 localStorage에 vuex 제거
    localStorage.removeItem('vuex');
    
    if(this.loginInfo.token) {
      if(this.loginInfo.token == "null") {
        this.$store.state.oauthNew = 'new';
      } else {
        console.log("Now redirect MainPage...")
        this.ssoLogIn();
      }
    }
  },
  mounted() {
    var userId = this.$cookie.get('rememberUserId');
    if (userId) {
      this.rememberMe = true;
      this.loginInfo.loginId = userId;
    } 
    $(document).ready(function() {
      //select
      const label = document.querySelectorAll('.selLabel');
      label.forEach(function(lb){
        lb.addEventListener('click', e => {
          let optionList = lb.nextElementSibling;
          let optionItems = optionList.querySelectorAll('.optionItem');
          clickLabel(lb, optionItems);
        })
      });
      const clickLabel = (lb, optionItems) => {
        if(lb.parentNode.classList.contains('active')) {
          lb.parentNode.classList.remove('active');
          optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
              handleSelect(lb, opt)
            })
          })
        } else {
          lb.parentNode.classList.add('active');
          optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
              handleSelect(lb, opt)
            })
          })
          
        }
      }
      const handleSelect = (label, item) => {
        label.innerHTML = item.textContent;
        label.parentNode.classList.remove('active');		
        $('.selLabel').addClass('selAct');
      }
    });
  }
};
</script>

