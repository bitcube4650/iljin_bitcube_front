<template>

    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>메인</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="mainBanner"><img src="/images/mainBanner01.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>

            <div class="mainConLayout">
                <div class="mcl_left mainConBox">
                    <h2 class="h2Tit">전자입찰</h2>
                    <div class="biddingList">
                        <a href="javascript:void(0)" class="biddingStep1">
                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>입찰공고</div>
                            <div class="biddingListRight"><span>3</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep2">
                            <div class="biddingListLeft"><i class="fa-light fa-check-to-slot"></i>투찰한 입찰</div>
                            <div class="biddingListRight"><span>3</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep3">
                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>낙찰확인대상</div>
                            <div class="biddingListRight"><span>1</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep4">
                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>낙찰(12개월)</div>
                            <div class="biddingListRight"><span>5</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                        <a href="javascript:void(0)" class="biddingStep5">
                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>유찰(12개월)</div>
                            <div class="biddingListRight"><span>7</span>건<i class="fa-light fa-angle-right"></i></div>
                        </a>
                    </div>
                </div>
                <div class="mcl_right">
                    <div class="mainConBox">
                        <h2 class="h2Tit">입찰완료 (12개월)<a href="javascript:void(0)" title="입찰 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                        <div class="biddingCompleted">
                            <a href="javascript:void(0)" class="bcStep1" title="공고되었던 입찰 페이지로 이동">
                                <i class="fa-light fa-file-lines"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">공고되었던 입찰</div>
                                    <div class="bcNum"><span>3</span>건</div>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="bcStep2" title="투찰했던 입찰 페이지로 이동">
                                <i class="fa-light fa-message-check"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">투찰했던 입찰</div>
                                    <div class="bcNum"><span>3</span>건</div>
                                </div>
                            </a>
                            <a href="javascript:void(0)" class="bcStep3" title="낙찰된 입찰 페이지로 이동">
                                <i class="fa-light fa-clipboard-check"></i>
                                <div class="bcTitWrap">
                                    <div class="bcTit">낙찰된 입찰</div>
                                    <div class="bcNum"><span>3</span>건</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="mainConBox">
                        <h2 class="h2Tit">공지사항<a href="javascript:void(0)" title="공지사항 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                        <div class="notiList">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                <span class="notiTit">[시스템 OPEN공지] e-BIDDING SYSTEM(전자입찰시스템)이 오픈했습니다 e-BIDDING SYSTEM(전자입찰시스템)이 오픈했습니다</span>
                                <span class="notiDate">2024-01-15</span>
                            </a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                <span class="notiTit">[공통] 문자 발송 오류 안내</span>
                                <span class="notiDate">2024-01-15</span>
                            </a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                <span class="notiTit">[일진전기] 01월 협력사 등록 안내 01월 협력사 등록 안내</span>
                                <span class="notiDate">2024-01-15</span>
                            </a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                <span class="notiTit">[일진전기] 12월 협력사 등록 안내 12월 협력사 등록 안내</span>
                                <span class="notiDate">2024-01-15</span>
                            </a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                <span class="notiTit">[일진전기] 12월 협력사 등록 안내 12월 협력사 등록 안내</span>
                                <span class="notiDate">2024-01-15</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //contents -->

        <!--공지사항 상세 팝업-->
        <NoticeDetailPopup />
    </div>
    <!-- //본문 -->




</template>

<script>
import mixinSlip from '@/mixin/slip';
import menual from '@/components/Menual.vue';
import DhxGrid from '@/components/DhxGrid.vue';
import router from '@/router.js';
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NoticeDetailPopup from "@/components/NoticeDetailPopup.vue";





export default {
  name: 'MyMain',
  mixins: [ mixinSlip],
  components: {
    DhxGrid,
    menual,
    router,
    Menu,
    Header,
    Footer,
    NoticeDetailPopup
  },
  data() {
    return {

        
    }
  },
  filters:{

  },
  mounted() {

  },
  methods: {
    

  },
};

</script>
