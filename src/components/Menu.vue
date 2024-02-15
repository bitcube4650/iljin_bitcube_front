<template>
  <!-- conLeft -->
  <div class="conLeftWrap">
    <!-- 프로필 드롭다운2 -->
    <div class="profileDropWrap2">
        <a href="javascript:void(0)" class="profileDrop2">{{ this.$store.state.loginInfo.userName }} 님<i class="fa-solid fa-sort-down"></i></a>
        <div class="profileDropMenu2">
            <a href="javascript:void(0)" data-toggle="modal" @click="infoOrPwd('info')" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
            <a href="javascript:void(0)" data-toggle="modal" @click="infoOrPwd('pwd')" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
            <a data-toggle="modal" data-target="#logout" title="로그아웃"><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a>
        </div>
    </div>
    <!-- //프로필 드롭다운2 -->
    <!-- 좌측 입찰상태 표시 -->
    <div class="myState">
        <div>진행중<a href="javascript:void(0)" class="myStateNum" title="전자입찰 페이지로 이동"><span>3</span>건</a></div>
        <div>낙찰 (3개월)<a href="javascript:void(0)" class="myStateNum" title="전자입찰 페이지로 이동"><span>5</span>건</a></div>
    </div>
    <!-- //좌측 입찰상태 표시 -->
    <!-- LNB -->
    <ul class="conLeft">
        <li class="depth2None active"><a href="javascript:void(0)"><span><i class="fa-light fa-desktop"></i></span>메인</a></li> <!-- 하위메뉴 없을 때 depth2None 추가 -->
        <li>			
            <a href="javascript:void(0)"><span><i class="fa-light fa-file-contract"></i></span>전자입찰</a>
            <div class="depth2Lnb">
                <ul>
                    <li><a href="bid/bidProgress">입찰계획</a></li>
                    <li><a href="group_sub01_2.html">입찰진행</a></li>
                    <li><a href="group_sub01_3.html">입찰완료</a></li>
                    <li><a href="group_sub01_4.html">입찰이력</a></li>
                </ul>
            </div>
        </li>
        <li>			
            <a href="javascript:void(0)"><span><i class="fa-light fa-bullhorn"></i></span>공지</a>
            <div class="depth2Lnb">
                <ul>
                    <li><a href="group_sub02_1.html">공지사항</a></li>
                    <li><a href="group_sub02_2.html">FAQ</a></li>
                    <li><a href="">메뉴얼</a></li>
                </ul>
            </div>
        </li>
        <li>			
            <a href="javascript:void(0)"><span><i class="fa-light fa-buildings"></i></span>업체정보</a>
            <div class="depth2Lnb">
                <ul>
                    <li><a href="group_sub03_1.html">업체승인</a></li>
                    <li><a href="group_sub03_2.html">업체관리</a></li>
                </ul>
            </div>
        </li>
        <li>			
            <a href="javascript:void(0)"><span><i class="fa-light fa-chart-pie-simple"></i></span>통계</a>
            <div class="depth2Lnb">
                <ul>
                    <li><a href="group_sub04_1.html">회사별 입찰실적</a></li>
                    <li><a href="group_sub04_2.html">입찰실적 상세내역</a></li>
                    <li><a href="group_sub04_3.html">입찰현황</a></li>
                    <li><a href="group_sub04_4.html">입찰 상세내역</a></li>
                </ul>
            </div>
        </li>
        <li>			
            <a href="javascript:void(0)"><span><i class="fa-light fa-memo-circle-info"></i></span>정보관리</a>
            <div class="depth2Lnb">
                <ul>
                    <li><a href="group_sub05_1.html">사용자관리</a></li>
                    <li><a href="group_sub05_2.html">품목정보관리</a></li>
                </ul>
            </div>
        </li>
    </ul>
    <!-- //LNB -->
  </div>
  <!-- //conLeft -->


  <!-- 기존 소스
  <div class="lnb" style="z-index:7">
      <ul class="menu-depth01">
        <li v-for="(menuhead,i) in menuheads" :key="i">
            <a href="#">
              <i v-if="menuhead.menuNo === '1000000'" class="lnb-icon fas fa-chalkboard-teacher"></i>
              <i v-else-if="menuhead.menuNo === '1100000'" class="lnb-icon far fa-folder-open"></i>
              <i v-else-if="menuhead.menuNo === '2000000'" class="lnb-icon far fa-folder-open"></i>
              <i v-else-if="menuhead.menuNo === '3000000'" class="lnb-icon far fa-check-circle"></i>
              <i v-else-if="menuhead.menuNo === '4000000'" class="lnb-icon fas fa-coins"></i>
              <i v-else-if="menuhead.menuNo === '5000000'" class="lnb-icon far fa-credit-card"></i>
              <i v-else-if="menuhead.menuNo === '6000000'" class="lnb-icon fas fa-cog"></i>
              <i v-else-if="menuhead.menuNo === '7000000'" class="lnb-icon fas fa-cog"></i>
              <i v-else class="lnb-icon far fa-folder-open"></i>
            {{menuhead.menuNm}}</a>
            <ul class="menu-depth02" >
                <li v-for="(mainmenu,i) in mainmenus" :key="i" v-show="menuhead.menuNo === mainmenu.upperMenuNo">
                        <router-link :to="{path: mainmenu.programFileNm}" class="navbar-item">
                        {{mainmenu.menuNm}}</router-link>
                </li>
            </ul>
        </li>
    </ul>
  </div>
  -->
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
        //menu
        mainmenus:[],
        menuheads:[],
    };
  },
  methods: {
    infoOrPwd(keyword){
        this.$emit('infoOrPwd', keyword);
    },

    //1. 메인메뉴
    getMainMenu() {
      this.$http.get(`/api/dashboard/${this.$store.state.loginInfo.compCd}/${this.$store.state.loginInfo.loginId}`)
            .then(response => {
                this.mainmenus = response.data.menuList;
                let menuupper=[];
                for(let i=0; i<this.mainmenus.length; i++){
                    if(this.mainmenus[i].upperMenuNo==0){
                        menuupper.push(this.mainmenus[i]);
                        //Uncaught router (in promise) NavigationDuplicated !! error
                        //this.$router.push(this.mainmenus);
                    }
                }
                this.menuheads =menuupper;

                //메뉴순서 정렬
                this.mainmenus.sort(function (a, b) { 
                    return a.menuOrder < b.menuOrder ? -1 : a.menuOrder > b.smenuOrdereq ? 1 : 0;  
                });
            });
    }
  },
  created() {
   
  },
  mounted(){
    if(this.$store.state.loginInfo.compCd && this.$store.state.loginInfo.loginId) this.getMainMenu();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
