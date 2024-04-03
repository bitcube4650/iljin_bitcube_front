<template>
    <div>
        <h3 class="h3Tit">입찰에 부치는 사람</h3>
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
                <div class="width100">{{ data.itemName }} 품목류</div>
            </div>
        </div>

        <h3 class="h3Tit mt50">입찰방식 및 낙찰자 결정방법</h3>
        <div class="boxSt mt20">
            <div class="flex align-items-center">
                <div class="formTit flex-shrink0 width170px">입찰방식</div>
                <div class="width100">{{ data.biMode | ftBiMode }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">낙찰자 결정방법</div>
                <div class="width100">{{ data.succDeciMeth }}</div>
            </div>
        </div>

        <h3 class="h3Tit mt50">입찰 참가정보</h3>
        <div class="boxSt mt20">
            <div class="flex align-items-center">
                <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
                <div class="width100">{{ data.bidJoinSpec }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">현장설명일시</div>
                <div class="width100">{{ data.spotDate }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">현장설명장소</div>
                <div class="width100">{{ data.spotArea }}</div>
            </div>
            <div class="flex mt20">
                <div class="formTit flex-shrink0 width170px">특수조건</div>
                <div class="width100">
                    <div class="overflow-y-scroll boxStSm width100" style="height:50px">
                        {{ data.specialCond }}
                    </div>
                </div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">납품조건</div>
                <div class="width100">{{ data.supplyCond }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">금액기준</div>
                <div class="width100">{{ data.amtBasis }}</div>
            </div>
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">결제조건</div>
                <div class="width100">{{ data.payCond }}</div>
            </div>
        </div>

        <h3 class="h3Tit mt50">참고사항</h3>
        <div class="boxSt mt20">
            <div class="flex align-items-center">
                <div class="flex align-items-center width100">
                    <div class="formTit flex-shrink0 width170px">입찰담당자</div>
                    <div class="width100">{{ data.damdangName }}</div>
                </div>
                <div class="flex align-items-center width100 ml80">
                    <div class="formTit flex-shrink0 width170px">입찰담당부서</div>
                    <div class="width100">{{ data.deptName }}</div>
                </div>
            </div>
            <div class="flex align-items-center mt20" v-if="data.ingTag == 'A3' && data.whyA3">
                <div class="formTit flex-shrink0 width170px">재입찰사유</div>
                <div class="width100">{{ data.whyA3 }}</div>
            </div>
        </div>

        <h3 class="h3Tit mt50">전자입찰 제출 내역</h3>
        <div class="conTopBox mt20">
            <ul class="dList">
                <li><div>세부내역파일을 다운받아 내역 작성 후 제출기한 내 등록해 주시기 바랍니다.</div></li>
                <li><div>첨부파일은 세부내역 작성에 참고 될 자료들입니다.</div></li>
            </ul>
        </div>
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
                <div class="formTit flex-shrink0 width170px">세부내역</div>
                <div class="width100" v-if="data.insMode == '1'">
                    <a v-for="(specFile, idx) in data.specFile" :key="'file_'+idx" @click="downloadFile(specFile)" class="textUnderline">{{ specFile.fileNm }}</a>
                </div>
                <div class="width100" v-else-if="data.insMode == '2'">
                    <table class="tblSkin1">
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
            
            <div class="flex align-items-center mt20">
                <div class="formTit flex-shrink0 width170px">첨부파일</div>
                <div class="width100">
                    <a v-for="(file, idx) in data.fileList" :key="idx" @click="downloadFile(file)" class="textUnderline">{{ file.fileNm }}</a><br v-for="(f,i) in data.fileList" :key="'br_'+i">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import mixin from "../service/mixin.js";

export default {
    name:'',
    props:{
        data:{
            type:Object
        ,   default:{}
        }
    },
    data() {
        return{

        }
    },
    mixins: [mixin],
}
</script>
