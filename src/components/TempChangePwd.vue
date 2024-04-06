<template>
<div>
    <!-- 비밀번호 변경 -->
    <div class="modal fade modalStyle" id="tempChangePwdPop" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:510px">
            <div class="modal-content">
                <div class="modal-body">
                    <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="modalTitle">신규 전자입찰 비밀번호 변경</h2>
                    <div class="modalTopBox">
                        <ul>
                        <li><div>신규 전자입찰 시스템에서는 아래 비밀번호 정책에 따른 새로운 비밀번호를 입력해야 합니다.</div></li>
                        </ul>
                    </div>
                    <div class="flex align-items-center mt30">
                        <div class="formTit flex-shrink0 width120px">비밀번호</div>
                        <div class="width100">
                            <input type="password" @keypress.enter="savePwd" v-model="detail.loginPw" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자중에서 2가지 이상 조합(길이 8~16자리)">
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
                        <div class="width100">
                            <input type="password" @keypress.enter="savePwd" v-model="detail.loginPwConfirm" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
                        </div>
                    </div>

                    <div class="modalFooter">
                        <a @click="cancel" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                        <a @click="savePwd" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
    <!-- //비밀번호 변경 -->
</div>
</template>
<script>
export default {
    name: 'ChangePwdPop',
  data() {
    return {
        detail : {}
    }; 
  },
  methods: {
    initModal(loginId) {
      this.detail = {userAuth:'tempChange', loginId:loginId};
    },
    async savePwd() { //비밀번호 저장

        if (this.detail.loginPw == null || this.detail.loginPw == '') {
            this.$swal({type: "warning",text: "비밀번호를 입력해주세요."});
            return;
        }
        if (this.detail.loginPwConfirm == null || this.detail.loginPwConfirm == '') {
            this.$swal({type: "warning",text: "비밀번호 확인을 입력해주세요."});
            return;
        }
        if (this.detail.loginPw != this.detail.loginPwConfirm) {
            this.$swal({type: "warning",text: "비밀번호를 정확히 입력해주세요."});
            return;
        }
        if(!this.checkValid() ){
            return;
        }	
        try {
            this.$store.commit('loading');
            const response = await this.$http.post('/login', this.detail);
            const loginInfo = Object.assign({}, response.data);
            
            this.$store.commit('login', loginInfo);
            this.$cookie.set('loginInfo', JSON.stringify(loginInfo));
            this.$http.defaults.headers['x-auth-token'] = loginInfo.token;
            this.$store.commit('finish');
        } catch(err) {
            this.$store.commit('finish');
            console.log(err);
        }
    },
    checkValid(){//유효성 체크

        const password = this.detail.loginPw;
        const hasUpperCase = /[A-Z]/.test(password);//대문자
        const hasLowerCase = /[a-z]/.test(password);//소문자
        const hasDigit = /\d/.test(password);//숫자
        const hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(password);//특수문자

        var isValidPassword = (hasUpperCase && hasLowerCase && hasDigit) || (hasUpperCase && hasLowerCase && hasSpecialChar) || (hasDigit && hasSpecialChar);
        var isValidLength = password.length >= 8 && password.length <= 16;

        if(!isValidPassword){
            this.$swal({type: "warning",text: "대/소문자, 숫자, 특수문자중에서 2가지 이상 조합되어야 합니다."});
            return;
        }else if(!isValidLength){
            this.$swal({type: "warning",text: "비밀번호는 8자 이상 16자 이하로 작성해주세요."});
            return;
        }

        return true;
        
    },
    reset(){
        //초기화
        this.password = '';
        this.passwordChk = '';
    },
    cancel(){
        this.reset();
    }
  },
  created() {
   
  },
  mounted(){

  }    
}
</script>
<style>
    
</style>