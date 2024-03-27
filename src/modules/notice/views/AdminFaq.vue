<template>
	<!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>공지</li>
                <li>FAQ</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">

            <!-- searchBox -->
            <div class="searchBox">
                <div class="flex align-items-center">
                    <div class="sbTit mr30">제목</div>
                    <div class="width200px">
                        <input type="text" @keydown.enter="search(0)" v-model="searchParams.title" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit mr30 ml50">구분</div>
                    <div class="width200px">
                        <select v-model="searchParams.faqType" class="selectStyle">
                            <option value="">전체</option>
                            <option value="1">가입관련</option>
                            <option value="2">입찰관련</option>
                            <option value="3">인증서관련</option>
                        </select>
                    </div>
                    <a @click.prevent="search(0)" class="btnStyle btnSearch">검색</a>
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
                <div class="flex-shrink0" v-if="custType == 'inter' && userAuth == '1'">
                    <a @click="goInsert" data-toggle="modal" data-target="#faqReg" class="btnStyle btnPrimary" title="FAQ 등록">FAQ 등록</a>
                </div>
            </div>
            <table class="tblSkin1 mt10">
                <colgroup>
                    <col style="width:15%">
                    <col style="">
                    <col style="width:15%">
                    <col style="width:15%">
                </colgroup>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록자</th>
                        <th class="end">등록일시</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(val, idx) in listPage.content">
                        <td>{{ val.faqTypeDescription }}</td>
                        <td class="text-left"><a @click="goDetail(val)" data-toggle="modal" data-target="#faqReg" class="textUnderline notiTitle" title="FAQ 자세히 보기">{{ val.title }}</a></td>
                        <td>{{ val.userName }}</td>
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

        <!-- faq confirm -->
		<div class="modal fade modalStyle" id="faqConfirm" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a  class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div v-if="saveDelete == 'save'" class="alertText2">FAQ를 저장 하시겠습니까?</div>
                        <div v-else class="alertText2">FAQ를 삭제합니다.<br>삭제 하시겠습니까?</div>
						<div class="modalFooter">
							<a class="modalBtnClose" @click="cancelConfirm" data-dismiss="modal" title="취소">취소</a>
                            <a v-if="saveDelete == 'save'" @click="save" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
							<a v-else @click="deleteFaq" class="modalBtnCheck" data-toggle="modal" title="삭제">삭제</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //faq confirm -->

        <!-- FAQ 상세 -->
        <div class="modal fade modalStyle" id="faqReg" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:600px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a  class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">FAQ 상세</h2>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width150px">FAQ 제목 <span class="star">*</span></div>
                            <div class="width100">
                                <input type="text" v-model="detail.title" class="inputStyle" placeholder="" value="발신번호를 선택할 수 없습니다.">
                            </div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width150px">FAQ 구분 <span class="star">*</span></div>
                            <div class="flex align-items-center width100">
                                <input type="radio" name="bm2" v-model="detail.faqType" value="1" id="bm2_1" class="radioStyle"><label for="bm2_1">가입관련</label>
                                <input type="radio" name="bm2" v-model="detail.faqType" value="2" id="bm2_2" class="radioStyle"><label for="bm2_2">입찰관련</label>
                                <input type="radio" name="bm2" v-model="detail.faqType" value="3" id="bm2_2" class="radioStyle"><label for="bm2_2">인증서관련</label>
                            </div>
                        </div>
                        <div class="flex mt20">
                            <div class="formTit flex-shrink0 width150px">FAQ 내용 <span class="star">*</span></div>
                            <div class="width100">
                                <textarea v-model="detail.answer" class="textareaStyle overflow-y-scroll height150px" placeholder=""></textarea>
                            </div>
                        </div>
                        <div class="modalFooter">
                            <a  class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                            <a v-if="custType == 'inter' && userAuth == '1' && detail.updateInsert =='update'" @click="openConfirm('delete')" class="deleteBtn" data-toggle="modal" title="저장">삭제</a>
                            <a v-if="custType == 'inter' && userAuth == '1'" @click="openConfirm('save')" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //FAQ 상세 -->
    </div>
    <!-- //본문 -->
  </template>
  <script>
  import Pagination from "@/components/Pagination.vue";

  
  export default {
    name: "adminFaq",
	components: {
		Pagination
	},
	data() {
		return {
			searchParams: {},	
			listPage: {},
            detail: {},
            custType : this.$store.state.loginInfo.custType,//계열사, 협력사 정보
		    userAuth : this.$store.state.loginInfo.userAuth,//권한
            updateInsert : '',
            saveDelete : ''
		};
	},
	mounted() {
        if(this.custType == 'inter' && this.userAuth == '1'){//계열사 시스템관리자인 경우

            const params = {id: this.$options.name, title:'', faqType: '', useYn: '',updateInsert: '', admin: 'Y' ,size: '10'};
            if (this.$store.state.searchParams.id == params.id) {
                this.searchParams = Object.assign(params, this.$store.state.searchParams);
            } else {
                this.searchParams = params;
            }

            this.retrieve();
			
		}else{//권한이 없는 사용자의 경우

			this.$router.push({name:"Main"});//메인으로 이동

		}

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
				const response = await this.$http.post('/api/v1/faq/faqList', this.searchParams);
				this.listPage = response.data;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
        goDetail(data){//상세정보 데이터 반영
            this.detail = data;
            this.detail.updateInsert = 'update';
        },
        goInsert(){//등록전 초기화
            this.detail = { title : '', faqType : '1', answer : '', updateInsert : 'insert'};
        },
        save(){//저장
            
            var response = this.$http.post('/api/v1/faq/save', this.detail)
								    .then(response => {
										alert('저장되었습니다.');
										$('#faqReg').modal('hide');
                                        $('#faqConfirm').modal('hide');
                                        this.retrieve();
									});
                                    
        },
        deleteFaq(){//faq 삭제
            var response = this.$http.post('/api/v1/faq/delete', this.detail)
								    .then(response => {
                                        alert('삭제되었습니다.');
										$('#faqConfirm').modal('hide');
                                        $('#faqReg').modal('hide');
                                        this.retrieve();
									});
            
        },
		valueCheck(){//값 체크
		
			if(this.detail.title == '' || this.detail.title == null){
				alert('제목을 입력해주세요.');
				return true;
			}

			if(this.detail.answer == '' || this.detail.answer == null){
				alert('내용을 입력해주세요.');
				return true;
			}

            return false;
		},
        openConfirm(word){//삭제 및 저장시 확인창 띄우기
       
            this.saveDelete = word;

            if(word == 'delete'){//삭제하는 경우

            }else{//수정 및 등록하는 경우

                if(this.valueCheck()){//값체크
                    return false;
                }
            }

            $('#faqReg').modal('hide');
            $('#faqConfirm').modal('show');
        },
        cancelConfirm(){//삭제 및 저장을 취소할 경우 다시 상세창 띄우기
            $('#faqReg').modal('show');
        }
	}
  };
  </script>

<style>
    .deleteBtn {
        border: 1px solid #e41919;
        color: #fff;
        background: #e41919;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        width: auto;
        padding: 0 25px;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 14px;
        font-weight: 500;
        margin: 0 5px;
        transition: .3s;
    }

    /* :hover 선택자를 사용하여 hover 상태일 때의 스타일 정의 */
    .deleteBtn:hover {
        border: 1px solid #393cdf;
        background-color: #393cdf; /* hover 상태일 때의 배경색 */
    }
</style>