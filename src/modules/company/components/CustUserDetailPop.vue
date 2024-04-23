<template>
<div>
<!-- 협력사 사용자 -->
<div class="modal fade modalStyle" id="custUserDetailPop" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="width:100%; max-width:1100px">
		<div class="modal-content">
			<div class="modal-body">
				<a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
				<h2 class="modalTitle">협력사 사용자</h2>
				
				<div class="modalSearchBox mt20">
					<div class="flex align-items-center">
						<div class="sbTit mr30">사용자명</div>
						<div class="width150px">
							<input type="text" v-model="searchParams.userName" class="inputStyle" placeholder="" @keyup.enter.prevent="detailSearch(0)">
						</div>
						<div class="sbTit mr30 ml50">로그인 ID</div>
						<div class="width150px">
							<input type="text" v-model="searchParams.userId" class="inputStyle" placeholder="" @keyup.enter.prevent="detailSearch(0)">
						</div>
						<a @click.prevent="detailSearch(0)" class="btnStyle btnSearch">검색</a>
					</div>
				</div>
				<table class="tblSkin1 mt30">
					<colgroup>
						<col style="">
					</colgroup>
					<thead>
						<tr>
							<th><input v-model="allCheck" type="checkbox" @change="userAllCheck"></th>
							<th>사용자명</th>
							<th>로그인ID</th>
							<th>부서</th>
							<th>직급</th>
							<th>이메일</th>
							<th>전화번호</th>
							<th>휴대폰</th>
							<th class="end">권한</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(val,idx) in listPage.content" :key="idx">
							<td><input type="checkbox" name="userDetailCheck" v-model="val.checked" :value="{ userName: val.userName, userId: val.userId , custCode : custCode}"></td>
							<td>{{ val.userName }}</td>
							<td>{{ val.userId }}</td>
							<td>{{ val.userBuseo }}</td>
							<td>{{ val.userPosition }}</td>
							<td>{{ val.userEmail }}</td>
							<td>{{ val.userTel }}</td>
							<td>{{ val.userHp }}</td>
							<td class="end">{{ val.userType == '1' ? '업체관리자' : '사용자'}}</td>
						</tr>
					</tbody>
				</table>
				<!-- pagination -->
				<div class="row mt30">
					<div class="col-xs-12">
						<pagination @searchFunc="detailSearch" :page="listPage"/>
					</div>
				</div>
				<!-- //pagination -->
				<div class="modalFooter">
					<a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					<a  @click="checkSave" class="btnStyle btnSecondary" title="저장">저장</a>
				</div>
			</div>				
		</div>
	</div>
</div>
<!-- //협력사 사용자 -->
</div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: 'custUserDetailPop',
  components: {
    Pagination
  },
  data() {
    return {
		searchParams: {},
		itemGrpList: [],		
		listPage: {},
		allCheck : false,
		custUserInfo : [],
		custCode : ''
    }
  },
  methods: {
    async initModal(custCode,custUserInfo) {
		this.custCode = custCode
		this.custUserInfo = custUserInfo
		this.searchParams = {
				size: '20',
				custCode: custCode
			};
		await this.detailSearch(0);
    },
	async detailSearch(page) {
		this.searchParams.page = page;
		await this.retrieve();
	},
    async retrieve() {
      try {
        this.$store.commit('loading');
		const response = await this.$http.post('/api/v1/custuser/userListForCust', this.searchParams);
        this.listPage = Object.assign({}, response.data)
		if(this.listPage.content){
			this.listPage.content = this.listPage.content.map(item => {
				const match = this.custUserInfo.some(userInfo => userInfo.userId === item.userId);
				return { ...item, checked: match }
			});
		}
		this.allCheck = false
        this.$store.commit('finish');
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
      }
    },
	checkSave(){

		const vm = this
		if($('input[name="userDetailCheck"]:checked').length == 0){
			alert("공고 시 메일과 문자를 수신할 사용자를 선택해 주세요.");
			return 
		}
		const checkedUsers = vm.listPage.content.filter(user => user.checked);
		const custCode = vm.searchParams.custCode;


		vm.$parent.custUserInfo = vm.$parent.custUserInfo.filter(item => item.custCode != this.custCode)

		checkedUsers.forEach(user => {

			vm.$parent.custUserInfo.push({
				userId: user.userId,
				userName: user.userName,
				custCode: custCode
			});
		});

		$('#custUserDetailPop').modal('hide');

		},
	userAllCheck(){
	if(this.allCheck){
        for (let val of this.listPage.content) {
            val.checked = true
        }
    } else {
        for (let val of this.listPage.content) {
            val.checked = false
        }
    }
	},
  }
};
</script>

