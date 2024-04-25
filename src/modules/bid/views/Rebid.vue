<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>전자입찰</li>
                <li>재입찰</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="formWidth">
                <h3 class="h3Tit">입찰기본정보</h3>
                <div class="boxSt mt20">
                    <div class="flex align-items-center">
                        <div class="formTit flex-shrink0 width170px">입찰번호</div>
                        <div class="width100">{{ data.biNo }}</div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width170px">입찰명</div>
                        <div class="width100">
                            <input type="text" class="inputStyle" v-model="data.biName" maxlength="50" disabled/>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width170px">품목</div>
                        <div class="flex align-items-center width100">
                            <input type="text" class="inputStyle" v-model="data.itemName" disabled/>
                        </div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width170px">입찰방식</div>
                        <div class="width100">
                            <input type="radio" class="radioStyle" checked="" id="bm1_1" />
                            <label for="bm1_1">지명경쟁입찰</label>
                        </div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
                        <div class="width100">
                            <input type="text" class="inputStyle" v-model="data.bidJoinSpec" disabled/>
                        </div>
                    </div>
                    <div class="flex mt20">
                        <div class="formTit flex-shrink0 width170px">특수조건</div>
                        <div class="width100">
                            <div class="width100">
                                <textarea class="textareaStyle boxOverflowY" v-model="data.specialCond" disabled></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width170px">현장설명일시</div>
                        <div class="width100">
                            <input type="text" class="inputStyle maxWidth140px" v-model="data.spotDay" disabled/>
                            <input type="time" class="inputStyle maxWidth140px ml10" v-model="data.spotTime" disabled />
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width170px">현장설명장소</div>
                        <div class="width100">
                            <input type="text" class="inputStyle" v-model="data.spotArea" disabled/>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
                        <div class="width100">
                            <input type="text" class="inputStyle maxWidth200px" v-model="data.succDeciMeth" disabled>
                        </div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
                        <div class="flex align-items-center width100">
                        <div class="overflow-y-scroll boxStSm width100" style="display: inline" >
                            <div v-for="(val, idx) in data.custList" :key="idx">
                                <div v-for="(data, idx2) in reCustList" :key="'re_'+idx2">
                                    <a v-if="data == val.custCode">{{ val.custName }}</a><span v-if="data == val.custCode && idx2 !== reCustList.length - 1">,</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="flex align-items-center mt20">
                        <div class="formTit flex-shrink0 width170px">금액기준</div>
                        <div class="width100">
                            <input type="text" class="inputStyle" v-model="data.amtBasis" disabled/>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width170px">결제조건</div>
                        <div class="width100">
                            <input type="text" class="inputStyle" v-model="data.payCond" disabled/>
                        </div>
                    </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">예산금액</div>
                    <div class="flex align-items-center width100">
                        <input type="text" class="inputStyle maxWidth200px" :value="fnComma(data.bdAmt)" disabled/>
                        <div class="ml10">원</div>
                    </div>
                </div>
                <div class="flex align-items-center mt20">
                    <div class="formTit flex-shrink0 width170px">입찰담당자</div>
                        <div class="width100">{{ data.damdangName }}</div>
                    </div>
                </div>

                <template v-if="data.interrelatedCustCode == '02'">
                <h3 class="h3Tit mt50" >입찰분류</h3>
                <div class="boxSt mt20" >
                    <div class="flex align-items-center">
                        <div class="formTit flex-shrink0 width170px">분류군</div>
                        <div class="flex align-items-center width100">
                            <input type="text" class="selectStyle" v-model="data.matDept" disabled>
                            <input type="text" class="selectStyle ml5" v-model="data.matProc" disabled>
                            <input type="text" class="selectStyle ml5" v-model="data.matCls" disabled>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="formTit flex-shrink0 width170px">공장동</div>
                        <div class="width100">
                            <input type="text" class="inputStyle" v-model="data.matFactory" disabled/>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">라인</div>
                            <div class="width100">
                                <input type="text" class="inputStyle" v-model="data.matFactoryLine" disabled/>
                            </div>
                        </div>
                        <div class="flex align-items-center width100 ml80">
                            <div class="formTit flex-shrink0 width170px">호기</div>
                            <div class="width100">
                                <input type="text" class="inputStyle" v-model="data.matFactoryCnt" disabled/>
                            </div>
                        </div>
                    </div>
                </div>
                </template>

                <h3 class="h3Tit mt50">입찰공고 추가등록 사항</h3>
                <div class="boxSt mt20">
                    <div class="flex align-items-center">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">제출시작일시</div>
                            <div class="flex align-items-center width100">
                                <input type="text" class="inputStyle readonly" v-model="data.estStartDay" disabled />
                                <input type="time" class="readonly inputStyle ml10" v-model="data.estStartTime" disabled />
                            </div>
                        </div>
                        <div class="flex align-items-center width100 ml80">
                            <div class="formTit flex-shrink0 width170px">제출마감일시 <span class="star">*</span></div>
                            <div class="flex align-items-center width100">
                                <Calendar @update-date="fnUpdateCloseDate" calendarId="closeDate" classProps="datepicker readonly inputStyle" :initDate="data.estCloseDay" />
                                <select class="inputStyle ml10" v-model="data.estCloseTime" style="background:url('../images/selectArw.png') no-repeat right 15px center;max-width: 110px">
                                    <option value="">시간 선택</option>
                                    <option value="01:00">01:00</option>
                                    <option value="02:00">02:00</option>
                                    <option value="03:00">03:00</option>
                                    <option value="04:00">04:00</option>
                                    <option value="05:00">05:00</option>
                                    <option value="06:00">06:00</option>
                                    <option value="07:00">07:00</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                    <option value="23:00">23:00</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">개찰자</div>
                            <div class="flex align-items-center width100">
                                <input type="text" class="inputStyle" v-model="data.estOpener" disabled />
                            </div>
                        </div>
                        <div class="flex align-items-center width100 ml80">
                            <div class="formTit flex-shrink0 width170px">입찰공고자</div>
                            <div class="flex align-items-center width100">
                                <input type="text" class="inputStyle" v-model="data.gongoName" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">낙찰자</div>
                            <div class="flex align-items-center width270px">
                                <input type="text" class="inputStyle" v-model="data.estBidder" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">입회자1</div>
                            <div class="flex align-items-center width100">
                                <input type="text" class="inputStyle" v-model="data.openAtt1" disabled />
                            </div>
                        </div>
                        <div class="flex align-items-center width100 ml80">
                            <div class="formTit flex-shrink0 width170px">입회자2</div>
                            <div class="flex align-items-center width100">
                                <input type="text" class="inputStyle" v-model="data.openAtt2" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="flex align-items-center mt10">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">내역방식</div>
                            <div class="width100">
                                <input type="radio" name="bm2" :value="data.insMode" id="bm2_1" class="radioStyle" checked="" /><label for="bm2_1">{{ data.insMode | ftInsMode }}</label>
                            </div>
                        </div>
                        <div class="flex align-items-center width100 ml80">
                            <div class="formTit flex-shrink0 width170px">납품조건</div>
                            <div class="width100">
                                <input type="text" class="inputStyle" v-model="data.supplyCond" disabled/> 
                            </div>
                        </div>
                    </div>
                    <div class="flex mt10" v-if="data.insMode === '1'">
                        <div class="formTit flex-shrink0 width170px">세부내역
                            <!-- 툴팁 -->
                            <i class="fas fa-question-circle toolTipSt ml5">
                                <div class="toolTipText" style="width: 370px">
                                    <ul class="dList">
                                        <li><div>내역방식이 파일등록 일 경우 필수로 파일을 등록해야합니다.</div></li>
                                        <li><div>파일이 암호화 되어 있는지 확인해 주십시오</div></li>
                                    </ul>
                                </div>
                            </i>
                            <!-- //툴팁 -->
                        </div>
                        <div class="width100">
                            <!-- 다중파일 업로드 -->
                            <div class="upload-boxWrap">
                                <div class="upload-box">
                                    <div class="uploadTxt">
                                        <!-- <i class="fa-regular fa-upload"></i> -->
                                        <div v-for="(file, idx) in data.specFile" :key="idx">{{ file.fileNm }}</div>
                                    </div>
                                </div>
                                <div class="uploadPreview" id="preview"></div>
                            </div>
                            <!-- //다중파일 업로드 -->
                        </div>
                    </div>
                    <div class="flex mt10" v-if="data.insMode === '2'">
                        <div class="formTit flex-shrink0 width170px">세부내역 <span class="star">*</span>
                        </div>
                        <div class="width100">
                            <table class="tblSkin1">
                                <colgroup>
                                    <col style="width:17%" />
                                    <col style="width:16%" />
                                    <col style="width:16%" />
                                    <col style="width:16%" />
                                    <col style="width:17%" />
                                    <col style="width:18%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>품목명</th>
                                        <th>규격</th>
                                        <th>수량</th>
                                        <th>단위</th>
                                        <th>예정단가</th>
                                        <th class="end">합계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(val, idx) in data.specInput" :key="idx">
                                        <td><input type="text" class="inputStyle inputSm" v-model="val.name" disabled/> </td>
                                        <td><input type="text" class="inputStyle inputSm" v-model="val.ssize" disabled/></td>
                                        <td><input type="text" class="inputStyle inputSm" v-model="val.orderQty" disabled/></td>
                                        <td><input type="text" class="inputStyle inputSm" v-model="val.unitcode" disabled/></td>
                                        <td><input type="text" class="inputStyle inputSm text-right" v-model="val.orderUc" disabled/></td>
                                        <td class="text-right">{{ val.orderQty * val.orderUc | numberWithCommas }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="text-right mt10">
                                <strong v-text="fnAllSum(data.specInput)"></strong>
                            </p>
                        </div>
                    </div>
                    <div class="flex mt10">
                        <div class="formTit flex-shrink0 width170px">첨부파일(대내용)
                            <!-- 툴팁 -->
                            <i class="fas fa-question-circle toolTipSt ml5">
                                <div class="toolTipText" style="width: 320px">
                                    <ul class="dList">
                                        <li><div>그룹사 내부 입찰관계자가 확인하는 첨부파일 입니다.</div></li>
                                        <li><div>파일이 암호화 되어 있는지 확인해 주십시오</div></li>
                                    </ul>
                                </div>
                            </i>
                            <!-- //툴팁 -->
                        </div>
                        <div class="width100">
                            <!-- 다중파일 업로드 -->
                            <div class="upload-boxWrap">
                                <div class="upload-box">
                                    <div class="uploadTxt">
                                        <!-- <i class="fa-regular fa-upload"></i> -->
                                        <div v-for="(file, idx) in data.fileList" :key="idx" :style="file.fileFlag == '1' ? 'display:none;' : ''">{{ file.fileNm }}</div>
                                    </div>
                                </div>
                                <div class="uploadPreview" id="preview2"></div>
                            </div>
                            <!-- //다중파일 업로드 -->
                        </div>
                    </div>
                    <div class="flex mt10">
                        <div class="formTit flex-shrink0 width170px">첨부파일(대외용)
                            <!-- 툴팁 -->
                            <i class="fas fa-question-circle toolTipSt ml5">
                                <div class="toolTipText" style="width: 300px">
                                    <ul class="dList">
                                        <li><div>입찰 참가업체들이 확인하는 첨부파일 입니다.</div></li>
                                        <li><div>파일이 암호화 되어 있는지 확인해 주십시오</div></li>
                                    </ul>
                                </div>
                            </i>
                            <!-- //툴팁 -->
                        </div>
                        <div class="width100">
                            <!-- 다중파일 업로드 -->
                            <div class="upload-boxWrap">
                                <div class="upload-box">
                                    <div class="uploadTxt">
                                        <!-- <i class="fa-regular fa-upload"></i> -->
                                        <div v-for="(file, idx) in data.fileList" :key="idx" :style="file.fileFlag == '0' ? 'display:none;' : ''">{{ file.fileNm }}</div>
                                    </div>
                                </div>
                                <div class="uploadPreview" id="preview3"></div>
                            </div>
                            <!-- //다중파일 업로드 -->
                        </div>
                    </div>
                </div>
                <div class="text-center mt50">
                    <a class="btnStyle btnOutline" title="목록" @click="fnMovePage('bidStatus')">목록</a>
                    <a @click="fnValidation" class="btnStyle btnPrimary" title="재입찰" >재입찰</a>
                </div>
            </div>
        </div>
        <!-- //contents -->

        <!-- 재입찰 -->
        <div class="modal fade modalStyle" id="reBidding" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width: 100%; max-width: 550px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">재입찰</h2>
                        <div class="modalTopBox">
                            <ul>
                                <li>
                                    <div>
                                        재입찰 처리 합니다.<br/>재입찰 시 선택한 참가업체에게 재입찰 메일이 발송됩니다.<br />재입찰 하시겠습니까?
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <textarea class="textareaStyle height150px mt20" placeholder="재입찰 사유 필수 입력 (200자 이내)" v-model="whyA3"></textarea>
                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a class="modalBtnCheck" title="재입찰" @click="fnSave">재입찰</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- //재입찰 -->
    </div>
    <!-- //본문 -->
</template>
<style scoped>
    .upload-box{
        justify-content: flex-start;
        padding-left: 30px;
    }
</style>
<script>
import cmmn from "../../../../public/js/common.js";
import Calendar from "@/components/Calendar.vue";
import mixin from "../service/mixin.js";

export default {
    name: "rebid",
    components: {
        Calendar,
    },
    data() {
        return {
            biNo : '',
            reCustList : [],
            data : {},
            whyA3 : ''
        };
    },
    mixins: [mixin],
    methods: {
        //재입찰 제출마감일시 변경 확인 validation 
        fnValidation(){
            let estCloseDate = this.data.estCloseDay + " " + this.data.estCloseTime + ":00"
            let setDate = new Date(estCloseDate);
            let currDate = new Date();

            if(setDate.getTime() <= currDate.getTime()){
                this.$swal({
                    type: "warning",
                    text: "제출마감일시는 현재 날짜/시간 이후로 설정해주세요.",
                });
                return false;
            }
            $("#reBidding").modal("show");
        },
        //재입찰 저장
        fnSave(){
            let estCloseDate = this.data.estCloseDay + " " + this.data.estCloseTime + ":00"
            let setDate = new Date(estCloseDate);
            let currDate = new Date();

            if(setDate.getTime() <= currDate.getTime()){
                this.$swal({
                    type: "warning",
                    text: "제출마감일시는 현재 날짜/시간 이후로 설정해주세요.",
                });
                $("#reBidding").modal("hide");
                return false;
            }

            if(cmmn.isEmpty(this.whyA3)){
                this.$swal({
                    type: "warning",
                    text: "재입찰 사유를 입력해주세요.",
                });
                return false;
            }

            if(this.whyA3.length > 200){
                this.$swal({
                    type: "warning",
                    text: "재입찰 사유를 200자 이내로 입력해주세요.",
                });
                return false;
            }

            let params = {
                biNo : this.biNo
            ,   whyA3 : this.whyA3
            ,   estCloseDate : estCloseDate
            ,   reCustList : this.reCustList
            ,   biName : this.data.biName
            }

            this.$store.commit("loading");
            this.$http.post("/api/v1/bidstatus/rebid", params).then((response) => {
                if (response.data.code == "OK") {
                    $("#reBidding").modal("hide");
                    this.$swal({
                        type: "info",
                        text: "재입찰 처리 하였습니다.",
                    });

                    this.$router.push({ name: "bidStatus" });
                } else {
                    $("#reBidding").modal("hide");
                    this.$swal({
                        type: "warning",
                        text: "재입찰 중 오류가 발생했습니다.",
                    });
                }
            }).finally(() => {
                $("#reBidding").modal("hide");
            });
        },
        fnAllSum(spec){
            let result = 0;
            for(let i = 0 ; i < spec.length ; i++){
                result = result + (spec[i].orderQty * spec[i].orderUc)
            }

            return "총합계 : " + result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ;
        },
        async fnDateSeparate(){
            let spotDate = this.data.spotDate;
            let estStartDate = this.data.estStartDate;
            let estCloseDate = this.data.estCloseDate;

            this.data.spotDay = spotDate.substring(0, 10);
            this.data.spotTime = spotDate.substring(11, 16);
            this.data.estStartDay = estStartDate.substring(0, 10);
            this.data.estStartTime = estStartDate.substring(11, 16);
            this.data.estCloseDay = estCloseDate.substring(0, 10);
            this.data.estCloseTime = estCloseDate.substring(11, 16);

            this.$forceUpdate();
        },
        fnUpdateCloseDate(val) {
            this.data.estCloseDay = val;
        },
        fnComma(val){
            if(val == undefined || val == null || val == 0) return '';
            else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    },
    beforeMount() {
        this.biNo = this.$store.state.bidDetailData;
        this.reCustList = this.$store.state.bidUpdateData;
    },
    beforeRouteLeave(to, from, next){
        this.$store.commit('setBidDetailData', null);
        this.$store.commit('setBidUpdateData', null);
        next();
    },
    async mounted() {
        await this.bidStatusRetrieve();
        await this.fnDateSeparate();
    },
};
</script>