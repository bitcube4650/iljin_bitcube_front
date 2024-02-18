<template>
<!-- 본문 -->
<div class="conRight">
	<!-- conHeader -->
	<div class="conHeader">
		<ul class="conHeaderCate">
			<li>업체정보</li>
			<li>업체{{ this.$route.params.id == null ? '등록' : '수정' }}</li>
		</ul>
	</div>
	<!-- //conHeader -->
	<!-- contents -->
	<div class="contents">
		<div class="formWidth">
			<div v-if="this.$route.params.id == null" class="conTopBox">
				<ul class="dList">
					<li><div>등록이 완료되면 업체 관리자에게 이메일로 등록 되었음을 알려드립니다.</div></li>
					<li><div>회원가입 <span class="star">*</span> 부분은 필수 입력 정보 입니다.</div></li>
				</ul>
			</div>
			<h3 class="h3Tit mt50">회사 정보</h3>
			<div class="formWidth">
				<div class="boxSt mt20">
					<div v-if="this.$route.params.id == null" class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">승인 계열사</div>
						<div class="width100">
							일진건설
							<a href="#" @click="$refs.otherCustPop.initModal()" data-toggle="modal" data-target="#otherCustPop" class="btnStyle btnSecondary ml50" title="타계열사 업체">타계열사 업체</a>
							<!-- 툴팁 -->
							<i class="fas fa-question-circle toolTipSt toolTipMd ml5">
								<div class="toolTipText" style="width:320px">
									<ul class="dList">
										<li><div>등록하실 업체가 다른 계열사에 이미 등록되어 있다면 [타계열사 업체]를 조회하여 등록하십시오.</div></li>
									</ul>
								</div>
							</i>
							<!-- //툴팁 -->
						</div>
					</div>
					<div v-if="this.$route.params.id == null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 1</div>
						<div class="flex align-items-center width100">
                        <input type="text" v-model="detail.custTypeNm1" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <input type="hidden" v-model="detail.custTypeCode1"/>
							<a hhref="#" @click="itemPop='custType1';$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
						</div>
					</div>
					<div v-if="this.$route.params.id == null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="flex align-items-center width100">
                        <input type="text" v-model="detail.custTypeNm2" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <input type="hidden" v-model="detail.custTypeCode1"/>
							<a hhref="#" @click="itemPop='custType2';$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
						</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">승인 계열사</div>
						<div class="width100">일진건설</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 1</div>
						<div class="width100">공공장소 청소 및 유사 서비스업 품목류</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="width100">사업 시설 유지관리 및 고용 서비스업 품목류</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">회사명 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.custName" class="inputStyle maxWidth-max-content" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">대표자명 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.presName" class="inputStyle maxWidth-max-content" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">사업자등록번호 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.regnum1" @keypress="onlyNumber" maxlength="3" class="inputStyle maxWidth-max-content" placeholder="">
							<span style="margin:0 10px">-</span>
							<input type="text" v-model="detail.regnum2" @keypress="onlyNumber" maxlength="2" class="inputStyle maxWidth-max-content" placeholder="">
							<span style="margin:0 10px">-</span>
							<input type="text" v-model="detail.regnum2" @keypress="onlyNumber" maxlength="5" class="inputStyle maxWidth-max-content" placeholder="">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">법인번호 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.presJumnNo1" @keypress="onlyNumber" maxlength="6" class="inputStyle maxWidth-max-content" placeholder="">
							<span style="margin:0 10px">-</span>
							<input type="text" v-model="detail.presJumnNo2" @keypress="onlyNumber" maxlength="7" class="inputStyle maxWidth-max-content" placeholder="">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">자본금 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.capital" class="inputStyle maxWidth-max-content" placeholder="ex) 10,000,000">
							<div class="ml10">원</div>
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">설립년도 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.foundYear" class="inputStyle maxWidth-max-content" placeholder="ex) 2021">
							<div class="ml10">년</div>
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">대표전화 <span class="star">*</span></div>
						<div class="width100">
							<input type="text" v-model="detail.tel" class="inputStyle maxWidth-max-content"  placeholder="">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">팩스</div>
						<div class="width100">
							<input type="text" v-model="detail.fax" class="inputStyle maxWidth-max-content" placeholder="">
						</div>
					</div>
					<div class="flex mt10">
						<div class="formTit flex-shrink0 width170px">회사주소 <span class="star">*</span></div>
						<div class="width100">
							<div class="flex align-items-center width100">
								<input type="text" v-model="detail.zipcode" class="inputStyle maxWidth-max-content readonly" placeholder="주소 조회 클릭" readonly>
								<a href="#" @click="$refs.addrPop.initModal()" data-toggle="modal" data-target="#addrPop" class="btnStyle btnSecondary flex-shrink0 ml10" title="주소 조회">주소 조회</a>
							</div>
							<div class="mt5"><input type="text" v-model="detail.addr" class="inputStyle readonly" placeholder="" readonly></div>
							<div class="mt5"><input type="text" v-model="detail.addrDetail" class="inputStyle" placeholder="상세 주소 입력"></div>
						</div>
					</div>
					<div class="flex mt10">
						<div class="formTit flex-shrink0 width170px">사업자등록증 <span class="star">*</span></div>
						<div class="width100">
							<!-- 다중파일 업로드 -->
							<div class="upload-boxWrap">
								<div class="upload-box">
									<input type="file" id="file-input">
									<div class="uploadTxt">
										<i class="fa-regular fa-upload"></i>
										<div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
									</div>
								</div>
								<div class="uploadPreview" id="preview">
								</div>
							</div>
							<!-- //다중파일 업로드 -->
						</div>
					</div>
					<div class="flex mt10">
						<div class="formTit flex-shrink0 width170px">첨부파일 <span class="star">*</span>
							<!-- 툴팁 -->
							<i class="fas fa-question-circle toolTipSt ml5">
								<div class="toolTipText" style="width:420px">
									<ul class="dList">
										<li><div>첨부파일은 간단한 업체 소개 자료 등의 파일을 첨부해 주십시오.</div></li>
										<li><div>1개  이상의 파일을 첨부하실 경우 Zip으로 압축하여 첨부해 주십시오</div></li>
										<li><div>파일은 10M 이상을 초과할 수 없습니다.</div></li>
									</ul>
								</div>
							</i>
							<!-- //툴팁 -->
						</div>
						<div class="width100">
							<!-- 다중파일 업로드 -->
							<div class="upload-boxWrap">
								<div class="upload-box">
									<input type="file" id="file-input2">
									<div class="uploadTxt">
										<i class="fa-regular fa-upload"></i>
										<div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
									</div>
								</div>
								<div class="uploadPreview" id="preview2">
								</div>
							</div>
							<!-- //다중파일 업로드 -->
						</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">상태</div>
						<div class="width100">정상</div>
					</div>
				</div>
			</div>
			
			<h3 v-if="this.$route.params.id != null" class="h3Tit mt50">계열사 관리항목</h3>
			<div v-if="this.$route.params.id != null" class="boxSt mt20">
				<div class="flex align-items-center">
					<div class="formTit flex-shrink0 width170px">업체등급</div>
					<div class="width100">
						<input type="radio" name="bm2" value="" id="bm2_1" class="radioStyle" checked=""><label for="bm2_1">A등급</label>
						<input type="radio" name="bm2" value="" id="bm2_2" class="radioStyle"><label for="bm2_2">B등급</label>
						<input type="radio" name="bm2" value="" id="bm2_3" class="radioStyle"><label for="bm2_3">C등급</label>
						<input type="radio" name="bm2" value="" id="bm2_4" class="radioStyle"><label for="bm2_4">D등급</label>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">D업체평가</div>
					<div class="width100">
						<textarea class="textareaStyle boxOverflowY" onkeydown="resize(this)" onkeyup="resize(this)" placeholder=""></textarea>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">관리단위</div>
					<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
				</div>
			</div>

			<h3 class="h3Tit mt50">관리자 정보</h3>
            <div class="boxSt mt20">
                <div class="flex align-items-center">
                    <div class="formTit flex-shrink0 width170px">이름 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.userName" class="inputStyle maxWidth-max-content" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">이메일 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.userEmail" class="inputStyle maxWidth-max-content" placeholder="ex) sample@iljin.co.kr">
                    </div>
                </div>
                <div v-if="this.$route.params.id == null" class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">아이디 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="detail.userId" class="inputStyle maxWidth-max-content" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인">
                        <a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
                    </div>
                </div>
                <div v-if="this.$route.params.id == null" class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="password" v-model="detail.userPwd" class="inputStyle maxWidth-max-content" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
                    </div>
                </div>
                <div v-if="this.$route.params.id == null" class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 확인 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="password" v-model="detail.userPwdConfirm" class="inputStyle maxWidth-max-content" placeholder="비밀번호와 동일해야 합니다.">
                    </div>
                </div>
				<div v-if="this.$route.params.id != null" class="flex align-items-center mt10">
					<div class="formTit flex-shrink0 width170px">아이디</div>
					<div class="width100">jameskang</div>
				</div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">휴대폰 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.userHp" class="inputStyle maxWidth-max-content" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">유선전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.userTel" class="inputStyle maxWidth-max-content" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">직급</div>
                    <div class="width100">
                        <input type="text" v-model="detail.userPositic" class="inputStyle maxWidth-max-content" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">부서</div>
                    <div class="width100">
                        <input type="text" nv-model="detail.buseo" class="inputStyle maxWidth-max-content" placeholder="">
                    </div>
                </div>
            </div>

			<div class="text-center mt50">
				<a href="#" @click.prevent="$router.go(-1)" class="btnStyle btnOutline" title="취소">취소</a>
				<a href="#" @click.prevent="validate" class="btnStyle btnPrimary" title="회원가입 신청">{{ this.$route.params.id == null ? '회원가입 신청' : '저장' }}</a>
			</div>
		</div>
	</div>
	<!-- //contents -->

	<!-- 회원가입 신청 -->
	<div class="modal fade modalStyle" id="joinBtn" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div v-if="this.$route.params.id == null" class="alertText2">입력하신 정보로 회원가입이 완료됩니다.<br><br>회원가입 하시겠습니까?</div>
					<div v-if="this.$route.params.id != null" class="alertText2">수정하신 정보로 저장됩니다.<br>저장 시 수정이력도 저장됩니다.<br><br>저장 하시겠습니까?</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click.prevent="save" class="modalBtnCheck" title="신청">{{ this.$route.params.id == null ? '신청' : '저장' }}</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 -->

	<!-- 회원가입 신청 후 -->
	<div class="modal fade modalStyle" id="joinBtn2" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">회원가입을 신청하였습니다.</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 후 -->

    <!-- 타 계열사 업체 팝업 -->
    <other-cust-pop ref="otherCustPop" @callbackFunc="callbackOtherCust"/>

    <!-- 품목 선택 팝업 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem"/>

	<!-- 주소 찾기 팝업 -->
	<addr-pop ref="addrPop" @callbackFunc="callbackAddr"/>
