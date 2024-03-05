<template>
<div>
<!-- 타계열사 업체조회 -->
<div class="modal fade modalStyle" id="otherCustPop" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="width:100%; max-width:900px">
		<div class="modal-content">
			<div class="modal-body">
				<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
				<h2 class="modalTitle">타계열사 업체조회</h2>
				<div class="modalTopBox">
					<ul>
						<li><div>계열사에 등록되어 있는 업체리스트를 조회합니다</div></li>
					</ul>
				</div>
				
				<div class="modalSearchBox mt20">
					<div class="flex align-items-center">
						<div class="sbTit mr30">업체유형</div>
						<div class="width150px">
							<input type="text" name="" id="" class="inputStyle" placeholder="">
						</div>
						<a href="javascript:void(0)" data-toggle="modal" data-target="#selectItem" class="btnStyle btnSecondary ml10">조회</a>
						<div class="sbTit mr30 ml50">업체명</div>
						<div class="width150px">
							<input type="text" name="" id="" class="inputStyle" placeholder="">
						</div>
						<a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
					</div>
				</div>
				<table class="tblSkin1 mt30">
					<colgroup>
						<col style="">
					</colgroup>
					<thead>
						<tr>
							<th>업체명</th>
							<th>업체유형</th>
							<th>사업자번호</th>
							<th>대표이사</th>
							<th>등록 계열사</th>
							<th class="end">선택</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>비트큐브㈜</td>
							<td class="text-left">1. 비철금속 광업 품목류<br>2. 기타 비금속 광물 광업 품목류</td>
							<td>123-12-12345</td>
							<td>강대표</td>
							<td>일진다이아모드<br>일진씨엔에스<br>일진파트너스</td>
							<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
						</tr>
						<tr>
							<td>레드코사인</td>
							<td class="text-left">1. 비철금속 광업 품목류</td>
							<td>123-12-12345</td>
							<td>강대표</td>
							<td>전주방송</td>
							<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
						</tr>
						<tr>
							<td>㈜유령케피탈</td>
							<td class="text-left">1. 비철금속 광업 품목류<br>2. 기타 비금속 광물 광업 품목류</td>
							<td>123-12-12345</td>
							<td>강대표</td>
							<td>일진씨엔에스</td>
							<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
						</tr>
					</tbody>
				</table>
				<!-- pagination -->
				<div class="row mt30">
					<div class="col-xs-12">
						<div class="pagination1 text-center">
							<a href="javascript:void(0)" title="10페이지 이전 페이지로 이동"><i class="fa-light fa-chevrons-left"></i></a>
							<a href="javascript:void(0)" title="이전 페이지로 이동"><i class="fa-light fa-chevron-left"></i></a>
							<a href="javascript:void(0)" title="1페이지로 이동" class="number active">1</a>
							<a href="javascript:void(0)" title="2페이지로 이동" class="number">2</a>
							<a href="javascript:void(0)" title="3페이지로 이동" class="number">3</a>
							<a href="javascript:void(0)" title="4페이지로 이동" class="number">4</a>
							<a href="javascript:void(0)" title="5페이지로 이동" class="number">5</a>
							<a href="javascript:void(0)" title="다음 페이지로 이동"><i class="fa-light fa-chevron-right"></i></a>
							<a href="javascript:void(0)" title="10페이지 다음 페이지로 이동"><i class="fa-light fa-chevrons-right"></i></a>
						</div>
					</div>
				</div>
				<!-- //pagination -->
				<div class="modalFooter">
					<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
				</div>
			</div>				
		</div>
	</div>
</div>
<!-- //타계열사 업체조회 -->
</div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: 'ItemPop',
  props: [ 'callbackFunc' ],
  components: {
    Pagination
  },
  data() {
    return {
		searchParams: {},
		itemGrpList: [],		
		itemPage: {}
    }
  },
  methods: {
    initModal() {
	  this.searchParams = {
			size: '5',
			itemGrpCd: ''
		};
      this.init();
	  this.search(0);
    },
	search(page) {
		this.searchParams.page = page;
		this.retrieve();
	},
	select(data) {
      this.$emit('callbackFunc', data);
      $("#itemPop").modal("hide"); 
	},
    async init() {
      try {
        this.$store.commit('loading');
        const response = await this.$http.post('/login/itemGrpList');
        this.itemGrpList = response.data;
        this.$store.commit('finish');
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
      }
    },
    async retrieve() {
      try {
        this.$store.commit('loading');
		const response = await this.$http.post('/login/itemList', this.searchParams);
        this.itemPage = response.data;
        this.$store.commit('finish');
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
      }
    }
  }
};
</script>

