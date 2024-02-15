<template>

    <div>
        <!-- wrap -->
        <div id="wrap">
            <!--헤더-->
            <Header />
            <!--//헤더-->
            <!-- contentWrap -->
            <div class="contentWrap">
                <!--메뉴-->
                <Menu />
                <!--//메뉴-->
                <!-- conRightWrap -->
                <div class="conRightWrap">
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
                            <!--<div class="mainBanner"><img src="/images/mainBanner01_lotte.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>-->
                            <!--<div class="mainBanner"><img src="/images/mainBanner01_jtv.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>-->

                            <div class="mainConLayout">
                                <div class="mcl_left mainConBox">
                                    <h2 class="h2Tit">전자입찰</h2>
                                    <div class="biddingList">
                                        <a href="javascript:void(0)" class="biddingStep1">
                                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>입찰계획</div>
                                            <div class="biddingListRight"><span>3</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep2">
                                            <div class="biddingListLeft"><i class="fa-light fa-comments"></i>진행중</div>
                                            <div class="biddingListRight"><span>3</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep3">
                                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>개찰대상</div>
                                            <div class="biddingListRight"><span>1</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep4">
                                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>낙찰 (3개월)</div>
                                            <div class="biddingListRight"><span>5</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep5">
                                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>유찰 (3개월)</div>
                                            <div class="biddingListRight"><span>7</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="mcl_right">
                                    <div class="mainConBox">
                                        <h2 class="h2Tit">협력업체<a href="javascript:void(0)" title="협력업체 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                                        <div class="cooperativ">
                                            <a href="javascript:void(0)" title="미승인 업체 페이지로 이동">
                                                <span class="cooperativ_tit">미승인 업체</span>
                                                <span class="cooperativ_num">0</span>
                                            </a>
                                            <a href="javascript:void(0)" title="승인 업체 (인증서 제출) 페이지로 이동">
                                                <span class="cooperativ_tit">승인 업체 (인증서 제출)</span>
                                                <span class="cooperativ_num">55</span>
                                            </a>
                                            <a href="javascript:void(0)" title="승인 업체 (인증서 미제출) 페이지로 이동">
                                                <span class="cooperativ_tit">승인 업체 (인증서 미제출)</span>
                                                <span class="cooperativ_num">7</span>
                                            </a>
                                            <a href="javascript:void(0)" title="삭제 업체 페이지로 이동">
                                                <span class="cooperativ_tit">삭제 업체</span>
                                                <span class="cooperativ_num">18</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="mainConBox">
                                        <h2 class="h2Tit">공지사항<a href="javascript:void(0)" title="공지사항 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                                        <div class="notiList">
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[시스템 OPEN공지] e-BIDDING SYSTEM(전자입찰시스템)이 오픈했습니다 e-BIDDING SYSTEM(전자입찰시스템)이 오픈했습니다</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[공통] 문자 발송 오류 안내</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[일진전기] 01월 협력사 등록 안내 01월 협력사 등록 안내</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[일진전기] 12월 협력사 등록 안내 12월 협력사 등록 안내</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- //contents -->
                    </div>
                    <!-- //본문 -->

                    <!-- 서브 푸터 -->
                    <Footer />
                    <!-- //서브 푸터 -->
                </div>
                <!-- //conRightWrap -->
            </div>

        </div>
        <!-- //wrap -->


        <!-- 로그아웃 -->
        <div class="modal fade modalStyle" id="logout" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText1">로그아웃 하시겠습니까?</div>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a @click="logout" class="modalBtnCheck" data-toggle="modal" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>

        <!-- 개인정보 -->
        <PersonalInfo />

        <!-- 비밀번호 확인 -->
        <CheckPwd />

        <!-- 비밀번호 변경 -->
        <ChangePwd />

        <!-- 공지사항 자세히 보기 -->
        <NoticeDetailPopup />

    </div>


    <!--//////////////////////////////////////////////////////////////////////////////////////////-->
    <!--기존 소스-->
    <!--
    <div class="wrap type-main">

        <div class="header">
            <div class="logo" title="전체메뉴">
                <a href="#none"></a>
                <button>메뉴</button>
            </div>
            <div class="user-info">
                <span class="user-msg">[{{ this.$store.state.loginInfo.loginDeptNm }}] <span class="point-blue">{{ this.$store.state.loginInfo.userName }}</span> <span>({{ this.$store.state.loginInfo.loginId }})</span></span>
                <a href="/" class="ico ico-home" title="HOME"></a>
                <a href="/quickSetting" class="ico ico-top02" title="환경설정"></a>
                <a href="#" class="ico ico-top03" title="메뉴얼" @click="menual()"></a>
                <a href="#" class="ico ico-logout" title="로그아웃" @click="logout"></a>
            </div>
        </div>


        <div class="menu-wrap">
            <ul class="menu">
                <li v-for="(menuhead,i) in menuheads" :key="i">
                    <a>{{menuhead.menuNm}}</a>
                    <ul>
                        <li v-for="(mainmenu,i) in mainmenus" :key="i">
                            <a v-if="menuhead.menuNo === mainmenu.upperMenuNo">

                                <router-link :to="{path:mainmenu.programFileNm}"><a>{{mainmenu.menuNm}}</a></router-link>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>



        <div class="contents2 main_blue">
            <div class="inner">
                <div class="clearfix">

                    <div class="main_quick_top">

                        <ul v-if="myquicks === null" class="quick-menu" >
                            <li v-for="index in six"  class="">
                                <a href=""></a>
                            </li>
                            <li class="ico06-07 card"><router-link to="/quickSetting">시스템관리</router-link></li>
                        </ul>
                        <ul v-else-if="myquicks.length !== 6" class="quick-menu" >
                            <li v-for="(quick,i) in myquicks" :class="quickIcon[i]">
                                <router-link :to="{path:quick.programFileNm}">{{quick.menuNm}}<div class="more_link">자세히보기</div></router-link>

                            </li>
                            <li v-for="index in six"  class="no_choice">
                                <div class="no_choice_icon"></div>
                                <h4>개인별 권한</h4>
                                <h5>개인별로 권한이 상이함</h5>
                            </li>
                            <li class="ico06-07 card"><router-link to="/codeMng">코드관리</router-link></li>
                        </ul>

                        <ul v-else class="quick-menu" >
                            <li v-for="(quick,i) in myquicks" :class="quickIcon[i]">
                                <router-link :to="{path:quick.programFileNm}">{{quick.menuNm}}</router-link>
                            </li>
                        </ul>


                    </div>


                    <div class="box_wrap">
                        <div class="b_left">

                            <div class="white_box_wrap">
                                <div class="main_card_box">
                                    <div class="c_left">

                                        <div class="card-box">
                                            <img src="img/img_card.png">
                                        </div>


                                        <div class="box_title">

                                            <router-link to="pExpense?lnk=mainCard">더보기</router-link>
                                        </div>
                                    </div>
                                    <div class="c_right">
                                        <div class="line-list">

                                            <ul class="line-list using-list">
                                                <li v-for="(unCard,i) in mymains.unCardList" :key="i">
                                                    <router-link to="pExpense?lnk=mainCard">

                                                        <span class="store">{{unCard.merchNm}}</span>
                                                        <span class="money">{{unCard.apprTot | currency}}<b>원</b></span>
                                                        <span class="date">{{unCard.apprDate}}</span>

                                                    </router-link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div class="white_box_wrap mgt20 height164">
                                <div class="box_title mgb10">
                                    <h1 class="box-title dp-ib">경비처리내역</h1>
                                    <router-link class="btn-more mgl10" to="/slipLst">더보기</router-link>
                                </div>
                                <div class="data-box">
                                    <ul class="line-list">
                                        <li v-for="(rcSlip,i) in mymains.rcSlipList" :key="i">
                                            <a :href="rcSlipData[i]">
                                                <span class="txt">{{rcSlip.slipTypeNm}}</span>
                                                <span class="money">{{rcSlip.totAmt | currency}}</span>
                                                <span class="status statue-wait" >{{rcSlip.slipStatNm}}</span>
                                                <span class="status01">{{rcSlip.hdSgtxt}}</span>
                                                <span class="date">{{rcSlip.chgDtm}}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div class="b_right">

                            <div class="white_box_wrap status">
                                <div class="box_title">
                                    <h1 class="box-title dp-ib">사용현황</h1>
                                    <router-link class="btn-more mgl10" to="/slipLst">더보기</router-link>
                                </div>
                                <div class="data-box mgt35" >

                                    <div class="graph-box">
                                        <div id="chartbox" style="width:375px;height:200px;padding-top:40px"></div>
                                    </div>

                                    <div>

                                        <ul v-if="psConds !==''" class="status-list">
                                            <li v-for="(psCond,i) in psConds" :key="i">
                                                <span class="dot"></span>{{psCond.acctNm}}
                                            </li>
                                        </ul>

                                        <ul v-if = "psConds.length===0" class="status-list">
                                            <li>
                                                <span class="dot"></span>없음
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>



                <div class="main_ing_wrap">
                    <ul>
                        <li class="blue blue01">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="pExpense?lnk=main">
                                        <span> {{ this.uncounts.untrCard && this.uncounts.untrCard.length > 0 ? this.uncounts.untrCard[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">0<b>건</b></div>
                            </span>
                            <span class="txt-kor">법인카드 미처리</span>
                            <span class="txt-eng">Corporate card unprocessed</span>
                        </li>
                        <li class="blue blue02">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/ebillSlipRcvLst?dealStatCd=10">
                                        <span>{{ this.uncounts.untrEtax && this.uncounts.untrEtax.length > 0 ? this.uncounts.untrEtax[0].cnt : ''}}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">121<b>건</b></div>
                            </span>
                            <span class="txt-kor">세금계산서 미처리</span>
                            <span class="txt-eng">Unprocessed tax invoice</span>
                        </li>
                        <li class="blue blue03">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/slipLst?slipStatCd=10">
                                        <span>{{ this.uncounts.unApprSlip && this.uncounts.unApprSlip.length > 0 ? this.uncounts.unApprSlip[0].cnt : ''}} {{this.uncounts.unApprErpSlip && this.uncounts.unApprErpSlip.length > 0 ?  '(' + this.uncounts.unApprErpSlip[0].cnt + ')' : ''}}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">0<b>건</b></div>
                            </span>
                            <span class="txt-kor">전표미상신</span>
                            <span class="txt-eng">Not approved for slip</span>
                        </li>
                        <li class="blue blue04">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/apprPendLst">
                                        <span>{{ this.uncounts.todoAppr && this.uncounts.todoAppr.length > 0 ? this.uncounts.todoAppr[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">0<b>건</b></div>
                            </span>
                            <span class="txt-kor">결재</span>
                            <span class="txt-eng">Approve proposal</span>
                        </li>
                        <li class="blue blue05">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/slipLst?slipStatCd=40">
                                        <span>{{ this.uncounts.rjctAppr && this.uncounts.rjctAppr.length > 0 ? this.uncounts.rjctAppr[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right">
                                    <router-link to="/slipLst?slipStatCd=60">
                                        <span>{{ this.uncounts.rjctFnc && this.uncounts.rjctFnc.length > 0 ? this.uncounts.rjctFnc[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                            </span>
                            <span class="txt-kor">전표반려</span>
                            <span class="txt-eng">Return a document</span>
                        </li>
                        <li class="blue blue06">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/bdgtReqLst?budStatCd=40">
                                        <span>{{ this.uncounts.rjctBjt && this.uncounts.rjctBjt.length > 0 ? this.uncounts.rjctBjt[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right">
                                    <router-link to="/bdgtReqLst?budStatCd=60">
                                        <span>{{ this.uncounts.rjctPln && this.uncounts.rjctPln.length > 0 ? this.uncounts.rjctPln[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                            </span>
                            <span class="txt-kor">예산반려</span>
                            <span class="txt-eng">Return a document</span>
                        </li>
                    </ul>

                </div>

            </div>

        </div>



        <div class="footer2">
            <span class="copyright">COPYRIGHT © ILJIN ALL RIGHTS RESERVED.</span>
        </div>

    </div>
    -->


</template>

<script>
import mixinSlip from '@/mixin/slip';
import menual from '@/components/Menual.vue';
import DhxGrid from '@/components/DhxGrid.vue';
import router from '@/router.js';
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NoticeDetailPopup from "@/components/NoticeDetailPopup.vue";
import CheckPwd from "@/components/CheckPwd.vue";
import ChangePwd from "@/components/ChangePwd.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";




export default {
  name: 'MyMain',
  mixins: [ mixinSlip],
  components: {
    DhxGrid,
    menual,
    router,
    Menu,
    Header,
    Footer,
    NoticeDetailPopup,
    CheckPwd,
    ChangePwd,
    PersonalInfo
  },
  data() {
    return {
        
        //메인화면 전체데이터
        mymains: [],
        //1.메인메뉴
        mainmenus:[],
        menuheads:[],
        menulink:[],
        //2.메인바로가기(퀵메뉴)
        mysets:[],
        myquicks:[],
        six:[],
        quickIcon:[],
        //3.메인법인카드내역
        unCardLists:[],
        uCard:[],
        //4.메인경비처리내역
        rcSlipLists:[],
        rcSlipData:[],
        //5. 사용현황
        psConds:[],
        piData:[],
        //6.메인처리예정건수
        uncounts: [],
        
    }
  },
  /* 숫자에 콤마(,)넣기*/
  filters:{
    /*
    currency:function (value) {
        var num = new Number(value);
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")
    }
    */
  },
  mounted() {
     


      this.getMyMain();
      this.mainMenu();
      this.getStartDate();

  },
  methods: {
    getStartDate(){
      //22.5.10 open 회계일자 조회
      let openDt = ''
      this.$http.get(`/api/acctPeriod/openDate`)
        .then(response => {
          if(response.data){
            openDt = response.data.toString()
            this.$store.commit('updateOpenDt', openDt)
          }else{
            this.$store.commit('updateOpenDt', this.$moment().format('YYYYMMDD'))
          }
        }).catch(response => {
        this.$store.commit('updateOpenDt', null)
        console.log(response)
      })
    },
    //21.03.25 메뉴얼 다운로드
    menual(){
        this.$modal.open({
        component: menual,
      });
    },

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

    //------------------------------------------------------
    //기존 소스
    /* 
      this.$swal({
        type: 'info',
        html: `그룹웨어 로그아웃이 선행되야 로그아웃이 됩니다.<br>아닌경우 다시 자동 로그인 처리됩니다.<br>로그아웃을 진행하시겠습니까?`,
        showCancelButton: true,
        confirmButtonText: '예',
        cancelButtonText: '아니오',
      }).then((result) => {
        if (result.value) {
          this.$http
              .get('/logout')
              .then(() => {
                this.$store.commit('logout');
                this.$cookie.delete('loginInfo');
                this.$router.push({path: `/backOffice`});
              })
              .catch((e) => {
                console.error(e);
              })
        }
      })
    */
    },
    //메인화면 데이터 불러오기
    getMyMain() {
        this.$http.get(`/api/dashboard/${this.$store.state.loginInfo.compCd}/${this.$store.state.loginInfo.loginId}`)
        .then(response => {
            //모든 데이터
            this.mymains = response.data;

            //1. 메인메뉴
            this.mainmenus = response.data.menuList;
            console.log("메뉴 불러오기");
            console.log(response.data);
            let menuupper=[];
            for(let i=0; i<this.mainmenus.length; i++){
                if(this.mainmenus[i].upperMenuNo==0){
                    menuupper.push(this.mainmenus[i]);
                }
            }

            //메뉴순서 정렬
            this.mainmenus.sort(function (a, b) {
                return a.menuOrder < b.menuOrder ? -1 : a.menuOrder > b.smenuOrdereq ? 1 : 0;
            });

            this.menuheads =menuupper;

            //2.메인바로가기(퀵메뉴)
            this.myquicks = response.data.userMenuList;
            if(this.myquicks==null){
                this.six = 5;
            } else {
                for(let ic=0; ic<this.myquicks.length; ic++){
                    switch (this.myquicks[ic].menuIconCd) {
                        case '10':
                            this.quickIcon.push( "ico01 card");
                            break;
                        case '20':
                            this.quickIcon.push( "ico02 card");
                            break;
                        case '30':
                            this.quickIcon.push( "ico03 card");
                            break;
                        case '40':
                            this.quickIcon.push( "ico04 card");
                            break;
                        case '50':
                            this.quickIcon.push( "ico05 card");
                            break;
                        case '60':
                            this.quickIcon.push( "ico06 card");
                            break;
                        case '70':
                            this.quickIcon.push( "ico06-01 card");
                            break;
                        case '80':
                            this.quickIcon.push( "ico06-02 card");
                            break;
                        case '90':
                            this.quickIcon.push( "ico06-03 card");
                            break;
                        case '100':
                            this.quickIcon.push( "ico06-04 card");
                            break;
                        case '110':
                            this.quickIcon.push( "ico06-05 card");
                            break;
                        case '120':
                            this.quickIcon.push( "ico06-06 card");
                            break;
                    }
                }
                if(this.myquicks.length!=6){
                    this.six = 5-this.myquicks.length;
                }
            }

            //3. 메인법인카드내역
            this.unCardLists = response.data.unCardList;

            //4. 메인경비처리내역
            this.rcSlipLists = response.data.rcSlipList;
            let rc = [];
            if(this.rcSlipLists != null){
                for(let x=0; x<this.rcSlipLists.length;x++){
                    switch (this.rcSlipLists[x].slipTypeCd) {
                        case 'E1':
                            //개인비용(경비) 신청서
                            rc = '/pExpense/'+ this.rcSlipLists[x].eaSlipNo;
                            break
                        case 'E2':
                            //개인비용(경비)외 신청서
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/exctpExpense/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break
                        case 'E3':
                            //전자세금계산서
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/ebillSlipReg/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break
                        case 'E4':
                            //수기세금계산서
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/billSlipReg/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break
                        case 'E5':
                            //법인카드 분할전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/cardSlipReg/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break

                        case 'E11':
                            //자금지급전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/paySlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        case 'E12':
                            //구매전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/purSlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        case 'E13':
                            //공사비전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/consSlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        case 'E14':
                            //기타전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/etcSalesSlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        default :
                            rc = '';
                            break
                    }
                    this.rcSlipData.push(rc);
                }
            }

            //5.메인사용현황
            this.psConds = response.data.psCond;
            let pieData=[];
            if(this.psConds ===null){
                this.psConds = [];
            }
            if(this.psConds.length>0){
                pieData = this.psConds;

                for(let i=0; i<pieData.length; i++){

                    pieData[i].sumAcctAmtTxt = this.getNumberFormat(pieData[i].sumAcctAmt)

                    if(i===0){
                        pieData[i].color="#2a84c9";
                    } else if(i===1) {
                        pieData[i].color="#f05f52";
                    } else if(i===2) {
                        pieData[i].color="#f5920c";
                    } else if(i===3) {
                        pieData[i].color="#14c7fe";
                    } else if(i===4) {
                        pieData[i].color="#69d697";
                    } else {
                        pieData[i].color="#f3c563";
                    }
                }
            }
            let myPieChart = new dhtmlXChart({
                view:"donut",
                container:"chartbox",
                value:"#sumAcctAmt#",
                color:"#color#",
                radius:65,
                innerRadius:30,
                tooltip:"<b>#acctNm#: #sumAcctAmtTxt#</b>",
                shadow:false,
            });
            myPieChart.parse(pieData,"json");

            //6.메인처리예정건수
            this.uncounts = response.data.counts;
        });
    },
    //메뉴wrap
    mainMenu(){
        $(".wrap.type-main .header .logo > button").click(function(){
            if($(".menu-wrap").css("display") == "none"){
                $(".menu-wrap").slideDown(300);
            }else{
                $(".menu-wrap").slideUp(300);
            }
        });
    },
    goPage(params) {
        // eslint-disable-next-line
        console.log("페이지이동", params)
        let targetName = (params.eaSlipNo === null || params.slipStatCd === '10') ? 'pExpense' : 'billSlipMng';
        this.$router.push({ name: targetName, params: params });
    }

  },
};

</script>


<!-- <style scoped lang="scss">
@import "public/css/main";

.wrap.lnb.minimized~.contents2 {
    left: 50px;
}

/* contents */

.contents2 {
    max-width: 100%;
    min-width: 1033px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    transition: .3s;
    padding: 0px 25px 33px 25px;
    /*overflow-y: auto;*/
}


.contents2>.inner-box {
    padding-bottom: 80px;
    min-height: 80vh;
}

.contents2 .content-name {
    margin-top: 33px;
}

.contents2 .content-name:after {
    clear: both;
    content: '';
    display: block;
}

.contents2 .content-name h2 {
    font-size: 24px;
    color: #061c3a;
    font-family: 'NotoM';
    float: left;
    line-height: 1;
}

.contents2 {
    /*overflow-y:auto;*/
    padding: 0;
}

.contents2>.inner-box {
    max-width: 100%;
    min-width: 1033px;
    padding: 0px 25px 33px 25px;
}
.contents2 div.gridbox_material.gridbox .xhdr {
    background: #f3f5f9;
    border-bottom: none;
    max-height: 100%;
    margin-top: -1px;
}

.contents2 .grid-tbl-box.type03 div.gridbox_material.gridbox .xhdr {
    height: 112px!important;
}
.contents2 div.gridbox_material.gridbox table.hdr td div.hdrcell {
    font-size: 14px;
    line-height: 24px;
    padding: 5.5px 0px;
    text-align: center;
    font-family: NotoM;
    color: #222;
}
.right .white-box .data-box{
    height: 239px;
}
</style> -->
