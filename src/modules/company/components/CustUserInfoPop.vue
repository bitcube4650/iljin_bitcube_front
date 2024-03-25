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
						<div class="width100"><input type="text" v-model="detail.userEmail" class="inputStyle" placeholder="ex) sample@iljin.co.kr"></div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">아이디 <span class="star">*</span></div>
						<div class="flex align-items-center width100">
							<div class="width100"><input type="text" v-model="detail.userId" class="inputStyle" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인"></div>
							<a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
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
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
						<div class="width100">
							<input type="password" v-model="detail.userPwdConfirm" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
						</div>
					</div>
					<div v-if="detail.isCreate" class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.userHp" class="inputStyle" placeholder="숫자만"></div>
					</div>
					<div v-else class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.userHp" class="inputStyle" placeholder="숫자만"></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.userTel" class="inputStyle" placeholder="숫자만"></div>
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
						<a v-if="detail.isCreate == false" href="#" class="btnStyle btnOutlineRed" data-toggle="modal" data-target="#userModi1-1-del" title="삭제">삭제</a>
						<a href="#" @click.prevent="save" class="modalBtnCheck" title="저장">저장</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //사용자 등록 -->

	<!-- 사용자수정 비밀번호 확인 -->
	<div class="modal modalStyle" id="userInfoPwdPop" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:510px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">비밀번호 확인</h2>
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width100px">비밀번호</div>
						<div class="width100">
							<input type="password" class="inputStyle" placeholder="">
						</div>
					</div>
					<p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						<a href="#" @click.prevent="show" class="modalBtnCheck" title="확인">확인</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- 사용자수정 비밀번호 확인 -->
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
  methods: {
	onlyNumber(e) {
		if (!/\d/.test(event.key) && event.key !== '.') return e.preventDefault();
	},
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
		this.detail.isCreate = false;
		if (this.detail.openauth == null) this.detail.openauth = ''; // null이라 선택이 안되어서 강제로 ''로 변경
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
	save() {  
		if (this.detail.userId == null || this.detail.userId == '') {
			this.$swal({type: "warning",text: "로그인ID를 입력해주세요."});
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
		}
		if (this.detail.userTel == null || this.detail.userTel == '') {
			this.$swal({type: "warning",text: "휴대폰을 입력해주세요."});
			return;
		}
		if (this.detail.userEmail == null || this.detail.userEmail == '') {
			this.$swal({type: "warning",text: "이메일을 입력해주세요."});
			return;
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
	show() {
		$("#userInfoPwdPop").modal("hide"); 
		$("#userInfoPop").modal("show"); 
	}
  }
};
</script>

