<template>
<div>
  <div class="modal fade modalStyle" id="pwSearch" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" style="width:100%; max-width:510px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
          <h2 class="modalTitle">비밀번호 찾기</h2>
          <div class="modalTopBox">
            <ul>
              <li><div>아래 사업자등록번호, 찾고자 하는 로그인 사용자명, 로그인 아이디 그리고 등록된 이메일을 정확히 입력하셔야 이메일 및 문자로 비밀번호를 발송합니다.</div></li>
              <li><div>비밀번호는 초기화되어 발송 하므로 로그인 후 암호를 변경하시고 사용하십시오.</div></li>
              <li><div>[비밀번호 찾기]는 전자입찰 협력사 사용자만 해당 됩니다. 계열사 사용자는 시스템 관리자에게 문의해 주십시오.</div></li>
            </ul>
          </div>
          <div class="flex align-items-center mt30">
            <div class="formTit flex-shrink0 width150px">사업자등록번호 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model="pwSearch.regnum1" maxlength="3" class="inputStyle">
              <span style="margin:0 10px">-</span>
              <input type="text" v-model="pwSearch.regnum2" maxlength="2" class="inputStyle">
              <span style="margin:0 10px">-</span>
              <input type="text" v-model="pwSearch.regnum3" maxlength="5" class="inputStyle">
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width150px">로그인 사용자명 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model="pwSearch.userName" class="inputStyle" placeholder="">
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width150px">로그인 아이디 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model.trim="pwSearch.userId" class="inputStyle" placeholder="">
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width150px">등록된 이메일 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model.trim="pwSearch.userEmail" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
            </div>
          </div>
          <div class="modalFooter">
            <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            <a href="#" @click.prevent="validate" class="modalBtnCheck" itle="비밀번호 이메일 발송">비밀번호 이메일 발송</a>
          </div>
        </div>				
      </div>
    </div>
  </div>

  <!-- 비밀번호 이메일 발송 얼럿 -->
  <div class="modal fade modalStyle" id="pwSearchAlert" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" style="width:100%; max-width:420px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
          <div class="alertText2">비밀번호를 찾기 위해서는 필수 정보[<span class="star">*</span>]를 입력해야 합니다.</div>
          <div class="modalFooter">
            <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
          </div>
        </div>				
      </div>
    </div>
  </div>
  <!-- //비밀번호 이메일 발송 얼럿 -->

  <!-- 비밀번호 이메일 발송 컨펌 -->
  <div class="modal fade modalStyle" id="pwSearchConfirm" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" style="width:100%; max-width:420px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">입력하신 사용자에게 문자와 이메일로 e-bidding 시스템에 접속하실 비밀번호를 전송합니다.<br>비밀번호는 초기화 되어 새로 생성됩니다.<br>비밀번호를 전송하시겠습니까?</div>
          <div class="modalFooter">
            <a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
            <a href="#" @click.prevent="send" class="modalBtnCheck" title="전송">전송</a>
          </div>
        </div>				
      </div>
    </div>
  </div>
  <!-- //비밀번호 이메일 발송 컨펌 -->
</div>
</template>

<script>

export default {
  name: 'PwSearchPop',
  data() {
    return {
      pwSearch: {},
    }
  },
  watch : {
    // 사업자 등록번호
    'pwSearch.regnum1'(){
      this.pwSearch.regnum1 = this.pwSearch.regnum1.replace(/[^0-9]/g, '').trim();
    },
    'pwSearch.regnum2'(){
      this.pwSearch.regnum2 = this.pwSearch.regnum2.replace(/[^0-9]/g, '').trim();
    },
    'pwSearch.regnum3'(){
      this.pwSearch.regnum3 = this.pwSearch.regnum3.replace(/[^0-9]/g, '').trim();
    }
  },
  methods: {
    initModal() {
      this.pwSearch = {};
    },
    validate() {  
      if (this.pwSearch.regnum1 == null || this.pwSearch.regnum2 == null || this.pwSearch.regnum3 == null || this.pwSearch.userName == null || this.pwSearch.userEmail == null) {
        $("#pwSearchAlert").modal("show"); 
        return;
      }
      $("#pwSearchConfirm").modal("show"); 
    },
    send() {  
      this.$store.commit("loading");
      this.$http
      .post('/login/pwSearch', this.pwSearch)
      .then((response) => {
        $("#pwSearchConfirm").modal("hide"); 
        if (response.data.code == 'OK') {
          $("#pwSearch").modal("hide");
          this.$swal({
            type: "info",
            text: "전송되었습니다."
          });
        } else {
          this.$swal({
            type: "warning",
            html: "입력한 정보가 등록된 정보와 상이합니다.<br/>다시 입력해 주십시오"
          });

        }
      })
      .finally(() => {
        this.$store.commit("finish");
      });
    }
  }
};
</script>

