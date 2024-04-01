<template>
    <div>
        <h3 class="h3Tit">입찰기본정보</h3>
        <div class="boxSt mt20">
            <div class="flex align-items-center">
                <div class="formTit flex-shrink0 width170px">입찰번호</div>
                <div class="width100">{{ data.biNo }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">입찰명</div>
                <div class="width100">{{ data.biName }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">품목</div>
                <div class="width100">{{ data.itemName }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">입찰방식</div>
                <div class="width100">{{ data.biMode | ftBiMode }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
                <div class="width100">{{ data.bidJoinSpec }}</div>
            </div>
            <div class="flex mt20">
                <div class="formTit flex-shrink0 width170px">특수조건</div>
                <div class="width100">
                    <div class="boxStSm width100 boxOverflowY" v-if="data.specialCond !== null">{{ data.specialCond }}</div>
                    <div class="boxStSm width100 boxOverflowY" v-else>없음</div>
                </div>
            </div>
            <div class="flex align-items-center mt20" v-if="data.biMode === 'A'">
                <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
                <div class="width100">
                    <div class="overflow-y-scroll boxStSm width100" style="height:50px">
                        <a v-for="(cust, idx) in data.custList" :key="idx" @click="$refs.custUserPop.initModal(cust.custCode)" data-toggle="modal" data-target="#custUserPop" class="textUnderline">{{ cust.custName }}<span v-if="data.custList.length != (idx+1)">, </span></a>
                    </div>
                </div>
            </div>
            <div class="flex align-items-center mt20" v-if="data.biMode === 'B'">
                <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
                <div class="flex align-items-center width100">
                    <div class="boxStSm width100 boxOverflowY">
                        <a>가입회원사 전체</a>
                    </div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">금액기준</div>
                <div class="width100">{{ data.amtBasis }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">결제조건</div>
                <div class="width100">{{ data.payCond }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">예산금액</div>
                <div class="width100">{{ data.bdAmt | numberWithCommas }}원</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">입찰담당자</div>
                <div class="width100">{{ data.damdangName }}</div>
            </div>
        </div>

        <template v-if="data.interrelatedCustCode === '02'">
        <h3 class="h3Tit mt50">입찰분류</h3>
        <div class="boxSt mt20" >
            <div class="flex align-items-center">
                <div class="formTit flex-shrink0 width170px">분류군</div>
                <div class="flex align-items-center width100">
                    <select class="selectStyle" disabled>
                        <option value="">{{ data.matDept }}</option>
                    </select>
                    <select class="selectStyle" style="margin: 0 10px" disabled>
                        <option value="">{{ data.matProc }}</option>
                    </select>
                    <select class="selectStyle" disabled>
                        <option value="">{{ data.matCls }}</option>
                    </select>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">공장동</div>
                <div class="width100">{{ data.matFactory }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="flex align-items-center width100">
                    <div class="formTit flex-shrink0 width170px">라인</div>
                    <div class="width100">{{ data.matFactoryLine }}</div>
                </div>
                <div class="flex align-items-center width100 ml80">
                    <div class="formTit flex-shrink0 width170px">호기</div>
                    <div class="width100">{{ data.matFactoryCnt }}</div>
                </div>
            </div>
        </div>
        </template>

        <h3 class="h3Tit mt50">입찰공고 추가등록 사항</h3>
        <div class="boxSt mt20">
            <div class="flex align-items-center">
                <div class="flex align-items-center width100">
                <div class="formTit flex-shrink0 width170px">제출시작일시</div>
                <div class="width100">{{ data.estStartDate }}</div>
                </div>
                <div class="flex align-items-center width100 ml80">
                <div class="formTit flex-shrink0 width170px">제출마감일시</div>
                <div class="width100">{{ data.estCloseDate }}</div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="flex align-items-center width100">
                <div class="formTit flex-shrink0 width170px">개찰자</div>
                <div class="width100">{{ data.estOpener }}</div>
                </div>
                <div class="flex align-items-center width100 ml80">
                <div class="formTit flex-shrink0 width170px">입찰공고자</div>
                <div class="width100">{{ data.gongoName }}</div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="flex align-items-center width100">
                <div class="formTit flex-shrink0 width170px">낙찰자</div>
                <div class="width100">{{ data.estBidder }}</div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="flex align-items-center width100">
                <div class="formTit flex-shrink0 width170px">입회자1</div>
                <div class="width100">{{ data.openAtt1 }}</div>
                </div>
                <div class="flex align-items-center width100 ml80">
                <div class="formTit flex-shrink0 width170px">입회자2</div>
                <div class="width100">{{ data.openAtt2 }}</div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="flex align-items-center width100">
                <div class="formTit flex-shrink0 width170px">내역방식</div>
                <div class="width100">{{ data.insMode }}</div>
                </div>
                <div class="flex align-items-center width100 ml80">
                <div class="formTit flex-shrink0 width170px">납품조건</div>
                <div class="width100">{{ data.supplyCond }}</div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">세부내역</div>
                <div class="width100" v-if="data.insMode == '1'">
                    <a v-for="(specFile, idx) in data.specFile" :key="'file_'+idx" @click="downloadFile(specFile)" class="textUnderline">{{ specFile.fileNm }}</a>
                </div>
                <div class="width100" v-if="data.insMode === '2'">
                    <table class="tblSkin1">
                        <colgroup>
                        <col style="" />
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
                            <tr v-for="(spec, idx) in data.specInput" :key="idx">
                                <td class="text-left">{{ spec.name }}</td>
                                <td class="text-right">{{ spec.ssize }}</td>
                                <td class="text-right">{{ spec.orderQty | numberWithCommas }}</td>
                                <td class="text-right">{{ spec.unitcode }}</td>
                                <td class="text-right">{{ spec.orderUc | numberWithCommas }}</td>
                                <td class="text-right end">{{ spec.orderQty * spec.orderUc | numberWithCommas }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="flex mt20">
                <div class="formTit flex-shrink0 width170px">첨부파일</div>
                <div class="width100">
                    <div v-for="(file, idx) in data.fileList" :key="idx" :class="(idx == 0 ? '' : 'mt5 ') + (file.fileFlag == '1' ? 'textHighlight' : '')">
                        <span class="mr20">{{ file.fileFlag | ftFileFlag }}</span><a @click="downloadFile(file)" class="textUnderline">{{ file.fileNm }}</a>
                    </div>
                </div>
            </div>
            <div class="flex align-items-center mt20" v-if="data.ingTag == 'A3' && data.whyA3">
                <div class="formTit flex-shrink0 width170px">재입찰사유</div>
                <div class="width100">{{ data.whyA3 }}</div>
            </div>
        </div>

        <!-- 협력사 사용자-->
        <CustUserPop ref="custUserPop" />
        <!-- //협력사 사용자-->

         <!-- 유찰 -->
         <div class="modal fade modalStyle" id="biddingReserve" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width: 100%; max-width: 550px">
                <div class="modal-content">
                <div class="modal-body">
                    <a class="ModalClose" data-dismiss="modal" title="닫기">
                        <i class="fa-solid fa-xmark"></i>
                    </a>
                    <h2 class="modalTitle">유찰</h2>
                    <div class="modalTopBox">
                        <ul>
                            <li>
                                <div>유찰처리 합니다.<br/>유찰처리 시 참가업체에게 유찰 메일이 발송됩니다.<br />유찰 처리 시 유찰 사유 내용으로 업체에게 발송 됩니다.</div>
                            </li>
                        </ul>
                    </div>
                    <textarea class="textareaStyle height150px mt20" placeholder="유찰사유 필수 입력" v-model="reason"></textarea>
                    <div class="modalFooter">
                        <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                        <a class="modalBtnCheck" data-toggle="modal" title="유찰" @click="bidFailure">유찰</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <!-- //유찰 -->
    </div>
</template>
<script>
import CustUserPop from "@/modules/company/components/CustUserPop.vue";
import mixin from "../service/mixin.js";

export default {
    name:'bidStatusCommon',
    components:{
        CustUserPop,
    },
    props:{
        data:{
            type:Object
        ,   default:{}
        }
    },
    data() {
        return{
            reason : ''         //유찰사유
        }
    },
    mixins: [mixin],
    methods:{
        //유찰처리
        bidFailure() {
            if (this.reason == null || this.reason == "") {
                this.$swal({ type: "warning", text: "유찰사유를 입력해주세요." });
                return;
            }
            
            let params = {
                biNo : this.data.biNo       //입찰번호
            ,   reason : this.reason        //유찰사유
            ,   type : 'fail'               //메일 타입 : fail - 유찰
            ,   biName : this.data.biName   //메일 파라미터
            }
            
            this.$store.commit("loading");
            this.$http.post("/api/v1/bidstatus/bidFailure", params).then((response) => {
                $("#biddingReserve").modal("hide");
                if (response.data.code == "999") {
                    this.$swal({
                        type: "warning",
                        text: response.data.msg,
                    });
                }else{
                    this.$swal({
                        type: "info",
                        text: "유찰 처리 되었습니다.",
                    });
                    
                    this.fnBack();
                }
            }).finally(() => {
                this.$store.commit("finish");
            });
        },
    }
}
</script>
