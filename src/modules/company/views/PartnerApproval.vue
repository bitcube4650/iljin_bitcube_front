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
		<div class="conTopBox">
			<ul class="dList">
				<li><div>아래는 가입 신청한 업체 목록 입니다. 업체명을 클릭하여 상세내용을 확인 후 승인 처리 하십시오 (가입 승인은 최대 3일을 넘지 않도록 합니다)</div></li>
				<li><div>가입 승인이 완료되면 업체 관리자에게 이메일로 통보 됩니다.</div></li>
			</ul>
		</div>

		<!-- searchBox -->
		<div class="searchBox mt20">
			<div class="flex align-items-center">
				<div class="sbTit mr30">업체명</div>
				<div class="width200px">
					<input type="text" v-model="searchParams.custName" class="inputStyle" @keydown.enter="search(0)">
				</div>
				<div class="sbTit mr30 ml50">업체유형</div>
				<div class="flex align-items-center">
					<input type="text" v-model="searchParams.custTypeNm1" class="inputStyle width280px readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
					<input type="hidden" v-model="searchParams.custTypeCode1"/>
					<a href="#" @click="$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
					<button @click="clearCustType1()" v-show="searchParams.custTypeCode1 != null" type="button" class="btnStyle btnOutline" title="삭제">삭제</button>
				</div>
				<a href="#" @click.prevent="search(0)" class="btnStyle btnSearch">검색</a>
			</div>
		</div>
		<!-- //searchBox -->

		<div class="flex align-items-center justify-space-between mt40">
			<div class="width100">
				전체 : <span class="textMainColor"><strong>{{ listPage.totalElements ? listPage.totalElements.toLocaleString() : 0 }}</strong></span>건
				<select v-model="searchParams.size" @change="search(0)" class="selectStyle maxWidth140px ml20">
					<option value="10">10개씩 보기</option>
					<option value="20">20개씩 보기</option>
					<option value="30">30개씩 보기</option>
					<option value="50">50개씩 보기</option>
				</select>
			</div>
		</div>
		<table class="tblSkin1 mt10">
			<colgroup>
				<col style="">
				<col style="width:20%">
				<col style="width:15%">
				<col style="width:10%">
				<col style="width:10%">
				<col style="width:15%">
			</colgroup>
			<thead>
				<tr>
					<th>업체명</th>
					<th>업체유형</th>
					<th>사업자등록번호</th>
					<th>대표이사</th>
					<th>담당자명</th>
					<th class="end">요청일시</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(val, idx) in listPage.content">
					<td class="text-left"><router-link :to="'/company/partner/approval/'+val.custCode" class="textUnderline notiTitle" title="회사정보 자세히 보기">{{ val.custName }}</router-link></td>
					<td>{{ val.custType1 }}</td>
					<td>{{ val.regnum }}</td>
					<td>{{ val.presName }}</td>
					<td>{{ val.userName }}</td>
					<td class="end">{{ val.createDate }}</td>
				</tr>
			</tbody>
		</table>

		<!-- pagination -->
		<div class="row mt40">
			<div class="col-xs-12">
				<pagination @searchFunc="search" :page="listPage"/>
			</div>
		</div>
		<!-- //pagination -->

	</div>
	<!-- //contents -->

    <!-- 품목 선택 팝업 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem"/>
</div>
<!-- //본문 -->
</template>
<script>  
import ItemPop from "@/components/ItemPop.vue";
import Pagination from "@/components/Pagination.vue";

export default {
	name: "PartnerApproval",
	components: {
		ItemPop,
		Pagination
	},
	data() {
		return {
			searchParams: {},	
			listPage: {}
		};
	},
	mounted() { 
		const params = {id: this.$options.name , size: '10'};
		if (this.$store.state.searchParams.id == params.id) {
			this.searchParams = Object.assign(params, this.$store.state.searchParams);
		} else {
			this.searchParams = params;
		}
		this.retrieve();
	},
	methods: {
		search(page) {
			this.searchParams.page = page;
			this.retrieve();
		},
		async retrieve() {
			try {
				this.$store.commit('loading');
				this.searchParams.certYn = "N";
				const response = await this.$http.post('/api/v1/cust/approvalList', this.searchParams);
				this.listPage = response.data;
        		this.$store.commit('searchParams', this.searchParams);
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		clearCustType1() {
			this.searchParams.custTypeCode1 = null;
			this.searchParams.custTypeNm1 = null;
			this.$forceUpdate()
		},
		callbackItem(data) {
			this.searchParams.custTypeCode1 = data.itemCode;
			this.searchParams.custTypeNm1 = data.itemName;
			this.$forceUpdate()
		}
	}
};
</script>