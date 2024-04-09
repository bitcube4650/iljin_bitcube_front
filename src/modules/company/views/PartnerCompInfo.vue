<template>
    <!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>업체정보</li>
				<li>자사정보</li>
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
				</div>

				<div class="text-center mt30">
					<a href="#" @click.prevent="clearPwd" data-toggle="modal" data-target="#pwdCheckPop" class="btnStyle btnOutlineRed" title="회원탈퇴">회원탈퇴</a>
					<router-link to="/company/partner/update"  class="btnStyle btnPrimary" title="수정">수정</router-link>
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

		<!-- 회원탈퇴 비밀번호 확인 -->
		<div class="modal fade modalStyle" id="pwdCheckPop" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:510px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<h2 class="modalTitle">비밀번호 확인</h2>
						<div class="flex align-items-center">
							<div class="formTit flex-shrink0 width100px">비밀번호</div>
							<div class="width100">
								<input type="password" v-model="detail.userPwd" class="inputStyle">
							</div>
						</div>
						<p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

						<div class="modalFooter">
							<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
							<a href="#" @click.prevent="pwdcheck" class="modalBtnCheck" title="확인">확인</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- 회원탈퇴 비밀번호 확인 -->

		<!-- 회원탈퇴 -->
		<div class="modal fade modalStyle" id="leavePop" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:550px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<h2 class="modalTitle">회원 탈퇴</h2>
						<div class="modalTopBox">
							<ul>
								<li><div>탈퇴사유를 입력해 주십시오.<br>탈퇴처리 시 로그아웃 처리 되고 다시 로그인 할 수 없습니다.<br>탈퇴 하시겠습니까</div></li>
							</ul>
						</div>
						<textarea class="textareaStyle height150px mt20" v-model="detail.etc" placeholder="탈퇴사유 필수 입력"></textarea>
						<div class="modalFooter">
							<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:return false" @click.prevent="leave"  class="modalBtnCheck" title="회원탈퇴">회원탈퇴</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //회원탈퇴 -->
	</div>
	<!-- //본문 -->
</template>
  <script>
  export default {
    name: "partnerCompInfo",
    components: {
    },
    data() {
      return {
			detail: {capital:0}
      };
    },
	mounted() {
		this.$store.commit('searchParams', {});
		this.retrieve();
	},
	methods: {
		async retrieve() {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/cust/info');
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
		clearPwd() {
			this.detail.userPwd = null;
			this.detail.etc = null;
      		this.$forceUpdate();
		},
		pwdcheck() {
			if (this.detail.userPwd == null || this.detail.userPwd == '') {
				this.$swal({type: "warning",text: "비밀번호를 입력해주세요."});
				return;
			}
			this.$store.commit('loading');
			this.$http
			.post('/api/v1/cust/pwdcheck', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#pwdCheckPop").modal("hide"); 
					$("#leavePop").modal("show"); 
				} else {
					this.detail.userPwd = null;
					this.$swal({type: "info",text: "비밀번호가 틀립니다. 다시 입력해주세요."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		leave() {
			if (this.detail.etc == null || this.detail.etc == '') {
				this.$swal({type: "warning",text: "탈퇴사유를 입력해주세요."});
				return;
			}
			this.$store.commit("loading");
			this.$http
			.post('/api/v1/cust/leave', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#leavePop").modal("hide"); 
					$("#commonAlertMsg").html('회원탈퇴되었습니다.');
      				$("#commonAlertPop").modal("show"); 
					this.$store.commit('logout');
					this.$cookie.delete('loginInfo');//로그인 유저정보 삭제
					var $this = this;
					setTimeout(function(){
						$this.$router.push('/');
					}, 1000);
				} else {
					this.$swal({type: "warning",text: "회원탈퇴 중 오류가 발생했습니다."});
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