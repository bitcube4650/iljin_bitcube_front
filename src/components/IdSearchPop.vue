<template>
<div>
  <div class="modal fade modalStyle" id="idSearch" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" style="width:100%; max-width:510px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
          <h2 class="modalTitle">아이디 찾기</h2>
          <div class="modalTopBox">
            <ul>
              <li><div>아래 사업자등록번호, 찾고자 하는 로그인 사용자명 그리고 등록된 이메일을 정확인 입력하셔야 이메일로 아이디를 발송합니다.</div></li>
            </ul>
          </div>
          <div class="flex align-items-center mt30">
            <div class="formTit flex-shrink0 width150px">사업자등록번호 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model="idSearch.regnum1" @keypress="onlyNumber" maxlength="3" class="inputStyle" placeholder="">
              <span style="margin:0 10px">-</span>
              <input type="text" v-model="idSearch.regnum2" @keypress="onlyNumber" maxlength="2" class="inputStyle" placeholder="">
              <span style="margin:0 10px">-</span>
              <input type="text" v-model="idSearch.regnum3" @keypress="onlyNumber" maxlength="5" class="inputStyle" placeholder="">
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width150px">로그인 사용자명 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model="idSearch.userName" class="inputStyle" placeholder="">
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width150px">등록된 이메일 <span class="star">*</span></div>
            <div class="flex align-items-center width100">
              <input type="text" v-model="idSearch.userEmail" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
            </div>
          </div>
          <div class="modalFooter">
            <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            <a href="#" @click.prevent="validate" class="modalBtnCheck" title="아이디 이메일 발송">아이디 이메일 발송</a>
          </div>
        </div>				
      </div>
    </div>
  </div>

  <!-- 아이디 이메일 발송 얼럿 -->
  <div class="modal fade modalStyle" id="idSearchAlert" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" style="width:100%; max-width:420px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
          <div class="alertText2">아이디를 찾기 위해서는 필수 정보[<span class="star">*</span>]를 입력해야 합니다.</div>
          <div class="modalFooter">
            <a href="#" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
          </div>
        </div>				
      </div>
    </div>
  </div>
  <!-- //아이디 이메일 발송 얼럿 -->

  <!-- 아이디 이메일 발송 컨펌 -->
  <div class="modal fade modalStyle" id="idSearchConfirm" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" style="width:100%; max-width:420px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
          <div class="alertText2">입력하신 이메일로 e-bidding 시스템에 접속하실 아이디를 전송합니다.<br>이메일로 아이디를 전송하시겠습니까?</div>
          <div class="modalFooter">
            <a href="#" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
            <a href="#" @click.prevent="send" class="modalBtnCheck" title="전송">전송</a>
          </div>
        </div>				
      </div>
    </div>
  </div>
  <!-- //아이디 이메일 발송 컨펌 -->
</div>
</template>

<script>

export default {
  name: 'IdSearchPop',
  data() {
    return {
      idSearch: {},
    }
  },
  methods: {
    initModal() {
      this.idSearch = {};
    },
    onlyNumber(e) {
      if (!/\d/.test(event.key) && event.key !== '.') return e.preventDefault();
    },
    validate() {  
      if (this.idSearch.regnum1 == null || this.idSearch.regnum2 == null || this.idSearch.regnum3 == null || this.idSearch.userName == null || this.idSearch.userEmail == null) {
        $("#idSearchAlert").modal("show"); 
        return;
      }
      $("#idSearchConfirm").modal("show"); 
    },
    send(e) {  
      this.$store.commit("loading");
      this.$http
      .post('/login/idSearch', this.idSearch)
      .then((response) => {
        $("#idSearchConfirm").modal("hide"); 
        if (response.data.code == 'ok') {
          $("#idSearch").modal("hide");
          this.$swal({
            type: "info",
            text: "이메일로 전송되었습니다."
          });
        } else {
          this.$swal({
            type: "warning",
            text: "아이디를 찾을 수 없습니다."
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

