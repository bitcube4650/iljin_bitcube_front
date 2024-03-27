<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>입찰진행 상세</li>
      </ul>
    </div>
    <!-- //conHeader -->
    <!-- contents -->
    <div class="contents">
      <div class="formWidth">
        <h3 class="h3Tit">입찰에 부치는 사람</h3>
        <div class="boxSt mt20">
          <div class="flex align-items-center">
            <div class="formTit flex-shrink0 width170px">입찰번호</div>
            <div class="width100">{{ this.dataFromList }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰명</div>
            <div class="width100">{{ this.result.biName }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">품목</div>
            <div class="width100">
              {{ this.result.itemName }}
            </div>
          </div>
        </div>

        <h3 class="h3Tit mt50">입찰방식 및 낙찰자 결정방법</h3>
        <div class="boxSt mt20">
          <div class="flex align-items-center">
            <div class="formTit flex-shrink0 width170px">입찰방식</div>
            <div class="width100">{{ this.result.biMode }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">낙찰자 결정방법</div>
            <div class="width100">{{ this.result.succDeciMeth }}</div>
          </div>
        </div>

        <h3 class="h3Tit mt50">입찰 참가정보</h3>
        <div class="boxSt mt20">
          <div class="flex align-items-center">
            <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
            <div class="width100">{{ this.result.bidJoinSpec }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">현장설명일시</div>
            <div class="width100">{{ this.result.spotDate }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">현장설명장소</div>
            <div class="width100">{{ this.result.spotArea }}</div>
          </div>
          <div class="flex mt20">
            <div class="formTit flex-shrink0 width170px">특수조건</div>
            <div class="width100">
              <div
                class="overflow-y-scroll boxStSm width100"
                style="height: 50px"
              >
                {{ this.result.specialCond }}
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">납품조건</div>
            <div class="width100">{{ this.result.supplyCond }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">금액기준</div>
            <div class="width100">{{ this.result.amtBasis }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">결제조건</div>
            <div class="width100">{{ this.result.payCond }}</div>
          </div>
        </div>

        <h3 class="h3Tit mt50">참고사항</h3>
        <div class="boxSt mt20">
          <div class="flex align-items-center">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">입찰담당자</div>
              <div class="width100">{{ this.result.cuser }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입찰담당부서</div>
              <div class="width100">{{ this.result.cuserDept }}</div>
            </div>
          </div>
          <div
            class="flex align-items-center mt20"
            v-if="result.ingTag === 'A3'"
          >
            <div class="formTit flex-shrink0 width170px">재입찰사유</div>
            <div class="width100">{{ this.result.whyA3 }}</div>
          </div>
        </div>

        <h3 class="h3Tit mt50">전자입찰 제출 내역</h3>
        <div class="conTopBox mt20">
          <ul class="dList">
            <li>
              <div>
                세부내역파일을 다운받아 내역 작성 후 제출기한 내 등록해 주시기
                바랍니다.
              </div>
            </li>
            <li><div>첨부파일은 세부내역 작성에 참고 될 자료들입니다.</div></li>
          </ul>
        </div>
        <div class="boxSt mt20">
          <div class="flex align-items-center">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">제출시작일시</div>
              <div class="width100">{{ this.result.estStartDate }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">제출마감일시</div>
              <div class="width100">{{ this.result.estCloseDate }}</div>
            </div>
          </div>
          <div
            class="flex align-items-center mt20"
            v-if="this.result.insMode === '파일등록'"
          >
            <div class="formTit flex-shrink0 width170px">세부내역</div>
            <div class="width100">
              <a
                class="textUnderline"
                v-for="(val, idx) in fileContent"
                v-if="val.fileFlag === 'K'"
                :key="idx"
                @click="downloadFile(val.filePath, val.fileNm)"
                >{{ val.fileNm }}</a
              >
            </div>
          </div>
          <div class="flex mt20" v-if="this.result.insMode === '직접입력'">
            <div class="formTit flex-shrink0 width170px">세부내역</div>
            <div class="width100">
              <table class="tblSkin1">
                <colgroup>
                  <col style="" />
                </colgroup>
                <thead>
                  <tr>
                    <th>품목명</th>
                    <th>규격</th>
                    <th>수량</th>
                    <th class="end">단위</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, idx) in tableContent">
                    <td class="text-left">{{ val.name }}</td>
                    <td class="text-left">{{ val.ssize }}</td>
                    <td class="text-right">
                      {{ val.orderQty | numberWithCommas }}
                    </td>
                    <td>{{ val.unitcode | numberWithCommas }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">첨부파일</div>
            <div class="width100">
              <div
                v-for="(val, idx) in fileContent"
                v-if="
                  val.fileFlagKo === '대외용' || val.fileFlagKo === '대내용'
                "
                :key="idx"
              >
                <div
                  :class="val.fileFlagKo === '대외용' ? 'textHighlight' : 'mt5'"
                >
                  <span class="mr20">{{ val.fileFlagKo }}</span>
                  <a
                    @click="downloadFile(val.filePath, val.fileNm)"
                    class="textUnderline"
                    >{{ val.fileNm }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="h3Tit mt50">견적 제출</h3>
        <div class="conTopBox mt20">
          <ul class="dList">
            <li>
              <div>
                견적 제출 후 수정할 수 없으니 꼼꼼히 확인하시고 제출하시기
                바랍니다.
              </div>
            </li>
          </ul>
        </div>
        <div class="boxSt mt20">
          <table class="tblSkin1" v-if="this.result.insMode === '직접입력'">
            <colgroup>
              <col style="" />
            </colgroup>
            <thead>
              <tr>
                <th>품목명</th>
                <th>규격</th>
                <th>수량</th>
                <th>단위</th>
                <th>견적단가</th>
                <th class="end">견적금액</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, idx) in tableContent">
                <td class="text-left">{{ val.name }}</td>
                <td class="text-left">{{ val.ssize }}</td>
                <td class="text-right">{{ val.orderQty }}</td>
                <td>{{ val.unitcode }}</td>
                <td class="text-right">
                  <input
                    type="text"
                    name=""
                    id=""
                    class="inputStyle inputSm text-right readonly"
                    placeholder=""
                    v-model="val.orderUc"
                    readonly
                  />
                </td>
                <td class="text-right">
                  <input
                    type="number"
                    name=""
                    id=""
                    class="inputStyle inputSm text-right"
                    placeholder=""
                    v-model="tableContent[idx].esmtAmt"
                    @input="updateTotal"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="flex align-items-center justify-space-end mt10"
            v-if="this.result.insMode === '직접입력'"
          >
            <div class="flex align-items-center">
              <div class="formTit flex-shrink0 mr20">총 견적금액</div>
              <div class="flex align-items-center width100">
                <select
                  name=""
                  class="selectStyle maxWidth140px"
                  v-model="this.curr"
                >
                  <option
                    v-for="(val, idx) in currlist"
                    :value="val.codeVal"
                    :key="idx"
                  >
                    {{ val.codeName }}
                  </option>
                </select>
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle readonly ml10"
                  :value="totalAmount"
                  placeholder=""
                  readonly
                />
              </div>
            </div>
          </div>

          <div
            class="flex align-items-center width100 mt10"
            v-if="this.result.insMode === '파일등록'"
          >
            <div class="formTit flex-shrink0 width170px">
              견적금액 <span class="star">*</span>
            </div>
            <div class="flex align-items-center width100">
              <select
                name=""
                class="selectStyle maxWidth140px"
                v-model="this.curr"
              >
                <option
                  v-for="(val, idx) in currlist"
                  :value="val.codeVal"
                  :key="idx"
                >
                  {{ val.codeName }}
                </option>
              </select>
              <input
                type="number"
                name=""
                id=""
                class="inputStyle"
                placeholder="숫자만 입력"
                style="margin: 0 10px"
                v-model="this.amt"
              />
              <input
                type="text"
                name=""
                id=""
                class="inputStyle readonly"
                placeholder=""
                readonly
              />
            </div>
          </div>
          <div class="flex mt10">
            <div class="formTit flex-shrink0 width170px">
              견적내역파일 <span class="star">*</span>
              <!-- 툴팁 -->
              <i class="fas fa-question-circle toolTipSt ml5">
                <div class="toolTipText" style="width: 370px">
                  <ul class="dList">
                    <li>
                      <div>
                        전자입찰 등록서류의 세부내역 파일을 다운받아 내역 작성
                        후 첨부해 주십시오
                      </div>
                    </li>
                    <li class="textHighlight">
                      <div>
                        파일형식은 세부내역과 같은 형식으로 작성해 주십시오
                      </div>
                    </li>
                  </ul>
                </div>
              </i>
              <!-- //툴팁 -->
            </div>
            <div class="width100">
              <!-- 다중파일 업로드 -->
              <div class="upload-box">
                <input type="file" id="file-input" />
                <div class="uploadTxt">
                  <i class="fa-regular fa-upload"></i>
                  <div>
                    클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                    최대 10MB (등록 파일 개수 최대 1개)
                  </div>
                </div>
              </div>
              <div class="uploadPreview" id="preview"></div>
              <!-- //다중파일 업로드 -->
            </div>
          </div>
          <div class="flex mt10">
            <div class="formTit flex-shrink0 width170px">기타첨부</div>
            <div class="width100">
              <!-- 다중파일 업로드 -->
              <div class="upload-box">
                <input type="file" id="file-input2" />
                <div class="uploadTxt">
                  <i class="fa-regular fa-upload"></i>
                  <div>
                    클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                    최대 10MB (등록 파일 개수 최대 1개)
                  </div>
                </div>
              </div>
              <div class="uploadPreview" id="preview2"></div>
              <!-- //다중파일 업로드 -->
            </div>
          </div>
        </div>

        <div class="text-center mt50">
          <a class="btnStyle btnOutline" title="목록" @click="movetolist"> 목록 </a>
          <a
            data-toggle="modal"
            data-target="#biddingPreview"
            class="btnStyle btnOutline"
            title="공고문 미리보기"
            >공고문 미리보기</a
          >
          <a
            class="btnStyle btnSecondary"
            title="수정"
            v-if="this.result.insMode === '직접입력'"
            >견적금액 임시저장</a
          >
          <a class="btnStyle btnPrimary" title="견적서 제출">견적서 제출</a>
        </div>
      </div>
    </div>
    <!-- //contents -->

    <!--공고문 미리보기 팝업-->
    <BidAdvertisement
      :props="[this.result, this.tableContent, this.fileContent]"
    />
  </div>
  <!-- //본문 -->
</template>
  <script>
import BidAdvertisement from "@/modules/bid/components/BidAdvertisement.vue";
import fileInput from "../../../../public/js/fileInput.js";

export default {
  name: "partnerBidStatusDetail",
  components: {
    BidAdvertisement,
  },
  data() {
    return {
      total: 0,
      detail: {},
      dataFromList: {}, //목록에서 받아온 데이터
      searchParams: {},
      result: [],
      tableContent: [],
      fileContent: [],
      loginId: "",
      currlist: [],
      curr: "",
      amt: 0,
    };
  },
  computed: {
    totalAmount() {
      // tableContent 배열의 esmtAmt 속성들의 합을 계산합니다.
      return this.tableContent.reduce(
        (acc, cur) => acc + parseFloat(cur.esmtAmt || 0),
        0
      );
    },
  },
  filters: {
    numberWithCommas(val) {
      if (!val) return "";
      else return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    async retrieve() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bid/progresslistDetail",
          this.dataFromList
        );
        this.result = response.data[0][0];
        this.tableContent = response.data[1];
        this.total = this.calculateTotal();
        this.fileContent = response.data[2];
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
    },

    validationCheck() {
      //투찰 전 필수입력요소 체크 로직 추가하기
    },

    bidNotice() {
      //투찰 로직으로 변경하기
      this.detail.biNo = this.dataFromList;
      console.log(this.detail.biNo);
      this.detail.biName = this.result.biName;
      this.detail.type = "open";
      this.detail.interNm = this.result.interrelatedNm;
      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bid/bidNotice", this.detail)
        .then((response) => {
          if (response.data.code == "OK") {
          } else {
            this.$swal({
              type: "warning",
              text: "투찰 중 오류가 발생했습니다.",
            });
          }
        })
        .finally(() => {
          $("#biddingModal").modal("hide");
          this.$store.commit("finish");
          this.$router.push({ name: "bidProgress" });
        });
    },

    calculateTotal() {
      let total = 0;
      this.tableContent.forEach((val) => {
        total += val.orderQty * val.orderUc;
      });
      return total;
    },

    async downloadFile(filePath, fileNm) {
      console.log(filePath);
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/notice/downloadFile",
          { fileId: filePath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
          { responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
        );

        // 파일 다운로드를 위한 처리
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileNm); // 다운로드될 파일명 설정
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        this.$store.commit("finish");
      } catch (error) {
        console.error("Error downloading file:", error);
        this.$store.commit("finish");
      }
    },
    async init() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post("/api/v1/bidPtStatus/currlist");
        this.currlist = response.data;
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
    },
    checkBid() {
      console.log(1111111111111, this.searchParams);
      this.$http.post("/api/v1/bidPtStatus/checkBid", this.searchParams);
    },
        movetolist() {
      this.$router.push({ name: "partnerBidStatus" });
    },
  },
  beforeMount() {
    this.curr = "KRW";
    this.amt = 0;
    const params = {
      id: this.$options.name,
      biNo: this.$store.state.bidDetailData,
      custCode: this.$store.state.loginInfo.custCode,
    };
    if (this.$store.state.searchParams.id == params.id) {
      this.searchParams = Object.assign(params, this.$store.state.searchParams);
    } else {
      this.searchParams = params;
    }

    this.dataFromList = this.$store.state.bidDetailData;
    this.loginId = this.$store.state.loginInfo.userId;
    console.log(this.dataFromList);
    this.checkBid();
    this.init();
    this.retrieve();
  },
  mounted() {
    fileInput.applyFile();
  },
};
</script>