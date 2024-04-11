<template>
  <!-- 제출 이력 -->
  <div
    class="modal fade modalStyle"
    id="submitHistPop"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="width: 100%; max-width: 800px">
      <div class="modal-content">
        <div class="modal-body">
          <a class="ModalClose" data-dismiss="modal" title="닫기"
            ><i class="fa-solid fa-xmark"></i
          ></a>
          <h2 class="modalTitle">제출 이력</h2>
          <table class="tblSkin1 mt20">
            <colgroup>
              <col style="" />
            </colgroup>
            <thead>
              <tr>
                <th>차수</th>
                <th>입찰참가업체명</th>
                <th>견적금액(총액)</th>
                <th>담당자</th>
                <th class="end">제출일시</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, idx) in listPage.content" :key="idx">
                <td>{{val.biOrder}}</td>
                <td class="text-left">{{custName}}</td>
                <td>{{val.esmtCurr}} {{val.esmtAmt | numberWithCommas}}</td>
                <td>{{userName}}</td>
                <td class="end">{{val.submitDate}}</td>
              </tr>
            </tbody>
          </table>
          <!-- pagination -->
          <div class="row mt30">
            <div class="col-xs-12">
              <pagination @searchFunc="search" :page="listPage" />
            </div>
          </div>
          <!-- //pagination -->
          <div class="modalFooter">
            <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //제출 이력 -->
</template>
<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: "SubmitHistPop",
  components: {
    Pagination,
  },
  data() {
    return {
      searchParams: {},
      itemGrpList: [],
      listPage: {},
      custName: "",
      userName: "",
      esmtCurr: ""
    };
  },
  filters:{
    numberWithCommas(val) {
			if(!val) return '';
			else {
				val = Math.round(val);
				return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
  },
  methods: {
    initModal(biNo, custCode, custName, userName, esmtCurr) {
      this.searchParams = {
        biNo:biNo,
        custCode:custCode,
        size: "5",
      };
      this.custName = custName;
      this.userName = userName;
      this.esmtCurr = esmtCurr;
      this.search(0);
    },
    search(page) {
      this.searchParams.page = page;
      this.retrieve();
    },

    async retrieve() {
      this.$store.commit("loading");
      this.$http.post("/api/v1/bidstatus/submitHist", this.searchParams).then((response) => {
          if (response.data.code != "OK") {
              this.$swal({
                  type: "warning",
                  text: response.data.msg,
              });
          } else {
            this.listPage = response.data.data;
          }
      }).finally(() => {
          this.$store.commit("finish");
      });
    },
  },
};
</script>

