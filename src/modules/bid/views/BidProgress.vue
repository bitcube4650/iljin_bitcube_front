<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>입찰계획</li>
      </ul>
    </div>
    <!-- //conHeader -->
    <!-- contents -->
    <div class="contents">
      <div class="conTopBox">
        <ul class="dList">
          <li>
            <div>{{ findComment.line1 }}</div>
          </li>
          <li class="textHighlight">
            <div>{{ findComment.line2 }}</div>
          </li>
          <li>
            <div>{{ findComment.line3 }}</div>
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
              maxlength="10"
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
              maxlength="50"
            />
          </div>
          <a class="btnStyle btnSearch" @click.prevent="search(0)"
            >검색</a
          >
        </div>
      </div>
      <!-- //searchBox -->

      <div class="flex align-items-center justify-space-between mt40">
        <div class="width100">
          전체 : <span class="textMainColor"><strong>{{ listPage.totalElements ? listPage.totalElements.toLocaleString() : 0 }}</strong></span
          >건
          <select v-model="searchParams.size" @change="search(0)" class="selectStyle maxWidth140px ml20">
            <option value="10">10개씩 보기</option>
            <option value="20">20개씩 보기</option>
            <option value="30">30개씩 보기</option>
            <option value="50">50개씩 보기</option>
          </select>
        </div>
        <div>
          <router-link
            to="/bid/progressInsert"
            class="btnStyle btnPrimary"
            title="입찰계획등록"
            >입찰계획등록</router-link
          >
        </div>
      </div>
      <table class="tblSkin1 mt10">
        <colgroup>
          <col style="width: 12%" />
          <col style="" />
          <col style="width: 15%" />
          <col style="width: 15%" />
          <col style="width: 10%" span="4" />
        </colgroup>
        <thead>
          <tr>
            <th>입찰번호</th>
            <th>입찰명</th>
            <th>제출시작일시</th>
            <th>제출마감일시</th>
            <th>입찰방식</th>
            <th>내역</th>
            <th>담당자</th>
            <th class="end">공고자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val, idx) in listPage.content">
            <td class="textUnderline" @click="clickBidDetail(val.biNo)" href="#">
                {{val.biNo}}
            </td>
            <td class="textUnderline text-left" @click="clickBidDetail(val.biNo)" href="#">
                {{val.biName}}
            </td >
            <td :class="{ 'textHighlight': isPastDate(val.estCloseDate) }">
              <i class="fa-regular fa-timer"></i>{{val.estStartDate}}
              </td>
            <td>
              <i class="fa-regular fa-timer"></i>{{val.estCloseDate}}
            </td>
            <td>{{val.biMode}}</td>
            <td>{{val.insMode}}</td>
            <td>
              <i class="fa-light fa-paper-plane-top"></i>
              <a
                :href="'mailto:' + val.cuserEmail"
                class="textUnderline"
                title="담당자 메일">{{val.cuser}}</a>
            </td>
            <td class="end">
              <i class="fa-light fa-paper-plane-top"></i>
              <a
                :href="'mailto:' + val.gongoEmail"
                class="textUnderline"
                title="공고자 메일"
                >{{val.gongoId}}</a
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
  </div>
  <!-- //contents -->
</template>
<script>
import Pagination from "@/components/Pagination.vue";

export default {
  name: "bidProgress",
  components: {
    Pagination,
  },
  data() {
    return {
      findComment: {
        line1:
          "입찰담당자가 생성한 입찰목록입니다. 입찰 공고자는 입찰계획 내용을 상세히 확인하시고 공고 하십시오.(입찰번호 또는 입찰명을 클릭하시면 상세내용을 확인할 수 있습니다) \n",
        line2:
          "입찰공고자는 제출마감일시 전에 입찰공고 하지 않으면 해당 입찰은 자동으로 삭제됩니다.",
        line3:
          "담당자 또는 공고자를 클릭하면 해당인에게 메일을 보낼 수 있습니다.",
      },
      //bidProgressList: [],
      searchParams: {},
      listPage: {},
    };
  },

  beforeMount() {},
  mounted() {
    const params = { id: this.$options.name, size: "10" };
    if (this.$store.state.searchParams.id == params.id) {
      this.searchParams = Object.assign(params, this.$store.state.searchParams);
    } else {
      this.searchParams = params;
    }
    this.retrieve();
  },

  methods: {
    search(page) {
      if (page >= 0) this.searchParams.page = page;
      this.retrieve();
    },

    async retrieve() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post("/api/v1/bid/progresslist",this.searchParams);
        this.listPage = response.data;
        this.$store.commit("searchParams", this.searchParams);
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
    },

    clickBidDetail(biNo){
      this.$store.commit('setBidDetailData', biNo);
      this.$router.push({name:"bidProgressDetail"});

    },
    isPastDate(dateString) {
        const currentDate = new Date(); 
        const targetDate = new Date(dateString); 
        return targetDate < currentDate; 
    }
  },
};
</script>