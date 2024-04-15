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

                <partnerBidCommon :data="data"/>
                
                <!--견적을 제출 했을 경우-->
                <template v-if="data.custEsmtYn == '2'">
                    <h3 class="h3Tit mt50">견적 제출 정보</h3>
                    <div class="boxSt mt20">
                        <div class="flex align-items-center">
                            <div class="flex align-items-center width100">
                                <div class="formTit flex-shrink0 width170px">견적제출일시</div>
                                <div class="width100">{{ data.custEsmtUpdateDate }}</div>
                            </div>
                        </div>
                    </div>
                </template>
                <!--견적을 제출 했을 경우-->

                <!--견적을 아직 제출 안한 경우-->
                <template v-else>
                    <h3 class="h3Tit mt50">견적 제출</h3>
                    <div class="conTopBox mt20">
                        <ul class="dList">
                            <li><div>견적 제출 후 수정할 수 없으니 꼼꼼히 확인하시고 제출하시기 바랍니다.</div></li>
                        </ul>
                    </div>
                    <div class="boxSt mt20">
                        <template v-if="data.insMode == '2'">
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
                                    <th>견적단가</th>
                                    <th class="end">견적금액</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, idx) in submitData" :key="idx">
                                    <td class="text-left">{{ val.name }}</td>
                                    <td class="text-left">{{ val.ssize }}</td>
                                    <td class="text-right">{{ val.orderQty | numberWithCommas }}</td>
                                    <td>{{ val.unitcode }}</td>
                                    <td class="text-right">
                                        <div class="inputStyle readonly"><span v-text="fnCalcOrderUc(val.esmtUc, val.orderQty)"></span></div>
                                    </td>
                                    <td class="text-right">
                                        <input type="text" class="inputStyle inputSm text-right" placeholder="" v-model="val.esmtUc" @keyup="fnTotalAmt" /> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="flex align-items-center justify-space-end mt10" >
                            <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 mr20">총 견적금액</div>
                                <div class="flex align-items-center width100">
                                    <select class="selectStyle maxWidth140px" v-model="esmtCurr" >
                                        <option v-for="(val, idx) in currList" :value="val.codeVal" :key="idx" >{{ val.codeName }}</option>
                                    </select>
                                    <input type="text" class="inputStyle readonly ml10" v-model="totalAmt" placeholder="" readonly />
                                </div>
                            </div>
                        </div>
                        </template>

                        <template  v-else-if="data.insMode == '1'">
                        <div class="flex align-items-center width100 mt10">
                            <div class="formTit flex-shrink0 width170px">견적금액 <span class="star">*</span></div>
                            <div class="flex align-items-center width100">
                                <select name="" class="selectStyle maxWidth140px" v-model="esmtCurr" >
                                    <option v-for="(val, idx) in currList" :value="val.codeVal" :key="idx" >{{ val.codeName }}</option>
                                </select>
                                <input type="text" class="inputStyle" placeholder="숫자만 입력" style="margin: 0 10px" v-model="amt" /> 
                                <input type="text" class="inputStyle readonly" placeholder="" :value="amtHangle" readonly />
                            </div>
                        </div>
                        <div class="flex mt10">
                            <div class="formTit flex-shrink0 width170px">견적내역파일 <span class="star">*</span>
                                <!-- 툴팁 -->
                                <i class="fas fa-question-circle toolTipSt ml5">
                                    <div class="toolTipText" style="width: 370px">
                                        <ul class="dList">
                                            <li><div>전자입찰 등록서류의 세부내역 파일을 다운받아 내역 작성후 첨부해 주십시오</div></li>
                                            <li class="textHighlight"><div>파일형식은 세부내역과 같은 형식으로 작성해 주십시오</div></li>
                                        </ul>
                                    </div>
                                </i>
                                <!-- //툴팁 -->
                            </div>
                            <div class="width100">
                                <!-- 다중파일 업로드 -->
                                <div class="upload-boxWrap">
                                    <div class="upload-box" v-if="!detailFile">
                                        <input type="file" id="file-input" @change="fileInputChange">
                                        <div class="uploadTxt">
                                            <i class="fa-regular fa-upload"></i>
                                            <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                        </div>
                                    </div>
                                    <div class="uploadPreview" id="preview" v-if="detailFile"><p style="line-height:80px;">{{ detailFile.name }}<button id="removeBtn" class="file-remove" @click="detailFile = ''">삭제</button></p></div>
                                </div>
                                <!-- //다중파일 업로드 -->
                            </div>
                        </div>
                        </template>
                        <div class="flex mt10">
                            <div class="formTit flex-shrink0 width170px">기타첨부</div>
                            <div class="width100">
                                <!-- 다중파일 업로드 -->
                                <div class="upload-boxWrap">
                                    <div class="upload-box" v-if="!etcFile">
                                        <input type="file" id="file-input2" @change="fileInput2Change">
                                        <div class="uploadTxt">
                                            <i class="fa-regular fa-upload"></i>
                                            <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                        </div>
                                    </div>
                                    <div class="uploadPreview" id="preview2" v-if="etcFile"><p style="line-height:80px;">{{ etcFile.name }}<button id="removeBtn" class="file-remove" @click="etcFile = ''">삭제</button></p></div>
                                </div>
                                <!-- //다중파일 업로드 -->
                            </div>
                        </div>
                    </div>
                </template>
                <!--//견적을 아직 제출 안한 경우-->

                <div class="text-center mt50">
                    <a class="btnStyle btnOutline" title="목록" @click="fnMovePage('partnerBidStatus')"> 목록 </a>
                    <a data-toggle="modal" data-target="#biddingPreview" class="btnStyle btnOutline" title="공고문 미리보기" >공고문 미리보기</a>
                    <!-- <a class="btnStyle btnSecondary" title="수정" v-if="data.insMode == '2'" @click="fnTempSave">견적금액 임시저장</a> -->
                    <a @click="fnCheck" v-if="esmtPossible && data.custEsmtYn == '1' && (data.ingTag == 'A1' || (data.ingTag == 'A3' && data.custRebidYn == 'Y')) " class="btnStyle btnPrimary" title="견적서 제출">견적서 제출</a>
                    <a @click="fnAlert" v-if="esmtPossible && data.custEsmtYn == '1' && data.ingTag == 'A3' && data.custRebidYn == 'N' " class="btnStyle btnPrimary" style="opacity: 0.5; cursor: not-allowed;" title="견적서 제출">견적서 제출</a>
                </div>
            </div>
        </div>
            <!-- //contents -->

        <!--공고문 미리보기 팝업-->
        <BidAdvertisement :data="data"/>
    </div>
    <!-- //본문 -->
