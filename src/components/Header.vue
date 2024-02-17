<template>
    <!-- header -->
    <div class="header">
        <div class="headerLeft">
            <router-link to="/" class="headerLogo" title="메인 페이지로 이동">
                <img src="/images/headerLogo.svg" class="img-responsive" alt="일진그룹 로고">
                <!--<img src="/images/headerLogo_lotte.svg" class="img-responsive" alt="롯데에너지머트리얼즈 로고">-->
				<!--<img src="/images/headerLogo_jtv.svg" class="img-responsive" alt="전주방송 로고">-->
                <span>e-Bidding System</span>
            </router-link>
            <p>편하고 빠른 전자입찰시스템</p>
        </div>
        <div v-if="this.$store.state.loginInfo !== null && this.$store.state.token !== ''" class="headerRight">
            <!-- 프로필 드롭다운1 -->
            <div class="profileDropWrap">
                <a href="javascript:void(0)" class="profileDrop"><i class="fa-solid fa-circle-user"></i>{{ this.$store.state.loginInfo.userName }}님<i class="fa-solid fa-sort-down"></i></a><!--{{ this.$store.state.loginInfo.loginId }}-->
                <div class="profileDropMenu">
                    <a href="javascript:void(0)" data-toggle="modal" @click="infoOrPwd('info')" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
                    <a href="javascript:void(0)" data-toggle="modal" @click="infoOrPwd('pwd')" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
                    <a data-toggle="modal" data-target="#logout" title="로그아웃"><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a>
                </div>
            </div>
            <!-- //프로필 드롭다운1 -->
        </div> 
    </div>
    <!-- //header -->
</template>
<script>
import cmmn from "../../public/js/common.js"

export default {
    name: 'Header',
  data() {
    return {
 
    };
  },
  methods: {
    infoOrPwd(keyword){
        this.$emit('infoOrPwd', keyword);
    }
  },
  created() {
   
  },
  mounted(){
    cmmn.applyPub();//퍼블리싱 js 파일 적용
  }   
}
</script>
<style>
    
</style>