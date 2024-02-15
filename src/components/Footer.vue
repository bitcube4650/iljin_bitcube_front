<template>
  <div>
    <!-- 서브 푸터 -->
    <div class="subFooter">
        © ILJIN ALL RIGHTS RESERVED.
        <div class="subFooterUtill">
            <a href="javascript:void(0)" title="공동인증서">공동인증서</a>
            <a href="javascript:void(0)" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
            <a href="javascript:void(0)" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
        </div>
    </div>
    <!-- //서브 푸터 -->

    <!-- 업체등록절차 -->
    <EnrollmentProcess />

    <!-- 업무안내 -->
    <BiddingGuide />

    
  </div>
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