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
                        <select v-model="custUser.interrelatedCustCode" class="selectStyle">
                            <option value="">계열사를 선택해 주세요</option>
                            <option :value="val.interrelatedCustCode" v-for="(val, idx) in interrelatedList">{{ val.interrelatedNm }}</option>
                        </select>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">업체유형 1 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.custTypeNm1" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <input type="hidden" v-model="custUser.custTypeCode1"/>
                        <a href="#" @click="$refs.custTypePop.initModal('code1')" data-toggle="modal" data-target="#itemSelect" class="btnStyle btnSecondary ml10" title="조회">조회</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">업체유형 2</div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.custTypeNm2" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <input type="hidden" v-model="custUser.custTypeCode2"/>
                        <a hhref="#" @click="$refs.custTypePop.initModal('code2')" data-toggle="modal" data-target="#itemSelect" class="btnStyle btnSecondary ml10" title="조회">조회</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">회사명 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="custUser.custName" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">대표자명 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="custUser.presName" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">사업자등록번호 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.regnum1" class="inputStyle" placeholder="">
                        <span style="margin:0 10px">-</span>
                        <input type="text" v-model="custUser.regnum2" class="inputStyle" placeholder="">
                        <span style="margin:0 10px">-</span>
                        <input type="text" v-model="custUser.regnum2" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">법인번호 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.presJumnNo1" class="inputStyle" placeholder="">
                        <span style="margin:0 10px">-</span>
                        <input type="text" v-model="custUser.presJumnNo2" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">자본금 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.capital" class="inputStyle" placeholder="ex) 10,000,000">
                        <div class="ml10">원</div>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">설립년도 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.foundYear" class="inputStyle" placeholder="ex) 2021">
                        <div class="ml10">년</div>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">대표전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="custUser.tel" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">팩스</div>
                    <div class="width100">
                        <input type="text" v-model="custUser.fax" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">회사주소 <span class="star">*</span></div>
                    <div class="width100">
                        <div class="flex align-items-center width100">
                            <input type="text" v-model="custUser.zipcode" class="inputStyle readonly" placeholder="주소 조회 클릭" readonly>
                            <a href="#" @click="$refs.addrPop.initModal()" data-toggle="modal" data-target="#addrPop" class="btnStyle btnSecondary flex-shrink0 ml10" title="주소 조회">주소 조회</a>
                        </div>
                        <div class="mt5"><input type="text" v-model="custUser.addr" class="inputStyle readonly" placeholder="" readonly></div>
                        <div class="mt5"><input type="text" v-model="custUser.addrDetail" class="inputStyle" placeholder="상세 주소 입력"></div>
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">사업자등록증 <span class="star">*</span></div>
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
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">첨부파일 <span class="star">*</span>
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
                                <input type="file" id="file-input2">
                                <div class="uploadTxt">
                                    <i class="fa-regular fa-upload"></i>
                                    <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                </div>
                            </div>
                            <div class="uploadPreview" id="preview2">
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
                        <input type="text" v-model="custUser.userName" class="inputStyle" placeholder="우측 검색 버튼을 클릭해 주세요">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">이메일 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="custUser.userEmail" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">아이디 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" v-model="custUser.userId" class="inputStyle" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인">
                        <a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="password" v-model="custUser.userPwd" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 확인 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="password" v-model="custUser.userPwdConfirm" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">휴대폰 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="custUser.userHp" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">유선전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" v-model="custUser.userTel" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">직급</div>
                    <div class="width100">
                        <input type="text" v-model="custUser.userPositic" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">부서</div>
                    <div class="width100">
                        <input type="text" nv-model="custUser.buseo" class="inputStyle" placeholder="">
                    </div>
                </div>
            </div>

            <div class="text-center mt50">
                <a href="#" @click="validate" class="btnStyle btnPrimary btnMd" title="회원가입 신청">회원가입 신청</a>
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

    <!-- 업체등록절차 -->
    <enrollment-process />

    <!-- 업무안내 -->
    <bidding-guide />


	<!-- 회원가입 신청 -->
	<div class="modal fade modalStyle" id="joinBtn" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">입력하신 정보로 회원가입을 신청합니다.<br>신정 후 승인까지 최대 3일 소요됩니다.<br><br>회원가입을 신청하시겠습니까?</div>
					<div class="modalFooter">
						<a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="#" @click="save" class="modalBtnCheck" title="신청">신청</a>
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
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">회원가입을 신청하였습니다.</div>
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 후 -->

    <!-- 비밀번호 찾기 팝업 -->
    <cust-type-pop ref="custTypePop"/>

    <!-- 주소 찾기 팝업 -->
    <addr-pop ref="addrPop" @callbackFunc="callbackAddr"/>

    <!-- 업체등록절차 -->
    <enrollment-process />

    <!-- 업무안내 -->
    <bidding-guide />
    
</div>
</template>

<script>
import CustTypePop from "@/views/CustTypePop.vue";
import AddrPop from "@/views/AddrPop.vue";
import EnrollmentProcess from "@/components/EnrollmentProcess.vue";
import BiddingGuide from "@/components/BiddingGuide.vue";

export default {
  name: 'Signup',
  components: {
    CustTypePop,
    AddrPop,
    EnrollmentProcess,
    BiddingGuide
  },
  data() {
    return {
        custUser: {
            interrelatedCustCode: '',
            zipcode: ''
        },
        interrelatedList: []
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
        this.$store.commit('loading');
        const response = await this.$http.post('/login/interrelatedList', this.loginInfo);
        this.interrelatedList = response.data;
        this.$store.commit('finish');
    },
    validate(e) {  
      e.preventDefault();
      if (this.custUser.interrelatedCustCode == '') {
        this.$swal({type: "warning",text: "가입희망 계열사를 선택해주세요."});
        return;
      }
      /*
      if (this.custUser.custTypeCode1 == '') {
        this.$swal({type: "warning",text: "업체유형 1을 선택해주세요."});
        return;
      }
      if (this.custUser.custTypeCode2 == '') {
        this.$swal({type: "warning",text: "업체유형 2을 선택해주세요."});
        return;
      }
      */
      if (this.custUser.custName == '') {
        this.$swal({type: "warning",text: "회사명을 입력해주세요."});
        return;
      }
      $("#joinBtn").modal("show"); 
    },
    save(e) {  
      e.preventDefault(); 
      this.$store.commit("loading");
      this.$http
      .post('/login/custSave', this.custUser)
      .then((response) => {
        $("#joinBtn").modal("hide"); 
        if (response.data.code == 'ok') {
            this.custUser = {
                interrelatedCustCode: ''
            }
            $("#joinBtn2").modal("show"); 
        } else {
          this.$swal({type: "warning",text: "회원가입 신청 중 오류가 발생했습니다."});
        }
      })
      .finally(() => {
        this.$store.commit("finish");
      });
    },
    callbackAddr(zipcode, addr, addrDetail) {
        this.custUser.zipcode = zipcode;
        this.custUser.addr = addr;
        this.custUser.addrDetail = addrDetail;
    }
  }
}
</script>