</template>
<script>
import partnerBidCommon from "../components/PartnerBidCommon.vue"
import mixin from "../service/mixin.js";
import cmmn from "../../../../public/js/common.js";
import BidAdvertisement from "@/modules/bid/components/BidAdvertisement.vue";

export default {
    name: "partnerBidStatusDetail",
    components: {
        BidAdvertisement,
        partnerBidCommon
    },
    data() {
        return {
            biNo : '',
            data : {},                  //상세 데이터
            submitData : [],            //직접입력 데이터
            amt : '',                   //파일등록 총금액
            amtHangle : '',             //파일등록 총금액 한글
            totalAmt : '',              //직접입력 총금액
            esmtCurr : '',              //총 견적금액 단위
            detailFile: '',             //견적세부파일
            etcFile: '',                //기타파일

            currList : [],              //견적금액 단위 코드값
            esmtPossible: true          //견적서 제출 버튼 노출 플래그
        };
    },
    mixins: [mixin],
    beforeMount() {
        this.biNo = this.$store.state.bidDetailData;
    },
    async mounted() {
        //nxTSPKI 초기화
        nxTSPKI.init(true);

        await this.checkBid();
        await this.fnCodeInit();
        await this.retrieve();

        let currDate = new Date();
        let currDateTime = currDate.getTime();
        let estCloseDate = new Date(this.data.estCloseDate);
        let estCloseTime = estCloseDate.getTime();
        
        if(estCloseTime < currDateTime){
            this.esmtPossible = false;
        }
    },
    beforeRouteLeave(to, from, next){
        this.$store.commit('setBidDetailData', null);
        next();
    },
    watch:{
        amt(val){
            let amt = val.toString().replace(/[^-0-9]/g, '');
            this.amt = amt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            this.fnConvertToKoreanNumber(amt);
        }
    },
    methods: {
        async fnCodeInit() {

            this.$store.commit('loading');
			await this.$http.post('/api/v1/bidPtStatus/currList', {}).then((response) => {
				if(response.data.code == 'OK'){
					this.currList = response.data.data;
				}else{
					this.$swal({
						type: "warning",
						text: response.data.msg,
					});
				}
			}).finally(() => {
				this.$store.commit("finish");
                if(this.esmtCurr == ''){
                    this.esmtCurr = this.currList[0].codeVal
                }
			});

        },
        //업체 공고확인
        async checkBid() {
            let params = {
                biNo : this.biNo
            }
            this.$http.post("/api/v1/bidPtStatus/checkBid", params);
        },
        //데이터 상세 조회
        async retrieve() {
            let searchParams = {
                biNo : this.biNo
            }

            this.$store.commit('loading');
            await this.$http.post('/api/v1/bidPtStatus/bidStatusDetail', searchParams).then((response) => {
            if(response.data.code == 'OK'){
                this.data = response.data.data;
            }else{
                this.$swal({
                    type: "warning",
                    text: response.data.msg,
                });
            }
            }).finally(() => {
                this.$store.commit("finish");

                let cookieNm = this.biNo+"_"+this.$store.state.loginInfo.custCode;
                let cookie = this.$cookie.get(cookieNm);
                cookie = JSON.parse(cookie);
                
                if(cookie != null){
                    this.submitData = cookie.submitData;
                    this.esmtCurr = cookie.esmtCurr;
                    this.fnTotalAmt();
                }else{
                    this.submitData = Object.assign([], this.data.specInput);
                }
            });
            
        },
        //필수요소 값 확인
        validationCheck() {
            //파일 등록
            if(this.data.insMode == '1'){
                if(this.esmtCurr == ''){
                    this.$swal({
                        type: "warning",
                        text: "견적금액 단위를 선택해주세요.",
                    });

                    return false;
                }
                if(this.amt == ''){
                    this.$swal({
                        type: "warning",
                        text: "견적금액을 입력해주세요.",
                    });

                    return false;
                }
                if(this.detailFile == ''){
                    this.$swal({
                        type: "warning",
                        text: "견적내역파일을 등록해주세요.",
                    });

                    return false;
                }

                return true;

            //직접 입력
            }else if(this.data.insMode == '2'){
                let bool = false;
                for(let i = 0 ; i < this.submitData.length ; i++){
                    let esmtUc = this.submitData[i].esmtUc;
                    if(cmmn.isEmpty(esmtUc)){
                        bool = true;
                        break;
                    }
                }

                if(bool){
                    this.$swal({
                        type: "warning",
                        text: "품목의 견적금액을 모두 입력해주세요",
                    });

                    return false;
                }

                if(this.esmtCurr == ''){
                    this.$swal({
                        type: "warning",
                        text: "견적금액 단위를 선택해주세요.",
                    });

                    return false;
                }

                return true;
                
            }
        },
        //투찰 전 체크
        fnCheck(){
            if(!this.validationCheck()){
                return false;
            }

            this.$swal({
                type: "info",
                text: "견적서를 제출하시겠습니까?",                
                showCancelButton: true,
                confirmButtonText: '투찰',
                cancelButtonText: '취소',
            }).then((result) => {
                if(result.value){
                    this.signData();
                }
            });
        },
        //내용직접입력 임시저장
        fnTempSave(){
            if(!this.validationCheck()){
                return false;
            }
            
            let cookieNm = this.biNo+"_"+this.$store.state.loginInfo.custCode;
            let params = {
                submitData : this.submitData,
                esmtCurr : this.esmtCurr,
                insModeCode : this.data.insMode
            }
            let json = JSON.stringify(params);

            this.$cookie.delete(cookieNm);
            this.$cookie.set(cookieNm, json, { expires: 7 });       //7일간만 보관
            
        }, 
        //직접입력 총 금액 견적
        fnTotalAmt() {
            let total = 0;
            let submitData = Object.assign([], this.submitData);
            let vm = this;

            for(let i = 0 ; i < submitData.length ; i++){
                let esmtUc = submitData[i].esmtUc;
                if(esmtUc != null && esmtUc != undefined){
                    esmtUc = esmtUc.replace(/[^-0-9]/g, '');
                    total += Number(esmtUc);

                    submitData[i].esmtUc = vm.fnRoundComma(esmtUc);
                }
            }
            
            this.submitData = submitData;
            this.totalAmt = this.fnRoundComma(total);

            this.$forceUpdate();
        },
        //투찰
        bidSubmitting(formData){

            this.$store.commit("loading");
            this.$http.post("/api/v1/bidPtStatus/bidSubmitting", formData).then((response) => {
                if (response.data.code == "OK") {
                    this.$swal({
                        type: "info",
                        text: "투찰했습니다.",
                    });
                    this.fnMovePage('partnerBidStatus');
                } else {
                    console.log(response.data.msg);
                    this.$swal({
                        type: "warning",
                        text: "투찰 중 오류가 발생했습니다.",
                    });
                }
            })
            .finally(() => {
                this.$store.commit("finish");
            });

        },
        fileInputChange(event){//견적세부파일
            this.detailFile = event.target.files[0];
        },
        fileInput2Change(event){//기타파일
            this.etcFile = event.target.files[0];
        },
        fnCalcOrderUc(esmtUc, orderQty){
            if(!cmmn.isEmpty(esmtUc) && !cmmn.isEmpty(orderQty)){
                
                let esmtReplace = esmtUc.replace(/[^-0-9]/g, '');
                let result = this.fnRoundComma(esmtReplace / orderQty);

                return result;
            }else{
                return '';
            }
        },
        signData(){//인증서 서명

            let vm = this;
            let currDate = new Date();
            let currDateTime = currDate.getTime();
            let estCloseDate = new Date(this.data.estCloseDate);
            let estCloseTime = estCloseDate.getTime();
            
            if(estCloseTime < currDateTime){
                this.$swal({
                    type: "warning",
                    text: "견적제출시간이 아닙니다. 제출마감일시를 확인해주세요.",
                });
                return false;
            }
            
            let cookieNm = this.biNo+"_"+this.$store.state.loginInfo.custCode;
            this.$cookie.delete(cookieNm);

            var formData = new FormData();

            let submitData = Object.assign([], this.submitData);

            var itemData = '';
            for(let i = 0 ; i < submitData.length ; i++){
                let esmtUc = submitData[i].esmtUc;
                if(esmtUc != null && esmtUc != undefined){
                    if(i > 0 && itemData.length > 0){
                        itemData += '$';
                    }
                    itemData += i + '=' + esmtUc.replace(/[^-0-9]/g, '');
                    submitData[i].esmtUc = esmtUc.replace(/[^-0-9]/g, '');
                }
            }

            this.submitData = submitData;

            var totalPrice = '';
            if(this.data.insMode == '2'){//직접입력
                totalPrice = itemData;

            }else{//파일입력
                totalPrice = this.amt.replace(/[^-0-9]/g, '');
            }

            nxTSPKI.signData(totalPrice, //암호화 하는 데이터
              {ssn:true}, //인증서 정보 포함 여부
              function(res){//인증후 콜백
                if(res.code ==0){//인증완료

                  let params = {
                      biNo : vm.biNo
                  ,   submitData : vm.submitData
                  ,   amt : res.data.signedData
                  ,   certInfo : res.data.certInfo
                  ,   esmtCurr : vm.esmtCurr 
                  ,   insModeCode : vm.data.insMode
                  }

                  formData.append('data', JSON.stringify(params));
                  formData.append('detailFile', vm.detailFile);
                  formData.append('etcFile', vm.etcFile);

                  vm.bidSubmitting(formData);

                  
                }else{//실패
                  vm.$swal({
                      type: "warning",
                      text: res.errorMessage,
                  });
              }}
            )
        },
        fnAlert(){
            this.$swal({
                type: "warning",
                text: "재입찰 대상이 아닙니다.",
            });
        },
        //파일등록 견적 총 금액 한글표기
        fnConvertToKoreanNumber(number) {
            const koreanNumber = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
            const tenUnit = ['', '십', '백', '천'];
            const tenThousandUnit = ['해', '경', '조', '억', '만', ''];
            const unit = 10000;

            let answer = '';

            while (number > 0) {
                const mod = number % unit;
                const modToArray = mod.toString().split('');
                const length = modToArray.length - 1;

                const modToKorean = modToArray.reduce((acc, value, index) => {
                    const valueToNumber = +value;
                    if (!valueToNumber) return acc;
                    // 단위가 십 이상인 '일'글자는 출력하지 않는다. ex) 일십 -> 십
                    const numberToKorean = koreanNumber[valueToNumber];
                    return `${acc}${numberToKorean}${tenUnit[length - index]}`;
                }, '');

                answer = `${modToKorean}${tenThousandUnit.pop()} ${answer}`;
                number = Math.floor(number / unit);
            }

            this.amtHangle = answer;
        }
    }
};
</script>