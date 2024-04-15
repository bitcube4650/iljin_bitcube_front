<template>
<!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>전자입찰</li>
                <li>입찰진행 상세</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="formWidth">
                
                <bidCommonInfo :data.sync="data" attSign="Y"/>

                <h3 class="h3Tit mt50">업체견적 사항 <strong class="textHighlight">(개찰 전까지 견적금액 및 내역파일은 암호화되어 보호됩니다)</strong></h3>
                <div class="conTopBox mt20">
                <ul class="dList">
                    <li><div>재 입찰일 경우 참가업체명을 클릭하면 차수 별 견적제출 이력을 볼 수 있습니다.</div></li>
                    <li><div>견적 상세 확인은 상세를 클릭하시면 확인하실 수 있습니다.</div></li>
                </ul>
                </div>
                <div class="boxSt mt20">
                <table class="tblSkin1">
                    <colgroup>
                    <col style="">
                    </colgroup>
                    <thead>
                    <tr>
                        <th>입찰참가업체명</th>
                        <th>견적금액(총액)</th>
                        <th>확인</th>
                        <th>제출일시</th>
                        <th>담당자</th>
                        <th class="end">기타첨부파일</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(cust, idx) in data.custList" :key="idx">
                        <td class="text-left">{{ cust.custName }}</td>
                        <td class="text-overflow" v-text="ftEsmtAmt(cust)"></td>
                        <td><a @click="fnRejectDetail(cust)" :class="cust.esmtYn == '2' ? 'textUnderline textMainColor' : ''">{{ cust.esmtYn | ftEsmtYn }}</a></td>
                        <td>{{ cust.submitDate }}</td>
                        <td>{{ cust.damdangName }}</td>
                        <td class="end"><img v-if="cust.etcPath" @click="fnRejectDetail(cust)" src="/images/icon_etc.svg" class="iconImg" alt="etc"></td>
                    </tr>
                    </tbody>
                </table>
                </div>


                <div class="text-center mt50">
                    <a class="btnStyle btnOutline" title="목록" @click="fnMovePage('bidStatus')">목록</a>
                    <a v-if="(data.ingTag == 'A1' || data.ingTag == 'A3') && (data.bidAuth || data.openAuth || (data.createUser == $store.state.loginInfo.userId))" data-toggle="modal" data-target="#biddingReserve" class="btnStyle btnSecondary" title="유찰">유찰</a>
                    <a v-if="(data.ingTag == 'A1' || data.ingTag == 'A3') && data.openAuth && data.estCloseCheck" @click="fnCheck" class="btnStyle btnPrimary" title="개찰">개찰</a>
                </div>
            </div>
        </div>
        <!-- //contents -->

        <!-- 인증서 비밀번호 입력 -->
        <div class="modal fade modalStyle" id="certPwd" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">공동인증서 비밀번호 입력</h2>
                        <div class="flex align-items-center" style="margin-top:30px;">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="width100">
                                <input type="password" v-model="certPwd" @keydown.enter="fnOpenBid" class="inputStyle" placeholder="비밀번호를 입력해주세요.">
                            </div>
                        </div>

                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a @click="fnOpenBid" class="modalBtnCheck" data-toggle="modal" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //인증서 비밀번호 입력 -->

    </div>
<!-- //본문 -->
</template>
<script>
import bidCommonInfo from "../components/BidStatusCommon.vue";
import mixin from "../service/mixin.js";
import cmmn from "../../../../public/js/common.js";

export default {
    name: "bidStatusDetail",
    components: {
        bidCommonInfo
    },
    data() {
        return {
            biNo : '',
            data : {},
            certPwd : ''
        };
    },
    mixins: [mixin],
    methods: {
        //개찰처리
        async fnOpenBid(){

            if(cmmn.isEmpty(this.certPwd)){
                this.$swal({
                    type: "warning",
                    text: "인증서 비밀번호를 입력해주세요.",
                });

                return false;
            }
            $("#certPwd").modal("hide");

            let params = {
                biNo : this.biNo,
                certPwd : this.certPwd
            }
            this.$store.commit("loading");
            this.$http.post("/api/v1/bidstatus/bidOpening", params).then((response) => {
                if (response.data.code != "OK") {
                    this.$swal({
                        type: "warning",
                        text: "개찰 처리중 오류가 발생했습니다.",
                    });
                } else {
                    this.$swal({
                        type: "info",
                        text: "개찰했습니다.",
                    });
                    this.$store.commit("finish");
                    this.$router.push({name:"bidOpenDetail"});
                }
            }).finally(() => {
                this.$store.commit("finish");
            });
        },
        //상세 및 기타첨부파일 열람 시 알림창
        fnRejectDetail(cust){
            if(cust.esmtYn == 2){
                this.$swal({
                    type: "warning",
                    text: "개찰 전 견적 내용은 확인할 수 없습니다.",
                });
            }
        },
        fnCheck(){
            if(!cmmn.isEmpty(this.data.openAtt1Id) && this.data.openAtt1Sign != 'Y'){
                this.$swal({
                    type: "warning",
                    text: "입회자1의 서명이 필요합니다.",
                });

                return false;
            }

            if(!cmmn.isEmpty(this.data.openAtt2Id) && this.data.openAtt2Sign != 'Y'){
                this.$swal({
                    type: "warning",
                    text: "입회자2의 서명이 필요합니다.",
                });

                return false;
            }
            
            this.$swal({
                type: "info",
                text: "개찰하시겠습니까?",                
                showCancelButton: true,
                confirmButtonText: '개찰',
                cancelButtonText: '취소',
            }).then((result) => {
                if(result.value){
                    this.fnOpenCert();
                }
            });

        },
        fnOpenCert(){//인증서 비밀번호 창 열기
            this.certPwd = '';
            $("#certPwd").modal("show");
        }
    },
    beforeMount() {
        this.biNo = this.$store.state.bidDetailData;
    },
    mounted() {
        this.bidStatusRetrieve();
    },
    beforeRouteLeave(to, from, next){
        if(to.name != 'bidOpenDetail'){
            this.$store.commit('setBidDetailData', null);
        }
        next();
    },
};
</script>