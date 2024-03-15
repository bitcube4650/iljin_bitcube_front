<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>입찰계획 상세</li>
      </ul>
    </div>
    <!-- //conHeader -->
    <!-- contents -->
    <div class="contents">
      <div class="formWidth">
        <h3 class="h3Tit">입찰기본정보</h3>
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
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰방식</div>
            <div class="width100">{{ this.result.biMode }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
            <div class="width100">{{ this.result.bidJoinSpec }}</div>
          </div>
          <div class="flex mt20">
            <div class="formTit flex-shrink0 width170px">특수조건</div>
            <div class="width100">
              <div
                class="boxStSm width100 boxOverflowY"
                v-if="this.result.specialCond !== null"
              >
                {{ this.result.specialCond }}
              </div>
              <div class="boxStSm width100 boxOverflowY" v-else>
                <!-- null인 경우 빈 문자열 표시 -->
                없음
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">현장설명일시</div>
            <div class="width100">{{ this.result.spotDate }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">현장설명장소</div>
            <div class="width100">{{ this.result.spotArea }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
            <div class="width100">{{ this.result.succDeciMeth }}</div>
          </div>
          <div
            class="flex align-items-center mt20"
            v-if="this.result.biMode === '지명경쟁입찰'"
          >
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="width100">
              <div class="boxStSm width100 boxOverflowY">
                <div v-for="(val, idx) in custContent" style="display: inline">
                  <a
                    v-if="val.custName !== null"
                    @click.prevent="$refs.custUserPop.initModal(val.custCode)"
                    data-toggle="modal"
                    data-target="#custUserPop"
                    class="textUnderline"
                    >{{ val.custName }}</a
                  >
                  <a
                    @click.prevent="$refs.custUserPop.initModal(val.custCode)"
                    data-toggle="modal"
                    data-target="#custUserPop"
                    class="textUnderline"
                    v-else
                    >미등록업체</a
                  >
                  <span v-if="idx !== custContent.length - 1">, </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex align-items-center mt20"
            v-if="this.result.biMode === '일반경쟁입찰'"
          >
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="flex align-items-center width100">
              <div class="boxStSm width100 boxOverflowY">
                <a>가입회원사 전체</a>
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">금액기준</div>
            <div class="width100">{{ this.result.amtBasis }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">결제조건</div>
            <div class="width100">{{ this.result.payCond }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">예산금액</div>
            <div class="width100">{{ this.result.bdAmt }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰담당자</div>
            <div class="width100">{{ this.result.cuser }}</div>
          </div>
        </div>

        <h3 class="h3Tit mt50" v-if="this.result.interrelatedCustCode === '02'">
          입찰분류
        </h3>
        <div
          class="boxSt mt20"
          v-if="this.result.interrelatedCustCode === '02'"
        >
          <div class="flex align-items-center">
            <div class="formTit flex-shrink0 width170px">분류군</div>
            <div class="flex align-items-center width100">
              <select name="" class="selectStyle" disabled>
                <option v-for="dept in lotteDeptList" :value="dept.value">
                  {{ dept.label }}
                </option>
              </select>
              <select
                name=""
                class="selectStyle"
                style="margin: 0 10px"
                disabled
              >
                <option v-for="proc in lotteProcList" :value="proc.value">
                  {{ proc.label }}
                </option>
              </select>
              <select name="" class="selectStyle" disabled>
                <option v-for="cls in lotteClsList" :value="cls.value">
                  {{ cls.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">공장동</div>
            <div class="width100">{{ this.result.matFactoryFactory }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">라인</div>
              <div class="width100">{{ this.result.matFactoryLine }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">호기</div>
              <div class="width100">{{ this.result.matFactoryCnt }}</div>
            </div>
          </div>
        </div>

        <h3 class="h3Tit mt50">입찰공고 추가등록 사항</h3>
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
          <div class="flex align-items-center mt20">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">개찰자</div>
              <div class="width100">{{ this.result.estOpener }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입찰공고자</div>
              <div class="width100">{{ this.result.gongoId }}</div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">낙찰자</div>
              <div class="width100">{{ this.result.estBidder }}</div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">입회자1</div>
              <div class="width100">{{ this.result.openAtt1 }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입회자2</div>
              <div class="width100">{{ this.result.openAtt2 }}</div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">내역방식</div>
              <div class="width100">{{ this.result.insMode }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">납품조건</div>
              <div class="width100">{{ this.result.supplyCond }}</div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div
              class="formTit flex-shrink0 width170px"
              v-if="this.result.insMode === '파일등록'"
            >
              세부내역
            </div>
            <div class="width100" v-if="this.result.insMode === '파일등록'">
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
          <div class="flex mt20">
            <div
              class="formTit flex-shrink0 width170px"
              v-if="this.result.insMode === '직접입력'"
            >
              세부내역
            </div>
            <div class="width100" v-if="this.result.insMode === '직접입력'">
              <table class="tblSkin1">
                <colgroup>
                  <col style="" />
                </colgroup>
                <thead>
                  <tr>
                    <th>품목명</th>
                    <th>규격</th>
                    <th>수량</th>
                    <th>단위</th>
                    <th>실행단가</th>
                    <th class="end">합계</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, idx) in tableContent">
                    <td class="text-left">{{ val.name }}</td>
                    <td class="text-left">{{ val.ssize }}</td>
                    <td class="text-right">{{ val.orderQty }}</td>
                    <td>{{ val.unitcode }}</td>
                    <td class="text-right">{{ val.orderUc }}</td>
                    <td class="text-right end">
                      {{ val.orderQty * val.orderUc }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="text-right mt10">
                <strong>총합계 : {{ total }}</strong>
              </p>
            </div>
          </div>
          <div class="flex mt20">
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

        <div class="text-center mt50">
          <a href="#" class="btnStyle btnOutline" title="목록"
            ><router-link :to="{ name: 'bidProgress' }">목록 </router-link></a
          >
          <a class="btnStyle btnOutline" title="엑셀변환" @click="excel"
            >엑셀변환</a
          >
          <a
            data-toggle="modal"
            data-target="#biddingPreview"
            class="btnStyle btnOutline"
            title="공고문 미리보기"
            >공고문 미리보기</a
          >
          <a
            v-if="this.loginId === this.result.cuserCode"
            data-toggle="modal"
            data-target="#biddingDel"
            class="btnStyle btnSecondary"
            title="삭제"
            >삭제</a
          >
          <a
            v-if="this.loginId === this.result.cuserCode"
            @click="updateDetail"
            class="btnStyle btnSecondary"
            title="수정"
            >수정</a
          >
          <a
            v-if="this.loginId === this.result.cuserCode || this.logingId === this.result.gongoIdCode"
            data-toggle="modal"
            data-target="#biddingModal"
            class="btnStyle btnPrimary"
            title="입찰공고"
            >입찰공고</a
          >
        </div>
      </div>
    </div>
    <!-- //contents -->
    <!-- 입찰공고 -->
    <div
      class="modal fade modalStyle"
      id="biddingModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 420px">
        <div class="modal-content">
          <div class="modal-body">
            <a class="ModalClose" data-dismiss="modal" title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <div class="alertText2">
              입찰공고를 하면 입찰 참가업체에게 입찰공고 메일이 발송되고 수정이
              불가하게 됩니다.<br /><br />입찰공고 하시겠습니까?
            </div>
            <div class="modalFooter">
              <a class="modalBtnClose" data-dismiss="modal" title="취소"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                title="입찰공고"
                @click="openBid()"
                >입찰공고</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //입찰공고 -->

    <!-- 입찰공고 삭제 -->
    <div
      class="modal fade modalStyle"
      id="biddingDel"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 550px">
        <div class="modal-content">
          <div class="modal-body">
            <a
              href="javascript:return false;"
              class="ModalClose"
              data-dismiss="modal"
              title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <h2 class="modalTitle">입찰계획 삭제</h2>
            <div class="modalTopBox">
              <ul>
                <li>
                  <div>
                    입찰계획을 삭제하시면 지정된 공지자에게 삭제 메일이
                    발송됩니다.<br />아래 삭제사유 내용으로 공지자에게 발송
                    됩니다.
                  </div>
                </li>
              </ul>
            </div>
            <textarea
              class="textareaStyle height150px mt20"
              onkeydown="resize(this)"
              onkeyup="resize(this)"
              placeholder="삭제사유 필수 입력"
              v-model="detail.reason"
            ></textarea>
            <div class="modalFooter">
              <a class="modalBtnClose" data-dismiss="modal" title="취소"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                title="삭제"
                @click="del()"
                >삭제</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //입찰공고 삭제 -->

    <!-- 공고문 미리보기 -->
    <BidAdvertisement
      :props="[this.result, this.tableContent, this.fileContent]"
    />
    <!-- //공고문 미리보기 -->

    <!-- 협력사 사용자-->
    <CustUserPop ref="custUserPop" />
    <!-- //협력사 사용자-->
  </div>
  <!-- //본문 -->
</template>
  <script>
import BidAdvertisement from "@/modules/bid/components/BidAdvertisement.vue";
import CustUserPop from "@/modules/company/components/CustUserPop.vue";

export default {
  name: "bidProgressDetail",
  components: {
    BidAdvertisement,
    CustUserPop,
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
      custContent: [],
      loginId: "",

      lotteDeptList: [
        { value: "A1", label: "익산 E/F" },
        { value: "A2", label: "말련 E/F" },
        { value: "A3", label: "에너지" },
        { value: "A4", label: "융복합" },
        { value: "A5", label: "공통" },
      ],

      lotteProcList: [
        { value: "B1", label: "용해" },
        { value: "B2", label: "제박" },
        { value: "B3", label: "후처리" },
        { value: "B4", label: "슬리터" },
        { value: "B5", label: "절단" },
        { value: "B6", label: "환경" },
        { value: "B7", label: "공통" },
        { value: "B8", label: "기타" },
      ],

      lotteClsList: [
        { value: "C1", label: "탱크" },
        { value: "C2", label: "배관" },
        { value: "C3", label: "열교환기" },
        { value: "C4", label: "냉각탑" },
        { value: "C5", label: "브로이" },
        { value: "C6", label: "판넬" },
        { value: "C7", label: "펌프" },
        { value: "C8", label: "인버터" },
        { value: "C9", label: "PLC/드라이브" },
        { value: "C10", label: "정류기" },
        { value: "C11", label: "단락기" },
        { value: "C12", label: "변압기" },
        { value: "C13", label: "전기/케이블" },
        { value: "C14", label: "공조" },
        { value: "C15", label: "드럼" },
        { value: "C16", label: "전해조" },
        { value: "C17", label: "방청조" },
        { value: "C18", label: "구동부" },
        { value: "C19", label: "스크라바" },
        { value: "C20", label: "크레인" },
        { value: "C21", label: "구동 Roll" },
        { value: "C22", label: "슬리터기" },
        { value: "C23", label: "절단기" },
        { value: "C24", label: "검사설비" },
        { value: "C25", label: "기타" },
      ],
    };
  },
  beforeMount() {},
  mounted() {
    this.dataFromList = this.$store.state.bidDetailData;
    this.loginId = this.$store.state.loginInfo.loginId;
    console.log(this.dataFromList);
    this.retrieve();
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
        this.custContent = response.data[3];
        this.$store.commit("finish");
      } catch (err) {
        console.log(err);
        this.$store.commit("finish");
      }
    },

    del() {
      if (this.detail.reason == null || this.detail.reason == "") {
        this.$swal({ type: "warning", text: "삭제사유를 입력해주세요." });
        return;
      }
      this.detail.biNo = this.dataFromList;
      this.detail.biName = this.result.biName;
      this.detail.type = "del";
      this.detail.interNm = this.result.interrelatedNm;
      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bid/delete", this.detail)
        .then((response) => {
          if (response.data.code == "OK") {
            this.$store.commit("searchParams", {});
          } else {
            this.$swal({
              type: "warning",
              text: "삭제 중 오류가 발생했습니다.",
            });
          }
        })
        .finally(() => {
          $("#biddingDel").modal("hide");
          this.$store.commit("finish");
          this.$router.push({ name: "bidProgress" });
        });
    },

    updateDetail() {
      this.detail.result = this.result;
      this.detail.result.bdAmt = parseInt(this.result.bdAmt);
      this.detail.tableContent = this.tableContent;
      this.detail.fileContent = this.fileContent;
      this.detail.custContent = this.custContent;
      this.detail.lotteDeptList = this.lotteDeptList;
      this.detail.lotteProcList = this.lotteProcList;
      this.detail.lotteClsList = this.lotteClsList;

      this.$store.commit("setBidUpdateData", this.detail);
      console.log(this.detail);
      this.$router.push({ name: "bidProgressUpdate" });
    },

    openBid() {
      this.detail.biNo = this.dataFromList;
      console.log(this.detail.biNo);
      this.detail.biName = this.result.biName;
      this.detail.type = "open";
      this.detail.interNm = this.result.interrelatedNm;
      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bid/openBid", this.detail)
        .then((response) => {
          if (response.data.code == "OK") {
          } else {
            this.$swal({
              type: "warning",
              text: "개찰 중 오류가 발생했습니다.",
            });
          }
        })
        .finally(() => {
          $("#biddingModal").modal("hide");
          this.$store.commit("finish");
          this.$router.push({ name: "bidProgress" });
        });
    },

    excel() {
      this.detail.fileName = this.dataFromList + "_전자입찰요청서";
      this.detail.result = this.result;
      this.detail.tableContent = this.tableContent;
      this.detail.fileContent = this.fileContent;
      this.detail.custContent = this.custContent;

      console.log(this.detail.fileName);

      this.$store.commit("loading");
      this.$http
      .post("/api/v1/excel/bid/progressDetail/downLoad", this.detail, { responseType: 'blob' }) // responseType을 blob으로 설정하여 파일 다운로드 요청을 보냅니다.
      .then((response) => {
        if (response.status === 200) { // 응답이 성공적으로 도착한 경우
          const url = window.URL.createObjectURL(new Blob([response.data])); // 응답 데이터를 Blob 형식으로 변환하여 URL을 생성합니다.
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', this.detail.fileName + '.xlsx'); // 다운로드할 파일명을 설정합니다.
          document.body.appendChild(link);
          link.click();
          window.URL.revokeObjectURL(url); // 임시 URL을 해제합니다.
          this.$router.push({ name: "bidProgress" }); // 파일 다운로드 후 페이지를 이동합니다.
        } else {
          this.$swal({ // 오류 처리
            type: "warning",
            text: "개찰 중 오류가 발생했습니다.",
          });
        }
      })
      .catch((error) => { // 오류 처리
        console.error("Error:", error);
        this.$swal({
          type: "warning",
          text: "개찰 중 오류가 발생했습니다.",
        });
      })
      .finally(() => {
        this.$store.commit("finish"); // 로딩 상태 종료
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
  },
};
</script>