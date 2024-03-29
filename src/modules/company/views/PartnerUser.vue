<template>
	<!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>업체정보</li>
				<li>사용자관리</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<div class="conTopBox">
				<ul class="dList">
					<li><div>전자입찰 시스템을 사용할 수 있는 사용자 목록입니다.</div></li>
					<li><div>사용자명을 클릭하면 정보 확인 후 수정하실 수 있습니다.</div></li>
				</ul>
			</div>
	
			<!-- searchBox -->
			<div class="searchBox mt20">
				<div class="flex align-items-center">
					<div class="sbTit mr30">사용자명</div>
					<div class="flex align-items-center width200px">
						<input type="text" v-model="searchParams.userName" class="inputStyle" @keyup.enter.prevent="search(0)">
					</div>
					<div class="sbTit mr30 ml50">로그인 ID</div>
					<div class="flex align-items-center width200px">
						<input type="text" v-model="searchParams.userId" class="inputStyle" @keyup.enter.prevent="search(0)">
					</div>
					<div class="sbTit mr30 ml50">상태</div>
					<div class="flex align-items-center width200px">
						<select v-model="searchParams.useYn" class="selectStyle maxWidth140px ml20">
							<option value="">전체</option>
							<option value="Y">정상</option>
							<option value="N">삭제</option>
						</select>
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
				<div class="flex-shrink0">
					<a href="#" @click.prevent="$refs.custUserInfoPop.initModal()"  data-toggle="modal" data-target="#userInfoPop" class="btnStyle btnPrimary" title="사용자 등록">사용자 등록</a>
				</div>
			</div>
	
			<table class="tblSkin1 mt10">
				<colgroup>
					<col style="">
				</colgroup>
				<thead>
					<tr>
						<th>사용자명</th>
						<th>로그인ID</th>
						<th>부서</th>
						<th>직급</th>
						<th>전화번호</th>
						<th>휴대폰</th>
						<th>상태</th>
						<th class="end">사용권한</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(val, idx) in listPage.content">
						<td class="text-left"><a href="#" @click.prevent="$refs.custUserInfoPop.initModal(val.userId);" data-toggle="modal" data-target="#userInfoPop" class="textUnderline notiTitle">{{ val.userName }}</a></td>
						<td class="text-left"><a href="#" @click.prevent="$refs.custUserInfoPop.initModal(val.userId);" data-toggle="modal" data-target="#userInfoPop" class="textUnderline notiTitle">{{ val.userId }}</a></td>
						<td>{{ val.userBuseo }}</td>
						<td>{{ val.userPosition }}</td>
						<td>{{ val.userTel }}</td>
						<td>{{ val.userHp }}</td>
						<td :class="val.useYn == 'Y' ? '' : 'textHighlight'">{{ val.useYn == 'Y' ? '정상' : '삭제' }}</td>
						<td class="end">{{ val.userType == '1' ? '업체관리자' : '일반사용자' }}</td>
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
	
		<!-- 사용자 등록/수정 팝업 -->
		<cust-user-info-pop ref="custUserInfoPop" @searchFunc="search"/>
	</div>
	<!-- //본문 -->
	</template>
	<script>  
	import Pagination from "@/components/Pagination.vue";
	import CustUserInfoPop from "../components/CustUserInfoPop.vue";
	
	export default {
		name: "PartnerUser",
		components: {
			Pagination,
			CustUserInfoPop
		},
		data() {
			return {
				searchParams: {},	
				listPage: {}
			};
		},
		mounted() {
			const params = {id: this.$options.name, useYn: 'Y', size: '10'};
			if (this.$store.state.searchParams.id == params.id) {
				this.searchParams = Object.assign(params, this.$store.state.searchParams);
			} else {
				this.searchParams = params;
			}
			this.retrieve();
		},
		methods: {
			search(page) {
				if (page >= 0) this.searchParams.page = page;
				this.retrieve();
			},
			async retrieve() {
				try {
					this.$store.commit('loading');
					this.$store.commit('searchParams', this.searchParams);
					const response = await this.$http.post('/api/v1/custuser/userListForCust', this.searchParams);
					this.listPage = response.data;
					this.$store.commit('finish');
				} catch(err) {
					console.log(err)
					this.$store.commit('finish');
				}
			}
		}
	};
	</script>