<template>
    <!-- conLeft -->
    <div class="conLeftWrap">
      <!-- 프로필 드롭다운2 -->
      <div class="profileDropWrap2">
          <a href="#" class="profileDrop2">{{ this.$store.state.loginInfo.userName }} 님<i class="fa-solid fa-sort-down"></i></a>
          <div class="profileDropMenu2">
              <a href="#" data-toggle="modal" data-target="#mody1" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
              <a href="#" data-toggle="modal" data-target="#mody2" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
              <a href="#" data-toggle="modal" data-target="#logout" title="로그아웃"><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a>
          </div>
      </div>
      <!-- //프로필 드롭다운2 -->
      <!-- 좌측 입찰상태 표시 -->
      <div class="myState">
          <div>진행중<a href="#" class="myStateNum" title="전자입찰 페이지로 이동"><span>3</span>건</a></div>
          <div>낙찰 (3개월)<a href="#" class="myStateNum" title="전자입찰 페이지로 이동"><span>5</span>건</a></div>
      </div>
      <!-- //좌측 입찰상태 표시 -->
      <!-- LNB -->
      <ul class="conLeft">
          <li class="depth2None active"><router-link to="/"><span><i class="fa-light fa-desktop"></i></span>메인</router-link></li> <!-- 하위메뉴 없을 때 depth2None 추가 -->
          <li>         
              <a href="#"><span><i class="fa-light fa-file-contract"></i></span>전자입찰</a>
              <div class="depth2Lnb">
                  <ul>
                      <li v-if="company == 'inter'" ><router-link to="/bid/progress">입찰계획</router-link></li>
                      <li><a href="#" @click="clickBidStatus">입찰진행</a></li>
                      <li><a href="#" @click="clickBidComplete">입찰완료</a></li>
                      <li v-if="company == 'inter'"><a href="#">입찰이력</a></li>
                  </ul>
              </div>
          </li>
          <li>         
              <a href="#"><span><i class="fa-light fa-bullhorn"></i></span>공지</a>
              <div class="depth2Lnb">
                  <ul>
                      <li><router-link to="/notice">공지사항</router-link></li>
                      <li><a href="#" @click="clickFaq">FAQ</a></li>
                      <li><a href="#">메뉴얼</a></li>
                  </ul>
              </div>
          </li>
          <li>         
              <a href="#"><span><i class="fa-light fa-buildings"></i></span>업체정보</a>
              <div class="depth2Lnb">
                  <ul>
                      <li v-if="company == 'inter'"><router-link to="/company/partner/approval">업체승인</router-link></li>
                      <li v-if="company == 'inter'"><router-link to="/company/partner/management">업체관리</router-link></li>
                      <li v-if="company == 'cust'"><router-link to="/company/partner">자사정보</router-link></li>
                      <li v-if="company == 'cust'"><router-link to="/company/partner/user">사용자관리</router-link></li>
                  </ul>
              </div>
          </li>
          <li v-if="company == 'inter'">         
              <a href="#"><span><i class="fa-light fa-chart-pie-simple"></i></span>통계</a>
              <div class="depth2Lnb">
                  <ul>
                      <li><a href="#">회사별 입찰실적</a></li>
                      <li><a href="#">입찰실적 상세내역</a></li>
                      <li><a href="#">입찰현황</a></li>
                      <li><a href="#">입찰 상세내역</a></li>
                  </ul>
              </div>
          </li>
          <li v-if="company == 'inter'">         
              <a href="#"><span><i class="fa-light fa-memo-circle-info"></i></span>정보관리</a>
              <div class="depth2Lnb">
                  <ul>
                      <li><a href="#">사용자관리</a></li>
                      <li><a href="#">품목정보관리</a></li>
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
                        <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText1">로그아웃 하시겠습니까?</div>
                        <div class="modalFooter">
                            <a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a href="#" @click="logout" class="modalBtnCheck" data-toggle="modal" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //로그아웃 -->

    </div>
    <!-- //conLeft -->
  
  </template>
  
  <script>

  export default {
    name: 'Menu',
    data() {
      return {
        company: '',

      };
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

        }else{//협력사인 경우
            this.$router.push({name:"partnerBidStatus"});
        }
      },
      clickBidComplete(){//입찰완료 클릭
        if(this.company == 'inter'){//그룹사인 경우

        }else{//협력사인 경우
            this.$router.push({name:"partnerBidComplete"});
        }

      },
      clickNotice(){//공지사항 클릭
        this.$router.push({name:"notice"});
      },
      clickFaq(){//faq 클릭
        if(this.company == 'inter'){//그룹사인 경우

        }else{//협력사인 경우
            this.$router.push({name:"userFaq"});
        }
      }
    },
    created() {
     
    },
    mounted(){
        this.company = this.$store.state.loginInfo.custType; 
    }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>