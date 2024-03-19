<template>
<div>
	<!-- 품목 선택 -->
	<div class="modal fade modalStyle" id="itemPop" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:800px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">품목 선택</h2>
					<div class="modalTopBox">
						<ul>
							<li><div>검색 창에 품목명 또는 품목코드를 입력하시고 엔터 또는 [품목조회]버튼을 클릭하시고 품목을 선택해 주십시오.</div></li>
							<li><div>품목코드는 2017년부터 적용되는 한국표준산업분류 10차 개정 자료를 기준으로 합니다.</div></li>
						</ul>
					</div>
					
					<div class="modalSearchBox mt20">						
						<div class="flex align-items-center">
							<div style="width:calc(100% - 120px)">
								<select v-model="searchParams.itemGrp" class="selectStyle">
									<option value="">품목그룹 전체</option>
                            		<option :value="val.itemGrpCd" v-for="(val, idx) in itemGrpList">{{ val.grpNm }}</option>
								</select>
								<input type="text" v-model="searchParams.itemName" class="inputStyle mt10" placeholder="품목명 또는 품목코드 입력 조회">
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
								<th>품목코드</th>
								<th>품목명</th>
								<th class="end">선택</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(val, idx) in listPage.content">
								<td>{{ val.itemCode }}</td>
								<td class="text-left">{{ val.itemName }}</td>
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
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //품목 선택 -->
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
		listPage: {}
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

