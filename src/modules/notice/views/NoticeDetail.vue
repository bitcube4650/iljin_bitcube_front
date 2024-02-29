<template>
	<!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>공지사항</li>
				<li>공지사항 상세</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<h3 class="h3Tit">공지사항</h3>
			<div class="boxSt mt20">
				<div class="flex align-items-center">
					<div class="formTit flex-shrink0 width170px">제목</div>
					<div class="width100">{{ dataFromList.btitle }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">공지대상</div>
					<div class="flex width100">
						<input type="radio" name="bm2" v-model="dataFromList.bco" value="ALL" id="bm2_1" class="radioStyle" :disabled="dataFromList.bco == 'ALL' ? false : true"><label for="bm2_1" :class="dataFromList.bco == 'ALL' ? '' : 'dimmed'">공통</label>
						<div>
							<input type="radio" name= "bm2" v-model="dataFromList.bco" value="CUST" id="bm2_2" class="radioStyle" :disabled="dataFromList.bco == 'CUST' ? false : true"><label for="bm2_2" :class="dataFromList.bco == 'CUST' ? '' : 'dimmed'">계열사</label>
							<p class="mt5 ml30" v-if="dataFromList.bco == 'CUST'">
								<span v-for="(val, index) in groupList" :key="index">
									{{ val.interrelated.interrelatedNm }}{{ index < groupList.length - 1 ? ', ' : '' }}
								</span>
							</p>
						</div>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">작성자</div>
					<div class="width100">{{ dataFromList.buserName }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">공지일시</div>
					<div class="width100">{{ dataFromList.bdate }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">조회수</div>
					<div class="width100">{{ dataFromList.bno }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">첨부파일</div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">공지내용</div>
					<div class="width100">
						<div v-html="content" class="overflow-y-auto notiBox width100" style="height:400px">
						</div>
					</div>
				</div>
			</div>

			<div class="text-center mt50">
				<router-link to="/notice" class="btnStyle btnOutline" title="목록">목록</router-link>
				<a href="javascript:" @click="clickUpdate" class="btnStyle btnOutline" title="수정 이동">수정 이동</a>
				<a href="javascript:" data-toggle="modal" data-target="#notiDel" class="btnStyle btnOutlineRed" title="삭제">삭제</a>
			</div>
		</div>
		<!-- //contents -->

		<!-- 공지사항 삭제 -->
		<div class="modal fade modalStyle" id="notiDel" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a href="javascript:" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">공지를 삭제합니다.<br>삭제 하시겠습니까?</div>
						<div class="modalFooter">
							<a href="javascript:" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a href="javascript:" @click="deleteNotice" class="modalBtnCheck" data-toggle="modal" title="삭제">삭제</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //공지사항 삭제 -->
	</div>
	<!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";
  import fileInput from "../../../../public/js/fileInput.js"

  
  export default {
    name: "noticeDetail",
    components: {

    },
    mounted() {
		//공지사항 내용 set
		this.dataFromList = Object.assign({}, this.$store.state.noticeDetailData);

		//공지사항 내용 줄바꿈 처리
		this.content = this.dataFromList.bcontent.replace(/(?:\r\n|\r|\n)/g, '<br />');

		//파일첨부
		fileInput.applyFile();

		//해당 공지사항 공개되는 계열사 리스트 조회
		this.selectGroupList();
		
    },
    data() {
      return {
		dataFromList : {},
		content : '',
		groupList : []
      };
    },
    methods: {
		async selectGroupList(){//해당 공지사항 공개되는 계열사 리스트 조회

			try {
				this.$store.commit('loading');
				var response = await this.$http.post('/api/v1/notice/selectGroupList', { 'bno': this.dataFromList.bno });
				this.groupList = response.data;
				console.log(">>>>>>> ", this.groupList);
				this.dataFromList.groupList = this.groupList;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
			
        },
		deleteNotice(){//공지사항 삭제
			try {
				this.$store.commit('loading');
				var response = this.$http.post('/api/v1/notice/deleteNotice', { 'bno': this.dataFromList.bno })
								    .then(response => {
										alert('삭제되었습니다.');
										$('#notiDel').modal('hide');
										this.$router.push({name:"notice"});//목록 페이지 이동
									});
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		clickUpdate(){//수정하기 이동
			var groupList = this.groupList;

			this.dataFromList.groupList = this.groupList;
			this.$store.commit('setNoticeDetailData', this.dataFromList);
			this.$router.push({name:"noticeUpdateInsert" , query: { updateInsert: 'update' }});//수정 페이지 이동
		}
    }
  };
  </script>