<template>
    <!-- 공고문 미리보기 -->
    <div class="modal fade modalStyle printDiv" id="biddingPreview" tabindex="-1" role="dialog" aria-hidden="true" >
        <div class="modal-dialog" style="width: 100%; max-width: 800px">
            <div class="modal-content">
                <div class="modal-body">
                    <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                    <h2 class="modalTitle">입찰공고</h2>
                    <h4 class="h4Tit mt20">가. 입찰에 부치는 사항</h4>
                    <div class="modalBoxSt mt10">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width170px">입찰번호</div>
                            <div class="width100">{{ data.biNo }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">입찰명</div>
                            <div style="width:550px; word-wrap: break-word;">{{ data.biName }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">품명</div>
                            <div class="width100">{{ data.itemName }} 품목류</div>
                        </div>
                    </div>

                    <h4 class="h4Tit mt20">나. 입찰 및 낙찰자 결정방식</h4>
                    <div class="modalBoxSt mt10">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width170px">입찰방식</div>
                            <div class="width100">{{ data.biMode | ftBiMode }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
                            <div class="width100">{{ data.succDeciMeth }}</div>
                        </div>
                    </div>

                    <h4 class="h4Tit mt20">다. 입찰참가정보</h4>
                    <div class="modalBoxSt mt10">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
                            <div style="width:550px; word-wrap: break-word;">{{ data.bidJoinSpec }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">현장설명일시</div>
                            <div style="width:550px; word-wrap: break-word;">{{ data.spotDate }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">현장설명장소</div>
                            <div style="width:550px; word-wrap: break-word;">{{ data.spotArea }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">특수조건</div>
                            <div style="width:550px; word-wrap: break-word;"><pre style="background-color: white;">{{ data.specialCond }}</pre></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">납품조건</div>
                            <div style="width:550px; word-wrap: break-word;">{{ data.supplyCond }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">금액기준</div>
                            <div class="width100">{{ data.amtBasis }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">결제조건</div>
                            <div style="width:550px; word-wrap: break-word;">{{ data.payCond }}</div>
                        </div>
                    </div>

                    <h4 class="h4Tit mt20">라. 참고사항</h4>
                    <div class="modalBoxSt mt10">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width170px">입찰담당자</div>
                            <div class="width100">{{ data.damdangName ? data.damdangName : data.cuser  }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">입찰담당부서</div>
                            <div class="width100">{{ data.deptName ? data.deptName : data.cuserDept}}</div>
                        </div>
                    </div>

                    <h4 class="h4Tit mt20">마. 전자입찰 등록서류</h4>
                    <div class="modalBoxSt mt10">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width170px">제출시작일시</div>
                            <div class="width100">{{ data.estStartDate }}</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">제출마감일시</div>
                            <div class="width100">{{ data.estCloseDate }}</div>
                        </div>
                        <div class="flex mt10" v-if="(data.insMode == '2' || data.insModeCode == '2')">
                            <div class="formTit flex-shrink0 width170px">세부내역</div>
                            <div class="width100">
                                <table class="tblSkin1">
                                    <colgroup>
                                        <col style="" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>품목명</th>
                                            <th>규격</th>
                                            <th>수량</th>
                                            <th class="end">단위</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(val, idx) in data.specInput" :key="idx">
                                            <td class="text-left">{{ val.name }}</td>
                                            <td class="text-left">{{ val.ssize }}</td>
                                            <td class="text-right">{{ val.orderQty | numberWithCommas }}</td>
                                            <td class="end">{{ val.unitcode }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10" v-if="data.insMode == '1' || data.insModeCode == '1'" > 
                        <div class="formTit flex-shrink0 width170px">세부내역</div>
                            <div class="width100">
                                <div v-for="(val, idx) in data.specFile" :key="idx" @click="downloadFile(val)" >
                                    <a class="textUnderline" v-if="val.fileFlag === 'K'">{{val.fileNm}}</a>
                                </div>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width170px">첨부파일</div>
                            <div class="width100">
                                <div v-for="(val, idx) in data.fileList" :key="idx" @click="downloadFile(val)" >
                                    <a class="textUnderline">{{val.fileNm}}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modalFooter">
                        <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        <a class="modalBtnCheck" title="인쇄하기" @click="fnPrint" >인쇄하기</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //공고문 미리보기 -->
</template>
<script>

export default {
    name: "BidAdvertisement",
    props: {
        data:{
            type: Object
        ,   default:{}
        }
    },
    data() {
        return {};
    },
    methods: {
        
        fnPrint() {
            const printContents = document.querySelector(".printDiv").innerHTML;
            const html = document.querySelector("html");
            const printDiv = document.createElement("DIV");
            printDiv.className = "print-div modalStyle";
            html.appendChild(printDiv);
            printDiv.innerHTML = printContents;
            printDiv.querySelector(".modalFooter").style.display = "none";
            printDiv.querySelector(".ModalClose").style.display = "none";
            printDiv.querySelector(".modal-dialog").style.cssText =
                "width:100%; max-width:700px";
            document.body.style.display = "none";
            window.print();
            document.body.style.display = "block";
            $(".print-div").remove();
        },
    },
    created() {},
    mounted() {},
};
</script>
