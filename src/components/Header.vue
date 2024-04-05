<template>
    <!-- header -->
    <div class="header">
        <div class="headerLeft">
            <router-link to="/" class="headerLogo" title="메인 페이지로 이동">
                <img :src="imgUrl" class="img-responsive" alt="일진그룹 로고">
                <span>e-Bidding System</span>
            </router-link>
            <p>편하고 빠른 전자입찰시스템</p>
        </div>
        <div v-if="this.$store.state.loginInfo !== null && this.$store.state.token !== ''" class="headerRight">
            <!-- 프로필 드롭다운1 -->
            <div class="profileDropWrap">
                <a class="profileDrop"><i class="fa-solid fa-circle-user"></i>{{ this.$store.state.loginInfo.userName }}님<i class="fa-solid fa-sort-down"></i></a><!--{{ this.$store.state.loginInfo.loginId }}-->
                <div class="profileDropMenu">
                    <a @click="changeStatus('info')" data-toggle="modal" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
                    <a @click="changeStatus('pwd')" data-toggle="modal" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
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
import Vue from 'vue'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)

export default {
    name: 'Header',
    data() {
        return {
            custType : this.$store.state.loginInfo.custType,
            custCode : this.$store.state.loginInfo.custCode,
            imgUrl: '',
            compInfo : []
        };
    },
    mounted(){
        cmmn.applyHeader();//퍼블리싱 js 파일 적용
        this.selectCompInfo();//업체정보 조회하여 url에 맞는 logo 경로 set

    },
    methods: {
        changeStatus(word){//비밀번호 변경인지 개인정보 수정인지 update
            
            this.$store.commit('updatePwdOrInfo', word);
            $('#mody1').modal('show');
            
        },
        async selectCompInfo(){//업체정보 조회하여 url에 맞는 logo 경로 set

            try {
                this.$store.commit('loading');
                const response = await this.$http.post('/login/interrelatedList', { 'custCode': this.$store.state.loginInfo.custCode});
                this.compInfo = response.data;

                var url = window.location.href;
                if(url.includes('ebid.jtv.co.kr')){//전주방송인 경우
                    
                    this.compInfo.forEach(item => {
                        if(item.interrelatedCustCode == '07'){
                            this.imgUrl = item.logoPath;
                        }
                    });

                }else if(url.includes('l-ebid.iljin.co.kr')){//롯데에너지머티리얼즈인 경우

                    this.compInfo.forEach(item => {
                        if(item.interrelatedCustCode == '02'){
                            this.imgUrl = item.logoPath;
                        }
                    });
                    
                }else{//일진전기로 조회되는 로고path로 set

                    this.compInfo.forEach(item => {
                        if(item.interrelatedCustCode == '01'){
                            this.imgUrl = item.logoPath;
                        }
                    });

                }
                
                this.$store.commit('finish');
            } catch(err) {
                console.log(err)
                this.$store.commit('finish');
            }

        }
    }  
}
</script>
<style>
    
</style>