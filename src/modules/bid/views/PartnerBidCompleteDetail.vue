<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>전자입찰</li>
                <li>입찰완료 상세</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">
            <div class="formWidth">
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
                            <a v-for="(file, idx) in data.fileList" :key="idx" @click="downloadFile(file)" class="textUnderline">{{ file.fileNm }}</a><br v-for="(f,i) in data.fileList" :key="i">
                        </div>
                    </div>
                </div>

                <h3 class="h3Tit mt50">{{ custEsmtYnTitle }}</h3>
                <div class="conTopBox mt20">
                    <ul class="dList">
                        <li class="textHighlight">
                            <div>{{ custEsmtYnContent }}</div>
                        </li>
                    </ul>
                </div>

                <template v-if="data.ingTag == 'A5'">
                <div class="boxSt mt20" v-if="data.insMode == '1'">
                    <div class="flex align-items-center width100">
                        <div class="formTit flex-shrink0 width170px">견적금액 <span class="star">*</span></div>
                        <div class="flex align-items-center width100">
                            <select class="selectStyle maxWidth140px" disabled>
                                <option value="">{{ data.custList[0].esmtCurr }}</option>
                            </select>
                            <input type="text" class="inputStyle readonly maxWidth-max-content ml10" :value="fnRoundComma(data.custList[0].esmtAmt)" readonly>
                        </div>
                    </div>
                    <div class="flex mt20">
                        <div class="formTit flex-shrink0 width170px">견적내역파일</div>
                        <div class="width100">
                            <a @click="fnCustSpecFileDown(data.custList[0].fileNm, data.custList[0].filePath)" class="textUnderline">{{ data.custList[0].fileNm }}</a>
                        </div>
                    </div>
                    <div class="flex mt20">
                        <div class="formTit flex-shrink0 width170px">기타첨부</div>
                        <div class="width100">
                            <a @click="fnCustSpecFileDown(data.custList[0].etcFile, data.custList[0].etcPath)" class="textUnderline">{{ data.custList[0].etcFile }}</a>
                        </div>
                    </div>
                    <div class="flex mt20" v-if="data.ingTag == 'A5' && data.custList[0].succYn == 'Y'">
                        <div class="formTit flex-shrink0 width170px">낙찰 추가 합의사항</div>
                        <div class="width100">{{ data.addAccept }}</div>
                    </div>
                </div>
                <div class="boxSt mt20" v-if="data.insMode == '2'">
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
                                <th>견적단가</th>
                                <th class="end">견적금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(spec, index) in data.custList[0].bidSpec" :key="index">
                                <td class="text-left">{{ spec.name }}</td>
                                <td class="text-left">{{ spec.ssize }}</td>
                                <td class="text-right">{{ spec.orderQty | numberWithCommas }}</td>
                                <td>{{ spec.unitcode }}</td>
                                <td><input type="text" class="inputStyle inputSm text-right readonly" :value="fnRoundComma(spec.esmtUc/spec.orderQty)" readonly></td>
                                <td class="end"><input type="text" class="inputStyle inputSm text-right readonly" :value="fnRoundComma(spec.esmtUc)" readonly></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex align-items-center justify-space-end mt10">
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 mr20">총 견적금액</div>
                            <div class="flex align-items-center width100">
                                <select class="selectStyle maxWidth140px" disabled>
                                    <option value="">{{ data.custList[0].esmtCurr }}</option>
                                </select>
                                <input type="text" class="inputStyle readonly maxWidth-max-content ml10" :value="fnRoundComma(data.custList[0].esmtAmt)" readonly>
                            </div>
                        </div>
                    </div>

                    <div class="flex mt20">
                        <div class="formTit flex-shrink0 width170px">기타첨부</div>
                        <div class="width100">
                            <a @click="fnCustSpecFileDown(data.custList[0].etcFile, data.custList[0].etcPath)" class="textUnderline">{{ data.custList[0].etcFile }}</a>
                        </div>
                    </div>
                    <div class="flex mt20" v-if="data.ingTag == 'A5' && data.custList[0].succYn == 'Y'">
                        <div class="formTit flex-shrink0 width170px">낙찰 추가 합의사항</div>
                        <div class="width100">{{ data.addAccept }}</div>
                    </div>
                </div>
                </template>
                <template v-else-if="data.ingTag == 'A7'">
                    <div class="boxSt mt20">
                        <div class="flex align-items-center width100">
                            <div class="formTit flex-shrink0 width170px">유찰사유</div>
                            <div class="width100">{{ data.whyA7 }}</div>
                        </div>
                    </div>
                </template>

                <div class="text-center mt50">
                    <a @click="fnBack" class="btnStyle btnOutline" title="목록">목록</a>
                    <a v-if="data.ingTag == 'A5' && data.custList[0].succYn == 'Y' && data.custList[0].esmtYn == '2'" data-toggle="modal" data-target="#biddingCheck" class="btnStyle btnPrimary" title="낙찰확인">낙찰확인</a>
                </div>
            </div>
        </div>
        <!-- //contents -->

        <!-- 낙찰확인 -->
        <div class="modal fade modalStyle" id="biddingCheck" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">본 입찰의 업체선정 됨을 확인합니다.<br>낙찰된 건에 대해 승인하시겠습니까?</div>
                        <div class="modalFooter">
                            <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a @click="fnSave" class="modalBtnCheck" data-toggle="modal" title="승인">승인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //낙찰확인 -->
    </div>
    <!-- //본문 -->
