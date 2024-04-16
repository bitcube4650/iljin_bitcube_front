<template>
<div>
    <div class="joinWrap">
        <div class="inner">
            <div class="joinTop">
                <ul class="conHeaderCate">
                    <li>회원가입</li>
                    <li>회원가입</li>
                </ul>
            </div>
            <div class="conTopBox">
                <ul class="dList">
                    <li><div>회원가입은 가입 신청 후 승인과정을 통해 정식으로 가입이 됩니다. (가입 승인은 최대 3일 소요됩니다)</div></li>
                    <li><div>가입 승인이 완료되면 관리자에게 이메일로 승인 되었음을 알려드립니다.</div></li>
                    <li><div>회원가입 <span class="star">*</span> 부분은 필수 입력 정보 입니다.</div></li>
                </ul>
            </div>

            <h3 class="h3Tit mt50">회사 정보</h3>
            <div class="boxSt mt20">
                <div class="flex align-items-center">
                    <div class="formTit flex-shrink0 width170px">가입희망 계열사 <span class="star">*</span></div>
                    <div class="width100">
                        <select v-model="detail.interrelatedCustCode" class="selectStyle">
                            <option value="">계열사를 선택해 주세요</option>
                            <option :value="val.interrelatedCustCode" v-for="(val, idx) in interrelatedList">{{ val.interrelatedNm }}</option>
                        </select>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">업체유형 1 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                    <input type="text" v-model="detail.custTypeNm1" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                    <input type="hidden" v-model="detail.custType1"/>
                    <a hhref="#" @click="itemPop='custType1';$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">업체유형 2</div>
                    <div class="flex align-items-center width100">
                    <input type="text" v-model="detail.custTypeNm2" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                    <input type="hidden" v-model="detail.custType1"/>
                        <a hhref="#" @click="itemPop='custType2';$refs.itemPop.initModal()" data-toggle="modal" data-target="#itemPop" class="btnStyle btnSecondary ml10" title="조회">조회</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">회사명 <span class="star">*</span></div>
                    <div class="width100"><input type="text" v-model="detail.custName" class="inputStyle" maxlength="100"></div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">대표자명 <span class="star">*</span></div>
                    <div class="width100"><input type="text" v-model="detail.presName" class="inputStyle" maxlength="50"></div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">사업자등록번호 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="detail.regnum1" @keyup="checkReg" @keypress="onlyNumber" maxlength="3" class="inputStyle">
                        <span style="margin:0 10px">-</span>
                        <input type="text" v-model="detail.regnum2" @keyup="checkReg" @keypress="onlyNumber" maxlength="2" class="inputStyle">
                        <span style="margin:0 10px">-</span>
                        <input type="text" v-model="detail.regnum3" @keyup="checkReg" @keypress="onlyNumber" maxlength="5" class="inputStyle">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">법인번호 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="detail.presJuminNo1" @keyup="checkReg" @keypress="onlyNumber" maxlength="6" class="inputStyle">
                        <span style="margin:0 10px">-</span>
                        <input type="text" v-model="detail.presJuminNo2" @keyup="checkReg" @keypress="onlyNumber" maxlength="7" class="inputStyle">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">자본금 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="detail.fomCapital" @keypress="onlyNumber" @input="formatCapital" maxlength="15" class="inputStyle" placeholder="ex) 10,000,000">
                        <div class="ml10">원</div>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">설립년도 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="detail.foundYear" @keyup="checkReg" @keypress="onlyNumber" maxlength="4" class="inputStyle" placeholder="ex) 2021">
                        <div class="ml10">년</div>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">대표전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.fomTel" @keypress="onlyNumber" @input="formatTel" maxlength="13" class="inputStyle" >
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">팩스</div>
                    <div class="width100">
                        <input type="text" v-model="detail.fomFax" @keypress="onlyNumber" @input="formatFax" maxlength="13" class="inputStyle">
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">회사주소 <span class="star">*</span></div>
                    <div class="width100">
                        <div class="flex align-items-center width100">
                            <input type="text" v-model="detail.zipcode" class="inputStyle readonly" placeholder="주소 조회 클릭" readonly>
                            <a href="#" @click="$refs.addrPop.initModal()" data-toggle="modal" data-target="#addrPop" class="btnStyle btnSecondary flex-shrink0 ml10" title="주소 조회">주소 조회</a>
                        </div>
                        <div class="mt5"><input type="text" v-model="detail.addr" maxlength="100" class="inputStyle readonly" readonly></div>
                        <div class="mt5"><input type="text" v-model="detail.addrDetail" maxlength="100" class="inputStyle" placeholder="상세 주소 입력"></div>
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">사업자등록증 <span class="star">*</span></div>
                    <div class="width100">
                        <!-- 다중파일 업로드 -->
                        <div class="upload-boxWrap">
                            <div class="upload-box">
                                <input type="file" ref="uploadedRegnumFile" id="file-input" @change="changeRegnumFile">
                                <div class="uploadTxt">
                                    <i class="fa-regular fa-upload"></i>
                                    <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                </div>
                            </div>
								<div v-if="regnumFile" class="uploadPreview">
									<p>
										{{ regnumFileName }}
										<button class='file-remove' @click="fnRemoveAttachFile('regnumFile')">삭제</button>
									</p>
								</div>
                        </div>
                        <!-- //다중파일 업로드 -->
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">회사소개 및 기타자료
                        <!-- 툴팁 -->
                        <i class="fas fa-question-circle toolTipSt ml5">
                            <div class="toolTipText" style="width:420px">
                                <ul class="dList">
                                    <li><div>첨부파일은 간단한 업체 소개 자료 등의 파일을 첨부해 주십시오.</div></li>
                                    <li><div>1개  이상의 파일을 첨부하실 경우 Zip으로 압축하여 첨부해 주십시오</div></li>
                                    <li><div>파일은 10M 이상을 초과할 수 없습니다.</div></li>
                                </ul>
                            </div>
                        </i>
                        <!-- //툴팁 -->
                    </div>
                    <div class="width100">
                        <!-- 다중파일 업로드 -->
                        <div class="upload-boxWrap">
                            <div class="upload-box">
                                <input type="file" ref="uploadedbfile" id="file-input2" @change="changebfile">
                                <div class="uploadTxt">
                                    <i class="fa-regular fa-upload"></i>
                                    <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                </div>
                            </div>
								<div v-if="bfile" class="uploadPreview">
									<p>
										{{ bfileName }}
										<button class='file-remove' @click="fnRemoveAttachFile('bfile')">삭제</button>
									</p>
								</div>
                        </div>
                        <!-- //다중파일 업로드 -->
                    </div>
                </div>
            </div>

            <h3 class="h3Tit mt50">관리자 정보</h3>
            <div class="boxSt mt20">
                <div class="flex align-items-center">
                    <div class="formTit flex-shrink0 width170px">이름 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.userName" class="inputStyle" maxlength="50">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">이메일 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.userEmail" maxlength="100" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">아이디 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model.trim="detail.userId" maxlength="20" class="inputStyle" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인">
                        <a href="#" @click.prevent="idcheck" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 <span class="star">*</span></div>
                    <div class="width100">
                        <input style="-webkit-text-security:disc;" v-model="detail.userPwd" maxlength="100" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 확인 <span class="star">*</span></div>
                    <div class="width100">
                        <input style="-webkit-text-security:disc;" v-model="detail.userPwdConfirm" maxlength="100" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
                    </div>
                </div>
				<div v-if="this.$route.params.id != null || this.detail.custCode != null" class="flex align-items-center mt10">
					<div class="formTit flex-shrink0 width170px">아이디</div>
					<div class="width100">{{ detail.userId }}</div>
				</div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">휴대폰 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.fomUserHp" @keypress="onlyNumber" @input="formatUserHp" maxlength="20" class="inputStyle">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">유선전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="detail.fomUserTel" @keypress="onlyNumber" @input="formatUserTel" maxlength="20" class="inputStyle">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">직급</div>
                    <div class="width100">
                        <input type="text" v-model="detail.userPosition" maxlength="50" class="inputStyle">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">부서</div>
                    <div class="width100">
                        <input type="text" v-model="detail.userBuseo" maxlength="50" class="inputStyle">
                    </div>
                </div>
            </div>

            <div class="text-center mt50">
                <a href="#" @click.prevent="validate" class="btnStyle btnPrimary btnMd" title="회원가입 신청">회원가입 신청</a>
            </div>

            
        </div>
        <div class="subFooter mt50">
            © ILJIN ALL RIGHTS RESERVED.
            <div class="subFooterUtill">
                <a href="#" title="공동인증서">공동인증서</a>
                <a href="#" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
                <a href="#" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
            </div>
        </div>
    </div>


	<!-- 회원가입 신청 -->
	<div class="modal fade modalStyle" id="joinBtn" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">입력하신 정보로 회원가입을 신청합니다.<br>신정 후 승인까지 최대 3일 소요됩니다.<br><br>회원가입을 신청하시겠습니까?</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click.prevent="save" class="modalBtnCheck" title="신청">신청</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 -->

	<!-- 회원가입 신청 후 -->
	<div class="modal fade modalStyle" id="joinBtn2" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">회원가입을 신청하였습니다.</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 후 -->

    <!-- 품목 조회 팝업 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem"/>

    <!-- 주소 찾기 팝업 -->
    <addr-pop ref="addrPop" @callbackFunc="callbackAddr"/>

    <!-- 업체등록절차 -->
    <enrollment-process />

    <!-- 업무안내 -->
    <bidding-guide />
    
