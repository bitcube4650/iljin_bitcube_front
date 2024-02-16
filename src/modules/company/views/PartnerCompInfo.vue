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
						<div class="width100">공공장소 청소 및 유사 서비스업 품목류</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">업체유형 2</div>
						<div class="width100">사업 시설 유지관리 및 고용 서비스업 품목류</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width170px">회사명</div>
						<div class="width100">비트큐브</div>
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
				</div>

				<div class="text-center mt30">
					<a href="javascript:void(0)" data-toggle="modal" data-target="#withdrawal1" class="btnStyle btnOutlineRed" title="회원탈퇴">회원탈퇴</a>
					<a @click="clickPartnerCompUpdate" data-toggle="modal" data-target="#withdrawal1" class="btnStyle btnPrimary" title="수정">수정</a>
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

			</div>
		</div>
		<!-- //contents -->
	</div>
	<!-- //본문 -->
</template>
  <script>
  import _ from "lodash";
  import Menu from "@/components/Menu.vue";
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  

  
  export default {
    name: "partnerCompInfo",
    components: {
      Menu,
      Header,
      Footer
    },
    data() {
      return {

      };
    },
    methods: {
		clickPartnerCompUpdate(){
			this.$router.push({name:"partnerCompUpdate"});
		}
     
    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>