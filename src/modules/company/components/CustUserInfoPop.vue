<template>
<div>
	<!-- 사용자 등록 -->
	<div class="modal fade modalStyle" id="userInfoPop" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:600px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">사용자 {{ detail.isCreate ? '등록' : '수정' }}</h2>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">이름 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.userName" class="inputStyle" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model.trim="detail.userEmail" class="inputStyle" placeholder="ex) sample@iljin.co.kr"></div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">아이디 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<div class="width100"><input type="text" v-model.trim="detail.userId" maxlength="20" class="inputStyle" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인"></div>
							<a href="#" @click.prevent="idcheck" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
						</div>
					</div>
					<div v-else class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">아이디</div>
						<div class="width100">{{ detail.userId }}</div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">비밀번호</div>
						<div class="width100">
							<input type="password" v-model="detail.userPwd" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
						</div>
					</div>
					<div v-else class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">비밀번호</div>
						<div class="width100">
							<input type="password" v-model="detail.userPwd" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
						<div class="width100">
							<input type="password" v-model="detail.userPwdConfirm" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model.trim="detail.userHp" class="inputStyle" placeholder="숫자만" maxlength="13"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model.trim="detail.userTel" class="inputStyle" placeholder="숫자만" maxlength="13"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">직급</div>
						<div class="width100"><input type="text" v-model="detail.userPosition" class="inputStyle" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">부서</div>
						<div class="width100"><input type="text" v-model="detail.userBuseo" class="inputStyle" placeholder=""></div>
					</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a v-if="detail.useYn == 'Y' && detail.isCreate == false" href="#" class="btnStyle btnOutlineRed" data-toggle="modal" data-target="#userDel" title="삭제">삭제</a>
						<a v-if="detail.useYn == 'Y'" href="#" @click.prevent="save" class="modalBtnCheck" title="저장">저장</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //사용자 등록 -->
	
	<!-- 사용자수정 삭제 -->
	<div class="modal fade modalStyle" id="userDel" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">삭제된 사용자는 로그인 하실 수 없습니다.<br>사용자를 삭제 하시겠습니까?</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click.prevent="del" class="modalBtnCheck" title="삭제">삭제</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //사용자수정 삭제 -->
</div>
</template>

