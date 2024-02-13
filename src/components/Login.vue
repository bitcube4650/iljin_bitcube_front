<template>
  <div>
    <div class="loginBg">
      <div class="inner">
        <div class="loginWrap">
          <div class="loginLeft">
            <h1><img src="/images/loginLogo.svg" class="img-responsive" alt="일진그룹 로고"></h1>
            <input type="text" v-model="loginInfo.loginId" autocomplete="name" name="username" placeholder="사번" autofocus="" class="loginInputStyle">
            <input type="password" v-model="loginInfo.loginPw" autocomplete="new-password" name="password" @keypress="caps_lock" @keypress.enter="login" class="loginInputStyle mt10" placeholder="비밀번호">
            <div class="loginFindWrap">
              <input type="checkbox" id="chkID" name="chkID" class="loginCheckStyle"><label for="chkID">아이디 저장</label>
              <ul class="loginFind">
                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#idSearch" title="아이디 찾기">아이디 찾기</a></li>
                <li><a href="javascript:void(0)" data-toggle="modal" data-target="#pwSearch" title="비밀번호 찾기">비밀번호 찾기</a></li>
              </ul>
            </div>
            <div class="loginBtnWrap">
              <a  @click="login" data-target="#loginAlert" class="btnLoginPrimary" title="로그인">로그인</a>
              <a href="join01_1.html" class="btnLoginOutline mt10" title="회원가입">회원가입</a>
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
              <a href="javascript:void(0)" title="공동인증서">공동인증서</a>
              <a href="javascript:void(0)" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
              <a href="javascript:void(0)" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
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

    <!-- 업체등록절차 -->
    <div class="modal fade modalStyle" id="regProcess" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:700px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <h2 class="modalTitle">업체등록 절차</h2>
            <div class="modalTopBox">
              <ul>
                <li><div>업체 등록신청 후 서류심사로 인해 최대 3일 소요할 수 있습니다.</div></li>
                <li><div>서류심사 결과는 작성된 담당자 이메일로 전달됩니다.</div></li>
              </ul>
            </div>
            <dl class="regProList mt20">
              <dt><i class="fa-light fa-message-pen"></i></dt>
              <dd>
                <h3>Step.1  <span class="textMainColor">[업체등록신청]</span></h3>
                <ul class="dList mt10">
                  <li><div>로그인 페이지에서 [회원가입] 버튼을 이용, 약관동의 및 회원가입을 신청합니다.</div></li>
                </ul>
              </dd>
            </dl>
            <dl class="regProList mt10">
              <dt><i class="fa-light fa-ballot-check"></i></dt>
              <dd>
                <h3>Step.2  <span class="textMainColor">[업체심사(서류,실사)]</span></h3>
                <ul class="dList mt10">
                  <li><div>계열사 업체관리 담당자는 신청 정보를 확인합니다.</div></li>
                  <li><div>업체 규모, 납품실적, 품질인증, 신용평가자료 등 서류 검토</div></li>
                  <li><div>필요시 실사 병행합니다.</div></li>
                </ul>
              </dd>
            </dl>
            <dl class="regProList mt10">
              <dt><i class="fa-light fa-file-check"></i></dt>
              <dd>
                <h3>Step.3  <span class="textMainColor">[업체등록]</span></h3>
                <ul class="dList mt10">
                  <li><div>심사 후 요구조건에 적합한 업체 등록을 확정합니다.</div></li>
                  <li><div>등록된 이메일로 심사결과를 통보합니다.</div></li>
                </ul>
              </dd>
            </dl>
            <dl class="regProList mt10">
              <dt><i class="fa-light fa-rectangle-history-circle-user"></i></dt>
              <dd>
                <h3>Step.4  <span class="textMainColor">[업체평가(사후관리)]</span></h3>
                <ul class="dList mt10">
                  <li><div>연간 거래실적을 바탕으로 업체를 평가합니다.</div></li>
                  <li><div>계열사 간 협력업체 등록 시 평가자료로 반영됩니다.</div></li>
                </ul>
              </dd>
            </dl>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //업체등록절차 -->

    <!-- 업무(입찰)안내 -->
    <div class="modal fade modalStyle" id="biddingInfo" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:800px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <h2 class="modalTitle">업무(입찰)안내</h2>
            <div class="modalTopBox">
              <ul>
                <li><div>그룹사(당사)에서 전자입찰을 공고/개찰/낙찰 처리 합니다.</div></li>
                <li><div>협력업체는 공고된 입찰을 확인하고 개찰 및 입찰 결과를 확인할 수 있습니다.</div></li>
                <li><div>입찰 진행중 그룹사 개찰담당자는 입찰을 유찰할 수 있습니다.<br>(입찰에 참여한 업체에게 메일 발송)</div></li>
              </ul>
            </div>
            <table class="biddingInfoTbl mt20">						
              <caption>업무(입찰)안내의 절차(그룹사,협력업체), 주요내용을 나타내는 표</caption>
              <colgroup>
                <col style="width:23%">
                <col style="width:23%">
                <col style="width:64%">
                <col>
              </colgroup>
              <thead>
                <tr>
                  <th colspan="2">절차</th>
                  <th rowspan="2" class="end">주요내용</th>
                </tr>
                <tr>
                  <th>그룹사</th>
                  <th>협력업체</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2" style="position:relative"><img src="/images/biddingInfo.png" class="img-responsive" alt="절차" style="position:absolute; top:0; left:0"></td>
                  <td class="text-left end">
                    <ul class="dList">
                      <li><div>입찰 담당자는 입찰 계획을 등록합니다.</div></li>
                      <li><div>입찰 공고자는 입찰 계획을 확인하고 입찰을 공고합니다.</div></li>
                      <li><div>공고 시 지정업체 담당자에게 메일 발송됩니다.</div></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="text-left end">
                    <ul class="dList">
                      <li><div>공고된 입찰을 조회합니다.</div></li>
                      <li><div>지명입찰 일 경우 담당자는 메일을 통해 확인할 수 있습니다.</div></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="text-left end">
                    <ul class="dList">
                      <li><div>입찰 세부내역을 확인하고 견적서를 제출합니다.</div></li>
                      <li><div>투찰(견적서 제출) 시 공동인증서를 통해 인증을 합니다.</div></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="text-left end">
                    <ul class="dList">
                      <li><div>입찰의 제출마감일시가 지나면 개찰자는 업체의 투찰 내역을<br>확인할 수 있습니다.</div></li>
                      <li><div>개찰 시 공동인증서 암호를 입력해야 합니다.</div></li>
                      <li><div>진행 중인 입찰에 대해서 공고자는 입찰을 유찰 할 수 있습니다.</div></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="text-left end">
                    <ul class="dList">
                      <li><div>개찰자는 낙찰업체를 선정할 수 있습니다.<br>(선정된 업체에게는 낙찰 메일 발송)</div></li>
                      <li><div>개찰자는 개찰 된 입찰에 유찰 또는 재입찰 할 수 있습니다.</div></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td colspan="2"></td>
                  <td class="text-left end">
                    <ul class="dList">
                      <li><div>낙찰된 내역을 확인할 수 있습니다.</div></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //업무(입찰)안내 -->

    <!-- 아이디찾기 -->
    <div class="modal fade modalStyle" id="idSearch" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:510px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <h2 class="modalTitle">아이디 찾기</h2>
            <div class="modalTopBox">
              <ul>
                <li><div>아래 사업자등록번호, 찾고자 하는 로그인 사용자명 그리고 등록된 이메일을 정확인 입력하셔야 이메일로 아이디를 발송합니다.</div></li>
              </ul>
            </div>
            <div class="flex align-items-center mt30">
              <div class="formTit flex-shrink0 width150px">사업자등록번호 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="">
                <span style="margin:0 10px">-</span>
                <input type="text" name="" id="" class="inputStyle" placeholder="">
                <span style="margin:0 10px">-</span>
                <input type="text" name="" id="" class="inputStyle" placeholder="">
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width150px">로그인 사용자명 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="">
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width150px">등록된 이메일 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
              </div>
            </div>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
              <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#idSearchAlert" title="아이디 이메일 발송">아이디 이메일 발송</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //아이디찾기 -->

    <!-- 아이디 이메일 발송 얼럿 -->
    <div class="modal fade modalStyle" id="idSearchAlert" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:420px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <div class="alertText2">아이디를 찾기 위해서는 필수 정보[<span class="star">*</span>]를 입력해야 합니다.</div>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //아이디 이메일 발송 얼럿 -->

    <!-- 비밀번호 찾기 -->
    <div class="modal fade modalStyle" id="pwSearch" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:510px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <h2 class="modalTitle">비밀번호 찾기</h2>
            <div class="modalTopBox">
              <ul>
                <li><div>아래 사업자등록번호, 찾고자 하는 로그인 사용자명, 로그인 아이디 그리고 등록된 이메일을 정확인 입력하셔야 이메일로 비밀번호를 발송합니다.</div></li>
                <li><div>비밀번호는 초기화되어 발송 하므로 로그인 후 암호를 변경하시고 사용하십시오.</div></li>
              </ul>
            </div>
            <div class="flex align-items-center mt30">
              <div class="formTit flex-shrink0 width150px">사업자등록번호 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="">
                <span style="margin:0 10px">-</span>
                <input type="text" name="" id="" class="inputStyle" placeholder="">
                <span style="margin:0 10px">-</span>
                <input type="text" name="" id="" class="inputStyle" placeholder="">
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width150px">로그인 사용자명 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="">
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width150px">로그인 아이디 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="">
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width150px">등록된 이메일 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input type="text" name="" id="" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
              </div>
            </div>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
              <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#pwSearchAlert" title="비밀번호 이메일 발송">비밀번호 이메일 발송</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //비밀번호 찾기 -->

    <!-- 비밀번호 이메일 발송 얼럿 -->
    <div class="modal fade modalStyle" id="pwSearchAlert" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" style="width:100%; max-width:420px">
        <div class="modal-content">
          <div class="modal-body">
            <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
            <div class="alertText2">입력하신 이메일로 e-bidding 시스템에 접속하실 비밀번호를 전송합니다.<br>비밀번호는 초기화 되어 새로 생성됩니다.<br>이메일로 비밀번호를 전송하시겠습니까?</div>
            <div class="modalFooter">
              <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
              <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" title="전송">전송</a>
            </div>
          </div>				
        </div>
      </div>
    </div>
    <!-- //비밀번호 이메일 발송 얼럿 -->
  </div>
  <!--///////////////////////////////////////////////////////////////////////-->
  <!--기존 소스-->
  <!--    
    <section class="hero is-fullheight login">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <article class="card is-rounded">
                        <div class="card-content">
                            <h1 class="title">
                                <img src="img/bg_login_title.png" alt="">
                            </h1>
                            <p class="control has-icon">
                                <input v-model="loginInfo.loginId"
                                autocomplete="name"
                                class="input" type="text" name="username"
                                placeholder="사번" autofocus="">
                                <i class="fa fa-envelope"></i>
                            </p>
                            <p class="control has-icon">
                                <input v-model="loginInfo.loginPw"
                                autocomplete="new-password"
                                class="input" type="password" name="password"
                                placeholder="비밀번호" id="myInput" @keypress="caps_lock" @keypress.enter="login">
                                <i class="fa fa-lock"></i>
                            </p>

                            
                            <p id="text" class="ly_box">'<strong>Caps Lock</strong>'이 켜져 있습니다.</p>
                            
                            <p class="control">
                                <button class="button is-fullwidth btn-login" @click="login">Login</button>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>

        <div class="footer-login">
            <span class="copyright">COPYRIGHT © ILJIN ALL RIGHTS RESERVED.</span>
        </div>

    </section>
  -->
