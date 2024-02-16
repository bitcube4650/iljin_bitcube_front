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