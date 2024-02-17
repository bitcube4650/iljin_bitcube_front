<template>
  <div>
    <div class="loginBg">
      <div class="inner">
        <div class="loginWrap">
          <div class="loginLeft">
            <div class="loginLogo">
              <img src="/images/loginLogo_iljin.svg" class="img-responsive" alt="일진그룹 로고">
              <!--<img src="/images/loginLogo_lotte.svg" class="img-responsive" alt="롯데에너지머트리얼즈 로고">-->
              <!--<img src="/images/loginLogo_jtv.svg" class="img-responsive" alt="전주방송 로고">-->
            </div>
            <h1><img src="/images/loginLogo.svg" class="img-responsive" alt="일진그룹 로고"></h1>
            <input type="text" v-model="loginInfo.loginId" autocomplete="name" name="username" placeholder="사번" autofocus="" class="loginInputStyle">
            <input type="password" v-model="loginInfo.loginPw" autocomplete="new-password" name="password" @keypress.enter="login" class="loginInputStyle mt10" placeholder="비밀번호">
            <div class="loginFindWrap">
              <input type="checkbox" id="chkID" name="chkID" class="loginCheckStyle"><label for="chkID">아이디 저장</label>
              <ul class="loginFind">
                <li><a href="#" @click="$refs.idSearchPop.initModal()" data-toggle="modal" data-target="#idSearch" title="아이디 찾기">아이디 찾기</a></li>
                <li><a href="#" @click="$refs.pwSearchPop.initModal()" data-toggle="modal" data-target="#pwSearch" title="비밀번호 찾기">비밀번호 찾기</a></li>
              </ul>
            </div>
            <div class="loginBtnWrap">
              <a  @click="login" data-target="#loginAlert" class="btnLoginPrimary" title="로그인">로그인</a>
              <router-link to="/signup" class="btnLoginOutline mt10" title="회원가입">회원가입</router-link>
            </div>
          </div>
          <div class="loginRight">
            <h2><span>투명</span>합니다.</h2>
            <h2><span>함께</span>합니다.</h2>
            <h2><span>미래</span>를 엽니다.</h2>
            <h3>" CLEAR, UNITED, OPENING THE FUTURE "</h3>
          </div>
        </div>
        <div class="loginFooter">
          <div class="inner">
            <div class="loginFootLeft"><img src="/images/footerLogo.svg" class="img-responsive" alt="일진그룹 로고"></div>
            <div class="loginFootCenter">
              <a href="#" title="공동인증서">공동인증서</a>
              <a href="#" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
              <a href="#" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
            </div>
            <div class="loginFootRight">
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
          <div class="footAddr">
            서울특별시 마포구 마포대로 45(도화동) 일진빌딩<br>© ILJIN ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </div>

    <!-- 아이디 찾기 팝업 -->
    <id-search ref="idSearchPop"/>

    <!-- 비밀번호 찾기 팝업 -->
    <pw-search ref="pwSearchPop"/>

    <!-- 업체등록절차 -->
    <enrollment-process />

    <!-- 업무안내 -->
    <bidding-guide />
  </div>
</template>

<script>
import IdSearch from "@/views/IdSearch.vue";
import PwSearch from "@/views/PwSearch.vue";
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
    IdSearch,
    PwSearch,
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
      }
    }
  },
  methods: {
    loginFail() {
      $("#loginAlert").modal("show"); 
    },
    async login() {  
      try {
        this.$store.commit('loading');
        const response = await this.$http.post('/login', this.loginInfo);
        const loginInfo = Object.assign({}, response.data);
        loginInfo.loginPw = 'Not Use';
        
        this.$store.commit('login', loginInfo);
        this.$cookie.set('loginInfo', JSON.stringify(loginInfo));
        this.$http.defaults.headers['x-auth-token'] = loginInfo.token;
        this.$store.commit('finish');
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
        this.loginFail();
      }
    }
  },
  created() {
  },
  beforeMount() {
    // 페이지 리로드를 위해 localStorage에 vuex 제거
    localStorage.removeItem('vuex');
    
    if(this.token) {
      if(this.token == "null") {
        this.$store.state.oauthNew = 'new';
      } else {
        console.log("Now redirect MainPage...")
        this.ssoLogIn();
      }
    }
  },
  mounted() {
  }
};
</script>

