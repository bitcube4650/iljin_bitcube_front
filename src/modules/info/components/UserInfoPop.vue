<template>
<div>
	<!-- 사용자 등록 -->
	<div class="modal fade modalStyle" id="userInfoPop" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:650px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">사용자 {{ detail.isCreate ? '등록' : '수정' }}</h2>
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width120px">로그인ID <span class="star">*</span></div>
						<div v-if="detail.isCreate" class="flex align-items-center width100">
							<div class="width100"><input type="text" v-model.trim="detail.userId" class="inputStyle" placeholder="영문, 숫자 입력(10자 이내) 후 중복확인" maxlength="10"></div>
							<a href="" @click.prevent="idDuplicateCheck" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
						</div>
						<div v-else class="width100">{{ detail.userId }}</div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">비밀번호</div>
						<div class="width100">
							<input type="password" v-model="detail.userPwd" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
						</div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
						<div class="width100">
							<input type="password" v-model="detail.userPwdConfirm" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
						</div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">이름 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.userName" class="inputStyle" placeholder=""></div>
					</div>
					<div v-else class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">이름 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.userName" class="inputStyle" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">소속 계열사 <span class="star">*</span></div>
						<div class="width100" v-if="detail.isCreate" >
							<select v-model="detail.interrelatedCustCode" class="selectStyle">
								<option value="">선택</option>
								<option :value="val.key" v-for="(val, idx) in interrelatedList">{{ val.value }}</option>
							</select>
						</div>
						<div v-else class="width100">{{ detail.interrelatedCustNm }}</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">사용권한 <span class="star">*</span></div>
						<div class="width100">
							<select v-model="detail.userAuth" class="selectStyle">
								<option value="">선택</option>
								<option value="1">시스템관리자</option>
								<option value="2">각사관리자</option>
								<option value="3">일반사용자</option>
								<option value="4">감사사용자</option>
							</select>
						</div>
					</div>
					<div v-if="detail.userAuth == '4'" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">계열사
							<!-- 툴팁 -->
							<i class="fas fa-question-circle toolTipSt ml5">
								<div class="toolTipText" style="width:420px">
									<ul class="dList">
										<li><div>사용권한을 감사사용자를 선택하면 아래 계열사는 한 개 이상 선택해야 합니다.</div></li>
										<li><div>선택된 계열사는 입찰 및 통계 조회 시 선택된 계열사에 한해 조회 됩니다.</div></li>
									</ul>
								</div>
							</i>
							<!-- //툴팁 -->
						</div>
						<div class="flex align-items-center flex-wrap-wrap width100">
							<table>
								<tbody>
									<tr><!-- 퍼블리싱이 loop를 돌아 처리하겠금 되어 있지 않아 이렇게 복잫하게 구현됨. -->
										<td>
											<template v-for="(val, idx) in userInterrelatedList">
											<input type="checkbox" v-if="idx%3 == 0" v-model="val.check" :id="'c'+val.key" class="checkStyle"><label v-if="idx%3 == 0" :for="'c'+val.key" class="mr20">{{ val.value }}</label>
											</template>
										</td>
										<td>
											<template v-for="(val, idx) in userInterrelatedList">
											<input type="checkbox" v-if="idx%3 == 1" v-model="val.check" :id="'c'+val.key" class="checkStyle"><label v-if="idx%3 == 1" :for="'c'+val.key" class="mr20">{{ val.value }}</label>
											</template>
										</td>
										<td>
											<template v-for="(val, idx) in userInterrelatedList">
											<input type="checkbox" v-if="idx%3 == 2" v-model="val.check" :id="'c'+val.key" class="checkStyle"><label v-if="idx%3 == 2" :for="'c'+val.key" class="mr20">{{ val.value }}</label>
											</template>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">개찰권한 <span class="star">*</span></div>
						<div class="width100">
							<select v-model="detail.openauth" class="selectStyle">
								<option value="">아니오</option>
								<option value="1">개찰권한</option>
							</select>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">낙찰권한 <span class="star">*</span></div>
						<div class="width100">
							<select v-model="detail.bidauth" class="selectStyle">
								<option value="">아니오</option>
								<option value="1">낙찰권한</option>
							</select>
						</div>
					</div>
					<div class="flex align-items-center mt10" v-if="!this.detail.isCreate">
						<div class="formTit flex-shrink0 width120px">비밀번호 <span class="star">*</span></div>
						<div class="width100">최종변경일 : {{ detail.pwdEditDateStr }}</div>
						<a href="" @click.prevent="fnShowChgPwdPop" class="btnStyle btnSecondary flex-shrink0 ml10" title="비밀번호 변경">비밀번호 변경</a>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">휴대폰 ☎  <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model.trim="detail.userHp" class="inputStyle" placeholder="숫자만" maxlength="13"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">유선전화 ☎  <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model.trim="detail.userTel" class="inputStyle" placeholder="숫자만" maxlength="13"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model.trim="detail.userEmail" class="inputStyle" placeholder="james@iljin.co.kr"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">직급</div>
						<div class="width100"><input type="text" v-model="detail.userPosition" class="inputStyle" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">부서</div>
						<div class="width100"><input type="text" v-model="detail.deptName" class="inputStyle" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">사용여부 <span class="star">*</span></div>
						<div class="width100">
							<select v-model="detail.useYn" class="selectStyle">
								<option value="Y">사용</option>
								<option value="N">미사용</option>
							</select>
						</div>
					</div>

					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click.prevent="save" class="modalBtnCheck" title="저장">저장</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //사용자 등록 -->

	<!-- 비밀번호 변경 -->
	<div class="modal fade modalStyle" id="chgPwdPop" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:510px">
			<div class="modal-content">
				<div class="modal-body">
					<a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">비밀번호 변경</h2>
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width120px">비밀번호</div>
						<div class="width100">
							<input type="password" v-model="chgPwdParam.chgPassword" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자중에서 2가지 이상 조합(길이 8~16자리)">
						</div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
						<div class="width100">
							<input type="password" v-model="chgPwdParam.chgPasswordChk" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
						</div>
					</div>

					<div class="modalFooter">
						<a @click.prevent="$('#chgPwdPop').modal('hide'); " class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a @click.prevent="fnSaveChgPwd" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //비밀번호 변경 -->
