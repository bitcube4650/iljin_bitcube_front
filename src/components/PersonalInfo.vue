<template>
    <div>
        <!-- 개인정보 -->
        <div class="modal fade modalStyle" id="piMody2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">개인정보</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">로그인</div>
                            <div class="width100">{{ this.$store.state.loginInfo.userName }}</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">이름</div>
                            <div class="width100">이순신</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">소속 계열사</div>
                            <div class="width100">일신전기</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">사용자 권한</div>
                            <div class="width100">각사관리자</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">개찰권한</div>
                            <div class="width100">아니오</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="flex align-items-center width100">
                                <div class="width100">최종변경일 : 2024-01-30</div>
                                <a href="#" data-toggle="modal" data-target="#mody3" class="btnStyle btnSecondary btnSm flex-shrink0 ml10" title="비밀번호 변경">비밀번호 변경</a>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="010-1234-1234"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="02-123-1234"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="james@iljin.co.kr"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">직급</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="과장"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">부서</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="경영지원"></div>
                        </div>

                        <div class="modalFooter">
                            <a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a href="#" class="modalBtnCheck" data-toggle="modal" data-target="#piMody3" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //개인정보 -->

        <!-- 비밀번호 변경 비밀번호 확인 -->
        <div class="modal fade modalStyle" id="mody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">비밀번호 확인</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width100px">비밀번호</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="">
                            </div>
                        </div>
                        <p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

                        <div class="modalFooter">
                            <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                            <a href="#" class="modalBtnCheck" data-toggle="modal" data-target="#pwMody3" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- // 비밀번호 변경 비밀번호 확인  -->
        
        <!-- 비밀번호 변경 -->
        <div class="modal fade modalStyle" id="pwMody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">비밀번호 변경</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
                            </div>
                        </div>

                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#pwMody3" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //비밀번호 변경 -->


        <!-- 개인정보 저장 얼럿 -->
        <div class="modal fade modalStyle" id="piMody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">개인정보를 수정하였습니다.</div>
                        <div class="modalFooter">
                            <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
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

  data() {
    return {
 
    };
  },
  methods: {

  },
  created() {
   
  },
  mounted(){

  }    
}
</script>
<style>
    
</style>