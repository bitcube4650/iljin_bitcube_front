<template>

  <!-- 서브 푸터 -->
  <div class="subFooter">
      © ILJIN ALL RIGHTS RESERVED.
      <div class="subFooterUtill">
          <a title="공동인증서">공동인증서</a>
          <a @click="clickRegProcess" title="업체등록절차">업체등록절차</a>
          <a @click="clickBiddingInfo" title="입찰업무안내">입찰업무안내</a>
      </div>
      <!-- 업체등록절차 -->
      <EnrollmentProcess />

      <!-- 업무안내 -->
      <BiddingGuide />

      <div class="modal fade modalStyle" id="commonAlertPop" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:420px">
          <div class="modal-content">
            <div class="modal-body">
              <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
              <div id="commonAlertMsg" class="alertText2"></div>
              <div class="modalFooter">
                <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
              </div>
            </div>				
          </div>
        </div>
      </div>

  </div>
  <!-- //서브 푸터 -->


</template>
<script>
import EnrollmentProcess from "./EnrollmentProcess.vue";
import BiddingGuide from "./BiddingGuide.vue";
export default {
    name: 'Footer',
    components: {

      EnrollmentProcess,
      BiddingGuide
    },

  data() {
    return {
      clickRegProcess(){//업체등록절차 클릭
        $("#regProcess").modal("show");
      },
      clickBiddingInfo(){//입찰업무안내 클릭
        $("#biddingInfo").modal("show");
      },
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