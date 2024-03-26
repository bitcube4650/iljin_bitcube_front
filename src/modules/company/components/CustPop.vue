<template>
  <div>
    <!-- 계열사 업체조회 -->
    <div
      class="modal fade modalStyle"
      id="custPop"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 900px">
        <div class="modal-content">
          <div class="modal-body">
            <a class="ModalClose" data-dismiss="modal" title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <h2 class="modalTitle">업체조회</h2>
            <div class="modalTopBox">
              <ul>
                <li>
                  <div>계열사에 등록되어 있는 업체리스트를 조회합니다</div>
                </li>
              </ul>
            </div>

            <div class="modalSearchBox mt20">
              <div class="flex align-items-center">
                <div class="sbTit mr30">업체명</div>
                <div class="width150px">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="inputStyle"
                    placeholder=""
                    v-model="searchParams.custName"
                    @keyup.enter.prevent="search(0)"
                  />
                </div>
                <div class="sbTit mr30 ml50">대표자명</div>
                <div class="width150px">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="inputStyle"
                    placeholder=""
                    v-model="searchParams.chairman"
                    @keyup.enter.prevent="search(0)"
                  />
                </div>
                <a class="btnStyle btnSearch" @click.prevent="search(0)"
                  >검색</a
                >
              </div>
            </div>
            <table class="tblSkin1 mt30">
              <colgroup>
                <col style="" />
              </colgroup>
              <thead>
                <tr>
                  <th>업체명</th>
                  <th>주소</th>
                  <th>대표자명</th>
                  <th class="end">선택</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(val, idx) in listPage.content">
                  <td class="text-left">{{ val.custName }}</td>
                  <td class="text-left">
                    <div class="text-overflow">
                      {{ val.combinedAddr }}
                    </div>
                  </td>
                  <td>{{ val.presName }}</td>
                  <td class="end">
                    <a class="btnStyle btnSecondary btnSm" @click.prevent="select(val)" title="선택">선택</a>
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
              <a class="modalBtnClose" data-dismiss="modal" title="닫기"
                >닫기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //계열사 업체조회 -->
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: "CustPop",
  props: ["callbackFunc"],
  components: {
    Pagination,
  },
  data() {
    return {
      searchParams: {},
      itemGrpList: [],
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
    select(data) {
      this.$emit("callbackFunc", data);
      $("#custPop").modal("hide");
    },

    async retrieve() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bid/custList",
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
};
</script>

