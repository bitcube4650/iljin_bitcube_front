<template>
    <div>
        <!-- 비밀번호 변경 -->
        <div class="modal fade modalStyle" id="pwMody2" tabindex="-1" role="dialog" aria-hidden="true">
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
        
        <!-- 비밀번호 저장 얼럿 -->
        <div class="modal fade modalStyle" id="pwMody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">비밀번호를 저장하였습니다.</div>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
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