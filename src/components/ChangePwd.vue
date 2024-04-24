<template>
    <div>
        <!-- 비밀번호 변경 -->
        <div class="modal fade modalStyle" id="pwMody1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">비밀번호 변경</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="width100">
                                <input type="password" @keypress.enter="savePwd" v-model="password" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자중에서 2가지 이상 조합(길이 8~16자리)">
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
                            <div class="width100">
                                <input type="password" @keypress.enter="savePwd" v-model="passwordChk" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
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
        
        <!-- 비밀번호 저장 얼럿 -->
        <div class="modal fade modalStyle" id="pwMody2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">비밀번호를 저장하였습니다.</div>
                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //비밀번호 저장 얼럿 -->
    </div>
</template>
<script>
export default {
    name: 'ChangePwd',
  data() {
    return {
        password: '',
        passwordChk: ''
    };
  },
  methods: {
    async savePwd(){//비밀번호 저장

        if(this.checkValid()){
            try {
                this.$store.commit('loading');
                const response = await this.$http.post('/api/v1/main/changePwd', { password : this.password});

                if(response.data){
                    this.reset();
                    $('#pwMody1').modal('hide');
                    $('#pwMody2').modal('show');
                }
                this.$store.commit('finish');
            } catch(err) {
                console.log(err)
                this.$store.commit('finish');
            }
        }  
    },
    checkValid(){//유효성 체크

        const password = this.password;
        const hasUpperCase = /[A-Z]/.test(password);//대문자
        const hasLowerCase = /[a-z]/.test(password);//소문자
        const hasDigit = /\d/.test(password);//숫자
        const hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(password);//특수문자

        var isValidPassword = (hasUpperCase && hasLowerCase && hasDigit) || (hasUpperCase && hasLowerCase && hasSpecialChar) || (hasDigit && hasSpecialChar);
        var isValidLength = password.length >= 8 && password.length <= 16;
        var isSame = this.password == this.passwordChk 

        if(!isValidPassword){
            this.$swal({
                type: "warning",
                text: '비밀번호는 대/소문자, 숫자, 특수문자중에서 2가지 이상 조합되어야 합니다.',
            });
            return false;
        }else if(!isValidLength){
            this.$swal({
                type: "warning",
                text: '비밀번호는 8자 이상 16자 이하로 작성해주세요.',
            });
            return false;
        }else if(!isSame){
            this.$swal({
                type: "warning",
                text: '비밀번호 확인이 일치하지 않습니다.',
            });
            return false;
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