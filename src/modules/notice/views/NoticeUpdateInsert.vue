<template>
    <!-- 본문 -->
	<div class="conRight">
		<!-- conHeader -->
		<div class="conHeader">
			<ul class="conHeaderCate">
				<li>공지사항</li>
				<li>공지사항 등록/수정</li>
			</ul>
		</div>
		<!-- //conHeader -->
		<!-- contents -->
		<div class="contents">
			<h3 class="h3Tit">{{ updateInsert == 'update' ? '공지사항 수정' : '공지사항 등록' }}</h3>
			<div class="boxSt mt20">
				<div class="flex align-items-center">
					<div class="formTit flex-shrink0 width170px">제목</div>
					<div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" v-model="detailData.btitle"></div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">공지대상</div>
					<div class="flex width100">
						<input type="radio" name="bm2"  v-model="detailData.bco" value="ALL" id="bm2_1" class="radioStyle"><label for="bm2_1">공통</label>
						<div>
							<input type="radio" name="bm2"  v-model="detailData.bco" value="CUST" id="bm2_2" class="radioStyle"><label for="bm2_2" data-toggle="modal" data-target="#AffiliateSelect">계열사</label>
							<p class="mt5 ml30" v-if="detailData.bco == 'CUST'">
								<span v-for="(val, index) in groupList" :key="index">
									{{  val.interrelated.interrelatedNm }}{{ index < groupList.length - 1 ? ', ' : '' }}
								</span>
							</p>
						</div>
					</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">작성자</div>
					<div class="width100">{{ detailData.buserName }}</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">공지일시</div>
					<div class="width100">등록 또는 수정한 날짜로 저장됩니다.</div>
				</div>
				<div class="flex align-items-center mt20">
					<div class="formTit flex-shrink0 width170px">조회수</div>
					<div class="width100">{{ detailData.bcount }}</div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">첨부파일</div>
					<div class="width100">
						<!-- 다중파일 업로드 -->
						<div class="upload-boxWrap">
							<div class="upload-box">
								<input type="file" id="file-input">
								<div class="uploadTxt">
									<i class="fa-regular fa-upload"></i>
									<div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
								</div>
							</div>
							<div class="uploadPreview" id="preview">
							</div>
						</div>
						<!-- //다중파일 업로드 -->
					</div>
				</div>
				<div class="flex mt20">
					<div class="formTit flex-shrink0 width170px">공지내용</div>
					<div class="width100">
						<textarea v-model="detailData.bcontent" class="textareaStyle notiBox overflow-y-auto" placeholder="" style="height:400px">
						</textarea>
					</div>
				</div>
			</div>

			<div class="text-center mt50">
				<router-link to="/notice" class="btnStyle btnOutline" title="목록">목록</router-link>
				<a  data-toggle="modal" data-target="#notiSave" class="btnStyle btnPrimary" title="저장">저장</a>
			</div>
		</div>
		<!-- //contents -->

		<!-- 공지사항 저장 -->
		<div class="modal fade modalStyle" id="notiSave" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a  class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">작성자와 공지일시는 현재 처리되는 기준으로 저장됩니다.<br>저장 하시겠습니까?</div>
						<div class="modalFooter">
							<a  class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a  @click="saveNotice" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //공지사항 저장 -->

		<!-- 계열사 선택 -->
		<div class="modal fade modalStyle" id="AffiliateSelect" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:500px">
				<div class="modal-content">
					<div class="modal-body">
						<a  class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<h2 class="modalTitle">계열사 선택</h2>
						<div class="modalTopBox">
							<ul>
								<li><div>공지 할 계열사를 선택해 주십시오.</div></li>
							</ul>
						</div>
						<table class="tblSkin1 mt20">
							<colgroup>
								<col style="width:100px">
								<col style="width:">
							</colgroup>
							<thead>
								<tr>
									<th>선택</th>
									<th class="end">계열사</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(val, index) in allGroupList" :key="index">
									<td><input type="checkbox" :id="'ck' + index" :value="val" v-model="selectedGroupList" class="checkStyle"><label :for="'ck' + index"></label></td>
									<td class="text-left end"><label :for="'ck' + index" class="fontweight-400">{{ val.interrelated.interrelatedNm }}</label></td>
								</tr>
							</tbody>
						</table>
						<div class="modalFooter">
							<a class="modalBtnClose" data-dismiss="modal" title="닫기" style="cursor: pointer;">닫기</a>
							<a @click="selectGroup" class="modalBtnCheck" data-toggle="modal" title="선택" style="cursor: pointer;">선택</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //계열사 선택 -->
	</div>
	<!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";
  import fileInput from "../../../../public/js/fileInput.js"
  

  
  export default {
    name: "noticeUpdateInsert",
    components: {

    },
    mounted() {
		
		//등록 및 수정 초기 세팅
		this.applyInsertOrUpdate();

		//파일첨부
		fileInput.applyFile();

		//db에 있는 모든 계열사 가져오기
		this.selectGroupCompany();
    },
    data() {
      return {
		updateInsert : '',//등록인지 수정인지
		detailData : {},//공지사항 상세 데이터
		groupList : [],//화면에 표시되는 계열사
		allGroupList : [],//db에 있는 모든 계열사
		selectedGroupList : []//선택된 계열사
      };
    },
    methods: {
		applyInsertOrUpdate(){//등록 및 수정 초기 세팅
			//등록인지 수정인지
			this.updateInsert = this.$route.query.updateInsert;

			if(this.updateInsert == 'update'){//수정인 경우

				//상세페이지에서 가져온 데이터 반영
				this.detailData = Object.assign({}, this.$store.state.noticeDetailData);
				this.groupList = this.detailData.groupList;
				console.log('grouplist >> ' ,this.groupList);

				var interrelatedCustCodeArr = [];//db에 넘길 interrelatedCustCode 정보
				var initArr = this.groupList;

				//배열에 담기
				for (const item of initArr) {
					interrelatedCustCodeArr.push(item.interrelatedCustCode);
				}

				this.detailData.interrelatedCustCodeArr = interrelatedCustCodeArr;

			}else{//등록인 경우

				this.initializeData();//초기화

			}

			this.selectedGroupList = [];
			this.allGroupList = [];
		},
		initializeData() {//등록인 경우
			// 초기화
			this.detailData = {
			bco: 'ALL',
			bcontent: '',
			bcount: 0,
			bdate: '',
			bfile: '',
			bfilePath: '',
			bno: null,
			btitle: '',
			buserName: this.$store.state.loginInfo.userName,
			buserid: this.$store.state.loginInfo.userId,
			groupList: []
			};
			this.groupList = [];
		},
		saveNotice(){
			if(this.updateInsert == 'update'){//수정인 경우
				this.updateNotice();
			}else{//등록인 경우
				this.insertNotice();
			}
		},
		insertNotice(){//공지사항 등록
			try {
				this.$store.commit('loading');
				this.$http.post('/api/v1/notice/insertNotice', this.detailData)
					.then(response => {
						alert('등록되었습니다.');
						$('#notiSave').modal('hide');
						this.$router.push({name:"notice"});//목록 페이지 이동
					});
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		updateNotice(){//공지사항 수정

			try {
				this.$store.commit('loading');
				this.$http.post('/api/v1/notice/updateNotice', this.detailData)
					.then(response => {
						alert('수정되었습니다.');
						$('#notiSave').modal('hide');
					});
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}

		},
		async selectGroupCompany(){//모든 계열사 조회
			try {
				this.$store.commit('loading');
				const response = await this.$http.post('/login/interrelatedList');
				this.allGroupList = response.data;
				this.$store.commit('finish');

				//allGroupList의 데이터 형식을 groupList와 일치화
				this.allGroupList = this.allGroupList.map(item => {
					return {
						interrelatedCustCode : item.interrelatedCustCode,
						interrelated: {
							interrelatedNm: item.interrelatedNm
						}
					};
				});
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
			
		},
		selectGroup(){//계열사 선택 처리
			var selected = this.selectedGroupList;//양방향 연결 안됨 방지를 위해 따로 변수로 받기
			this.groupList = selected;//화면에 출력
			this.detailData.groupList = selected;
			var interrelatedCustCodeArr = [];//db에 넘길 interrelatedCustCode 정보

			//배열에 담기
			for (const item of selected) {
				interrelatedCustCodeArr.push(item.interrelatedCustCode);
			}

			this.detailData.interrelatedCustCodeArr = interrelatedCustCodeArr;

			$('#AffiliateSelect').modal('hide');
		}
    }
  };
  </script>