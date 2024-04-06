<template>
	<!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>업체정보</li>
				<li>자사정보 수정</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<div class="formWidth">
				<h3 class="h3Tit">회사 정보</h3>
				<div class="boxSt mt20">
					<div class="flex">
						<div class="formTit flex-shrink0 width170px">승인 계열사
							<!-- 툴팁 -->
							<i class="fas fa-question-circle toolTipSt ml5">
								<div class="toolTipText" style="width:420px">
									<ul class="dList">
										<li><div>승인된 계열사의 입찰에만 참여할 수 있습니다.</div></li>
										<li><div>승인 계열사에 없는 계열사의 입찰에 참여를 하려면 유선으로 해당 계열사에 등록요청 하시기 바랍니다.</div></li>
									</ul>
								</div>
							</i>
							<!-- //툴팁 -->
						</div>
						<div class="width100">
							<div class="overflow-y-scroll boxStSm width100" style="height:80px" v-html="detail.interrelatedNm"></div>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 1</div>
						<div class="width100">{{ detail.custTypeNm1 }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="width100">{{ detail.custTypeNm2 }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">회사명 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.custName" class="inputStyle maxWidth-max-content"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">대표자명 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.presName" class="inputStyle maxWidth-max-content"></div>
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
							<input type="text" v-model="detail.fomCapital" @keypress="onlyNumber" @input="formatCapital" maxlength="15" class="inputStyle maxWidth-max-content" placeholder="ex) 10,000,000">
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
							<input type="text" v-model="detail.fomTel" @keypress="onlyNumber" @input="formatTel" maxlength="13" class="inputStyle maxWidth-max-content" >
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width170px">팩스</div>
						<div class="width100">
							<input type="text" v-model="detail.fomFax" @keypress="onlyNumber" @input="formatFax" maxlength="13" class="inputStyle maxWidth-max-content">
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
								<div v-if="regnumFile" class="uploadPreview" >
									<p>
										{{ regnumFileName }}
										<button class='file-remove' @click="fnRemoveAttachFile('regnumFile')">삭제</button>
									</p>
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
								<div v-if="bfile" class="uploadPreview">
									<p>
										{{ bfileName }}
										<button class='file-remove' @click="fnRemoveAttachFile('bfile')">삭제</button>
									</p>
								</div>
							</div>
							<!-- //다중파일 업로드 -->
						</div>
					</div>
				</div>

				<div class="text-center mt30">
					<a href="#" @click.prevent="$router.go(-1)" class="btnStyle btnOutline" title="취소">취소</a>
					<a href="#" @click.prevent="validate" class="btnStyle btnPrimary" title="저장">저장</a>
				</div>

				<h3 class="h3Tit mt50">관리자 정보</h3>
				<div class="boxSt mt20">
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width170px">이름</div>
						<div class="width100">{{ detail.userName }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">이메일</div>
						<div class="width100">{{ detail.userEmail }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">아이디</div>
						<div class="width100">{{ detail.userId }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">휴대폰</div>
						<div class="width100">{{ detail.fomUserHp }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">유선전화</div>
						<div class="width100">{{ detail.fomUserTel }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">직급</div>
						<div class="width100">{{ detail.userPosition }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">부서</div>
						<div class="width100">{{ detail.userBuseo }}</div>
					</div>
				</div>

			</div>
		</div>
		<!-- //contents -->

		<!-- 저장 -->
		<div class="modal fade modalStyle" id="joinBtn" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">수정하신 정보로 저장됩니다.<br>저장 시 수정이력도 저장됩니다.<br><br>저장 하시겠습니까?</div>
						<div class="modalFooter">
							<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="#" @click.prevent="save" class="modalBtnCheck" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //저장 -->

	<!-- 주소 찾기 팝업 -->
	<addr-pop ref="addrPop" @callbackFunc="callbackAddr"/>

	</div>
	<!-- //본문 -->
</template>
  <script>
import AddrPop from "@/components/AddrPop.vue";
  

  
export default {
	name: "partnerCompUpdate",
	components: {
		AddrPop,
	},
	mounted() {
		this.retrieve();
	},
	data() {
		return {
			detail: {},
        	itemPop: null,
			otherCustType: null,
			regnumFile : null,  // 업로드한 파일
			regnumFileName : '',
			regnumFileCnt : 0,  // 업로드한 파일 수
			regnumFileSize : 0, // 파일크기
			bfile : null,       // 업로드한 파일
			bfileName : '',
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
				const response = await this.$http.post('/api/v1/cust/info');
				this.detail = response.data;
				this.detail.fomCapital = this.formatComma(this.detail.capital);
				this.detail.fomTel = this.phoneNumAddDash(this.detail.tel);
				this.detail.fomFax = this.phoneNumAddDash(this.detail.fax);
				this.detail.fomUserTel = this.phoneNumAddDash(this.detail.userTel);
				this.detail.fomUserHp = this.hpNumberAddDash(this.detail.userHp);

				this.bfile = this.detail.bfile;
				this.bfileName = this.detail.bfile;
				this.bfilePath = this.detail.bfilePath;
				this.regnumFile = this.detail.regnumFile;
				this.regnumFileName = this.detail.regnumFile;
				this.regnumFilePath = this.detail.regnumPath;

				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		validate() {  
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
			if(!this.regnumFile){//업로드 한 파일이 없는 경우
				this.$swal({type: "warning",text: "사업자등록증을 선택해주세요."});
				return;
			}
			$("#joinBtn").modal("show"); 
		},
		save() {  
			this.$store.commit("loading");
			var formData = new FormData();

    		formData.append('regnumFile', this.regnumFile);
    		formData.append('bFile', this.bfile);
			formData.append('data', new Blob([JSON.stringify(this.detail)], { type: 'application/json' }));

			this.$http
			.post('/api/v1/cust/save', formData)
			.then((response) => {
				$("#joinBtn").modal("hide"); 
				if (response.data.code == 'OK') {
					$("#commonAlertMsg").html('업체정보를 수정하였습니다.');
      				$("#commonAlertPop").modal("show"); 
        			this.$router.push('/company/partner');
				} else {
					this.$swal({type: "warning",text: "저장 처리 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
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
					return true;
				}
			}
			return false;
		},
		changeRegnumFile(event){//바뀐 파일 regnumFile에 담기
			//파일 사이즈 체크
			if(this.checkRegnumFileSize()){
				return false;
			}
			this.regnumFile = event.target.files[0];
			this.regnumFileName = event.target.files.length > 0 ? event.target.files[0].name : '';
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
					return true;
				}
			}
			return false;
		},
		changebfile(event){//바뀐 파일 regnumFile에 담기
			//파일 사이즈 체크
			if(this.checkbfileSize()){
				return false;
			}
			this.bfile = event.target.files[0];
			this.bfileName = event.target.files.length > 0 ? event.target.files[0].name : '';
			this.bfileCnt = event.target.files.length;
		},
		formatComma(val){
			if(!val) return '0';
			val = val.toString();

			return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		formatUncomma(val){
			if(!val) return '0';
			val = val.toString();
			
			return val.replace(/[^0-9]/g, '');
		},
		phoneNumAddDash(val){
			if (!val) return '';
			val = val.toString();
			val = val.replace(/[^0-9]/g, '')

			let tmp = ''
			if( val.length < 4){
			return val;
			} else if(val.length < 7) {
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3);
			return tmp;
			} else if(val.length == 8) {
			tmp += val.substr(0, 4);
			tmp += '-';
			tmp += val.substr(4);
			return tmp;
			} else if(val.length < 10) {
			if(val.substr(0, 2) =='02') { //02-123-5678
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 3);
				tmp += '-';
				tmp += val.substr(5);
				return tmp;
			}
			} else if(val.length < 11) {
			if(val.substr(0, 2) =='02') { //02-1234-5678
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 4);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			} else { //010-123-4567
				tmp += val.substr(0, 3);
				tmp += '-';
				tmp += val.substr(3, 3);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			}
			} else { //010-1234-5678
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3, 4);
			tmp += '-';
			tmp += val.substr(7);
			return tmp;
			}
		},
		//전화번호 입력 시 대시 입력(상단 함수가 오류날 경우 대체사용)
		hpNumberAddDash(val){
			if (!val) return '';
			val = val.toString();
			val = val.replace(/[^0-9]/g, '')
			
			let tmp = ''
			if( val.length < 4){
			return val;
			} else if(val.length <= 7) {
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3);
			return tmp;
			} else if(val.length == 8) {
			tmp += val.substr(0, 4);
			tmp += '-';
			tmp += val.substr(4);
			return tmp;
			} else if(val.length < 10) {
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 3);
				tmp += '-';
				tmp += val.substr(5);
				return tmp;
			} else if(val.length < 11) {
			if(val.substr(0, 2) =='02') { //02-1234-5678
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 4);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			} else { //010-123-4567
				tmp += val.substr(0, 3);
				tmp += '-';
				tmp += val.substr(3, 3);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			}
			} else { //010-1234-5678
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3, 4);
			tmp += '-';
			tmp += val.substr(7);
			return tmp;
			}
		},
		hpNumberRemoveDash(val){
			if (!val) return '';
			val = val.toString();
			val = val.replace(/[^0-9]/g, '');

			return val;
		},
		formatCapital() {
			this.detail.capital = this.formatUncomma(this.detail.fomCapital);
			this.detail.fomCapital = this.formatComma(this.detail.capital);
		},
		formatTel() {
			this.detail.tel = this.hpNumberRemoveDash(this.detail.fomTel);
			this.detail.fomTel = this.phoneNumAddDash(this.detail.tel);
		},
		formatFax() {
			this.detail.fax = this.hpNumberRemoveDash(this.detail.fomFax);
			this.detail.fomFax = this.phoneNumAddDash(this.detail.fax);
		},
		formatUserTel() {
			this.detail.userTel = this.hpNumberRemoveDash(this.detail.fomUserTel);
			this.detail.fomUserTel = this.phoneNumAddDash(this.detail.userTel);
		},
		formatUserHp() {
			this.detail.userHp = this.hpNumberRemoveDash(this.detail.fomUserHp);
			this.detail.fomUserHp = this.hpNumberAddDash(this.detail.userHp);
		},
		fnRemoveAttachFile(type){
			// 	첨부파일 삭제
			if(type == 'bfile'){
				this.bfile = null
				this.bfileName = ''
				this.detail.bfile = null
				this.detail.bfilePath = null
			} else {
				this.regnumFile = null
				this.regnumFileName = ''
				this.detail.regnumFile = null
				this.detail.regnumFilePath = null
			}
		}
	},
};
  </script>