<script>
export default {
  name: 'CustUserInfoPop',
  props: [ 'searchFunc' ],
  data() {
    return {
		detail: {}
    }
  },
  watch: {
	"detail.userId"(){
		// 로그인ID 체크
		this.detail.idcheck = false;
		this.detail.userId = this.detail.userId.replace(/[^a-zA-Z0-9]/g, '');	// 영어+숫자
	},
	'detail.userHp'(){
		this.detail.userHp = this.hpNumberAddDash(this.detail.userHp);
	},
	'detail.userTel'(){
		this.detail.userTel = this.hpNumberAddDash(this.detail.userTel);
	}
  },
  methods: {
    initModal(id) {
		if (id) {
			this.retrieve(id);
		} else {
			this.detail = { isCreate: true, useYn: 'Y' }
		}
    },
    async retrieve(id) {
      try {
		const response = await this.$http.post('/api/v1/custuser/'+id, this.searchParams);
        this.detail = response.data;
		this.detail.userTel = this.hpNumberAddDash(this.detail.userTel);
		this.detail.userHp = this.hpNumberAddDash(this.detail.userHp);
		this.detail.isCreate = false;
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
      }
    },
	idcheck() {
		if (this.detail.userId == null || this.detail.userId == '') {
			this.$swal({type: "warning",text: "아이디를 입력해주세요."});
			return;
		}
		this.$store.commit('loading');
		this.$http
		.post('/api/v1/cust/idcheck', this.detail)
		.then((response) => {
			if (response.data.code == 'OK') {
				this.$swal({type: "info",text: "입력한 아이디를 사용할 수 있습니다."});
				this.detail.idcheck = true;
			} else {
				this.$swal({type: "warning",text: "입력한 아이디를 사용할 수 없습니다."});
				this.detail.idcheck=false;
			}
		})
		.finally(() => {
			this.$store.commit("finish");
		});
	},
	save() {  
		if (this.detail.userName == null || this.detail.userName == '') {
			this.$swal({type: "warning",text: "이름을 입력해주세요."});
			return;
		}
		if (this.detail.userEmail == null || this.detail.userEmail == '') {
			this.$swal({type: "warning",text: "이메일을 입력해주세요."});
			return;
		} else {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/;
			if(!emailRegex.test(this.detail.userEmail)) {
				this.$swal({type: "warning",text: "입력한 이메일 형식이 올바르지 않습니다."});
				return;
			}
		}
		if (this.detail.isCreate) {
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "아이디를 입력해주세요."});
				return;
			}
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
			if( !this.fnPwdvaildation(this.detail.userPwd) ){
				return;
			}	
		// 수정시 비밀번호를 입력했으면 체크 
		} else if (!(this.detail.userPwd == null || this.detail.userPwd == '')) {
			if (this.detail.userPwdConfirm == null || this.detail.userPwdConfirm == '') {
				this.$swal({type: "warning",text: "비밀번호 확인을 입력해주세요."});
				return;
			}
			if (this.detail.userPwd != this.detail.userPwdConfirm) {
				this.$swal({type: "warning",text: "비밀번호를 정확히 입력해주세요."});
				return;
			}
			if( !this.fnPwdvaildation(this.detail.userPwd) ){
				return;
			}	
		}
		if (this.detail.userHp == null || this.detail.userHp == '') {
			this.$swal({type: "warning",text: "휴대폰을 입력해주세요."});
			return;
		} else {
			this.detail.userHp = this.hpNumberRemoveDash(this.detail.userHp);
		}

		if (this.detail.userTel == null || this.detail.userTel == '') {
			this.$swal({type: "warning",text: "유선전화를 입력해주세요."});
			return;
		} else {
			this.detail.userTel = this.hpNumberRemoveDash(this.detail.userTel);
		}

		this.detail.userInterrelatedList = this.userInterrelatedList;
		this.$store.commit("loading");
		this.$http
		.post('/api/v1/custuser/save', this.detail)
		.then((response) => {
			if (response.data.code == 'OK') {
				$("#commonAlertMsg").html('저장되었습니다.');
				$("#commonAlertPop").modal("show"); 
				$("#userInfoPop").modal("hide");
				if (this.detail.isCreate) {
					this.$emit('searchFunc', 0);
				} else {
					this.$emit('searchFunc');
				}
			} else {
				this.$swal({type: "warning",text: "저장 중 오류가 발생했습니다."});
			}
		})
		.finally(() => {
			this.$store.commit("finish");
		});
	},
	del() {
		this.$store.commit("loading");
		this.$http
		.post('/api/v1/custuser/del', this.detail)
		.then((response) => {
			if (response.data.code == 'OK') {
				$('#userDel').modal('hide');
				$('#userInfoPop').modal('hide');
				$("#commonAlertMsg").html('삭제되었습니다.');
				$("#commonAlertPop").modal("show"); 
				this.$store.commit('searchParams',{}); 
				this.$emit('searchFunc', 0);
			} else {
				this.$swal({type: "warning",text: "삭제 중 오류가 발생했습니다."});
			}
		})
		.finally(() => {
			this.$store.commit("finish");
		});
	},
	// 비밀번호 유효성 체크
	fnPwdvaildation(userPwd){
		const password = userPwd;
		const hasUpperCase = /[A-Z]/.test(password);//대문자
		const hasLowerCase = /[a-z]/.test(password);//소문자
		const hasDigit = /\d/.test(password);//숫자
		const hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(password);//특수문자

		var isValidPassword = (hasUpperCase && hasLowerCase && hasDigit) || (hasUpperCase && hasLowerCase && hasSpecialChar) || (hasDigit && hasSpecialChar);
		var isValidLength = password.length >= 8 && password.length <= 16;

		if(!isValidPassword){
			this.$swal({type: "warning",text: "대/소문자, 숫자, 특수문자중에서 2가지 이상 조합되어야 합니다."});
			return;
		}else if(!isValidLength){
			this.$swal({type: "warning",text: "비밀번호는 8자 이상 16자 이하로 작성해주세요."});
			return;
		}
		return true;
	},
	//전화번호 입력 시 대시 입력
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
	}
  }
};
</script>

