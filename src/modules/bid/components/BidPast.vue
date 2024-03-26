<template>
  <!-- 과거입찰내역 -->
  <div
    class="modal fade modalStyle"
    id="bidPast"
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
          <h2 class="modalTitle">과거입찰내역</h2>

          <div class="modalSearchBox mt20">
            <div class="flex align-items-center">
              <div class="sbTit mr30">입찰번호</div>
              <div class="width150px">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="searchParams.biNo"
                  @keyup.enter="search(0)"
                  maxlength="10"
                />
              </div>
              <div class="sbTit mr30 ml50">입찰명</div>
              <div class="width150px">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="searchParams.biName"
                  @keyup.enter="search(0)"
                  maxlength="50"
                />
              </div>
              <a class="btnStyle btnSearch" @click.prevent="search(0)">검색</a>
            </div>
          </div>
          <table class="tblSkin1 mt30">
            <colgroup>
              <col style="" />
            </colgroup>
            <thead>
              <tr>
                <th>입찰번호</th>
                <th>입찰명</th>
                <th>제출마감일시</th>
                <th>입찰방식</th>
                <th>상태</th>
                <th>내역</th>
                <th class="end">선택</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, idx) in listPage.content">
                <td>{{ val.biNo }}</td>
                <td>{{ val.biName }}</td>
                <td>{{ val.estCloseDate }}</td>
                <td>{{ val.biMode }}</td>
                <td>{{ val.ingTag }}</td>
                <td>{{ val.insMode }}</td>
                <td class="end">
                  <a
                    class="btnStyle btnSecondary btnSm"
                    title="선택"
                    @click.prevent="select(val.biNo)"
                    >선택</a
                  >
                </td>
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
  <!-- //과거입찰내역 -->
</template>
  <script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: "bidPast",
  props: ["callbackFunc"],
  components: {
    Pagination,
  },
  data() {
    return {
      searchParams: {},
      listPage: {},
    };
  },
  methods: {
    initModal() {
      this.searchParams = {
        size: "5",
      };
      this.search(0);
    },
    search(page) {
      this.searchParams.page = page;
      this.retrieve();
    },
    async select(biNo) {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bid/progresslistDetail",
          biNo
        );
        this.$emit("callbackFunc", response.data);
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
      $("#bidPast").modal("hide");
    },

    async retrieve() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bid/pastBidList",
          this.searchParams
        );
        this.listPage = response.data;
        console.log(1111111, this.listPage);
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
    },
  },
  beforeMount() {},
  mounted() {},
};
</script>