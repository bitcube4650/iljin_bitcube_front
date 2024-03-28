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
							{{ $store.state.loginInfo.custName }}
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
						<div class="formTit flex-shrink0 width170px">업체유형 1 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
                        <input type="text" v-model="detail.custTypeNm1" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <input type="hidden" v-model="detail.custType1"/>
						<a hhref="#" @click="itemPop='custType1';$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
						</div>
					</div>
					<div v-if="this.$route.params.id == null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="flex align-items-center width100">
                        <input type="text" v-model="detail.custTypeNm2" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <input type="hidden" v-model="detail.custType1"/>
							<a hhref="#" @click="itemPop='custType2';$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
						</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">승인 계열사</div>
						<div class="width100">{{ detail.interrelatedNm }}</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 1</div>
						<div class="width100">{{ detail.custType1 }}</div>
					</div>
					<div v-if="this.$route.params.id != null" class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="width100">{{ detail.custType2 }}</div>
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
							<input type="text" v-model="detail.regnum3" @keypress="onlyNumber" maxlength="5" class="inputStyle maxWidth-max-content" placeholder="">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">법인번호 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.presJuminNo1" @keypress="onlyNumber" maxlength="6" class="inputStyle maxWidth-max-content" placeholder="">
							<span style="margin:0 10px">-</span>
							<input type="text" v-model="detail.presJuminNo2" @keypress="onlyNumber" maxlength="7" class="inputStyle maxWidth-max-content" placeholder="">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">자본금 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.capital" @keypress="onlyNumber" maxlength="11" class="inputStyle maxWidth-max-content" placeholder="ex) 10,000,000">
							<div class="ml10">원</div>
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">설립년도 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<input type="text" v-model="detail.foundYear" @keypress="onlyNumber" maxlength="4" class="inputStyle maxWidth-max-content" placeholder="ex) 2021">
							<div class="ml10">년</div>
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">대표전화 <span class="star">*</span></div>
						<div class="width100">
							<input type="text" v-model="detail.tel" maxlength="13" class="inputStyle maxWidth-max-content"  placeholder="">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">팩스</div>
						<div class="width100">
							<input type="text" v-model="detail.fax" maxlength="13" class="inputStyle maxWidth-max-content" placeholder="">
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
									<input type="file" ref="uploadedRegnumFile" id="file-input" @change="changeRegnumFile">
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
						<div class="formTit flex-shrink0 width170px">첨부파일
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
									<input type="file" ref="uploadedbfile" id="file-input2" @change="changebfile">
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
						<input type="radio" v-model="detail.custLevel" value="A" id="chkA" class="radioStyle"><label for="chkA">A등급</label>
						<input type="radio" v-model="detail.custLevel" value="B" id="chkB" class="radioStyle"><label for="chkB">B등급</label>
						<input type="radio" v-model="detail.custLevel" value="C" id="chkC" class="radioStyle"><label for="chkC">C등급</label>
						<input type="radio" v-model="detail.custLevel" value="D" id="chkD" class="radioStyle"><label for="chkD">D등급</label>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">D업체평가</div>
					<div class="width100">
						<textarea class="textareaStyle boxOverflowY" v-model="detail.careContent"></textarea>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">관리단위</div>
					<div class="width100"><input type="text" class="inputStyle" v-model="detail.custValuation"></div>
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
                        <input type="text" v-model="detail.userId" @keypress="chgUserId" class="inputStyle maxWidth-max-content" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인">
                        <a href="#" @click.prevent="idcheck" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
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
					<div class="width100">{{ detail.userId }}</div>
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
                        <input type="text" v-model="detail.userPosition" class="inputStyle maxWidth-max-content" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">부서</div>
                    <div class="width100">
                        <input type="text" v-model="detail.userBuseo" class="inputStyle maxWidth-max-content" placeholder="">
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
					<div v-if="this.$route.params.id == null" class="alertText2">입력하신 정보로 저장됩니다.<br>저장 시 수정이력도 저장됩니다.<br><br>저장 하시겠습니까?</div>
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

    <!-- 타 계열사 업체 팝업 -->
    <other-cust-pop ref="otherCustPop" @callbackFunc="callbackOtherCust" :custType="otherCustType"/>

    <!-- 품목 선택 팝업 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem"/>

	<!-- 주소 찾기 팝업 -->
	<addr-pop ref="addrPop" @callbackFunc="callbackAddr"/>
