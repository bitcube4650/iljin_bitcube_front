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
							<div class="overflow-y-scroll boxStSm width100" style="height:80px">
								일진건설<br>일진머티리얼즈<br>일진유니스코<br>일진다이아몬드
							</div>
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
						<div class="width100">{{ detail.capital.toLocaleString() }} 원</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">설립년도</div>
						<div class="width100">{{ detail.foundYear }} 년</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">대표전화</div>
						<div class="width100">{{ detail.tel }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">팩스</div>
						<div class="width100">{{ detail.fax }}</div>
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
				</div>

				<div class="text-center mt30">
					<a href="#" data-toggle="modal" data-target="#withdrawal1" class="btnStyle btnOutlineRed" title="회원탈퇴">회원탈퇴</a>
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
						<div class="width100">{{ detail.userHp }}</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">유선전화</div>
						<div class="width100">{{ detail.userTel }}</div>
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
		<div class="modal fade modalStyle" id="withdrawal1" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:510px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<h2 class="modalTitle">비밀번호 확인</h2>
						<div class="flex align-items-center">
							<div class="formTit flex-shrink0 width100px">비밀번호</div>
							<div class="width100">
								<input type="password" name="" id="" class="inputStyle" placeholder="">
							</div>
						</div>
						<p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

						<div class="modalFooter">
							<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
							<a href="#" class="modalBtnCheck" data-toggle="modal" data-target="#withdrawal2" title="확인">확인</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- 회원탈퇴 비밀번호 확인 -->

		<!-- 회원탈퇴 -->
		<div class="modal fade modalStyle" id="withdrawal2" tabindex="-1" role="dialog" aria-hidden="true">
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
						<textarea class="textareaStyle height150px mt20" onkeydown="resize(this)" onkeyup="resize(this)" placeholder="탈퇴사유 필수 입력"></textarea>
						<div class="modalFooter">
							<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="#" class="modalBtnCheck" data-toggle="modal" title="회원탈퇴">회원탈퇴</a>
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
		this.retrieve();
	},
	methods: {
		async retrieve() {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/cust/info');
				this.detail = response.data;
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
		}
	}
}
</script>