<template>
<!-- 본문 -->
<div class="conRight">
	<!-- conHeader -->
	<div class="conHeader">
		<ul class="conHeaderCate">
			<li>정보관리</li>
			<li>품목정보관리</li>
		</ul>
	</div>
	<!-- //conHeader -->
	<!-- contents -->
	<div class="contents">
		<div class="conTopBox">
			<ul class="dList">
				<li><div>협력사 등록(업체유형)과 입찰 생성(입찰 품목) 시 필요한 항목입니다.</div></li>
				<li><div>품목코드 및 품목명을 클릭하면 품목을 수정할 수 있습니다. (등록된 품목 코드는 수정할 수 없습니다)</div></li>
				<li><div>품목 코드는 중복될 수 없습니다.</div></li>
			</ul>
		</div>

		<!-- searchBox -->
		<div class="searchBox mt20">
			<div class="flex align-items-center">
				<div class="sbTit width100px">품목그룹</div>
				<div class="flex align-items-center width250px">
					<select v-model="searchParams.itemGrp" class="selectStyle">
						<option value="">전체</option>
						<option :value="val.itemGrpCd" v-for="(val, idx) in itemGrpList">{{ val.grpNm }}</option>
					</select>
				</div>
				<div class="sbTit width100px ml50">사용여부</div>
				<div class="flex align-items-center width250px">
					<select v-model="searchParams.useYn" class="selectStyle">
						<option value="">전체</option>
						<option value="Y">사용</option>
						<option value="N">미사용</option>
					</select>
				</div>
			</div>
			<div class="flex align-items-center height50px mt10">
				<div class="sbTit width100px">품목코드</div>
				<div class="flex align-items-center width250px">
					<input type="text" v-model="searchParams.itemCode" class="inputStyle" placeholder="">
				</div>
				<div class="sbTit width100px ml50">품목명</div>
				<div class="width250px">
					<input type="text" v-model="searchParams.itemName" class="inputStyle" placeholder="">
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
				</select>
			</div>
			<div class="flex-shrink0">
				<a href="#" @click.prevent="$refs.itemInfoPop.initModal()"  data-toggle="modal" data-target="#itemInfoPop" class="btnStyle btnPrimary" title="품목 등록">품목 등록</a>
			</div>
		</div>

		<table class="tblSkin1 mt10">
			<colgroup>
				<col style="">
			</colgroup>
			<thead>
				<tr>
					<th>품목코드</th>
					<th>품목명</th>
					<th>품목그룹</th>
					<th>사용여부</th>
					<th>등록자</th>
					<th class="end">등록일시</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(val, idx) in listPage.content">
					<td class="text-left"><a href="#" @click.prevent="$refs.itemInfoPop.initModal(val.itemCode)"  data-toggle="modal" data-target="#itemInfoPop" class="textUnderline notiTitle" title="회사정보 자세히 보기">{{ val.itemCode }}</a></td>
					<td class="text-left"><a href="#" @click.prevent="$refs.itemInfoPop.initModal(val.itemCode)"  data-toggle="modal" data-target="#itemInfoPop" class="textUnderline notiTitle" :title="val.itemName">{{ val.itemName }}</a></td>
					<td class="text-left">{{ val.itemGrp != null ? val.itemGrp.grpNm : '' }}</td>
					<td :class="val.useYn == 'Y' ? '' : 'textHighlight'">{{ val.useYn == 'Y' ? '사용' : '미사용' }}</td>
					<td>{{ val.createUser.userName }}</td>
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
	<item-info-pop ref="itemInfoPop" :itemGrpList="itemGrpList" @searchFunc="search"/>

</div>
<!-- //본문 -->
</template>
<script>  
import ItemInfoPop from "../components/ItemInfoPop.vue";
import Pagination from "@/components/Pagination.vue";

export default {
	name: "ItemInfo",
	components: {
		ItemInfoPop,
		Pagination
	},
	data() {
		return {
			itemGrpList: [],	
			searchParams: {},	
			listPage: {}
		};
	},
	mounted() {
		this.searchParams.useYn = 'Y';
		const params = {id: this.$options.name , itemGrp: '', useYn: 'Y', size: '10'};
		if (this.$store.state.searchParams.id == params.id) {
			this.searchParams = Object.assign(params, this.$store.state.searchParams);
		} else {
			this.searchParams = params;
		}
		this.init();
		this.retrieve();
	},
	methods: {
		search(page) {
			if (page >= 0) this.searchParams.page = page;
			this.retrieve();
		},
		async init() {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/api/v1/item/itemGrpList');
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
        		this.$store.commit('searchParams', this.searchParams);
				const response = await this.$http.post('/api/v1/item/itemList', this.searchParams);
				this.listPage = response.data;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		callbackItem() {
			
		}
	}
};
</script>