</template>

<script>
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
  data() {
    return {
      loginInfo: {
        loginId: '',
        loginPw: '',
        compCd: '',
        loginDeptNm: '',
        loginDeptCd: '',
        loginDutCd: '',
        loginDutNm: '',
        loginJobCd: '',
        loginJobNm: '',
        token: '',
        menu: [],
        authorities: [],
      },
    }
  },
  methods: {
    // 2020.08.31 'CapsLock'알림
    caps_lock() {
      var input = document.getElementById("myInput");
      var text = document.getElementById("text");
      input.addEventListener("keyup", function(event) {

      if (event.getModifierState("CapsLock")) {
          text.style.display = "block";
        } else {
          text.style.display = "none"
        }
      });
    },
    loginFail() {
      //아이디 또는 비밀번호를 확인해 주십시오 Alert 창 띄우기
      $("#loginAlert").modal("show"); 
      //기존소스
      /*
      this.$swal({
        animation: false,
        type: 'error',
        text: `로그인 실패했습니다. ID 또는 비밀번호를 확인해 주세요.`,
      });
      */
    },
    async login() {  
       
      try {
        this.$store.commit('loading');
        const response = await this.$http.post('/login', this.loginInfo);
        const loginInfo = {};
        
        loginInfo.userName = response.data.userName;
        loginInfo.loginId = response.data.loginId;
        loginInfo.compCd = response.data.loginCompCd;
        loginInfo.loginDeptNm = response.data.loginDeptNm;
        loginInfo.loginDeptCd = response.data.loginDeptCd;
        loginInfo.loginDutCd = response.data.loginDutCd;
        loginInfo.loginDutNm = response.data.loginDutNm;
        loginInfo.loginJobCd = response.data.loginJobCd;
        loginInfo.loginJobNm = response.data.loginJobNm;
        loginInfo.token = response.data.token;
        loginInfo.menu = response.data.menu;
        loginInfo.authorities = response.data.authorities;
        loginInfo.loginPw = 'Not Use';
        loginInfo.color = response.data.attribute2

        console.log("user info");
        console.log(response);
        if(!loginInfo.color){
          loginInfo.color = '/css/common.css'
        }
        
        this.$store.commit('login', loginInfo);
        this.$cookie.set('loginInfo', JSON.stringify(loginInfo));
        this.$http.defaults.headers['x-auth-token'] = loginInfo.token;

        //21.03.29 컬러테마
        var link = document.createElement('link');
        link.rel ='stylesheet';
        link.href = this.$store.state.loginInfo.color;
        document.head.appendChild(link);

        //21.9.13 로그인 erp계정
        const loginCctr = {}
        this.$http.get(`/api/emp/${loginInfo.loginId}`)
        .then(response => {
          if(response.data.length > 0){
            let data = response.data[0]
       
            loginCctr.cctrCd = data.liabilityDeptCode
            loginCctr.cctrNm = data.liabilityDeptName

            this.$store.commit('updateLoginCctr', loginCctr)
          }else{
            this.$store.commit('updateLoginCctr', null)
          }
        })
        .catch((e) => {
          this.$store.commit('updateLoginCctr', null)
          this.$swal({
            type: 'error',
            text: e
          })
        })       
        this.$store.commit('finish');
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
        this.loginFail();
      }

       
    },
    async ssoLogIn() {
      console.log("Now Loged in!!!!")
      try {
        this.$store.commit('loading');
        //const response = await this.$http.post('/login', this.loginInfo);
        const response = await this.$http.post('/login/sso', this.loginInfo);
        const loginInfo = {};
        loginInfo.userName = response.data.userName;
        loginInfo.loginId = response.data.loginId;
        loginInfo.compCd = response.data.loginCompCd;
        loginInfo.loginDeptNm = response.data.loginDeptNm;
        loginInfo.loginDeptCd = response.data.loginDeptCd;
        loginInfo.loginDutCd = response.data.loginDutCd;
        loginInfo.loginDutNm = response.data.loginDutNm;
        loginInfo.loginJobCd = response.data.loginJobCd;
        loginInfo.loginJobNm = response.data.loginJobNm;
        loginInfo.token = response.data.token;
        loginInfo.menu = response.data.menu;
        loginInfo.authorities = response.data.authorities;
        loginInfo.color = response.data.attribute2
        loginInfo.loginPw = 'Not Use';

        if(!loginInfo.color){
          loginInfo.color = '/css/common.css'
        }

        this.$store.commit('login', loginInfo);
        this.$cookie.set('loginInfo', JSON.stringify(loginInfo));
        this.$cookie.set('sessionAlive', true);
        this.$http.defaults.headers['x-auth-token'] = loginInfo.token;
        this.$store.commit('register', '');
        this.$router.push({path: '/'});
        
        //21.03.29 컬러테마
        var link = document.createElement('link');
        link.rel ='stylesheet';
        link.href = this.$store.state.loginInfo.color;
        document.head.appendChild(link);

        //21.11.24 로그인 erp계정
        const loginCctr = {}
        this.$http.get(`/api/emp/${loginInfo.loginId}`)
        .then(response => {
          if(response.data.length > 0){
            let data = response.data[0]

            loginCctr.cctrCd = data.liabilityDeptCode
            loginCctr.cctrNm = data.liabilityDeptName

            this.$store.commit('updateLoginCctr', loginCctr)
          }else{
            this.$store.commit('updateLoginCctr', null)
          }
        })
        .catch((e) => {
          this.$store.commit('updateLoginCctr', null)
          this.$swal({
            type: 'error',
            text: e
          })
        })
        this.$store.commit('finish');
      } catch(err) {
        this.$store.commit('finish');
        this.loginFail();
      }
    }
  },
  created() {
    this.loginId = this.$route.query['loginId'];
    this.token = this.$route.query['token'];
    console.log("loginId : " + this.loginId);

    if(this.loginId === undefined || this.loginId === '') {
      // Step.1 - 초기화
      rathonsso.init();

      // Step.2 - SSO 인증 & 갱신
      // true: Authentication Required
      // false: Authentication Successful
      let result = rathonsso.requestAuthentication()
      console.log("requestAuthentication: " + result)
      if(!result) {
        // '/login/sso' 호출
        this.ssoLogIn()
      }
    }

    this.loginInfo.loginId = this.loginId;
    this.loginInfo.token = this.token;

    //모바일 iframe 메시지 수신을 통한 로그인 
    window.addEventListener('message', async event => {
      // console.log(event.data.id);
      if(event.origin === process.env.VUE_APP_MO_URL) {
        // console.log(`pc:event.origin : ${event.origin}`)
        if(event.data.message === 'isPcLogin') {

          const ret = this.$store.state.loginInfo !== null && this.$store.state.token !== '';
          window.parent.postMessage({ 
            message: 'pcLogin', 
            value: ret
          }, '*');
          console.log('pc:isPcLogin 수신 후 pcLogin' + ret + '보냄');

        } else if(event.data.message === 'login') {

          console.log('pc:login 하라는 메시지 받음');

          if(!this.$store.state.loginInfo) { //로그인 안되어있다면
            this.loginInfo.loginId = event.data.loginId;
            this.loginInfo.loginPw = event.data.loginPw;
            await this.login();        
            const ret = this.$store.state.loginInfo !== null && this.$store.state.token !== '';

            window.parent.postMessage({ 
              message: 'pcLogin', 
              value: ret
            }, '*');
            console.log('pc:현재 로그인 안되어있어서 로그인 시키고 pcLogin:' + ret + ' 메시지 보냄');

          } else {
            window.parent.postMessage({ 
              message: 'pcLogin', 
              value: true
            }, '*');
            console.log('pc:현재 로그인 되어있어서 pcLogin true 메시지 보냄');
          }
        }
      }
    })
  },
  beforeMount() {
    // 페이지 리로드를 위해 localStorage에 vuex 제거
    localStorage.removeItem('vuex');
    
    console.log("this.token : " + this.token);
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
<!-- 2020.08.31 'CapsLock'알림-->
<style scoped>
#text {display:none;color:black}

.ly_box {
  position:relative;
  margin-bottom: 10px;
  width:230px;
  height:30px;
  background:white;
  border-radius: 10px;
  text-align: center;
}
.ly_box:after {
 border-top:0px solid transparent;
 border-left: 10px solid transparent;
 border-right: 10px solid transparent;
 border-bottom: 10px solid white;
 content:"";
 position:absolute;
 top:-10px;
 left:100px;
} 
</style>

