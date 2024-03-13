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
                        <div class="width100 line140">{{ dataFromMain.btitle }}</div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">작성자</div>
                        <div class="width100">{{ dataFromMain.buserName }}</div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">공지일시</div>
                        <div class="width100">{{ dataFromMain.bdate }}</div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">조회수</div>
                        <div class="width100">{{ dataFromMain.bcount }}</div>
                    </div>
                    <div class="modalBoxSt overflow-y-scroll height250px mt30">
                        <pre v-html="dataFromMain.bcontent" style="background-color: white;"></pre>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width100px">첨부파일</div>
                        <div class="width100">
                            <a @click="downloadFile" class="textUnderline">{{ dataFromMain.bfile }}</a>
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
    props: ['dataFromMain'],
  data() {
    return {

    };
  },
  created() {
   
  },
  mounted(){
    //this.resetData();

  },
  methods: {
    resetData(){
        this.dataFromMain.btitle = '';
        this.dataFromMain.buserName = '';
        this.dataFromMain.bdate = '';
        this.dataFromMain.bcount = 0;
        this.dataFromMain.bcontent = '';
    },
    async downloadFile(){//파일 다운로드

        try {
            this.$store.commit('loading');
            const response = await this.$http.post(
                "/api/v1/notice/downloadFile",
                { fileId: this.dataFromMain.bfilePath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
                { responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
            );

            // 파일 다운로드를 위한 처리
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", this.dataFromMain.bfile); // 다운로드될 파일명 설정
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            this.$store.commit('finish');
        } catch (error) {
            console.error("Error downloading file:", error);
            this.$store.commit('finish');
        }
    }
  }  
}
</script>
<style>
    
</style>