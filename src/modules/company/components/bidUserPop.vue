 <template>
  <!-- 개찰자 조회 -->
  <div
    class="modal fade modalStyle"
    id="bidUserPop"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="width: 100%; max-width: 800px">
      <div class="modal-content">
        <div class="modal-body">
          <a
            class="ModalClose"
            data-dismiss="modal"
            title="닫기"
            ><i class="fa-solid fa-xmark"></i
          ></a>
          <h2 class="modalTitle">사원 조회</h2>
          <div class="modalTopBox">
            <ul>
              <li>
                <div>
                  소속사의 개찰권한을 가진 사용자만 조회됩니다. (사용자 조회 후
                  선택버튼을 누르십시오)
                </div>
              </li>
              <li>
                <div>
                  개찰자가 조회되지 않을 경우 관리자에게 연락해 주십시오
                </div>
              </li>
            </ul>
          </div>

          <div class="modalSearchBox mt20">
            <div class="flex align-items-center">
              <div class="sbTit mr30">사원명</div>
              <div class="width150px">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="searchParams.userName"
                />
              </div>
              <div class="sbTit mr30 ml50">부서명</div>
              <div class="width150px">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="searchParams.deptName"
                />
              </div>
              <a class="btnStyle btnSearch" @click.prevent="search(0)">검색</a>
            </div>
          </div>
          <table class="tblSkin1 mt30">
            <colgroup>
              <col style="width: 250px" />
              <col style="width: 250px" />
            </colgroup>
            <thead>
              <tr>
                <th>부서명</th>
                <th>사원명</th>
                <th class="end">선택</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, idx) in listPage.content">
                <td class="text-left">{{val.deptName}}</td>
                <td class="text-left">{{val.userName}}</td>
                <td class="end">
                  <a
                    class="btnStyle btnSecondary btnSm"
                    title="선택"
                    @click.prevent="select(val)"
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
  <!-- //개찰자 조회 -->
</template>
<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: "BidUserPop",
  props: ["callbackFunc"],
  components: {
    Pagination,
  },
  data() {
    return {
      searchParams: {},
      listPage: {},
      buttonId:'',
    };
  },
  methods: {
    initModal(buttonId, data) {
      this.searchParams = {
        size: "5",
        type: "normalUser", //openBidUser: 개찰유저 검색, normalUser: 이외
        interrelatedCD:data 
      };
      this.buttonId=buttonId;
      this.search(0);
    },
    search(page) {
      this.searchParams.page = page;
      this.retrieve();
    },
    select(data) {
      this.$emit("callbackFunc", { data, buttonId: this.buttonId });
      $("#bidUserPop").modal("hide");
    },

    async retrieve() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bid/userList",
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