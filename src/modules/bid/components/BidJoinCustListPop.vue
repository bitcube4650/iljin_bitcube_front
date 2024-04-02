<template>
    <div class="modal fade modalStyle" id="companiesNum" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" style="width:100%; max-width:550px">
            <div class="modal-content">
                <div class="modal-body">
                    <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="modalTitle">투찰 정보</h2>
                    <div class="modalBoxSt mt10" v-if="popData.length != 0">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">입찰번호</div>
                            <div class="width100">{{ popData[0].biNo }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">입찰명</div>
                            <div class="width100">{{ popData[0].biName }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">낙찰업체</div>
                            <div class="width100" v-text="popData[0].succYn == 'Y' ? popData[0].custName : ''"></div>
                        </div>
                    </div>

                    <table class="tblSkin1 mt20">
                        <colgroup>
                            <col style="">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>업체명</th>
                                <th>투찰가</th>
                                <th class="end">투찰 일시</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cust, index) in popData" :key="index">
                                <td class="text-left" :class="cust.succYn == 'Y' ? 'textHighlight' : ''">{{ cust.custName }}</td>
                                <td class="text-right" :class="cust.succYn == 'Y' ? 'textHighlight' : ''">{{ cust.esmtAmt | numberWithCommas }}</td>
                                <td class="end" :class="cust.succYn == 'Y' ? 'textHighlight' : ''">{{ cust.submitDate }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="modalFooter">
                        <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                    </div>
                </div>				
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "bidJoinCustListPop",
    data() {
        return{
            popData : []
        }
    },
    filters:{
        numberWithCommas(val) {
            if(!val) return '';
            else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
    methods:{
        async initModal(biNo){

            let params = {
                biNo : biNo
            }
            this.$store.commit('loading');
            await this.$http.post("/api/v1/bidComplete/joinCustList", params).then((response) => {
                if(response.data.code != '999'){
                    this.popData = response.data.data;
                }else{
                    $("#companiesNum").modal("hide");
                    this.$swal({
                        type: "warning",
                        text: response.data.msg,
                    });
                }
            }).finally(()=>{
                this.$store.commit("finish");
            });
        }
    }
}
</script>
