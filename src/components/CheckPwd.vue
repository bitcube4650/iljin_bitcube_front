<template>
    <!-- 비밀번호 확인 -->
    <div class="modal fade modalStyle" id="mody1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:510px">
            <div class="modal-content">
                <div class="modal-body">
                    <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="modalTitle">비밀번호 확인</h2>
                    <div class="flex align-items-center">
                        <div class="formTit flex-shrink0 width100px">비밀번호</div>
                        <div class="width100">
                            <input type="password" name="" id="" class="inputStyle" placeholder="">
                        </div>
                    </div>
                    <p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

                    <div class="modalFooter">
                        <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" @click="popup" title="확인">확인</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
    <!-- //비밀번호 확인 -->
</template>
<script>
export default {
    name: 'CheckPwd',
    props: ['infoOrPwd'],
  data() {
    return {
 
    };
  },
  methods: {
    popup(){
        $('#mody1').modal('hide');
        if(this.infoOrPwd == 'info'){
            $('#piMody2').modal('show');
        }else{
            $('#pwMody2').modal('show');
        }
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