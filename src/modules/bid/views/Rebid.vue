<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>재입찰</li>
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
            <div class="width100">{{ dataFromList.result.biNo }}</div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">
              입찰명 <span class="star">*</span>
            </div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.biName"
                maxlength="50"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">
              품목 <span class="star">*</span>
            </div>
            <div class="flex align-items-center width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.itemName"
                disabled
              />
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              입찰방식 <span class="star">*</span>
            </div>
            <div class="width100">
              <input
                type="radio"
                name="bm1"
                id="bm1_1"
                class="radioStyle"
                checked=""
                :value="dataFromList.result.biModeCode"
              /><label for="bm1_1">{{ this.dataFromList.result.biMode }}</label>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.bidJoinSpec"
              />
            </div>
          </div>
          <div class="flex mt20">
            <div class="formTit flex-shrink0 width170px">특수조건</div>
            <div class="width100">
              <div class="width100">
                <textarea
                  class="textareaStyle boxOverflowY"
                  onkeydown="resize(this)"
                  onkeyup="resize(this)"
                  placeholder=""
                  v-model="dataFromList.result.specialCond"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              현장설명일시 <span class="star">*</span>
            </div>
            <div class="width100">
              <Calendar
                @update-date="fnUpdateSpotDate"
                calendarId="spotDate"
                classProps="datepicker inputStyle readonly maxWidth140px"
                :initDate="datePart"
                disabled
              ></Calendar>
              <input
                type="time"
                class="inputStyle readonly maxWidth140px"
                v-model="timePart"
                disabled
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">
              현장설명장소 <span class="star">*</span>
            </div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.spotArea"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">
              낙찰자결정방법 <span class="star">*</span>
            </div>
            <div class="width100">
              <select
                name=""
                class="selectStyle maxWidth200px"
                v-model="dataFromList.result.succDeciMethCode"
              >
                <option value="1">최저가</option>
                <option value="2">최고가</option>
                <option value="3">내부적격심사</option>
                <option value="4">최고가&내부적격심사</option>
                <option value="5">최저가&내부적격심사</option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="flex align-items-center width100">
              <div
                class="overflow-y-scroll boxStSm width100"
                style="display: inline"
              >
                <div v-for="(val, idx) in dataFromList.custContent" :key="idx">
                  <div v-if="val.custName !== null">
                    <a>{{ val.custName }}</a>
                    <span v-if="idx !== dataFromList.custContent.length - 1"
                      >,
                    </span>
                  </div>
                  <div v-else-if="val.custName == null">
                    <a>미등록업체</a>
                    <span v-if="idx !== dataFromList.custContent.length - 1"
                      >,
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">금액기준</div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.amtBasis"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">결제조건</div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.payCond"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">예산금액</div>
            <div class="flex align-items-center width100">
              <input
                type="number"
                name=""
                id=""
                class="inputStyle maxWidth200px"
                placeholder=""
                @input="formatInput"
                v-model="dataFromList.result.bdAmt"
              />
              <div class="ml10">원</div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰담당자</div>
            <div class="width100">{{ dataFromList.result.gongoId }}</div>
          </div>
        </div>

        <h3
          class="h3Tit mt50"
          v-if="dataFromList.result.interrelatedCustCode === '02'"
        >
          입찰분류
        </h3>
        <div
          class="boxSt mt20"
          v-if="dataFromList.result.interrelatedCustCode === '02'"
        >
          <div class="flex align-items-center">
            <div class="formTit flex-shrink0 width170px">분류군</div>
            <div class="flex align-items-center width100">
              <select
                name=""
                class="selectStyle"
                v-model="dataFromList.result.matDept"
              >
                <option value="null">사업부</option>
                <option
                  v-for="dept in dataFromList.lotteDeptList"
                  :value="dept.value"
                >
                  {{ dept.label }}
                </option>
              </select>
              <select
                name=""
                class="selectStyle"
                style="margin: 0 10px"
                v-model="dataFromList.result.matProc"
              >
                <option value="null">공정</option>
                <option
                  v-for="proc in dataFromList.lotteProcList"
                  :value="proc.value"
                >
                  {{ proc.label }}
                </option>
              </select>
              <select
                name=""
                class="selectStyle"
                v-model="dataFromList.result.matCls"
              >
                <option value="null">분류</option>
                <option
                  v-for="cls in dataFromList.lotteClsList"
                  :value="cls.value"
                >
                  {{ cls.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">공장동</div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.matFactory"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">라인</div>
              <div class="width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.matFactoryLine"
                />
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">호기</div>
              <div class="width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.matFactoryCnt"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 class="h3Tit mt50">입찰공고 추가등록 사항</h3>
        <div class="boxSt mt20">
          <div class="flex align-items-center">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">
                제출시작일시 <span class="star">*</span>
              </div>
              <div class="flex align-items-center width100">
                <Calendar
                  @update-date="fnUpdateStartDate"
                  calendarId="startDate"
                  classProps="datepicker readonly inputStyle"
                  :initDate="datePart1"
                  disabled
                ></Calendar>
                <input
                  type="time"
                  class="readonly inputStyle ml10"
                  v-model="timePart1"
                  disabled
                />
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">
                제출마감일시 <span class="star">*</span>
              </div>
              <div class="flex align-items-center width100">
                <Calendar
                  @update-date="fnUpdateCloseDate"
                  calendarId="closeDate"
                  classProps="datepicker readonly inputStyle"
                  :initDate="datePart2"
                  disabled
                ></Calendar>
                <input
                  type="time"
                  class="readonly inputStyle ml10"
                  v-model="timePart2"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">개찰자</div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.estOpener"
                  disabled
                />
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입찰공고자</div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.gongoId"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">낙찰자</div>
              <div class="flex align-items-center width270px">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.estBidder"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">입회자1</div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.openAtt1"
                  disabled
                />
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입회자2</div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.openAtt2"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">내역방식</div>
              <div class="width100">
                <input
                  type="radio"
                  name="bm2"
                  :value="dataFromList.result.insModeCode"
                  id="bm2_1"
                  class="radioStyle"
                  checked=""
                /><label for="bm2_1">{{
                  this.dataFromList.result.insMode
                }}</label>
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">납품조건</div>
              <div class="width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="dataFromList.result.supplyCond"
                />
              </div>
            </div>
          </div>
          <div class="flex mt10" v-if="dataFromList.result.insModeCode === '1'">
            <div class="formTit flex-shrink0 width170px">
              세부내역 <span class="star">*</span>
              <!-- 툴팁 -->
              <i class="fas fa-question-circle toolTipSt ml5">
                <div class="toolTipText" style="width: 370px">
                  <ul class="dList">
                    <li>
                      <div>
                        내역방식이 파일등록 일 경우 필수로 파일을 등록해야
                        합니다.
                      </div>
                    </li>
                    <li>
                      <div>파일이 암호화 되어 있는지 확인해 주십시오</div>
                    </li>
                  </ul>
                </div>
              </i>
              <!-- //툴팁 -->
            </div>
            <div class="width100">
              <!-- 다중파일 업로드 -->
              <div class="upload-boxWrap">
                <div class="upload-box">
                  <input
                    type="file"
                    ref="insFile"
                    id="file-input"
                    @change="changeFile"
                  />
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                      최대 10MB (등록 파일 개수 최대 1개)
                    </div>
                  </div>
                </div>
                <div class="uploadPreview" id="preview"></div>
              </div>
              <!-- //다중파일 업로드 -->
            </div>
          </div>
          <div class="flex mt10">
            <div class="formTit flex-shrink0 width170px">
              첨부파일(대내용) <span class="star">*</span>
              <!-- 툴팁 -->
              <i class="fas fa-question-circle toolTipSt ml5">
                <div class="toolTipText" style="width: 320px">
                  <ul class="dList">
                    <li>
                      <div>
                        그룹사 내부 입찰관계자가 확인하는 첨부파일 입니다.
                      </div>
                    </li>
                    <li>
                      <div>파일이 암호화 되어 있는지 확인해 주십시오</div>
                    </li>
                  </ul>
                </div>
              </i>
              <!-- //툴팁 -->
            </div>
            <div class="width100">
              <!-- 다중파일 업로드 -->
              <div class="upload-boxWrap">
                <div class="upload-box">
                  <input
                    type="file"
                    ref="innerFile"
                    id="file-input2"
                    @change="changeFile"
                  />
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                      최대 10MB (등록 파일 개수 최대 1개)
                    </div>
                  </div>
                </div>
                <div class="uploadPreview" id="preview2"></div>
              </div>
              <!-- //다중파일 업로드 -->
            </div>
          </div>
          <div class="flex mt10">
            <div class="formTit flex-shrink0 width170px">
              첨부파일(대외용) <span class="star">*</span>
              <!-- 툴팁 -->
              <i class="fas fa-question-circle toolTipSt ml5">
                <div class="toolTipText" style="width: 300px">
                  <ul class="dList">
                    <li>
                      <div>입찰 참가업체들이 확인하는 첨부파일 입니다.</div>
                    </li>
                    <li>
                      <div>파일이 암호화 되어 있는지 확인해 주십시오</div>
                    </li>
                  </ul>
                </div>
              </i>
              <!-- //툴팁 -->
            </div>
            <div class="width100">
              <!-- 다중파일 업로드 -->
              <div class="upload-boxWrap">
                <div class="upload-box">
                  <input
                    type="file"
                    ref="outerFile"
                    id="file-input3"
                    @change="changeFile"
                  />
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                      최대 10MB (등록 파일 개수 최대 1개)
                    </div>
                  </div>
                </div>
                <div class="uploadPreview" id="preview3"></div>
              </div>
              <!-- //다중파일 업로드 -->
            </div>
          </div>
          <div class="flex mt10" v-if="dataFromList.result.insModeCode === '2'">
            <div class="formTit flex-shrink0 width170px">
              세부내역 <span class="star">*</span
              ><a
                class="btnStyle btnSecondary ml10"
                title="추가"
                @click="addEmptyRow"
                >추가</a
              >
            </div>
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
                    <th>단위</th>
                    <th>실행단가</th>
                    <th>합계</th>
                    <th class="end">삭제</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, idx) in dataFromList.tableContent">
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        v-model="val.name"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        v-model="val.ssize"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        v-model="val.orderQty"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        v-model="val.unitcode"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm text-right"
                        placeholder=""
                        v-model="val.orderUc"
                      />
                    </td>
                    <td class="text-right">{{ val.orderQty * val.orderUc }}</td>
                    <td class="text-right end">
                      <a
                        class="btnStyle btnSecondary btnSm"
                        title="삭제"
                        @click="deleteRow(idx)"
                        >삭제</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="text-right mt10">
                <strong>총합계 : {{ totalSum | numberWithCommas }}</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="text-center mt50">
          <a class="btnStyle btnOutline" title="목록" @click="movetolist"
            >목록</a
          >
          <a
            data-toggle="modal"
            data-target="#reBidding"
            class="btnStyle btnPrimary"
            title="재입찰"
            >재입찰</a
          >
        </div>
      </div>
    </div>
    <!-- //contents -->

    <!-- 재입찰 -->
    <div
      class="modal fade modalStyle"
      id="reBidding"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 550px">
        <div class="modal-content">
          <div class="modal-body">
            <a class="ModalClose" data-dismiss="modal" title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <h2 class="modalTitle">입찰계획 삭제</h2>
            <div class="modalTopBox">
              <ul>
                <li>
                  <div>
                    재입찰 처리 합니다. 재입찰 시 선택한 참가업체에게 재입찰
                    메일이 발송됩니다.<br />재입찰 하시겠습니까?
                  </div>
                </li>
              </ul>
            </div>
            <textarea
              class="textareaStyle height150px mt20"
              onkeydown="resize(this)"
              onkeyup="resize(this)"
              placeholder="재입찰 사유 필수 입력 (200자 이내)"
              v-model="this.dataFromList.result.whyA3"
            ></textarea>
            <div class="modalFooter">
              <a class="modalBtnClose" data-dismiss="modal" title="취소"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                data-target="#reBidding2"
                title="재입찰"
                @click="rebid"
                >재입찰</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //재입찰 -->

    <!-- 재입찰 후 -->
    <div
      class="modal fade modalStyle"
      id="reBidding2"
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
            <div class="alertText2">재입찰 처리 하였습니다.</div>
            <div class="modalFooter">
              <a class="modalBtnClose" data-dismiss="modal" title="닫기"
                >닫기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //재입찰 후 -->
  </div>
  <!-- //본문 -->
</template>
  <script>
import fileInput from "../../../../public/js/fileInput.js";
import cmmn from "../../../../public/js/common.js";
import ItemPop from "@/components/ItemPop.vue";
import CustPop from "@/modules/company/components/CustPop.vue";
import CustUserPop from "@/modules/company/components/CustUserPop.vue";
import BidOpenUserPop from "@/modules/company/components/BidOpenUserPop.vue";
import BidUserPop from "@/modules/company/components/BidUserPop.vue";
import BiddingUserPop from "@/modules/company/components/BiddingUserPop.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: "rebid",
  components: {
    ItemPop,
    CustPop,
    CustUserPop,
    BidOpenUserPop,
    BidUserPop,
    BiddingUserPop,
    Calendar,
  },
  data() {
    return {
      detail: {},
      dataFromList: {},
      originCustData: null,
      originFileData: null,
      originTableData: null,
      datePart: "",
      timePart: "",
      datePart1: "",
      timePart1: "",
      datePart2: "",
      timePart2: "",
      selectedFile: null, //업로드한 파일
      filek: [],
      file0: [],
      file1: [],
    };
  },
  computed: {
    totalSum() {
      // 테이블 내 모든 행의 합계 계산
      return this.dataFromList.tableContent.reduce(
        (sum, val) => sum + (val.orderQty * val.orderUc || 0),
        0
      );
    },
  },

  filters: {
    numberWithCommas(value) {
      // 숫자에 쉼표 추가하는 필터 정의
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  methods: {
    assignDataFromList() {
      this.datePart = this.dataFromList.result.spotDate.substring(0, 10);
      this.timePart = this.dataFromList.result.spotDate.substring(11, 16);

      this.datePart1 = this.dataFromList.result.estStartDate.substring(0, 10);
      this.timePart1 = this.dataFromList.result.estStartDate.substring(11, 16);

      this.datePart2 = this.dataFromList.result.estCloseDate.substring(0, 10);
      this.timePart2 = this.dataFromList.result.estCloseDate.substring(11, 16);
    },
    removeCust(index) {
      this.dataFromList.custContent.splice(index, 1);
    },

    formatInput(event) {
      const value = event.target.value.replace(/\D/g, ""); // 숫자만 추출
      event.target.value = this.formatNumber(value);
    },
    formatNumber(value) {
      const formattedValue = value
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return formattedValue === "" ? "" : formattedValue; // 값이 비어있을 경우 처리
    },

    addEmptyRow() {
      const seq = this.dataFromList.tableContent.length + 1;

      this.dataFromList.tableContent.push({
        biNo: this.dataFromList.result.biNo,
        seq: seq,
        name: "",
        ssize: "",
        orderQty: "",
        unitcode: "",
        orderUc: "",
        type: "U",
      });
      this.$forceUpdate();
    },
    deleteRow(index) {
      this.dataFromList.tableContent.splice(index, 1);
    },
    fileSetting() {
      var preview1 = document.querySelector("#preview");
      var preview2 = document.querySelector("#preview2");
      var preview3 = document.querySelector("#preview3");

      this.dataFromList.fileContent.forEach((fileData) => {
        var fileName = fileData.fileNm;
        var fileFlagKo = fileData.fileFlagKo;

        if (fileName) {
          var preview;

          if (fileFlagKo === "세부내역") {
            preview = preview1;
            this.filek.push({
              selectedFile: fileData.fileNm,
            });
          } else if (fileFlagKo === "대내용") {
            preview = preview2;
            this.file0.push({
              selectedFile: fileData.fileNm,
            });
          } else if (fileFlagKo === "대외용") {
            preview = preview3;
            this.file1.push({
              selectedFile: fileData.fileNm,
            });
          }

          preview.innerHTML += `
        <p id=${fileFlagKo}>
          ${fileName}
          <button data-index=${fileFlagKo} class='file-remove'>삭제</button>
        </p>`;

          // 삭제 버튼에 클릭 이벤트 처리기 추가
          var removeButton = document.querySelector(
            `[data-index='${fileFlagKo}']`
          );
          removeButton.addEventListener("click", () => {
            // 클릭된 버튼의 부모 요소인 p 태그를 찾아서 제거
            removeButton.parentNode.remove();
            // 데이터에서 해당 파일 삭제
            this.dataFromList.fileContent =
              this.dataFromList.fileContent.filter(
                (file) => file.fileNm !== fileName
              );
          });
        }
      });
      this.$forceUpdate();
    },
    chageFile(event) {
      //바뀐 파일 selectedFile에 담기

      this.selectedFile = event.target.files[0];
      this.fileCnt = event.target.files.length;

      //파일 변경시 기존 처음에 첨부되었던 파일정보 사라짐
      this.dataFromList.fileContent.fileNm = null;
      this.dataFromList.fileContent.filePath = null;
    },
    validationCheck() {
      if (
        !this.dataFromList.result.biName ||
        this.dataFromList.result.biName === ""
      ) {
        alert("입찰명을 입력해주세요.");
        return false;
      }

      this.dataFromList.result.spotDate = this.datePart + " " + this.timePart;
      this.dataFromList.result.estStartDate =
        this.datePart1 + " " + this.timePart1;
      this.dataFromList.result.estCloseDate =
        this.datePart2 + " " + this.timePart2;
      if (
        !this.dataFromList.result.spotArea ||
        this.dataFromList.result.spotArea === ""
      ) {
        alert("현장설명장소를 입력해주세요.");
        return false;
      }
      if (
        !this.dataFromList.result.succDeciMethCode ||
        this.dataFromList.result.succDeciMethCode === ""
      ) {
        alert("낙찰자 결정방법을 선택해주세요.");
        return false;
      }
      if (this.dataFromList.result.insModeCode === "2") {
        if (this.dataFromList.tableContent.length === 0) {
          alert("세부내역을 작성해주세요.");
          return false;
        } else {
          this.dataFromList.tableContents =
            this.dataFromList.tableContent.filter((item) => item.name !== null);
        }
      }

      if (this.dataFromList.result.insModeCode === "1") {
        if (this.filek.length === 0) {
          alert("세부내역파일을 업로드 해주세요.");
          return false;
        }
      }

      if (this.file0.length === 0) {
        alert("대내용 첨부파일을 업로드 해주세요.");
        console.log(this.file1);
        return false;
      }

      if (this.file1.length === 0) {
        alert("대외용 첨부파일을 업로드 해주세요.");
        return false;
      }

      if (!this.dataFromList.result.whyA3) {
        alert("재입찰 사유를 작성해주세요.");
        return false;
      }

      return true;
    },
    rebid() {
      if (!this.validationCheck()) {
        $("#reBidding").modal("hide");
        console.log("false");
        return false;
      }
      console.log(this.dataFromList.result);
      this.dataFromList.detail.type = "rebid";
      this.dataFromList.detail.interNm = this.result.interrelatedNm;
      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bidstatus/rebid", this.dataFromList.result) 
        .then((response) => {
          if (this.dataFromList.result.biModeCode === "A") {
            this.$http.post(
              "/api/v1/bidstatus/rebidCust",
              this.dataFromList.custContent
            );
          }
          if (this.dataFromList.result.insModeCode === "2") {
            this.$http.post(
              "/api/v1/bid/updateBidItem",
              this.dataFromList.tableContent
            );
          }
          this.sendFileContent();
          if (response.data.code == "OK") {
            this.$store.commit("searchParams", {});
          } else {
            this.$swal({
              type: "warning",
              text: "재입찰 중 오류가 발생했습니다.",
            });
          }
        })
        .finally(() => {
          $("#reBidding").modal("hide");
          $("#reBidding2").modal("hide");
          this.$store.commit("searchParams", {});
          this.$router.push({ name: "bidStatus" });
          this.$store.commit("finish");
        });
    },
    movetolist() {
      this.$router.push({ name: "openDetail" });
    },

    sendFileContent() {
      this.dataFromList.fileContent.forEach((fileData) => {
        const formData = new FormData();

        // 파일과 데이터를 FormData에 추가
        formData.append("file", fileData.selectedFile); // 파일
        formData.append(
          "data",
          JSON.stringify({
            // 데이터
            biNo: fileData.biNo,
            fileFlag: fileData.fileFlag,
            fCustCode: fileData.fCustCode,
          })
        );

        this.$http.post("/api/v1/bid/updateBidFile", formData);
      });
    },

    changeFile(event) {
      // 파일 사이즈 체크
      // if(this.checkFileSize()){
      // 	return false;
      // }

      console.log(event.target.files[0]);

      let fileFlag = "";
      switch (event.target.id) {
        case "file-input":
          fileFlag = "K";
          break;
        case "file-input2":
          fileFlag = "0";
          break;
        case "file-input3":
          fileFlag = "1";
          break;
      }

      // 동일한 fileFlag를 가진 기존 파일 정보가 있는 경우 삭제
      this.dataFromList.fileContent = this.dataFromList.fileContent.filter(
        (fileData) => fileData.fileFlag !== fileFlag
      );

      // 새로운 파일 정보 추가
      if (event.target.id === "file-input") {
        this.dataFromList.fileContent.push({
          biNo: this.dataFromList.result.biNo,
          fileFlag: "K",
          fCustCode: "0",
          selectedFile: event.target.files[0],
        });
        this.filek.push({
          selectedFile: event.target.files[0],
        });
      }
      if (event.target.id === "file-input2") {
        this.dataFromList.fileContent.push({
          biNo: this.dataFromList.result.biNo,
          fileFlag: "0",
          fCustCode: "0",
          selectedFile: event.target.files[0],
        });
        this.file0.push({
          selectedFile: event.target.files[0],
        });
      }
      if (event.target.id === "file-input3") {
        this.dataFromList.fileContent.push({
          biNo: this.dataFromList.result.biNo,
          fileFlag: "1",
          fCustCode: "0",
          selectedFile: event.target.files[0],
        });
        this.file1.push({
          selectedFile: event.target.files[0],
        });
      }

      console.log(this.dataFromList.fileContent);
    },
    fnUpdateSpotDate(val) {
      this.datePart = val;
    },
    fnUpdateStartDate(val) {
      this.datePart1 = val;
    },
    fnUpdateCloseDate(val) {
      this.datePart2 = val;
    },
  },
  beforeMount() {
    this.dataFromList = this.$store.state.bidUpdateData;
  },
  mounted() {
    fileInput.applyFile();
    cmmn.applyCal();

    this.assignDataFromList();

    console.log(this.dataFromList);
    this.fileSetting();
  },
};
</script>