</div>
</template>

<script>
import fileInput from "../../public/js/fileInput.js"
import ItemPop from "@/components/ItemPop.vue";
import AddrPop from "@/components/AddrPop.vue";
import EnrollmentProcess from "@/components/EnrollmentProcess.vue";
import BiddingGuide from "@/components/BiddingGuide.vue";

export default {
  name: 'Signup',
  components: {
    ItemPop,
    AddrPop,
    EnrollmentProcess,
    BiddingGuide
  },
  data() {
    return {
        interrelatedList: [],
        detail: {interrelatedCustCode:''},
        itemPop: null,
        otherCustType: null,
        regnumFile : null,  // 업로드한 파일
        regnumFileCnt : 0,  // 업로드한 파일 수
        regnumFileSize : 0, // 파일크기
		regnumFileName : '',
        bfile : null,       // 업로드한 파일
        bfileCnt : 0,       // 업로드한 파일 수
        bfileSize : 0,       // 파일크기
		bfileName : ''
    }
  },
  watch :{
	'detail.userId'(){
		this.detail.idcheck=false;												// 아이디 중복체크 false처리
		this.detail.userId = this.detail.userId.replace(/[^a-zA-Z0-9]/g, '');	// 영어+숫자
	}
  },
  mounted() {
    this.init();
  },
  methods: {
		onlyNumber(event) {
		if (!/\d/.test(event.key) && event.key !== '.') return event.preventDefault();
		},
		checkReg(event) {
			const regExp = /[^0-9a-zA-Z]/g; // 숫자와 영문자만 허용
			//   const regExp = /[^ㄱ-ㅎ|가-힣]/g; // 한글만 허용
			const del = event.target;
			if (regExp.test(del.value)) {
				del.value = del.value.replace(regExp, '');
			}
		},
		async init() {
            try {
                this.$store.commit('loading');
                const response = await this.$http.post('/login/interrelatedList');
                this.interrelatedList = response.data;
                this.$store.commit('finish');
            } catch(err) {
                console.log(err)
                this.$store.commit('finish');
            }
		},
		idcheck() {
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "아이디를 입력해주세요."});
				return;
			}
			this.$store.commit('loading');
			this.$http
			.post('/login/idcheck', this.detail)
			.then((response) => {
				if (response.data.code == 'OK') {
					this.$swal({type: "info",text: "입력한 아이디를 사용할 수 있습니다."});
					this.detail.idcheck = true;
				} else {
					this.$swal({type: "warning",text: "입력한 아이디를 사용할 수 없습니다."});
					this.detail.idcheck=false;
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		validate() {  
			if (this.detail.custType1 == null || this.detail.custType1 == '') {
				this.$swal({type: "warning",text: "업체유형1을 선택해주세요."});
				return;
			}
			if (this.detail.custName == null || this.detail.custName == '') {
				this.$swal({type: "warning",text: "회사명을 입력해주세요."});
				return;
			}
			if (this.detail.presName == null || this.detail.presName == '') {
				this.$swal({type: "warning",text: "대표자명을 입력해주세요."});
				return;
			}
			if (this.detail.regnum1 == null || this.detail.regnum1 == '' || this.detail.regnum2 == null || this.detail.regnum2 == '' || this.detail.regnum3 == null || this.detail.regnum3 == '') {
				this.$swal({type: "warning",text: "사업자등록번호를 입력해주세요."});
				return;
			}
			if (this.detail.regnum1.length != 3 || this.detail.regnum2.length != 2 || this.detail.regnum3.length != 5) {
				this.$swal({type: "warning",text: "사업자등록번호를 정확히 입력해주세요."});
				return;
			}
			if (this.detail.presJuminNo1 == null || this.detail.presJuminNo1 == '' || this.detail.presJuminNo2 == null || this.detail.presJuminNo2 == '') {
				this.$swal({type: "warning",text: "법인번호를 입력해주세요."});
				return;
			}
			if (this.detail.presJuminNo1.length != 6 || this.detail.presJuminNo2.length != 7) {
				this.$swal({type: "warning",text: "법인번호를 정확히 입력해주세요."});
				return;
			}
			if (this.detail.capital == null || this.detail.capital == '') {
				this.$swal({type: "warning",text: "자본금을 입력해주세요."});
				return;
			}
			if (this.detail.foundYear == null || this.detail.foundYear == '') {
				this.$swal({type: "warning",text: "설립년도를 입력해주세요."});
				return;
			}
			if (this.detail.foundYear.length != 4) {
				this.$swal({type: "warning",text: "설립년도를 정확히 입력해주세요."});
				return;
			}
			if (this.detail.tel == null || this.detail.tel == '') {
				this.$swal({type: "warning",text: "대표전화를 입력해주세요."});
				return;
			}
			if (this.detail.addrDetail == null || this.detail.addrDetail == '') {
				this.$swal({type: "warning",text: "회사주소를 입력해주세요."});
				return;
			}
			if(!this.regnumFile){//업로드 한 파일이 없는 경우
				this.$swal({type: "warning",text: "사업자등록증을 선택해주세요."});
				return;
			}
			if (this.detail.userName == null || this.detail.userName == '') {
				this.$swal({type: "warning",text: "이름을 입력해주세요."});
				return;
			}
			if (this.detail.userEmail == null || this.detail.userEmail == '') {
				this.$swal({type: "warning",text: "이메일을 입력해주세요."});
				return;
			}
			if (this.detail.userId == null || this.detail.userId == '') {
				this.$swal({type: "warning",text: "아이디를 입력해주세요."});
				return;
			}
			if (this.$route.params.id == null && this.detail.custCode == null) {
				if (this.detail.idcheck == false) {
					this.$swal({type: "warning",text: "아이디 중복확인을 확인해주세요."});
					return;
				}
				if (this.detail.userPwd == null || this.detail.userPwd == '') {
					this.$swal({type: "warning",text: "비밀번호를 입력해주세요."});
					return;
				}
				if (this.detail.userPwdConfirm == null || this.detail.userPwdConfirm == '') {
					this.$swal({type: "warning",text: "비밀번호 확인을 입력해주세요."});
					return;
				}
				if (this.detail.userPwd != this.detail.userPwdConfirm) {
					this.$swal({type: "warning",text: "비밀번호를 정확히 입력해주세요."});
					return;
				}
				if( !this.fnPwdvaildation(this.detail.userPwd) ){
					return;
				}	
			}
			if (this.detail.userHp == null || this.detail.userHp == '') {
				this.$swal({type: "warning",text: "휴대폰을 입력해주세요."});
				return;
			}
			if (this.detail.userTel == null || this.detail.userTel == '') {
				this.$swal({type: "warning",text: "유선전화를 입력해주세요."});
				return;
			}
			$("#joinBtn").modal("show"); 
		},
		save() {  
			this.$store.commit("loading");
			var formData = new FormData();

    		formData.append('regnumFile', this.regnumFile);
    		formData.append('bFile', this.bfile);
			formData.append('data', new Blob([JSON.stringify(this.detail)], { type: 'application/json' }));

			this.$http
			.post('/login/custSave', formData)
			.then((response) => {
				$("#joinBtn").modal("hide"); 
				if (response.data.code == 'OK') {
      				$("#joinBtn2").modal("show"); 
                    var $this = this;
					setTimeout(function(){
						$this.$router.push('/');
					}, 2000);
				} else {
					this.$swal({type: "warning",text: "저장 처리 중 오류가 발생했습니다."});
				}
			})
			.finally(() => {
				this.$store.commit("finish");
			});
		},
		callbackItem(data) {
			if (this.itemPop == 'custType1') {
				this.detail.custType1 = data.itemCode;
				this.detail.custTypeNm1 = data.itemName;
			} else if (this.itemPop == 'custType2') {
				this.detail.custType2 = data.itemCode;
				this.detail.custTypeNm2 = data.itemName;
			}
            this.$forceUpdate()
		},
		callbackAddr(data) {
			this.detail.zipcode = data.zipcode;
			this.detail.addr = data.addr;
			//this.detail.addrDetail = data.addrDetail;
			this.$forceUpdate()
		},
		checkRegnumFileSize() {//파일크기 확인
			const input = this.$refs.uploadedRegnumFile;
			if (input.files.length > 0) {
				const file = input.files[0];
				this.regnumFileSize = file.size;
				// 원하는 용량 제한 설정 (10MB)
				const maxSize = 10 * 1024 * 1024;
				if (this.regnumFileSize > maxSize) {
					this.$swal({type: "warning",text: "파일 크기가 10MB를 초과했습니다."});
					// 파일 초기화 또는 다른 조치를 취할 수 있습니다.
					this.$refs.uploadedRegnumFile.value = null;
					this.regnumFileSize = null;
					return true;
				}
			}
			return false;
		},
		changeRegnumFile(event){
			//파일 사이즈 체크
			if(this.checkRegnumFileSize()){
				return false;
			}
			this.regnumFile = event.target.files[0];
			this.regnumFileName = event.target.files.length > 0 ? event.target.files[0].name : '';
			this.regnumFileCnt = event.target.files.length;
		},
		checkbfileSize() {//파일크기 확인
			const input = this.$refs.uploadedbfile;
			if (input.files.length > 0) {
				const file = input.files[0];
				this.regnumFileSize = file.size;
				// 원하는 용량 제한 설정 (10MB)
				const maxSize = 10 * 1024 * 1024;
				if (this.regnumFileSize > maxSize) {
					this.$swal({type: "warning",text: "파일 크기가 10MB를 초과했습니다."});
					// 파일 초기화 또는 다른 조치를 취할 수 있습니다.
					this.$refs.uploadedbfile.value = null;
					this.regnumFileSize = null;
					return true;
				}
			}
			return false;
		},
		changebfile(event){
			//파일 사이즈 체크
			if(this.checkbfileSize()){
				return false;
			}
			
			this.bfile = event.target.files[0];
			this.bfileName = event.target.files.length > 0 ? event.target.files[0].name : '';
			this.bfileCnt = event.target.files.length;
		},
		// 비밀번호 유효성 체크
		fnPwdvaildation(userPwd){
			const password = userPwd;
			const hasUpperCase = /[A-Z]/.test(password);//대문자
			const hasLowerCase = /[a-z]/.test(password);//소문자
			const hasDigit = /\d/.test(password);//숫자
			const hasSpecialChar = /[!@#$%^&*()\-_=+{};:,<.>]/.test(password);//특수문자

			var isValidPassword = (hasUpperCase && hasLowerCase && hasDigit) || (hasUpperCase && hasLowerCase && hasSpecialChar) || (hasDigit && hasSpecialChar);
			var isValidLength = password.length >= 8 && password.length <= 16;

			if(!isValidPassword){
				this.$swal({type: "warning",text: "대/소문자, 숫자, 특수문자중에서 2가지 이상 조합되어야 합니다."});
				return;
			}else if(!isValidLength){
				this.$swal({type: "warning",text: "비밀번호는 8자 이상 16자 이하로 작성해주세요."});
				return;
			}
			return true;

		},
		formatComma(val){
			if(!val) return '0';
			val = val.toString();

			return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		formatUncomma(val){
			if(!val) return '0';
			val = val.toString();
			
			return val.replace(/[^0-9]/g, '');
		},
		phoneNumAddDash(val){
			if (!val) return '';
			val = val.toString();
			val = val.replace(/[^0-9]/g, '')

			let tmp = ''
			if( val.length < 4){
			return val;
			} else if(val.length < 7) {
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3);
			return tmp;
			} else if(val.length == 8) {
			tmp += val.substr(0, 4);
			tmp += '-';
			tmp += val.substr(4);
			return tmp;
			} else if(val.length < 10) {
			if(val.substr(0, 2) =='02') { //02-123-5678
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 3);
				tmp += '-';
				tmp += val.substr(5);
				return tmp;
			}
			} else if(val.length < 11) {
			if(val.substr(0, 2) =='02') { //02-1234-5678
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 4);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			} else { //010-123-4567
				tmp += val.substr(0, 3);
				tmp += '-';
				tmp += val.substr(3, 3);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			}
			} else { //010-1234-5678
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3, 4);
			tmp += '-';
			tmp += val.substr(7);
			return tmp;
			}
		},
		//전화번호 입력 시 대시 입력(상단 함수가 오류날 경우 대체사용)
		hpNumberAddDash(val){
			if (!val) return '';
			val = val.toString();
			val = val.replace(/[^0-9]/g, '')
			
			let tmp = ''
			if( val.length < 4){
			return val;
			} else if(val.length <= 7) {
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3);
			return tmp;
			} else if(val.length == 8) {
			tmp += val.substr(0, 4);
			tmp += '-';
			tmp += val.substr(4);
			return tmp;
			} else if(val.length < 10) {
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 3);
				tmp += '-';
				tmp += val.substr(5);
				return tmp;
			} else if(val.length < 11) {
			if(val.substr(0, 2) =='02') { //02-1234-5678
				tmp += val.substr(0, 2);
				tmp += '-';
				tmp += val.substr(2, 4);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			} else { //010-123-4567
				tmp += val.substr(0, 3);
				tmp += '-';
				tmp += val.substr(3, 3);
				tmp += '-';
				tmp += val.substr(6);
				return tmp;
			}
			} else { //010-1234-5678
			tmp += val.substr(0, 3);
			tmp += '-';
			tmp += val.substr(3, 4);
			tmp += '-';
			tmp += val.substr(7);
			return tmp;
			}
		},
		hpNumberRemoveDash(val){
			if (!val) return '';
			val = val.toString();
			val = val.replace(/[^0-9]/g, '');

			return val;
		},
		formatCapital() {
			this.detail.capital = this.formatUncomma(this.detail.fomCapital);
			this.detail.fomCapital = this.formatComma(this.detail.capital);
		},
		formatTel() {
			this.detail.tel = this.hpNumberRemoveDash(this.detail.fomTel);
			this.detail.fomTel = this.phoneNumAddDash(this.detail.tel);
		},
		formatFax() {
			this.detail.fax = this.hpNumberRemoveDash(this.detail.fomFax);
			this.detail.fomFax = this.phoneNumAddDash(this.detail.fax);
		},
		formatUserTel() {
			this.detail.userTel = this.hpNumberRemoveDash(this.detail.fomUserTel);
			this.detail.fomUserTel = this.phoneNumAddDash(this.detail.userTel);
		},
		formatUserHp() {
			this.detail.userHp = this.hpNumberRemoveDash(this.detail.fomUserHp);
			this.detail.fomUserHp = this.hpNumberAddDash(this.detail.userHp);
		},
		fnRemoveAttachFile(type){
			// 	첨부파일 삭제
			if(type == 'bfile'){
				this.$refs.uploadedbfile.value = null;
				this.bfile = null
				this.bfileName = ''
				this.bfilePath = null
			} else {
				this.$refs.uploadedRegnumFile.value = null;
				this.regnumFile = null
				this.regnumFileName = ''
				this.regnumFilePath = null
			}
		}
  	}
}
</script>