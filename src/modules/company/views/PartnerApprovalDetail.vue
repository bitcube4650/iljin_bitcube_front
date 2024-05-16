<template>
<!-- 본문 -->
<div class="conRight">
	<!-- conHeader -->
	<div class="conHeader">
		<ul class="conHeaderCate">
			<li>업체정보</li>
			<li>업체승인</li>
		</ul>
	</div>
	<!-- //conHeader -->
	<!-- contents -->
	<div class="contents">
		<div class="formWidth">
			<h3 class="h3Tit">회사 정보</h3>
			<div class="boxSt mt20">
				<div class="flex align-items-center">
					<div class="formTit flex-shrink0 width170px">가입희망 계열사</div>
					<div class="width100">{{ detail.interrelatedNm }}</div>
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
					<div class="formTit flex-shrink0 width170px">회사명</div>
					<div class="width100">{{ detail.custName }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">대표자명</div>
					<div class="width100">{{ detail.presName }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">사업자등록번호</div>
					<div class="width100">{{ detail.regnum }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">법인번호</div>
					<div class="width100">{{ detail.presJuminNo }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">자본금</div>
					<div class="width100">{{ detail.fomCapital }} 원</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">설립년도</div>
					<div class="width100">{{ detail.foundYear }} 년</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">대표전화</div>
					<div class="width100">{{ detail.fomTel }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">팩스</div>
					<div class="width100">{{ detail.fomFax }}</div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">회사주소</div>
					<div class="width100">
						<p>{{ detail.zipcode }}</p>
						<p>{{ detail.addr }}</p>
						<p>{{ detail.addrDetail }}</p>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">사업자등록증</div>
					<div class="width100" v-if="detail.regnumFile != null && detail.regnumPath != ''">
						<a @click="downloadRegnumFile" class="textUnderline">{{ detail.regnumFile }}</a>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">회사소개 및 기타자료</div>
					<div class="width100" v-if="detail.bfile != null && detail.bfilePath != ''">
						<a @click="downloadFile" class="textUnderline">{{ detail.bfile }}</a>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">상태</div>
					<div class="width100">미승인</div>
				</div>
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

			<div class="text-center mt50">
				<a href="#" @click.prevent="$router.go(-1)" class="btnStyle btnOutlineRed" title="취소">취소</a>
				<!-- 감사 사용자 / 각사 관리자만 승인 반려 처리 가능 -->
				<a href="#" data-toggle="modal" data-target="#companyTurnback" class="btnStyle btnRed" title="반려" v-if="$store.state.loginInfo.userAuth == '2' || $store.state.loginInfo.userAuth == '4'">반려</a>
				<a href="#" data-toggle="modal" data-target="#companyAccept" class="btnStyle btnPrimary" title="승인" v-if="$store.state.loginInfo.userAuth == '2' || $store.state.loginInfo.userAuth == '4'">승인</a>
			</div>
		</div>
	</div>
	<!-- //contents -->
	<!-- 반려 -->
	<div class="modal fade modalStyle" id="companyTurnback" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:550px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">업체등록 반려</h2>
					<div class="modalTopBox">
						<ul>
							<li><div>업체 등록을 반려합니다.<br>아래 반려 사유를 입력해 주십시오.<br>반려 처리 시 반려사유 내용으로 업체에게 발송 됩니다.</div></li>
						</ul>
					</div>
					<textarea class="textareaStyle height150px mt20" v-model="detail.etc" placeholder="반려사유 필수 입력"></textarea>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="javascript:return false" @click.prevent="back" class="modalBtnCheck" data-toggle="modal" title="반려">반려</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //반려 -->

	<!-- 승인 -->
	<div class="modal fade modalStyle" id="companyAccept" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">업체 등록을 승인하시겠습니까?</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click.prevent="approval" class="modalBtnCheck" title="승인">승인</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //승인 -->
</div>
<!-- //본문 -->
</template>
<script>
export default {
	name: "PartnerApprovalDetail",
	data() {
		return {
			detail: {capital:0}
		};
	},
	mounted() {
		this.retrieve();
	},
	methods: {
		async retrieve() {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/cust/management/'+this.$route.params.id);
				if(response.data.code == 'OK') {
					this.detail = response.data.data;
					this.detail.fomCapital = this.formatComma(this.detail.capital);
					this.detail.fomTel = this.phoneNumAddDash(this.detail.tel);
					this.detail.fomFax = this.phoneNumAddDash(this.detail.fax);
					this.detail.fomUserTel = this.phoneNumAddDash(this.detail.userTel);
					this.detail.fomUserHp = this.hpNumberAddDash(this.detail.userHp);
				}
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		approval() {  
			this.$store.commit("loading");
			this.$http
			.post('/api/v1/cust/approval', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#commonAlertMsg").html('승인되었습니다.');
					$("#commonAlertPop").modal("show");
        			this.$store.commit('searchParams',{}); 
        			this.$router.push('/company/partner/approval');
				} else {
					this.$swal({type: "warning",text: "처리 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		async downloadRegnumFile(){//파일 다운로드

			try {
				this.$store.commit('loading');
				const response = await this.$http.post(
					"/api/v1/notice/downloadFile",
					{ fileId: this.detail.regnumPath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
					{ responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
				);

				// 파일 다운로드를 위한 처리
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", this.detail.regnumFile); // 다운로드될 파일명 설정
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				this.$store.commit('finish');
			} catch (error) {
				console.error("Error downloading file:", error);
				this.$store.commit('finish');
			}
		},
		async downloadFile(){//파일 다운로드

			try {
				this.$store.commit('loading');
				const response = await this.$http.post(
					"/api/v1/notice/downloadFile",
					{ fileId: this.detail.bfilePath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
					{ responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
				);

				// 파일 다운로드를 위한 처리
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", this.detail.bfile); // 다운로드될 파일명 설정
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				this.$store.commit('finish');
			} catch (error) {
				console.error("Error downloading file:", error);
				this.$store.commit('finish');
			}
		},
		back() {  
			if (this.detail.etc == null || this.detail.etc == '') {
				this.$swal({type: "warning",text: "반려사유를 입력해주세요."});
				return;
			}
			this.$store.commit("loading");
			this.$http
			.post('/api/v1/cust/back', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#commonAlertMsg").html('반려되었습니다.');
					$("#commonAlertPop").modal("show");
        			this.$store.commit('searchParams',{}); 
        			this.$router.push('/company/partner/approval');
				} else {
					this.$swal({type: "warning",text: response.data.msg});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
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
	}
}
</script>