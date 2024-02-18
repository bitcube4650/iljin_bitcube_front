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
					<div class="formTit flex-shrink0 width170px">승인 계열사</div>
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
					<div class="width100">{{ detail.custName }}</div>
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
					<div class="width100">정상</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">상태</div>
					<div class="width100 textHighlight">삭제</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">사유</div>
					<div class="width100">
						<textarea class="textareaStyle boxOverflowY" onkeydown="resize(this)" onkeyup="resize(this)" placeholder="">허위 가격 허위 조작</textarea>
					</div>
				</div>
			</div>

			<h3 class="h3Tit mt50">계열사 관리항목</h3>
			<div class="boxSt mt20">
				<div class="flex align-items-center">
					<div class="formTit flex-shrink0 width170px">업체등급</div>
					<div class="width100">
						<input type="radio" name="bm2" value="" id="bm2_1" class="radioStyle" checked=""><label for="bm2_1">A등급</label>
						<input type="radio" name="bm2" value="" id="bm2_2" class="radioStyle"><label for="bm2_2">B등급</label>
						<input type="radio" name="bm2" value="" id="bm2_3" class="radioStyle"><label for="bm2_3">C등급</label>
						<input type="radio" name="bm2" value="" id="bm2_4" class="radioStyle"><label for="bm2_4">D등급</label>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">D업체평가</div>
					<div class="width100">
						<textarea class="textareaStyle boxOverflowY" onkeydown="resize(this)" onkeyup="resize(this)" placeholder=""></textarea>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">관리단위</div>
					<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder=""></div>
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
				<a href="#" data-toggle="modal" data-target="#companyDel" class="btnStyle btnRed" title="삭제">삭제</a>
				<router-link :to="'/company/partner/management/'+$route.params.id+'/update'" class="btnStyle btnPrimary" title="수정">수정</router-link>
			</div>
		</div>
	</div>
	<!-- //contents -->

	<!-- 업체 삭제 -->
	<div class="modal fade modalStyle" id="companyDel" tabindex="-1" role="dialog" aria-hidden="true">
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
						<a href="#" @click.prevent="del" class="modalBtnCheck" title="삭제">삭제</a>
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
				const response = await this.$http.post('/api/v1/cust/management/'+this.$route.params.id);
				this.cust = response.data;
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
			.post('/api/v1/cust/delete', this.detail)
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
		}
	}
}
</script>