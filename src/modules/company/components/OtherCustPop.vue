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
							<input type="text" v-model="searchParams.custTypeNm" class="inputStyle readonly" readonly placeholder="" @keyup.enter.prevent="search(0)">
						</div>
						<input type="hidden" v-model="searchParams.custType" @keyup.enter.prevent="search(0)"/>
						<a hhref="#" @click="$parent.callPop()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
						<div class="sbTit mr30 ml50">업체명</div>
						<div class="width150px">
							<input type="text" v-model="searchParams.custName" class="inputStyle" placeholder="" @keyup.enter.prevent="search(0)">
						</div>
							<a href="#" @click.prevent="search(0)" class="btnStyle btnSearch">검색</a>
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
						<tr v-for="(val, idx) in listPage.content">
							<td>{{ val.custName }}</td>
							<td class="text-left" v-html="val.custType1"></td>
							<td>{{ val.regnum }}</td>
							<td>{{ val.presName }}</td>
							<td v-html="val.interrelatedNm"></td>
							<td class="end"><a href="#" @click.prevent="select(val)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
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
  name: 'OtherCustPop',
  props: [ 'callbackFunc', 'custType', 'custTypeNm' ],
  components: {
    Pagination
  },
  watch: {
	custType: {
		handler: function () {
			this.searchParams.custType = this.custType.itemCode;
			this.searchParams.custTypeNm = this.custType.itemName;
			this.$forceUpdate()
		}
	}
  },
  data() {
    return {
		searchParams: {},	
		listPage: {}
    }
  },
  methods: {
    initModal() {
	  this.searchParams = {
		    custCode : this.$store.state.loginInfo.custCode,
			size: '5'
		};
	  this.search(0);
    },
	search(page) {
		this.searchParams.page = page;
		this.retrieve();
	},
	select(data) {
      this.$emit('callbackFunc', data);
      $("#otherCustPop").modal("hide"); 
	},
    async retrieve() {
      try {
        this.$store.commit('loading');
		const response = await this.$http.post('/api/v1/cust/otherCustList', this.searchParams);
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

