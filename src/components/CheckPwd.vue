<template>
<div>
    <!-- 비밀번호 확인 -->
    <div class="modal fade modalStyle" id="mody1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:510px">
            <div class="modal-content">
                <div class="modal-body">
                    <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="modalTitle">비밀번호 확인</h2>
                    <div class="flex align-items-center">
                        <div class="formTit flex-shrink0 width100px">비밀번호</div>
                        <div class="width100">
                            <input type="password" v-model="pwd" class="inputStyle" placeholder="">
                        </div>
                    </div>
                    <p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

                    <div class="modalFooter">
                        <a class="modalBtnClose" data-dismiss="modal" @click="reset" title="닫기">닫기</a>
                        <a class="modalBtnCheck" data-toggle="modal" @click="popup" title="확인">확인</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
    <!-- // 비밀번호 확인  -->

    <!--비밀번호 변경 팝업-->
    <ChangePwd />

    <!--개인정보 수정 팝업-->
    <PersonalInfo ref="infoChange" />

</div>
</template>
<script>
import ChangePwd from "@/components/ChangePwd.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";

export default {
    name: 'CheckPwd',
    components: {
        ChangePwd,
        PersonalInfo
    },
    data() {
        return {
            pwd:'',
            identify: false
        };
    },
    mounted(){
        this.pwd = '';
        this.identify = false;
    }, 
    methods: {
        async popup(){

            await this.checkUserPwd();

            if(this.identify){//비밀번호 일치

                this.reset();
                $('#mody1').modal('hide');

                if(this.$store.state.pwdOrInfo == 'pwd'){//비밀번호 변경

                    $('#pwMody1').modal('show');

                }else{//개인정보 수정

                    this.$refs.infoChange.selectUserInfo();//유저정보 조회

                    if(this.$store.state.loginInfo.custType == 'inter'){//계열사인 경우
                        
                        $('#piMody1').modal('show');
                    
                    }else{//협력사인 경우

                        $('#piMody2').modal('show');

                    }
                    
                }
            }else{
                alert("비밀번호가 일치하지 않습니다.");
            }

        },
        async checkUserPwd(){//비밀번호 확인

            try {
                this.$store.commit('loading');
                const response = await this.$http.post('/api/v1/main/checkPwd', { password : this.pwd});
                
                this.identify = response.data;
                this.$store.commit('finish');
            } catch(err) {
                console.log(err)
                this.$store.commit('finish');
            }
        },
        reset(){
            //초기화
            this.pwd = '';
            this.identify = false;
        }
    }   
}
</script>
<style>
    
</style>