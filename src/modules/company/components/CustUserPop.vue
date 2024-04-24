<template>
<div>
<!-- 협력사 사용자 -->
<div class="modal fade modalStyle" id="custUserPop" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog" style="width:100%; max-width:1100px">
		<div class="modal-content">
			<div class="modal-body">
				<a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
				<h2 class="modalTitle">협력사 사용자</h2>
				
				<div class="modalSearchBox mt20">
					<div class="flex align-items-center">
						<div class="sbTit mr30">사용자명</div>
						<div class="width150px">
							<input type="text" v-model="searchParams.userName" class="inputStyle" placeholder="" @keyup.enter.prevent="search(0)">
						</div>
						<div class="sbTit mr30 ml50">로그인 ID</div>
						<div class="width150px">
							<input type="text" v-model="searchParams.userId" class="inputStyle" placeholder="" @keyup.enter.prevent="search(0)">
						</div>
						<a @click.prevent="search(0)" class="btnStyle btnSearch">검색</a>
					</div>
				</div>
				<table class="tblSkin1 mt30">
					<colgroup>
						<col style="">
					</colgroup>
					<thead>
						<tr>
							<th v-if="$parent.$parent.bidPlan"><input v-model="allCheck" type="checkbox" @change="userAllCheck"></th>
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
							<td v-if="$parent.$parent.bidPlan"><input type="checkbox" name="userCheck" v-model="val.checked" :value="{ userName: val.userName, userId: val.userId , custCode : searchParams.custCode}"></td>
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
						<pagination @searchFunc="search" :page="listPage"/>
					</div>
				</div>
				<!-- //pagination -->
				<div class="modalFooter">
					<a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					<a  v-if="$parent.$parent.bidPlan" @click="checkSave" class="btnStyle btnSecondary" title="저장">저장</a>
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
  name: 'ItemPop',
  props: [ 'callbackFunc' ],
  components: {
    Pagination
  },
  data() {
    return {
		searchParams: {},
		itemGrpList: [],		
		listPage: {},
		allCheck : false,
		custName : '',
		userCheck : [],
		custCode : ''
    }
  },
  methods: {
    initModal(custCode,custName) {
	  this.searchParams = {
			size: '20',
			custCode: custCode
		};
	  this.custName = custName
	  this.search(0);
    },
	search(page) {
		this.searchParams.page = page;
		this.retrieve();
	},
    async retrieve() {
      try {
        this.$store.commit('loading');
		const response = await this.$http.post('/api/v1/custuser/userListForCust', this.searchParams);
        this.listPage = Object.assign({}, response.data)
			//$('input[name="userCheck"]').prop('checked', false)
			this.allCheck = false
		
        this.$store.commit('finish');
      } catch(err) {
        console.log(err)
        this.$store.commit('finish');
      }
    },
	checkSave(){

		const vm = this
		if($('input[name="userCheck"]:checked').length == 0){
			alert("공고 시 메일과 문자를 수신할 사용자를 선택해 주세요.");
			return 
		}
		const checkedUsers = this.listPage.content.filter(user => user.checked);
		const custCode = vm.searchParams.custCode;
		
		checkedUsers.forEach(user => {

			const alreadyExists = vm.$parent.$parent.custUserInfo.some(userInfo =>
				userInfo.userId === user.userId && userInfo.custCode === custCode
			);

			if (!alreadyExists) {

				vm.$parent.$parent.custUserInfo.push({
					userId: user.userId,
					userName: user.userName,
					custCode: custCode
				});
			}
		});
		
		const custCodeUserName = checkedUsers.map(item => item.userName).join(', ')

		vm.$parent.$parent.custUserName.push({custCode : custCode, userName : custCodeUserName}) 

		const custData = { custCode: custCode, custName: vm.custName };
		vm.$parent.$parent.callbackCust(custData);
		$('#custUserPop').modal('hide');
		//$('#custPop').modal('hide');

	},
	userAllCheck(){
		    // 모든 체크박스를 선택한 경우
			if(this.allCheck){
        for (let val of this.listPage.content) {
            val.checked = TextTrackCueList
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