</div>
<!-- //본문 -->
</template>
<script>
import fileInput from "../../../../public/js/fileInput.js"
import ItemPop from "@/components/ItemPop.vue";
import AddrPop from "@/components/AddrPop.vue";
import OtherCustPop from "../components/OtherCustPop.vue";

export default {
	name: "PartnerManagementCrate",
	components: {
		ItemPop,
    	AddrPop,
		OtherCustPop,
	},
	mounted() {
		if (this.$route.params.id) {
			this.retrieve();
		} else {
			this.detail.interrelatedCustCode = this.$store.state.loginInfo.custCode;
		}
		//파일첨부
		fileInput.applyFile('#fileRegnumFile','#previewRegnumFile');
		fileInput.applyFile('#filebfile','#previewbfile');
	},
	data() {
		return {
			detail: {},
        	itemPop: null,
			otherCustType: null,
			regnumFile : null,  // 업로드한 파일
			regnumFileCnt : 0,  // 업로드한 파일 수
			regnumFileSize : 0, // 파일크기
			bfile : null,       // 업로드한 파일
			bfileCnt : 0,       // 업로드한 파일 수
			bfileSize : 0       // 파일크기
		};
	},
	methods: {
		onlyNumber(e) {
		if (!/\d/.test(event.key) && event.key !== '.') return e.preventDefault();
		},
		async retrieve(custCode) {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/cust/management/'+(custCode ? custCode : this.$route.params.id));
				this.detail = response.data;
				if (custCode) {
					this.detail.custCode = null;
				}
				//기존에 첨부되어있는 파일 나타내기
				if(this.detail.regnumFile != null && this.detail.regnumPath != null){
					var preview = document.querySelector('#preview');
					var fileName = this.detail.regnumFile;
					// 현재 시간의 타임스탬프 (13자리)
  					var timestamp = Date.now();
					preview.innerHTML += `
										<p id=${timestamp}>
											${fileName}
											<button data-index=${timestamp} id='removeFile' class='file-remove'>삭제</button>
										</p>`;

					//삭제 버튼 클릭시 기존 첨부된 파일 정보 삭제
					$('#removeFile').click(function(){
						this.detail.regnumFile = null;
						this.detail.regnumPath = null;

					}.bind(this));
				}
				if(this.detail.bfile != null && this.detail.bfilePath != null){
					var preview = document.querySelector('#preview2');
					var fileName = this.detail.bfile;
					// 현재 시간의 타임스탬프 (13자리)
  					var timestamp = Date.now();
					preview.innerHTML += `
										<p id=${timestamp}>
											${fileName}
											<button data-index=${timestamp} id='removeFile2' class='file-remove'>삭제</button>
										</p>`;

					//삭제 버튼 클릭시 기존 첨부된 파일 정보 삭제
					$('#removeFile2').click(function(){
						this.detail.bfile = null;
						this.detail.bfilePath = null;

					}.bind(this));
				}
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		chgUserId() {
			this.detail.idcheck = false;
		},
		idcheck() {
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "아이디를 입력해주세요."});
				return;
			}
			this.$store.commit('loading');
			this.$http
			.post('/api/v1/couser/idcheck', this.detail)
			.then((response) => {
				$("#joinBtn").modal("hide"); 
				if (response.data.code == 'OK') {
					this.$swal({type: "info",text: "입력한 아이디를 사용할 수 있습니다."});
					this.detail.idcheck = true;
				} else {
					this.$swal({type: "warning",text: "입력한 아이디를 사용할 수 없습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		validate() {  
			if (this.detail.custType1 == null || this.detail.custType1 == '') {
				this.$swal({type: "warning",text: "업체유형1을 선택해주세요."});
				return;
			}
			if (this.detail.custName == null || this.detail.custName == '') {
				this.$swal({type: "warning",text: "회사명을 입력해주세요."});
				return;
			}
			if (this.detail.presName == null || this.detail.presName == '') {
				this.$swal({type: "warning",text: "대표자명을 입력해주세요."});
				return;
			}
			if (this.detail.regnum1 == null || this.detail.regnum1 == '' || this.detail.regnum2 == null || this.detail.regnum2 == '' || this.detail.regnum3 == null || this.detail.regnum3 == '') {
				this.$swal({type: "warning",text: "사업자등록번호를 입력해주세요."});
				return;
			}
			if (this.detail.regnum1.length != 3 || this.detail.regnum2.length != 2 || this.detail.regnum3.length != 5) {
				this.$swal({type: "warning",text: "사업자등록번호를 정확히 입력해주세요."});
				return;
			}
			if (this.detail.presJuminNo1 == null || this.detail.presJuminNo1 == '' || this.detail.presJuminNo2 == null || this.detail.presJuminNo2 == '') {
				this.$swal({type: "warning",text: "법인번호를 입력해주세요."});
				return;
			}
			if (this.detail.presJuminNo1.length != 6 || this.detail.presJuminNo2.length != 7) {
				this.$swal({type: "warning",text: "법인번호를 정확히 입력해주세요."});
				return;
			}
			if (this.detail.capital == null || this.detail.capital == '') {
				this.$swal({type: "warning",text: "자본금을 입력해주세요."});
				return;
			}
			if (this.detail.foundYear == null || this.detail.foundYear == '') {
				this.$swal({type: "warning",text: "설립년도를 입력해주세요."});
				return;
			}
			if (this.detail.foundYear.length != 4) {
				this.$swal({type: "warning",text: "설립년도를 정확히 입력해주세요."});
				return;
			}
			if (this.detail.tel == null || this.detail.tel == '') {
				this.$swal({type: "warning",text: "대표전화를 입력해주세요."});
				return;
			}
			if (this.detail.addr == null || this.detail.addr == '') {
				this.$swal({type: "warning",text: "회사주소를 입력해주세요."});
				return;
			}
			if (this.detail.userName == null || this.detail.userName == '') {
				this.$swal({type: "warning",text: "이름을 입력해주세요."});
				return;
			}
			if (this.detail.userEmail == null || this.detail.userEmail == '') {
				this.$swal({type: "warning",text: "이메일을 입력해주세요."});
				return;
			}
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "아이디를 입력해주세요."});
				return;
			}
			if (this.$route.params.id == null) {
				if (this.detail.idcheck == false) {
					this.$swal({type: "warning",text: "아이디 중복확인을 확인해주세요."});
					return;
				}
				if (this.detail.userPwd == null || this.detail.userPwd == '') {
					this.$swal({type: "warning",text: "비밀번호를 입력해주세요."});
					return;
				}
				if (this.detail.userPwdConfirm == null || this.detail.userPwdConfirm == '') {
					this.$swal({type: "warning",text: "비밀번호 확인을 입력해주세요."});
					return;
				}
				if (this.detail.userPwd != this.detail.userPwdConfirm) {
					this.$swal({type: "warning",text: "비밀번호를 정확히 입력해주세요."});
					return;
				}
			}
			if (this.detail.userHp == null || this.detail.userHp == '') {
				this.$swal({type: "warning",text: "휴대폰을 입력해주세요."});
				return;
			}
			if (this.detail.userTel == null || this.detail.userTel == '') {
				this.$swal({type: "warning",text: "유선전화를 입력해주세요."});
				return;
			}
			$("#joinBtn").modal("show"); 
		},
		save() {  
			this.$store.commit("loading");
			var formData = new FormData();

			var regnumFileRemoveCnt = $('#preview .file-remove').length;//올려진 파일을 삭제하는 버튼 개수
			if(this.regnumFileCnt == 0 || regnumFileRemoveCnt == 0){//업로드 한 파일이 없는 경우
				this.$refs.uploadedRegnumFile.value = null;
				this.regnumFile = null;
			}
			var bfileRemoveCnt = $('#preview2 .file-remove').length;//올려진 파일을 삭제하는 버튼 개수
			if(this.bfileCnt == 0 || bfileRemoveCnt == 0){//업로드 한 파일이 없는 경우
				this.$refs.uploadedbfile.value = null;
				this.bfile = null;
			}

    		formData.append('regnumFile', this.regnumFile);
    		formData.append('bfile', this.bfile);
			formData.append('data', new Blob([JSON.stringify(this.detail)], { type: 'application/json' }));

			this.$http
			.post('/api/v1/cust/save', formData)
			.then((response) => {
				$("#joinBtn").modal("hide"); 
				if (response.data.code == 'OK') {
					if (this.$route.params.id == null) {
						$("#commonAlertMsg").html('업체정보를 등록하였습니다..');
        				this.$store.commit('searchParams',{});  // 페이징 처리를 1로 초기화 
					} else {
						$("#commonAlertMsg").html('업체정보를 수정하였습니다.');
					}
      				$("#commonAlertPop").modal("show"); 
        			this.$router.push('/company/partner/management');
				} else {
					this.$swal({type: "warning",text: "저장 처리 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		callPop() { // 타계열사 업체조회 팝업에서 업체유형 팝업 호출 
			this.itemPop='custType3';
			this.$refs.itemPop.initModal();
		},
		callbackOtherCust(data) {
			this.retrieve(data.custCode);
			this.$forceUpdate()
		},
		callbackItem(data) {
			if (this.itemPop == 'custType1') {
				this.detail.custType1 = data.itemCode;
				this.detail.custTypeNm1 = data.itemName;
				this.$forceUpdate()
			} else if (this.itemPop == 'custType2') {
				this.detail.custType2 = data.itemCode;
				this.detail.custTypeNm2 = data.itemName;
				this.$forceUpdate()
			} else if (this.itemPop == 'custType3') {
				this.otherCustType = data;
			}
		},
		callbackAddr(data) {
			this.detail.zipcode = data.zipcode;
			this.detail.addr = data.addr;
			this.detail.addrDetail = data.addrDetail;
			this.$forceUpdate()
		},
		checkRegnumFileSize() {//파일크기 확인
			const input = this.$refs.uploadedRegnumFile;
			if (input.files.length > 0) {
				const file = input.files[0];
				this.regnumFileSize = file.size;
				// 원하는 용량 제한 설정 (10MB)
				const maxSize = 10 * 1024 * 1024;
				if (this.regnumFileSize > maxSize) {
					alert('파일 크기가 10MB를 초과했습니다.');
					// 파일 초기화 또는 다른 조치를 취할 수 있습니다.
					this.$refs.uploadedRegnumFile.value = null;
					this.regnumFileSize = null;
					var previewRegnumFile = document.querySelector('#preview');
					previewRegnumFile.innerHTML = '';
					return true;
				}
			}
			return false;
		},
		changeRegnumFile(evnet){//바뀐 파일 regnumFile에 담기
			//파일 변경시 기존 처음에 첨부되었던 파일정보 사라짐
			this.detail.regnumFile = null;
			this.detail.regnumPath = null;
			//파일 사이즈 체크
			if(this.checkRegnumFileSize()){
				return false;
			}
			this.regnumFile = event.target.files[0];
			this.regnumFileCnt = event.target.files.length;
		},
		checkbfileSize() {//파일크기 확인
			const input = this.$refs.uploadedbfile;
			if (input.files.length > 0) {
				const file = input.files[0];
				this.regnumFileSize = file.size;
				// 원하는 용량 제한 설정 (10MB)
				const maxSize = 10 * 1024 * 1024;
				if (this.regnumFileSize > maxSize) {
					alert('파일 크기가 10MB를 초과했습니다.');
					// 파일 초기화 또는 다른 조치를 취할 수 있습니다.
					this.$refs.uploadedbfile.value = null;
					this.regnumFileSize = null;
					var previewbfile = document.querySelector('#preview2');
					previewbfile.innerHTML = '';
					return true;
				}
			}
			return false;
		},
		changebfile(evnet){//바뀐 파일 regnumFile에 담기
			//파일 변경시 기존 처음에 첨부되었던 파일정보 사라짐
			this.detail.bfile = null;
			this.detail.bfilePath = null;
			//파일 사이즈 체크
			if(this.checkbfileSize()){
				return false;
			}
			this.bfile = event.target.files[0];
			this.bfileCnt = event.target.files.length;
		},
	}
};
</script>