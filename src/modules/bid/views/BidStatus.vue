<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>입찰진행</li>
      </ul>
    </div>
    <!-- //conHeader -->
    <!-- contents -->
    <div class="contents">
      <div class="conTopBox">
        <ul class="dList">
          <li>
            <div>
              입찰진행은 입찰공고 되고 입찰 완료되기 전까지의 상태를 가진
              입찰입니다. (입찰번호 또는 입찰명을 클릭하시면 상세내용을 확인할
              수 있습니다)
            </div>
          </li>
          <li>
            <div>
              입찰이 마감되면 개찰자는 개찰 후 업체선정을 해
              주십시오.(개찰대상은 상태가 빨간색으로, 개찰 후 업체선정대상은
              상태가 파란색으로 표기됩니다.)
            </div>
          </li>
          <li class="textHighlight">
            <div>
              입찰마감 후 30일이 지나도록 업체 선정되지 않으면 자동으로 유찰처리
              됩니다
            </div>
          </li>
        </ul>
      </div>

      <!-- searchBox -->
      <div class="searchBox mt20">
        <div class="flex align-items-center">
          <div class="sbTit mr30">입찰번호</div>
          <div class="width250px">
            <input
              type="text"
              name=""
              id=""
              class="inputStyle"
              placeholder=""
              v-model="searchParams.bidNo"
              @keyup.enter.prevent="search(0)"
            />
          </div>
          <div class="sbTit mr30 ml50">입찰명</div>
          <div class="width250px">
            <input
              type="text"
              name=""
              id=""
              class="inputStyle"
              placeholder=""
              v-model="searchParams.bidName"
              @keyup.enter.prevent="search(0)"
            />
          </div>
        </div>
        <div class="flex align-items-center height50px mt10">
          <div class="sbTit mr30">진행상태</div>
          <div class="flex align-items-center width100">
            <input
              type="checkbox"
              id="progress1-1"
              class="checkStyle"
              v-model="searchParams.rebidYn"
            /><label for="progress1-1">입찰공고(재입찰 포함)</label>
            <input
              type="checkbox"
              id="progress1-2"
              class="checkStyle"
              v-model="searchParams.dateOverYn"
            /><label for="progress1-2" class="ml50">입찰공고(개찰대상)</label>
            <input
              type="checkbox"
              id="progress1-3"
              class="checkStyle"
              v-model="searchParams.openBidYn"
            /><label for="progress1-3" class="ml50">개찰(업체선정대상)</label>
          </div>
          <a class="btnStyle btnSearch" @click.prevent="search(0)">검색</a>
        </div>
      </div>
      <!-- //searchBox -->

      <div class="flex align-items-center justify-space-between mt40">
        <div class="width100">
          전체 :
          <span class="textMainColor"
            ><strong>{{
              listPage.totalElements
                ? listPage.totalElements.toLocaleString()
                : 0
            }}</strong></span
          >건
          <select
            v-model="searchParams.size"
            @change="search(0)"
            class="selectStyle maxWidth140px ml20"
          >
            <option value="10">10개씩 보기</option>
            <option value="20">20개씩 보기</option>
          </select>
        </div>
      </div>
      <table class="tblSkin1 mt10">
        <colgroup>
          <col style="width: 12%" />
          <col style="" />
          <col style="width: 15%" />
          <col style="width: 10%" span="5" />
        </colgroup>
        <thead>
          <tr>
            <th>입찰번호</th>
            <th>입찰명</th>
            <th>제출마감일시</th>
            <th>입찰방식</th>
            <th>상태</th>
            <th>내역</th>
            <th>담당자</th>
            <th class="end">개찰자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val, idx) in listPage.content">
            <td
              class="textUnderline"
              @click="clickBidDetail(val.ingTag, val.biNo)"
              href="#"
            >
              {{ val.biNo }}
            </td>
            <td
              class="textUnderline text-left"
              @click="clickBidDetail(val.ingTag, val.biNo)"
              href="#"
            >
              {{ val.biName }}
            </td>
            <td :class="{ textHighlight: isPastDate(val.estCloseDate) }">
              <i class="fa-regular fa-timer"></i>{{ val.estCloseDate }}
            </td>
            <td>{{ val.biMode }}</td>
            <td
              :class="{
                textHighlight: isPastDate(val.estCloseDate),
                blueHighlight: val.ingTag === '개찰',
              }"
            >
              {{ val.ingTag }}
            </td>
            <td>{{ val.insMode }}</td>
            <td>
              <i class="fa-light fa-paper-plane-top"></i>
              <a
                :href="'mailto:' + val.cuserEmail"
                class="textUnderline"
                title="담당자 메일"
                >{{ val.cuser }}</a
              >
            </td>
            <td class="end">
              <i class="fa-light fa-paper-plane-top"></i>
              <a
                :href="'mailto:' + val.gongoEmail"
                class="textUnderline"
                title="공고자 메일"
                >{{ val.gongoId }}</a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <!-- pagination -->
      <div class="row mt40">
        <div class="col-xs-12">
          <pagination @searchFunc="search" :page="listPage" />
        </div>
      </div>
      <!-- //pagination -->
    </div>
    <!-- //contents -->
  </div>
  <!-- //본문 -->
</template>
<style>
.blueHighlight {
  color: blue;
}
</style>
  <script>
import Pagination from "@/components/Pagination.vue";

export default {
  name: "bidStatus",
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
    clickBidDetail(ingTag, biNo) {
      if (ingTag === "개찰") {
        this.$store.commit("setBidDetailData", biNo);
        this.$router.push({ name: "bidOpenDetail" });
      } else {
        this.$store.commit("setBidDetailData", biNo);
        this.$router.push({ name: "bidStatusDetail" });
      }
    },
    search(page) {
      if (page >= 0) this.searchParams.page = page;
      this.retrieve();
    },

    async retrieve() {
      console.log(this.searchParams);

      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bidstatus/statuslist",
          this.searchParams
        );
        this.listPage = response.data;
        this.$store.commit("searchParams", this.searchParams);
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
    },

    isPastDate(dateString) {
      const currentDate = new Date();
      const targetDate = new Date(dateString);
      return targetDate < currentDate;
    },
  },
  beforeMount() {},
  mounted() {
    let params = {
      id: this.$options.name,
      size: "10",
      rebidYn: true,
      dateOverYn: true,
      openBidYn: true,
    };
    if (this.$route.params.flag === "noticing") {
      params.dateOverYn = false;
      params.openBidYn = false;
    } else if (this.$route.params.flag === "beforeOpening") {
      params.openBidYn = false;
    } else if (this.$route.params.flag === "opening") {
      params.dateOverYn = false;
      params.rebidYn = false;
    }

    if (this.$store.state.searchParams.id == params.id) {
      this.searchParams = Object.assign(params, this.$store.state.searchParams);
    } else {
      this.searchParams = params;
    }
    this.retrieve();
  },
};
</script>