<template>
    <!-- 공지사항 자세히 보기 -->
    <div class="modal fade modalStyle" id="notiModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:600px">
            <div class="modal-content">
                <div class="modal-body">
                    <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="modalTitle">공지사항</h2>
                    <div class="flex align-items-center">
                        <div class="formTit flex-shrink0 width100px">제목</div>
                        <div class="width100 line140">[공통] Edge에서 Internet Explore(IE) 호환 설정 방법</div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">작성자</div>
                        <div class="width100">관리자</div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">공지일시</div>
                        <div class="width100">2023-12-31 13:21</div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">조회수</div>
                        <div class="width100">2342</div>
                    </div>
                    <div class="modalBoxSt overflow-y-scroll height250px mt30">
                        <p>Edge로 전자입찰을 사용하실 때 오류가 나는 경우<br>(※ [ 설치파일#1 ] [ 설치파일#2 ] 두 개의 설치 파일을 전부 설치 하셨다는 전제 하에 오류입니다. )<br><br>1. 팝업창의 정보가 보이지 않는다.<br>2. 입찰에 파일을 첨부 후 입찰하기 버튼을 클릭했을 때 105 또는 138 오류가 나타난다.<br><br>해당 오류가 나타난 경우 첨부된 파일을 참고하시어 설정 바랍니다.<br><br>테스트<br><br>테스트</p>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">첨부파일</div>
                        <div class="width100">
                            <a href="javascript:void(0)" class="textUnderline">전자입찰 Edge 사용 설정안내.pptx</a>
                        </div>
                    </div>

                    <div class="modalFooter">
                        <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
    <!-- 공지사항 자세히 보기 -->
</template>
<script>
export default {
    name: 'NoticeDetailPopup',

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