<template>
<!-- 본문 -->
<div class="conRight">
	<!-- conHeader -->
	<div class="conHeader">
		<ul class="conHeaderCate">
			<li>정보관리</li>
			<li>사용자관리</li>
		</ul>
	</div>
	<!-- //conHeader -->
	<!-- contents -->
	<div class="contents">
		<div class="conTopBox">
			<ul class="dList">
				<li><div>그룹사 사용자를 관리합니다.</div></li>
				<li><div>사용자명과 아이디 클릭 시 상세정보를 확인할 수 있습니다. (보안을 위해 본인의 암호를 입력해야 확인 가능합니다.)</div></li>
			</ul>
		</div>

		<!-- searchBox -->
		<div class="searchBox mt20">
			<div class="flex align-items-center">
				<div class="sbTit width100px">그룹사</div>
				<div class="flex align-items-center width250px">
					<select v-model="searchParams.interrelatedCustCode" class="selectStyle">
						<option value="">전체</option>
						<option :value="val.key" v-for="(val, idx) in interrelatedList">{{ val.value }}</option>
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
				<div class="sbTit width100px">사용자명</div>
				<div class="flex align-items-center width250px">
					<input type="text" v-model="searchParams.userName" id="" class="inputStyle" placeholder="">
				</div>
				<div class="sbTit width100px ml50">아이디</div>
				<div class="width250px">
					<input type="text" v-model="searchParams.userId" class="inputStyle" placeholder="">
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
				<a href="#" @click.prevent="$refs.userInfoPop.initModal()"  data-toggle="modal" data-target="#userInfoPop" class="btnStyle btnPrimary" title="사용자 등록">사용자 등록</a>
			</div>
		</div>

		<table class="tblSkin1 mt10">
			<colgroup>
				<col style="">
			</colgroup>
			<thead>
				<tr>
					<th>사용자명</th>
					<th>아이디</th>
					<th>직급</th>
					<th>부서</th>
					<th>전화번호</th>
					<th>휴대폰</th>
					<th>사용권한</th>
					<th>사용여부</th>
					<th class="end">소속사</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(val, idx) in listPage.content">
					<td class="text-left"><a href="#" @click.prevent="fnUserDetail(val.userId);" class="textUnderline notiTitle">{{ val.userName }}</a></td>
					<td class="text-left"><a href="#" @click.prevent="fnUserDetail(val.userId);" class="textUnderline notiTitle">{{ val.userId }}</a></td>
					<td>{{ val.userPosition }}</td>
					<td>{{ val.deptName }}</td>
					<td>{{ val.userTel }}</td>
					<td>{{ val.userHp }}</td>
					<td>{{ val.userAuth == '1' ? '시스템관리자' : (val.userAuth == '2' ? '각사관리자' : (val.userAuth == '3' ? '일반사용자' : '감사사용자')) }}</td>
					<td :class="val.useYn == 'Y' ? '' : 'textHighlight'">{{ val.useYn == 'Y' ? '사용' : '미사용' }}</td>
					<td class="end">{{ val.interrelatedCustNm }}</td>
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
							<input type="password" class="inputStyle" placeholder="" v-model="pwdCheckParam.pwd"  @keypress.enter="fnCheckPwd">
						</div>
					</div>
					<p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
						<!-- <a href="#" @click.prevent="show" class="modalBtnCheck" title="확인">확인</a> -->
						<a href="#" @click.prevent="fnCheckPwd" class="modalBtnCheck" title="확인">확인</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- 사용자수정 비밀번호 확인 -->

	<!-- 품목 등록/수정 팝업 -->
	<user-info-pop ref="userInfoPop" :interrelatedList="interrelatedList" @searchFunc="search"/>
</div>
<!-- //본문 -->
</template>
<script>  
import Pagination from "@/components/Pagination.vue";
import UserInfoPop from "../components/UserInfoPop.vue";

export default {
	name: "GroupUser",
	components: {
		Pagination,
		UserInfoPop
	},
	data() {
		return {
			interrelatedList: [],
			searchParams: {},	
			listPage: {},
			pwdCheckParam : {}
		};
	},
	mounted() {
		this.searchParams.useYn = 'Y';
		const params = {id: this.$options.name, interrelatedCustCode: '', useYn: 'Y', size: '10'};
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
				const response = await this.$http.post('/api/v1/couser/interrelatedList');
				this.interrelatedList = response.data;
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
				const response = await this.$http.post('/api/v1/couser/userList', this.searchParams);
				this.listPage = response.data;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		callbackItem(data) {
			this.searchParams.custTypeCode1 = data.itemCode;
			this.searchParams.custTypeNm1 = data.itemName;
			this.$forceUpdate()
		},
		fnUserDetail(userId){
			// 비밀번호 체크
			this.pwdCheckParam.detailUserId = userId;
			$("#userInfoPwdPop").modal("show"); 
		},
		fnCheckPwd(userId){
			// 대충 비밀번호 체크 로직
			this.$http
				.post('/api/v1/couser/pwdCheck', this.pwdCheckParam)
				.then((response) => {
					if (response.data.code == 'OK') {
						$("#userInfoPwdPop").modal("hide"); 
						$("#userInfoPop").modal("show"); 

						this.$refs.userInfoPop.initModal(this.pwdCheckParam.detailUserId);
						this.pwdCheckParam = {pwd : '', detailUserId : ''};	// 입력 pwd 초기화
						return;
					} else {
						this.$swal({type: "warning",text: "비밀번호를 확인해주세요"});
						return;
					}
				}
			);
		}
	}
};
</script>