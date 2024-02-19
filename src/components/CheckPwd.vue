<template>
<div>
    <!-- 개인정보 수정 비밀번호 확인 -->
    <div class="modal fade modalStyle" id="mody1" tabindex="-1" role="dialog" aria-hidden="true">
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
                        <a href="#" class="modalBtnCheck" data-toggle="modal" @click="popup1" title="확인">확인</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
    <!-- // 개인정보 수정 비밀번호 확인  -->

    <!-- 비밀번호 변경 비밀번호 확인 -->
    <div class="modal fade modalStyle" id="mody2" tabindex="-1" role="dialog" aria-hidden="true">
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
                        <a href="#" class="modalBtnCheck" data-toggle="modal" @click="popup2" title="확인">확인</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
    <!-- // 비밀번호 변경 비밀번호 확인  -->
</div>
</template>
<script>
export default {
    name: 'CheckPwd',
  data() {
    return {
 
    };
  },
  methods: {
    popup1(){//개인정보 수정
        $('#mody1').modal('hide');
        $('#piMody2').modal('show');
    },
    popup2(){//비밀번호 변경
        $('#mody2').modal('hide');
        $('#pwMody2').modal('show');
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