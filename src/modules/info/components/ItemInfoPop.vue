<template>
<div>
	<!-- 품목 등록 -->
	<div class="modal fade modalStyle" id="itemInfoPop" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:500px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">품목 {{ isCreate ? '등록':'수정' }}</h2>
					<div class="flex align-items-center">
						<div class="formTit flex-shrink0 width120px">품목코드 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.itemCode" maxlength="10" class="inputStyle" placeholder="숫자만" :disabled="isCreate ? false : true"></div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">품목그룹</div>
						<div class="width100">
							<select v-model="detail.itemGrpCd" class="selectStyle">
								<option value="">선택</option>
								<option :value="val.itemGrpCd" v-for="(val, idx) in itemGrpList">{{ val.grpNm }}</option>
							</select>
						</div>
					</div>
					<div class="flex align-items-center mt20">
						<div class="formTit flex-shrink0 width120px">품목명 <span class="star">*</span></div>
						<div class="width100"><input type="text" v-model="detail.itemName" class="inputStyle" placeholder=""></div>
					</div>
					<div class="flex align-items-center mt10">
						<div class="formTit flex-shrink0 width120px">사용여부 <span class="star">*</span></div>
						<div class="width100">
							<select v-model="detail.useYn" class="selectStyle">
								<option value="Y">사용</option>
								<option value="N">미사용</option>
							</select>
						</div>
					</div>

					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click.prevent="save" class="modalBtnCheck" title="저장">저장</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //품목 등록 -->
</div>
</template>

<script>
export default {
  name: 'ItemInfoPop',
  props: [ 'searchFunc', 'itemGrpList' ],
  data() {
    return {
		searchParams: {},
		isCreate: true,
		detail: { itemCode:'',  itemGrp:{ itemGrpCd: '' }, itemName:'', useYn: 'Y' }
    }
  },
  watch : {
	'detail.itemCode'(){
		if(this.detail.itemCode != null && this.detail.itemCode != ''){
			this.detail.itemCode = this.detail.itemCode.replace(/[^0-9]/g, '').trim();
		}
	}
  },
  methods: {
    initModal(id) {
		if (id) {
			this.isCreate = false;
			this.retrieve(id);
		} else {
			this.isCreate = true;
			this.detail = { itemCode:'',  itemGrpCd: '', itemName:'', useYn: 'Y' }
		}
    },
    async retrieve(id) {

		this.detail = { itemCode:'',  itemGrpCd: '', itemName:'', useYn: 'Y' };
		this.searchParams = { itemCodeDetail : id, nonPopYn :'Y' };
		
		try {
			this.$store.commit('loading');
			this.$store.commit('searchParams', this.searchParams);
			const response = await this.$http.post('/api/v1/item/itemList', this.searchParams);
			var result = Object.assign({}, response.data.content[0]);

			this.detail.itemCode = result.itemCode;
			this.detail.itemGrpCd = result.itemGrpCd;
			this.detail.itemName = result.itemName;
			this.detail.useYn = result.useYn;

			this.$store.commit('finish');
		} catch(err) {
			console.log(err)
			this.$store.commit('finish');
		}


	/*	기존 소스
		try {
			this.$store.commit('loading');
			this.$http.post('/api/v1/item/'+id, this.searchParams) .then((response) => {
				console.log('result', response);
				this.detail = response.data;
			});
			this.$store.commit('finish');
		} catch(err) {
			console.log(err)
			this.$store.commit('finish');
		}
	*/
    },
	save() {  
		if (this.detail.itemCode == null || this.detail.itemCode == '') {
			this.$swal({type: "warning",text: "품목코드를 입력해주세요."});
			return;
		}
		if (this.detail.itemGrpCd == '') {
			this.$swal({type: "warning",text: "품목그룹을 선택해주세요."});
			return;
		}
		if (this.detail.itemName == null || this.detail.itemName == '') {
			this.$swal({type: "warning",text: "품목명을 입력해주세요."});
			return;
		}
		if (this.detail.useYn == null || this.detail.useYn == '') {
			this.$swal({type: "warning",text: "사용여부를 선택해주세요."});
			return;
		}
		this.$store.commit("loading");
		// 등록
		if( this.isCreate ){
			this.$http
			.post('/api/v1/item/save', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#commonAlertMsg").html('저장되었습니다.');
					$("#commonAlertPop").modal("show"); 
					$("#itemInfoPop").modal("hide");
					if (this.isCreate) {
						this.$emit('searchFunc', 0);
					} else {
						this.$emit('searchFunc');
					}
				} else if(response.data.code == 'DUP'){
					this.$swal({type: "warning",text: "이미 등록된 품목코드가 존재합니다."});
					return;
				} else {
					this.$swal({type: "warning",text: "저장 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		} 
		// 수정
		else {
			this.$http
			.post('/api/v1/item/saveUpdate', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					$("#commonAlertMsg").html('저장되었습니다.');
					$("#commonAlertPop").modal("show"); 
					$("#itemInfoPop").modal("hide");
					if (this.isCreate) {
						this.$emit('searchFunc', 0);
					} else {
						this.$emit('searchFunc');
					}
				} else if(response.data.code == 'DUP'){
					this.$swal({type: "warning",text: "이미 등록된 품목코드가 존재합니다."});
					return;
				} else {
					this.$swal({type: "warning",text: "저장 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		}
		
	},
  }
};
</script>