</div>
<!-- //본문 -->
</template>
<script>
import ItemPop from "@/components/ItemPop.vue";
import AddrPop from "@/components/AddrPop.vue";
import OtherCustPop from "../components/OtherCustPop.vue";

export default {
	name: "PartnerManagementCrate",
	components: {
		ItemPop,
    	AddrPop,
		OtherCustPop
	},
	mounted() {
		if (this.$route.params.id) {
			this.retrieve();
		}
	},
	data() {
		return {
			detail: {},
        	itemPop: null,
		};
	},
	methods: {
		onlyNumber(e) {
		if (!/\d/.test(event.key) && event.key !== '.') return e.preventDefault();
		},
		async retrieve() {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/cust/management/'+this.$route.params.id);
				this.detail = response.data;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		validate() {  
			/*
			if (this.detail.custTypeCode1 == '') {
				this.$swal({type: "warning",text: "업체유형 1을 선택해주세요."});
				return;
			}
			if (this.detail.custTypeCode2 == '') {
				this.$swal({type: "warning",text: "업체유형 2을 선택해주세요."});
				return;
			}
			*/
			if (this.detail.custName == null || this.detail.custName == '') {
				this.$swal({type: "warning",text: "회사명을 입력해주세요."});
				return;
			}
			$("#joinBtn").modal("show"); 
		},
		save() {  
			this.$store.commit("loading");
			this.$http
			.post('/api/v1/cust/save', this.detail)
			.then((response) => {
				$("#joinBtn").modal("hide"); 
				if (response.data.code == 'OK') {
					if (this.$route.params.id == null) {
						$("#commonAlertMsg").html('회원가입 완료하였습니다..');
        				this.$store.commit('searchParams',{}); 
					} else {
						$("#commonAlertMsg").html('업체정보를 수정하였습니다.');
					}
      				$("#commonAlertPop").modal("show"); 
        			this.$router.push('/company/partner/management');
				} else {
				this.$swal({type: "warning",text: "회원가입 신청 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		callbackOtherCust(data) {
			this.$forceUpdate()
		},
		callbackItem(data) {
			if (this.itemPop == 'custType1') {
				this.detail.custTypeCode1 = data.itemCode;
				this.detail.custTypeNm1 = data.itemName;
			} else {
				this.detail.custTypeCode2 = data.itemCode;
				this.detail.custTypeNm2 = data.itemName;
			}
			this.$forceUpdate()
		},
		callbackAddr(data) {
			this.detail.zipcode = data.zipcode;
			this.detail.addr = data.addr;
			this.detail.addrDetail = data.addrDetail;
			this.$forceUpdate()
		}
	}
};
</script>