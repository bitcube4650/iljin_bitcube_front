<template>

  <!-- 서브 푸터 -->
  <div class="subFooter">
      © ILJIN ALL RIGHTS RESERVED. <br>전자입찰 문의: ITHELPDESK ( 080 - 707 - 9100 ) &nbsp e-mail : ithelpdesk@iljin.co.kr
      <div class="subFooterUtill">
          <a  @click="clickCertificate" title="공동인증서">공동인증서</a>
          <a  @click="clickRegProcess" title="업체등록절차">업체등록절차</a>
          <a  @click="clickBiddingInfo" title="입찰업무안내">입찰업무안내</a>
      </div>
      
      <!-- 업체등록절차 -->
      <EnrollmentProcess />

      <!-- 업무안내 -->
      <BiddingGuide />

      <div class="modal fade modalStyle" id="commonAlertPop" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:420px">
          <div class="modal-content">
            <div class="modal-body">
              <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
              <div id="commonAlertMsg" class="alertText2"></div>
              <div class="modalFooter">
                <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
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
      clickCertificate(){//공동인증서안내 클릭
        window.open("https://www.tradesign.net/ra/iljin1", "_blank", "width=800,height=600");
      }
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