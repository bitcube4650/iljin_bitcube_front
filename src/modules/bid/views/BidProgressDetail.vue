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
            <div class="width100">{{ this.biNo }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰명</div>
            <div class="width100">{{ this.result.biName }}</div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">품목</div>
            <div class="width100">
              {{ this.result.itemCode }}
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
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="width100">
              <div class="boxStSm width100 boxOverflowY">
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >동서산업㈜</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >비트큐브</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >신양금속공업㈜</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체1</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체2</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체3</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체4</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체5</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체6</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체7</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체8</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체9</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체10</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체11</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체12</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체13</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체14</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체15</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체16</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체17</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체18</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체19</a
                >,
                <a
                  href="javascript:return false;"
                  data-toggle="modal"
                  data-target="#custUserPop"
                  class="textUnderline"
                  >테스트협력업체20</a
                >,
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="flex align-items-center width100">
              <div class="boxStSm width100 boxOverflowY">
                <a href="javascript:return false;" class="textUnderline"
                  >동서산업㈜</a
                >
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
            <div class="width100">강입찰</div>
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
              <select name="" class="selectStyle">
                <option value="">일산E/F</option>
              </select>
              <select name="" class="selectStyle" style="margin: 0 10px">
                <option value="">용해</option>
              </select>
              <select name="" class="selectStyle">
                <option value="">변압기</option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              {{ this.result.matFactoryFactory }}
            </div>
            <div class="width100"></div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">
                {{ this.result.matFactoryLine }}
              </div>
              <div class="width100"></div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">
                {{ this.result.matFactoryCnt }}
              </div>
              <div class="width100"></div>
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
              <div class="formTit flex-shrink0 width170px">개찰자/낙찰자</div>
              <div class="width100">{{ this.result.estOpener }}</div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입찰공고자</div>
              <div class="width100">{{ this.result.gongoId }}</div>
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
            <div class="formTit flex-shrink0 width170px" v-if="this.result.insMode === '파일등록'">세부내역</div>
            <div class="width100" v-if="this.result.insMode === '파일등록'">
              <a :href="val.filePath" class="textUnderline"
                v-for="(val, idx) in fileContent">{{val.fileNm}}</a
              >
            </div>
          </div>
          <div class="flex mt20">
            <div class="formTit flex-shrink0 width170px"
            v-if="this.result.insMode === '직접입력'">세부내역</div>
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
                    <td>{{ val.unitCode }}</td>
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
                <div v-for="(val, idx) in fileContent" v-if="val.fileFlgKo === '대외용' || val.fileFlgKo === '대내용'">
                    <div :class="val.fileFlagKo === '대외용' ? 'textHighlight' : 'mt5'">
                        <span class="mr20">{{val.fileFlagKo}}</span>
                        <a href="javascript:return false;" class="textUnderline">{{val.fileNm}}</a>
                    </div>
                </div>    
            </div>
          </div>
        </div>

        <div class="text-center mt50">
          <a
            href="#"
            class="btnStyle btnOutline"
            title="목록"
            ><router-link
                :to="{ name: 'bidProgress'}"
              >목록
              </router-link></a
          >
          <a
            href="javascript:return false;"
            class="btnStyle btnOutline"
            title="엑셀변환"
            >엑셀변환</a
          >
          <a
            href="javascript:return false;"
            data-toggle="modal"
            data-target="#biddingPreview"
            class="btnStyle btnOutline"
            title="공고문 미리보기"
            >공고문 미리보기</a
          >
          <a
            href="javascript:return false;"
            data-toggle="modal"
            data-target="#biddingDel"
            class="btnStyle btnSecondary"
            title="삭제"
            >삭제</a
          >
          <router-link
            to="/bid/progressUpdate"
            class="btnStyle btnSecondary"
            title="수정"
            >수정</router-link
          >
          <a
            href="javascript:return false;"
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
            <a
              href="javascript:return false;"
              class="ModalClose"
              data-dismiss="modal"
              title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <div class="alertText2">
              입찰공고를 하면 입찰 참가업체에게 입찰공고 메일이 발송되고 수정이
              불가하게 됩니다.<br /><br />입찰공고 하시겠습니까?
            </div>
            <div class="modalFooter">
              <a
                href="javascript:return false;"
                class="modalBtnClose"
                data-dismiss="modal"
                title="취소"
                >취소</a
              >
              <a
                href="javascript:return false;"
                class="modalBtnCheck"
                data-toggle="modal"
                title="입찰공고"
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
            ></textarea>
            <div class="modalFooter">
              <a
                href="javascript:return false;"
                class="modalBtnClose"
                data-dismiss="modal"
                title="취소"
                >취소</a
              >
              <a
                href="javascript:return false;"
                class="modalBtnCheck"
                data-toggle="modal"
                title="삭제"
                >삭제</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //입찰공고 삭제 -->

    <!-- 공고문 미리보기 -->
    <BidAdvertisement :props="[this.result, this.tableContent, this.fileContent]"/>
    <!-- //공고문 미리보기 -->

    <!-- 협력사 사용자-->
    <CustUserPop />
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
  props: ["biNo"],
  data() {
    return {
      total: 0,

      searchParams: {},
      result: [],
      tableContent: [],
      fileContent: [],
    };
  },
  beforeMount() {
    this.retrieve();
  },
  mounted() {

  },

  methods: {
    async retrieve() {
      try {
        this.$store.commit("loading");
        const response = await this.$http.post(
          "/api/v1/bid/progresslistDetail",
          this.biNo
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

    calculateTotal() {
      let total = 0;
      this.tableContent.forEach((val) => {
        total += val.orderQty * val.orderUc;
      });
      return total;
    },
  },
};
</script>