</template>
<script>
import cmmn from "../../../../public/js/common.js";

export default {
    name: "partnerBidCompleteDetail",
    components: {
       
    },
    data() {
        return {
            biNo : ''
		,   data : {}
        ,   custEsmtYnTitle : ''
        ,   custEsmtYnContent : ''
        }
    },
    filters:{
		ftBiMode(val){
			if(val == 'A'){ return '지명경쟁입찰'}
			else if(val == 'B'){ return '일반경쟁입찰'}
		},
		ftInsMode(val){
			if(val == '1'){ return '파일등록'}
			else if(val == '2'){ return '직접입력'}
		},
		numberWithCommas(val) {
			if(!val) return '';
			else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		ftFileFlag(val){
			if(val == '0'){ return '대내용'}
			else if(val == '1'){ return '대외용'}
		},
	},
    methods: {
        //협력사 입찰완료 상세 조회
        async fnDataDetail(){
			let searchParams = {
				biNo : this.biNo
			}

			this.$store.commit('loading');
			await this.$http.post('/api/v1/bidComplete/partnerDetail', searchParams).then((response) => {
				if(response.data.code != '999'){
					this.data = response.data.data;
				}else{
					this.$swal({
						type: "warning",
						text: response.data.msg,
					});
				}
			}).finally(() => {
				this.$store.commit("finish");

                if(this.data.ingTag == 'A5' && this.data.custList[0].succYn == 'Y'){
                    this.custEsmtYnTitle = '낙찰 정보'
                    this.custEsmtYnContent = '입찰에 선정 되셨습니다. 입찰에 참여하셨던 내역 정보를 확인해 주십시오.'
                }else if(this.data.ingTag == 'A5' && this.data.custList[0].succYn == 'N'){
                    this.custEsmtYnTitle = '견적 정보'
                    this.custEsmtYnContent = '입찰에 선정되지 못했습니다.'
                }else if(this.data.ingTag == 'A7'){
                    this.custEsmtYnTitle = '유찰'
                    this.custEsmtYnContent = '아쉽게도 이번 입찰에는 선정되지 못했습니다. 아래 유찰사유 내용을 확인하십시오.'
                }
                
			});
			
		},
		//목록으로
		fnBack(){
			this.$router.go(-1);
		},
		//파일 다운로드
		async downloadFile(fileInfo){

			try {
				this.$store.commit('loading');
				const response = await this.$http.post(
					"/api/v1/bidComplete/fileDown",
					{ fileId: fileInfo.filePath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
					{ responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
				);

				// 파일 다운로드를 위한 처리
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", fileInfo.fileNm); // 다운로드될 파일명 설정
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				this.$store.commit('finish');
			} catch (error) {
				console.error("Error downloading file:", error);
				this.$store.commit('finish');
			}
		},
		//파일 다운로드 파라미터 셋팅
		fnCustSpecFileDown(fileNm, filePath){

			if(!cmmn.isEmpty(fileNm) && !cmmn.isEmpty(filePath)){
				let fileInfo = {
					filePath : filePath
				,   fileNm : fileNm
				}

				this.downloadFile(fileInfo);
			}
		},
        //소숫점처리 및 콤마
		fnRoundComma(number){
			if(cmmn.isEmpty(number)) return ''
			else {
                number = Math.round(number);
				return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
        //낙찰확인
        fnSave(){
            let params = {
				biNo : this.biNo
            ,   esmtYn : '3'
			}
			this.$store.commit("loading");
			this.$http.post("/api/v1/bidComplete/updBiCustFlag", params).then((response) => {
				$("#biddingCheck").modal("hide");
				if(response.data.code != '999'){
					this.$swal({
						type: "info",
						text: "승인하였습니다."
					});
                    this.fnBack();
				}else{
					this.$swal({
						type: "warning",
						text: response.data.msg,
					});
				}
			}).finally(()=>{
				$("#biddingCheck").modal("hide");
				this.$store.commit("finish");
			});
        }
    },
    beforeMount() {
        this.biNo = this.$route.params.biNo;
    },
    mounted() {
        this.fnDataDetail();
    },
};
</script>