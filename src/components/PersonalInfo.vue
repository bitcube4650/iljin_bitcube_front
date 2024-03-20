<template>
    <div>
        <!--계열사 개인정보 -->
        <div class="modal fade modalStyle" id="piMody1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">개인정보</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">로그인ID</div>
                            <div class="width100">{{ this.$store.state.loginInfo.userId }}</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">이름</div>
                            <div class="width100">{{ this.$store.state.loginInfo.userName }}</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">소속 계열사</div>
                            <div class="width100">{{ this.$store.state.loginInfo.custName }}</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">사용자 권한</div>
                            <div class="width100" v-if="this.$store.state.loginInfo.userAuth == '1'">시스템관리자</div>
                            <div class="width100" v-if="this.$store.state.loginInfo.userAuth == '2'">각사관리자</div>
                            <div class="width100" v-if="this.$store.state.loginInfo.userAuth == '3'">일반관리자</div>
                            <div class="width100" v-if="this.$store.state.loginInfo.userAuth == '4'">감사사용자</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">입찰권한</div>
                            <div class="width100">
                                <input type="checkbox" v-model="openauth" id="checkbox1">
                                <label for="checkbox1"><div>개찰</div></label>&nbsp&nbsp&nbsp&nbsp
                                <input type="checkbox" v-model="bidauth" id="checkbox2">
                                <label for="checkbox2"><div>낙찰</div></label>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="flex align-items-center width100">
                                <div class="width100">최종변경일 : {{ userInfo.pwdEditDate }}</div>
                                <a data-toggle="modal" @click="changePwd" class="btnStyle btnSecondary btnSm flex-shrink0 ml10" title="비밀번호 변경">비밀번호 변경</a>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userHp"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userTel"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userEmail"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">직급</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userPosition"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">부서</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.deptName"></div>
                        </div>

                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a class="modalBtnCheck" data-toggle="modal" @click="saveInfo" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //계열사 개인정보 -->

        <!--협력사 개인정보 -->
        <div class="modal fade modalStyle" id="piMody2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">개인정보</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">로그인ID</div>
                            <div class="width100">{{ this.$store.state.loginInfo.userId }}</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">이름</div>
                            <div class="width100">{{ this.$store.state.loginInfo.userName }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="flex align-items-center width100">
                                <div class="width100">최종변경일: {{ userInfo.pwdChgDate }}</div>
                                <a data-toggle="modal" @click="changePwd" class="btnStyle btnSecondary btnSm flex-shrink0 ml10" title="비밀번호 변경">비밀번호 변경</a>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userHp"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userTel"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userEmail"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">직급</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userPosition"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">부서</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="userInfo.userBuseo"></div>
                        </div>

                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a class="modalBtnCheck" data-toggle="modal" @click="saveInfo" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //협력사 개인정보 -->


        <!-- 개인정보 저장 얼럿 -->
        <div class="modal fade modalStyle" id="piMody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">개인정보를 수정하였습니다.</div>
                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //개인정보 저장 얼럿 -->
    </div>

</template>
<script>
export default {
    name: 'PersonalInfo',

    mounted(){
        console.log(this.$store.state.loginInfo);

    }, 
    watch: {
        bidauth(newValue) {
            if (newValue !== 1) {
                this.data1 = 0; // data1이 1이 아니면 체크박스 해제
            }
        },
        openauth(newValue) {
            if (newValue !== 1) {
                this.data2 = 0; // data2가 1이 아니면 체크박스 해제
            }
        }
    },
    data() {
        return {
            userInfo:{},
            bidauth: false,
            openauth: false
        };
    },
    methods: {

        async selectUserInfo(){//유저 정보 조회

            try {
                this.$store.commit('loading');
                const response = await this.$http.post('/api/v1/main/selectUserInfo', {});
                if(response.data.code == 'OK'){
                    this.userInfo = response.data.data;
                    
                    if(this.$store.state.loginInfo.custType == 'inter'){
                        this.bidauth = this.userInfo.bidauth == '1';
                        this.openauth = this.userInfo.openauth == '1';
                    }
                    console.log(this.userInfo);
                }else{
                    console.log(response.data.data);
                }
                this.$store.commit('finish');
            } catch(err) {
                console.log(err)
                this.$store.commit('finish');
            }
        },
        async saveInfo(){//개인정보 변경

            if(this.$store.state.loginInfo.custType == 'inter'){
                this.userInfo.bidauth = this.bidauth;
                this.userInfo.openauth = this.openauth;
            }

            try {
                this.$store.commit('loading');
                const response = await this.$http.post('/api/v1/main/saveUserInfo', this.userInfo);

                if(response.data.code == 'OK'){
                    $('#piMody1').modal('hide');
                    $('#piMody2').modal('hide');
                    $('#piMody3').modal('show');
                }else{
                    console.log(response.data.data);
                }
                this.$store.commit('finish');
            } catch(err) {
                console.log(err)
                this.$store.commit('finish');
            }

        },
        changePwd(){ 
            $('#piMody1').modal('hide');
            $('#pwMody1').modal('show');
        }
    }
}
</script>
<style>
    
</style>