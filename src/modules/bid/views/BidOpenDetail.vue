<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>전자입찰</li>
                <li>개찰 상세</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="formWidth">
                <bidCommonInfo :data="data"/>

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
                                <th><input type="checkbox" v-model="allChk" id="allChk" class="checkStyle checkOnly"><label for="allChk"></label></th>
                                <th>입찰참가업체명</th>
                                <th>견적금액(총액)</th>
                                <th>견적</th>
                                <th>제출일시</th>
                                <th>담당자</th>
                                <th>기타첨부파일</th>
                                <th class="end">선정</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(cust, idx) in data.custList">
                            <tr :key="'main_'+idx">
                                <td><input type="checkbox" v-if="cust.esmtYn == '2'" :id="cust.custCode" v-model="custCheck" :value="cust.custCode" class="checkStyle checkOnly"><label v-if="cust.esmtYn == '2'" :for="cust.custCode"></label></td>
                                <td class="text-left">
                                    <a @click="$refs.submitHistPop.initModal(data.biNo, cust.custCode, cust.custName, cust.damdangName, cust.esmtCurr);" class="textUnderline" data-toggle="modal" data-target="#submitHistPop">{{ cust.custName }}</a>
                                </td>
                                <td class="text-overflow" v-text="ftEsmtAmt(cust)"></td>
                                <td><a @click="data.insMode == '1' && cust.esmtYn == '2' ? fnCustSpecFileDown(cust.fileNm, cust.filePath) : ''" :class="(cust.esmtYn == '2' ? 'textUnderline textMainColor ' : '') + (cust.esmtYn == '2' && data.insMode == '2' ? 'detailBtn' : '')">{{ cust.esmtYn | ftEsmtYn }}</a></td>
                                <td>{{ cust.submitDate }}</td>
                                <td>{{ cust.damdangName }}</td>
                                <td><img v-if="cust.etcPath" @click="fnCustSpecFileDown(cust.etcFile, cust.etcPath)" src="/images/icon_etc.svg" class="iconImg" alt="etc"></td>
                                <td><a v-if="cust.esmtYn == '2'" @click="succCust = cust" data-toggle="modal" data-target="#bidSucc" class="btnStyle btnSecondary btnSm" title="낙찰">낙찰</a></td>
                            </tr>
                            <tr class="detailView" :key="'sub_'+idx">
                                <td colspan="8" class="end">
                                    <table class="tblSkin2">
                                        <colgroup>
                                            <col style="">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>품목명</th>
                                                <th>규격</th>
                                                <th>수량</th>
                                                <th>단위</th>
                                                <th>실행단가</th>
                                                <th class="end">합계</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(spec, idx2) in cust.bidSpec" :key="'spec_'+idx2">
                                                <td class="text-left">{{ spec.name }}</td>
                                                <td class="text-left">{{ spec.ssize }}</td>
                                                <td class="text-right">{{ spec.orderQty | numberWithCommas }}</td>
                                                <td>{{ spec.unitcode }}</td>
                                                <td class="text-right">{{ spec.esmtUc / spec.orderQty | numberWithCommas }}</td>
                                                <td class="text-right end">{{ spec.esmtUc | numberWithCommas }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </template>
                        </tbody>
                    </table>
                </div>

                <div class="text-center mt50">
                    <a class="btnStyle btnOutline" title="목록" @click="fnMovePage('bidStatus')">목록</a>
                    <a class="btnStyle btnOutline" title="개찰결과 보고서" data-toggle="modal" data-target="#resultsReport" >개찰결과 보고서</a>
                    <a data-toggle="modal" data-target="#biddingReserve" class="btnStyle btnSecondary" title="유찰" >유찰</a>
                    <a @click="fnRebid" class="btnStyle btnOutlineRed" title="선택업체 재입찰">선택업체 재입찰하러 가기</a>
                </div>
            </div>
        </div>
        <!-- //contents -->

        <!-- 낙찰 -->
        <div class="modal fade modalStyle" id="bidSucc" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width: 100%; max-width: 550px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">낙찰</h2>
                        <div class="modalTopBox">
                            <ul>
                                <li>
                                    <div>[{{ succCust.custName }}] 업체로 낙찰 처리합니다.<br /> 아래 낙찰 시 추가합의 사항이 있을 경우 입력해 주십시오.<br />낙찰 하시겠습니까?</div>
                                </li>
                            </ul>
                        </div>
                        <textarea class="textareaStyle height150px mt20" placeholder="추가합의 사항(필수아님)" v-model="succDetail" ></textarea>
                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a class="modalBtnCheck" data-toggle="modal" title="낙찰" @click="bidSucc" >낙찰</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //낙찰 -->

        <!-- 개찰결과 보고서 -->
        <report title="개찰결과 보고서" :data="data" flag="progress"/>
        <!-- //개찰결과 보고서 -->
        
        <!-- 제출이력-->
        <SubmitHistPop ref="submitHistPop" />
        <!-- //제출이력-->
    </div>
    <!-- //본문 -->
</template>
<script>
import bidCommonInfo from "../components/BidStatusCommon.vue";
import SubmitHistPop from "@/modules/company/components/SubmitHistoryPop.vue";
import report from "@/modules/bid/components/BidResultReport.vue";
import mixin from "../service/mixin.js";
import cmmn from "../../../../public/js/common.js";

export default {
    name: "bidOpenDetail",
    components: {
        bidCommonInfo,
        SubmitHistPop,
        report,
    },
    data() {
        return {
            biNo : '',                  //입찰번호
            data : {},                    //입찰 상세 데이터
            succCust : {},              //낙찰 대상
            succDetail : '',            //낙찰 추가 합의사항
            custCheck : [],             //선택한 협력사
            allChk : false,             //협력사 전체 체크
        };
    },
    mixins: [mixin],
    watch:{
        allChk(val){
            if(val){
                let custList = this.data.custList;
                let arr = new Array();
                for(let i = 0 ; i < custList.length ; i++){
                    if(custList[i].esmtYn == '2'){
                        arr.push(custList[i].custCode);
                    }
                }
                this.custCheck = arr;
            }else{
                this.custCheck = [];
            }
        },
    },
    methods: {
        //재입찰
        fnRebid(){

            if(this.custCheck.length == 0){
                this.$swal({
                    type: "warning",
                    text: "업체를 선택해주세요"
                })
                return false;
            }

            this.$swal({
                type: "info",
                text: "선택한 업체로 재입찰을 진행합니다. 재입찰 하시겠습니까?",                
                showCancelButton: true,
                confirmButtonText: '재입찰',
                cancelButtonText: '취소',
            }).then((result) => {
                if(result.value){
                    this.$router.push({name:"rebid", params: { 'biNo': this.biNo, "reCustList" : this.custCheck }});
                }
            });
        },

        //낙찰
        bidSucc() {
            let params = {
                biNo : this.biNo
            ,   succCust : this.succCust.custCode
            ,   succDetail : this.succDetail
            ,   biName : this.biName                //메일전송에 사용
            }
            this.$store.commit("loading");
            this.$http.post("/api/v1/bidstatus/bidSucc", params).then((response) => {
                $("#bidSucc").modal("hide");
                if (response.data.code != "OK") {
                    this.$swal({
                        type: "warning",
                        text: "낙찰 처리중 오류가 발생했습니다.",
                    });
                }else{
                    this.$swal({
                        type: "info",
                        text: "낙찰 처리했습니다.",
                    });
                    this.fnMovePage('bidStatus');
                }
            }).finally(() => {
                this.$store.commit("finish");
            });
        },
    },
    beforeMount() {
        this.biNo = this.$route.params.biNo;
    },
    mounted() {
        this.bidStatusRetrieve();
    },
};
</script>