</div>
</template>

<script>
export default {
	name: 'UserInfoPop',
	props: [ 'searchFunc', 'interrelatedList' ],
	data() {
		return {
			userInterrelatedList: [],
			detail: {},
			userIdChkYn : 'N', // 로그인ID 중복 체크 확인
			chgPwdParam : {}
		}
	},
	watch: {
		"detail.userId"(){
			// 로그인ID 체크
			this.userIdChkYn = 'N';
			this.detail.userId = this.detail.userId.replace(/[^a-zA-Z0-9]/g, '');	// 영어+숫자
		},
		'detail.userHp'(){
			this.detail.userHp = this.hpNumberAddDash(this.detail.userHp);
		},
		'detail.userTel'(){
			this.detail.userTel = this.hpNumberAddDash(this.detail.userTel);
		},
		'detail.userPwd'(){
			this.detail.userPwd = this.detail.userPwd.trim();
		}
	},
  	methods: {
		initModal(id) {
			this.userInterrelatedList = JSON.parse(JSON.stringify(this.interrelatedList)); // 다른 사용자와 공유되지 않기 위해 
			if (id) {
				this.retrieve(id);
			} else {
				this.detail = { isCreate: true, interrelatedCustCode: '', userAuth: '', openauth: '', bidauth: '', useYn: 'Y' }
			}
		},
		// 사용자 상세 조회
		async retrieve(id) {
			try {
				const response = await this.$http.post('/api/v1/couser/'+id, this.searchParams);
				this.detail = response.data;
				
				this.detail.isCreate = false;
				if (this.detail.openauth == null) this.detail.openauth = ''; // null이라 선택이 안되어서 강제로 ''로 변경
				if (this.detail.bidauth == null) this.detail.bidauth = ''; // null이라 선택이 안되어서 강제로 ''로 변경
				if (this.detail.userAuth == '4') {
					var userInterrelated = {};
					this.detail.userInterrelated.map((val, idx) => {
						userInterrelated[val.key] = val.value;
					})
					this.userInterrelatedList.map((val, idx) => {
						if (userInterrelated[val.key]) {
							val.check = true;
						}
					})
				}
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		// 중복확인
		idDuplicateCheck(){
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "로그인ID를 입력해주세요."});
				return;
			}

			this.$http
				.post('/api/v1/cust/idcheck', this.detail)
				.then((response) => {
					if (response.data.code == 'OK') {
						this.$swal({type: "success",text: "사용 가능한 로그인ID입니다."});
						this.userIdChkYn = 'Y';
						return;
					} else {
						this.$swal({type: "warning",text: "사용 불가능한 로그인ID입니다."});
						this.userIdChkYn = 'N'
						return;
					}
				}
			);
		},
		save() {  
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "로그인ID를 입력해주세요."});
				return;
			}
			if (this.detail.isCreate && this.userIdChkYn != 'Y') {
				this.$swal({type: "warning",text: "로그인ID 중복체크를 진행해주세요."});

				return;
			}
			if (this.detail.isCreate && (this.detail.userPwd == null || this.detail.userPwd == '')) {
				this.$swal({type: "warning",text: "비밀번호를 입력해주세요."});
				return;
			}
			if (this.detail.isCreate && (this.detail.userPwdConfirm == null || this.detail.userPwdConfirm == '')) {
				this.$swal({type: "warning",text: "비밀번호 확인을 입력해주세요."});
				return;
			}
			if( this.detail.userPwdConfirm != this.detail.userPwd){
				this.$swal({type: "warning",text: "비밀번호와 비밀번호 확인의 값이 일치하지 않습니다."});
				return;
			}
			if( this.detail.isCreate){
				if( !this.fnPwdvaildation(this.detail.userPwd) ){
					return;
				}
			}
			if (this.detail.userName == null || this.detail.userName == '') {
				this.$swal({type: "warning",text: "이름을 입력해주세요."});
				return;
			}
			if (this.detail.interrelatedCustCode == null || this.detail.interrelatedCustCode == '') {
				this.$swal({type: "warning",text: "소속 계열사를 선택해주세요."});
				return;
			}
			if (this.detail.userAuth == null || this.detail.userAuth == '') {
				this.$swal({type: "warning",text: "사용권한을 선택해주세요."});
				return;
			}
			if (this.detail.userAuth == '4') { // 감사사용자일 경우 계열사를 1개이상 선택해야 함. 
				var isCorrent = false;
				this.userInterrelatedList.map((val, idx) => {
					if (val.check) {
						isCorrent = true;
					}
				})
				if (isCorrent == false) {
					this.$swal({type: "warning",text: "감사사용자 권한일 경우 계열사를 1개 이상 선택해주세요."});
					return;
				}
			}
			if (this.detail.userHp == null || this.detail.userHp == '') {
				this.$swal({type: "warning",text: "휴대폰을 입력해주세요."});
				return;
			} else {
				// 휴대폰 번호 정규식
				const phoneNumberRegex = /^\d{3}-\d{3,4}-\d{4}$/;
				if(!phoneNumberRegex.test(this.detail.userHp)){
					this.$swal({type: "warning",text: "휴대폰번호 형식에 맞게 입력해주세요."});
					return;
				}
			}

			if (this.detail.userTel == null || this.detail.userTel == '') {
				this.$swal({type: "warning",text: "유선전화를 입력해주세요."});
				return;
			} else {
				// 유선전화 정규식
				const telNumberRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
				if(!telNumberRegex.test(this.detail.userTel)){
					this.$swal({type: "warning",text: "유선전화 형식에 맞게 입력해주세요."});
					return;
				}
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
			this.detail.userInterrelatedList = this.userInterrelatedList;
			this.$store.commit("loading");
			this.$http
			.post('/api/v1/couser/save', this.detail)
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
				this.$swal({type: "warning",text: "비밀번호는 대/소문자, 숫자, 특수문자중에서 2가지 이상 조합되어야 합니다."});
				return;
			}else if(!isValidLength){
				this.$swal({type: "warning",text: "비밀번호는 8자 이상 16자 이하로 작성해주세요."});
				return;
			}
			return true;

		},
		// 비밀번호 확인 후 팝업
		show() {
			// 비밀번호 체크 로직 필요 > 세션값?
			$("#userInfoPwdPop").modal("hide"); 
			$("#userInfoPop").modal("show"); 
		},
		// 비밀번호 변경 팝업
		fnShowChgPwdPop(){
			this.chgPwdParam = {}

			$('#chgPwdPop').modal('show');
		},
		// 비밀번호 변경 
		fnSaveChgPwd(){
			// 비밀번호 정규식 체크
			if(!this.fnPwdvaildation(this.chgPwdParam.chgPassword)){
				return;
			};

			// 파라미터 세팅
			this.chgPwdParam.userId = this.detail.userId;

			// 비밀번호 변경
			this.$http
			.post('/api/v1/couser/saveChgPwd', this.chgPwdParam)
			.then((response) => {
				if (response.data.code == 'OK') {
					this.$swal({type: "success",text: "수정되었습니다."});
					// 사용자 팝업 새로고침
					this.retrieve(id);
					// 변경파라미터 초기화
					this.chgPwdParam = {};
				} else {
					this.$swal({type: "warning",text: "수정 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				// 비밀번호 변경 팝업 닫기
				$("#chgPwdPop").modal("hide");
				this.$store.commit("finish");
			});
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

