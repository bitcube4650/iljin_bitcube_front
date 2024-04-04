<template>
<!-- 본문 -->
<div class="conRight">
	<!-- conHeader -->
	<div class="conHeader">
		<ul class="conHeaderCate">
			<li>업체정보</li>
			<li>업체상세</li>
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
					<div class="formTit flex-shrink0 width170px">첨부파일</div>
					<div class="width100" v-if="detail.bfile != null && detail.bfilePath != ''">
						<a @click="downloadFile" class="textUnderline">{{ detail.bfile }}</a>
					</div>
				</div>
				<div class="flex align-items-center mt20" v-if="detail.certYn == 'Y'">
					<div class="formTit flex-shrink0 width170px">상태</div>
					<div class="width100">정상</div>
				</div>
				<div class="flex align-items-center mt20" v-if="detail.certYn == 'D'">
					<div class="formTit flex-shrink0 width170px">상태</div>
					<div class="width100 textHighlight">삭제</div>
				</div>
				<div class="flex align-items-center mt20" v-if="detail.certYn == 'D'">
					<div class="formTit flex-shrink0 width170px">사유</div>
					<div class="width100">{{ detail.etc }}</div>
				</div>
			</div>

			<h3 class="h3Tit mt50">계열사 관리항목</h3>
			<div class="boxSt mt20">
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
					<div class="width100">{{ detail.careContent }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">관리단위</div>
					<div class="width100">{{ detail.custValuation }}</div>
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
				<a href="#" v-if="detail.certYn == 'Y'" data-toggle="modal" data-target="#companyDel" class="btnStyle btnRed" title="삭제">삭제</a>
				<router-link v-if="detail.certYn == 'Y'" :to="'/company/partner/management/'+$route.params.id+'/update'" class="btnStyle btnPrimary" title="수정 이동">수정 이동</router-link>
			</div>
		</div>
	</div>
	<!-- //contents -->

	<!-- 업체 삭제 -->
	<div v-if="detail.certYn == 'Y'" class="modal fade modalStyle" id="companyDel" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:550px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">업체 삭제</h2>
					<div class="modalTopBox">
						<ul>
							<li><div>삭제사유를 작성되어야 삭제할 수 있습니다.<br>삭제 후 다시 정상으로 되 돌릴 수 없습니다.<br>삭제 하시겠습니까</div></li>
						</ul>
					</div>
					<textarea class="textareaStyle height150px mt20" v-model="detail.etc" placeholder="삭제사유 필수 입력"></textarea>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="javascript:return false" @click.prevent="del" class="modalBtnCheck" title="삭제">삭제</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //업체 삭제 -->
</div>
<!-- //본문 -->
</template>
<script>
export default {
	name: "PartnerManagementDetail",
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
				this.detail = response.data;
				this.detail.fomCapital = this.formatComma(this.detail.capital);
				this.detail.fomTel = this.phoneNumAddDash(this.detail.tel);
				this.detail.fomFax = this.phoneNumAddDash(this.detail.fax);
				this.detail.fomUserTel = this.phoneNumAddDash(this.detail.userTel);
				this.detail.fomUserHp = this.hpNumberAddDash(this.detail.userHp);
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		del() {
			if (this.detail.etc == null || this.detail.etc == '') {
				this.$swal({type: "warning",text: "삭제사유를 입력해주세요."});
				return;
			}
			this.$store.commit("loading");
			this.$http
			.post('/api/v1/cust/del', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#commonAlertMsg").html('삭제되었습니다.');
      				$("#commonAlertPop").modal("show"); 
        			this.$store.commit('searchParams',{}); 
        			this.$router.push('/company/partner/management');
				} else {
					this.$swal({type: "warning",text: "삭제 중 오류가 발생했습니다."});
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