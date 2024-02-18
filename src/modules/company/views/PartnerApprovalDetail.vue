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
					<div class="width100">일진건설</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">업체유형 1</div>
					<div class="width100">공공장소 청소 및 유사 서비스업 품목류</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">업체유형 2</div>
					<div class="width100">사업 시설 유지관리 및 고용 서비스업 품목류</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">회사명</div>
					<div class="width100">{{ detail.detailName }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">대표자명</div>
					<div class="width100">강대표</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">사업자등록번호</div>
					<div class="width100">123 - 12 - 12345</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">법인번호</div>
					<div class="width100">123456 - 1234567</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">자본금</div>
					<div class="width100">10,000,000 원</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">설립년도</div>
					<div class="width100">2021 년</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">대표전화</div>
					<div class="width100">02-1234-1234</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">팩스</div>
					<div class="width100"></div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">회사주소</div>
					<div class="width100">
						<p>12345</p>
						<p>서울시 마포구 도화동</p>
						<p>50-1 일진빌딩 304호</p>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">사업자등록증</div>
					<div class="width100">
						<a href="javascript:void(0)" class="textUnderline">비트큐브_사업자등록증.jpg</a>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">첨부파일</div>
					<div class="width100">
						<a href="javascript:void(0)" class="textUnderline">비트큐브_회사소개서.pptx</a>
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
					<div class="width100">이순신</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">이메일</div>
					<div class="width100">james@bitcube.co.kr</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">아이디</div>
					<div class="width100">jameskang</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">휴대폰</div>
					<div class="width100">010-1234-1234</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">유선전화</div>
					<div class="width100">02-123-1234</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">직급</div>
					<div class="width100">대리</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">부서</div>
					<div class="width100">개발부</div>
				</div>
			</div>

			<div class="text-center mt50">
				<a href="#" @click.prevent="$router.go(-1)" class="btnStyle btnOutlineRed" title="취소">취소</a>
				<a href="javascript:void(0)" data-toggle="modal" data-target="#companyTurnback" class="btnStyle btnRed" title="반려">반려</a>
				<a href="javascript:void(0)" data-toggle="modal" data-target="#companyAccept" class="btnStyle btnPrimary" title="승인">승인</a>
			</div>
		</div>
	</div>
	<!-- //contents -->
	<!-- 반려 -->
	<div class="modal fade modalStyle" id="companyTurnback" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:550px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">업체등록 반려</h2>
					<div class="modalTopBox">
						<ul>
							<li><div>업체 등록을 반려합니다.<br>아래 반려 사유를 입력해 주십시오.<br>반려 처리 시 반려사유 내용으로 업체에게 발송 됩니다.</div></li>
						</ul>
					</div>
					<textarea class="textareaStyle height150px mt20" onkeydown="resize(this)" onkeyup="resize(this)" placeholder="반려사유 필수 입력"></textarea>
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" title="반려">반려</a>
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
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">업체 등록을 승인하시겠습니까?</div>
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" title="승인">승인</a>
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
			detail: {}
		};
	},
	mounted() {
		this.retrieve();
	},
	methods: {
		async retrieve() {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/cust/approval/'+this.$route.params.id);
				this.detail = response.data;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		}
	}
}
</script>