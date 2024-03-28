<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>입찰계획 등록</li>
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
            <div class="width100">
              <a
              @click.prevent="$refs.bidPast.initModal()"
                data-toggle="modal"
                data-target="#bidPast"
                class="btnStyle btnOutlineBlue"
                title="과거입찰 가져오기"
                >과거입찰 가져오기</a
              >
            </div>
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
                v-model="bidContent.biName"
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
                v-model="bidContent.itemName"
                @input="bidContent.itemCode = $event.target.value"
                disabled
              />
              <a
                class="btnStyle btnSecondary ml10"
                title="조회"
                @click="
                  itemPop = 'custType1';
                  $refs.itemPop.initModal();
                "
                data-toggle="modal"
                data-target="#itemPop"
                >조회</a
              >
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
                value="A"
                id="bm1_1"
                class="radioStyle"
                checked="true"
                v-model="bidContent.biModeCode"
                data-toggle="modal"
                v-bind:data-target="
                  bidContent.biModeCode === 'B' ? '#bmGeneral' : ''
                "
              /><label for="bm1_1">지명경쟁입찰</label>
              <input
                type="radio"
                name="bm1"
                value="B"
                id="bm1_2"
                class="radioStyle"
                v-model="bidContent.biModeCode"
                data-toggle="modal"
                v-bind:data-target="
                  bidContent.biModeCode === 'A' ? '#bmGeneral' : ''
                "
              /><label for="bm1_2">일반경쟁입찰</label>
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
                v-model="bidContent.bidJoinSpec"
                maxlength="100"
              />
            </div>
          </div>
          <div class="flex mt20">
            <div class="formTit flex-shrink0 width170px">특수조건</div>
            <div class="width100">
              <textarea
                class="textareaStyle boxOverflowY"
                onkeydown="resize(this)"
                onkeyup="resize(this)"
                placeholder=""
                v-model="bidContent.specialCond"
                @input="limitText"
              ></textarea>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              현장설명일시 <span class="star">*</span>
            </div>
            <div class="flex align-items-center width100">
              <Calendar @update-date="fnUpdateSpotDate" calendarId="spotDate" classProps="datepicker inputStyle maxWidth140px" :initDate="datePart"></Calendar>
              <input
                type="time"
                class="inputStyle maxWidth140px"
                v-model="timePart"
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
                v-model="bidContent.spotArea"
                maxlength="80"
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
                v-model="bidContent.succDeciMethCode"
              >
                <option value="1">최저가</option>
                <option value="2">최고가</option>
                <option value="3">내부적격심사</option>
                <option value="4">최고가&내부적격심사</option>
                <option value="5">최저가&내부적격심사</option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center mt20" v-if="bidContent.biModeCode==='A'">
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="flex align-items-center width100">
              <div class="overflow-y-scroll boxStSm width100" style="display: inline">
                <a v-if="custContent.length ===0"
                    >선택된 참가업체 없음</a>
                <div  v-for="(val, idx) in custContent">   
                  
                <a
                    @click.prevent="$refs.custUserPop.initModal(val.custCode)"
                    data-toggle="modal"
                    data-target="#custUserPop"
                    class="textUnderline"
                    >{{ val.custName }}</a
                  ><i class="fa-regular fa-xmark textHighlight" @click="removeCust(idx)"></i></a>
                  <span v-if="idx !== custContent.length - 1">, </span>
                </div>
                </div>
              <a
                data-toggle="modal"
                data-target="#custPop"
                class="btnStyle btnSecondary ml10"
                title="업체선택"
                @click="$refs.custPop.initModal();"
                >업체선택</a
              >
            </div>
          </div>
          <div class="flex align-items-center mt20" v-if="bidContent.biModeCode==='B'">
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="flex align-items-center width100">
              <div
                class="overflow-y-scroll boxStSm width100"
                style="height: 50px"
              >
                <a>가입회원사 전체</a>
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              금액기준 <span class="star">*</span>
            </div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="bidContent.amtBasis"
                maxlength="100"
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
                v-model="bidContent.payCond"
                maxlength="100"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">예산금액</div>
            <div class="flex align-items-center width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle maxWidth200px"
                placeholder=""
                v-model="bdAmt"
              />
              <div class="ml10">원</div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">입찰담당자</div>
            <div class="width100">{{ bidContent.createUserName }}</div>
          </div>
        </div>

        <h3 class="h3Tit mt50" v-if="bidContent.interrelatedCustCode==='02'">입찰분류</h3>
        <div class="boxSt mt20" v-if="bidContent.interrelatedCustCode==='02'">
          <div class="flex align-items-center">
            <div class="formTit flex-shrink0 width170px">
              분류군 <span class="star">*</span>
            </div>
            <div class="flex align-items-center width100">
              <select name="" class="selectStyle" v-model="bidContent.matDept">
                <option value=null>사업부</option>
                <option v-for="dept in lotteDeptList" :value="dept.value">{{ dept.label }}</option>
              </select>
              <select name="" class="selectStyle" style="margin: 0 10px" v-model="bidContent.matProc">
                <option value=null>공정</option>
                <option v-for="proc in lotteProcList" :value="proc.value">{{ proc.label }}</option>
              </select>
              <select name="" class="selectStyle" v-model="bidContent.matCls">
                <option value=null>분류</option>
                <option v-for="cls in lotteClsList" :value="cls.value">{{ cls.label }}</option>
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
                v-model="bidContent.matFactory"
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
                  v-model="bidContent.matFactoryLine"
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
                  v-model="bidContent.matFactoryCnt"
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
                <Calendar @update-date="fnUpdateStartDate" calendarId="startDate" classProps="datepicker inputStyle" :initDate="datePart1"></Calendar>
                <input type="time" class="inputStyle ml10" v-model="timePart1"/>
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">
                제출마감일시 <span class="star">*</span>
              </div>
              <div class="flex align-items-center width100">
                <Calendar @update-date="fnUpdateCloseDate" calendarId="closeDate" classProps="datepicker inputStyle" :initDate="datePart2"></Calendar>
                <input type="time" class="inputStyle ml10" v-model="timePart2"/>
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">개찰자 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="bidContent.estOpener"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#bidOpenUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidOpenUserPop.initModal(bidContent.interrelatedCustCode);"
                  >선택</a
                >
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">입찰공고자 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="bidContent.gongoId"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#bidUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidUserPop.initModal('gongoId', bidContent.interrelatedCustCode);"
                  >선택</a
                >
              </div>
            </div>
          </div>
           <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">낙찰자 <span class="star">*</span></div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="bidContent.estBidder"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#biddingUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.biddingUserPop.initModal(bidContent.interrelatedCustCode);"
                  >선택</a
                >
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px" style="display: none;"></div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  disabled
                  style="display: none;"
                />
                <a
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  style="display: none;"
                  >선택</a
                >
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
                  v-model="bidContent.openAtt1"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#bidUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidUserPop.initModal('openAtt1', bidContent.interrelatedCustCode);"
                  >선택</a
                >
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
                  v-model="bidContent.openAtt2"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#bidUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidUserPop.initModal('openAtt2', bidContent.interrelatedCustCode);"
                  >선택</a
                >
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
                  value="1"
                  id="bm2_1"
                  class="radioStyle"
                  checked=""
                  v-model="bidContent.insModeCode"
                  data-toggle="modal"
                  v-bind:data-target="bidContent.insModeCode === '2' ? '#bmFile' : ''"
                /><label for="bm2_1">파일등록</label>
                <input
                  type="radio"
                  name="bm2"
                  value="2"
                  id="bm2_2"
                  class="radioStyle"
                  v-model="bidContent.insModeCode"
                  data-toggle="modal"
                  v-bind:data-target="bidContent.insModeCode === '1' ? '#bmFile' : ''"
                  @click="initDetailFile"
                /><label for="bm2_2">내역직접등록</label>
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">납품조건 <span class="star">*</span></div>
              <div class="width100">
                <input
                  type="text"
                  name=""
                  id=""
                  class="inputStyle"
                  placeholder=""
                  v-model="bidContent.supplyCond"
                />
              </div>
            </div>
          </div>
          <div class="flex mt10" v-show="bidContent.insModeCode==='2'">
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
                  <tr v-for="(val, idx) in tableContent">
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        v-model="val.name"
                        maxlength="100"
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
                        maxlength="25"
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
                        maxlength="12"
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
                        maxlength="25"
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
                        maxlength="12"
                      />
                    </td>
                    <td class="text-right">{{ val.orderQty*val.orderUc }}</td>
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
          <div class="flex mt10" v-show="bidContent.insModeCode==='1'">
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
                  <input type="file" ref="insFile" id="file-input" @change="changeFile"/>
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일
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
              첨부파일(대내용)
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
                  <input type="file" ref="innerFile" id="file-input2" @change="changeFile"/>
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
              첨부파일(대외용)
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
                  <input type="file" ref="outerFile" id="file-input3" @change="changeFile"/>
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

        </div>

        <div class="text-center mt50">
          <a
            class="btnStyle btnOutline"
            title="목록"
            @click="movetolist"
            >목록 </a
          >
          <a
            data-toggle="modal"
            @click="openConfirm"
            class="btnStyle btnPrimary"
            title="저장"
            >저장</a
          >
        </div>
      </div>
    </div>
    <!-- //contents -->

    <!-- 일반경쟁입찰 -->
    <div
      class="modal fade modalStyle"
      id="bmGeneral"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 420px">
        <div class="modal-content">
          <div class="modal-body">
            <a class="ModalClose" data-dismiss="modal" title="닫기"
              ><i class="fa-solid fa-xmark" @click="selectBid('named')"></i
            ></a>
            <div class="alertText2">
              일반경쟁입찰을 선택하면 입찰은 등록되어 있는 모든 협력업체를
              대상으로 하고 참가업체가 선택되어 있다면 초기화 됩니다.<br /><br />일반경쟁입찰을
              선택 하시겠습니까?
            </div>
            <div class="modalFooter">
              <a
                class="modalBtnClose"
                data-dismiss="modal"
                title="취소"
                @click="selectBid('cancel')"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                title="선택"
                @click="selectBid('ok')"
                >선택</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //일반경쟁입찰 -->
        <!-- 파일등록 -->
    <div
      class="modal fade modalStyle"
      id="bmFile"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      
    >
      <div class="modal-dialog" style="width: 100%; max-width: 420px" >
        <div class="modal-content" >
          <div class="modal-body">
            <a
              class="ModalClose"
              data-dismiss="modal"
              title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <div class="alertText2">
              내역방식을 변경하면 이전에 선택한
              세부내역이 초기화됩니다.
              변경 하시겠습니까?
            </div>
            <div class="modalFooter">
              <a
                class="modalBtnClose"
                data-dismiss="modal"
                title="취소"
                @click="selectIns('cancel')"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                title="선택"
                @click="selectIns('ok')"
                >선택</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //파일등록 -->


        		<!-- 입찰계획 저장 -->
		<div class="modal fade modalStyle" id="save" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="modal-dialog" style="width:100%; max-width:420px">
				<div class="modal-content">
					<div class="modal-body">
						<a  class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
						<div class="alertText2">작성하신 내용으로 입찰계획을<br>등록합니다.<br>등록 하시겠습니까?</div>
						<div class="modalFooter">
							<a  class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a  @click="save" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //입찰계획 저장 -->

    <!-- 과거입찰내역 -->
    <bid-past ref="bidPast" @callbackFunc="callbackPastBid" />
    <!-- 품목 조회 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem" />
    <!-- //업체 조회 -->
    <cust-pop ref="custPop" @callbackFunc="callbackCust" />
    <!-- 협력사 사용자 조회-->
    <cust-user-pop ref="custUserPop" />
    <!-- 개찰자 조회-->
    <bid-open-user-pop ref="bidOpenUserPop" @callbackFunc="callbackOpenUser"/>
    <!-- 낙찰자 조회-->
    <bidding-user-pop ref="biddingUserPop" @callbackFunc="callbackBiddingUser"/>
    <!-- 입찰관련 일반사용자 조회-->
    <bid-user-pop ref="bidUserPop" @callbackFunc="callbackUser"/>
  </div>
  <!-- //본문 -->
</template>
<style>
a + i {
  margin-left: 10px;
}
</style>
<script>
import BidPast from "../components/BidPast.vue";
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
  name: "bidProgressInsert",
  components: {
    BidPast,
    ItemPop,
    CustPop,
    CustUserPop,
    BidOpenUserPop,
    BidUserPop,
    BiddingUserPop,
    Calendar,
  },
  watch: {
    bdAmt(newValue) {
      // 숫자 이외의 문자 제거 (숫자, 마이너스 기호만 허용)
      this.bdAmt = newValue.toString().replace(/[^\d-]/g, '');
      
      // 천 단위로 콤마 추가
      this.bdAmt = this.bdAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  data() {
    return {
      result: {},
      bidContent: {
        biNo: "",
        biModeCode: "A",
        insModeCode: "1",
        succDeciMethCode: "1",
        createUserName: this.$store.state.loginInfo.userName,
        createUser: this.$store.state.loginInfo.userId,
        interrelatedCustCode: this.$store.state.loginInfo.custCode,
        matDept: null,
        matProc: null,
        matCls: null,
        amtBasis: 'VAT 별도'
      },

      bdAmt: '',

      custContent: [],
      fileContent: [],
      tableContent: [],
      datePart: "",
      timePart: "",
      datePart1: "",
      timePart1: "",
      datePart2: "",
      timePart2: "",
      userInfo: {
        custCode: "",
        userName: "",
        userId: "",
      },
      filek: [],

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
  computed: {
    totalSum() {
      // 테이블 내 모든 행의 합계 계산
      return this.tableContent.reduce(
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
    callbackItem(data) {
      this.bidContent.itemCode = data.itemCode;
      this.bidContent.itemName = data.itemName;
      this.$forceUpdate();
    },

    callbackCust(data) {
      const existingCust = this.custContent.find(
        (item) => item.custCode === data.custCode
      );

      if (!existingCust) {
        this.custContent.push({
          biNo: this.bidContent.biNo,
          custCode: data.custCode,
          custName: data.custName,
        });
        this.$forceUpdate();
      } else {
        this.$swal({
          type: "warning",
          text: "이미 등록한 업체입니다.",
        });
      }
    },
    callbackOpenUser(data) {
      this.bidContent.estOpener = data.userName;
      this.bidContent.estOpenerCode = data.userId;
      this.$forceUpdate();
    },
    callbackBiddingUser(data) {
      this.bidContent.estBidder = data.userName;
      this.bidContent.estBidderCode = data.userId;
      this.$forceUpdate();
    },
    callbackUser({ data, buttonId }) {

      switch (buttonId) {
        case "gongoId":
          this.bidContent.gongoId = data.userName;
          this.bidContent.gongoIdCode = data.userId;
          break;
        case "openAtt1":
          this.bidContent.openAtt1 = data.userName;
          this.bidContent.openAtt1Code = data.userId;
          break;
        case "openAtt2":
          this.bidContent.openAtt2 = data.userName;
          this.bidContent.openAtt2Code = data.userId;
          break;
      }

      this.$forceUpdate();
    },

    callbackPastBid(data) {//과거입찰 가져오기에서 선택시
      console.log('callbackPastBid' , data);

      this.result = data[0][0];
      this.tableContent = data[1];//입찰정보
      //this.fileContent = data[2];//파일정보
      this.custContent = data[3];//지명경쟁인 경우 지명된 협력사 정보

      this.bidContent.biName = this.result.biName;
      this.bidContent.itemCode = this.result.itemCode;
      this.bidContent.itemName = this.result.itemName;
      this.bidContent.biModeCode = this.result.biModeCode;//입찰방식
      if (!this.result.biModeCode) this.bidContent.biModeCode = "A";//"A" - 지명경쟁, "B" - 일반경쟁

      this.bidContent.specialCond = this.result.specialCond;
      this.datePart = this.result.spotDate.substring(0, 10);
      this.timePart = this.result.spotDate.substring(11, 16);
      this.bidContent.spotArea = this.result.spotArea;
      this.bidContent.succDeciMethCode = this.result.succDeciMethCode;
      this.bidContent.amtBasis = this.result.amtBasis;
      this.bidContent.payCond = this.result.payCond;
      this.bdAmt = this.result.bdAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      this.datePart1 = this.result.estStartDate.substring(0, 10);
      this.timePart1 = this.result.estStartDate.substring(11, 16);
      this.datePart2 = this.result.estCloseDate.substring(0, 10);
      this.timePart2 = this.result.estCloseDate.substring(11, 16);
      this.bidContent.estOpener = this.result.estOpener;
      this.bidContent.estOpenerCode = this.result.estOpenerCode;
      this.bidContent.gongoId = this.result.gongoId;
      this.bidContent.gongoIdCode = this.result.gongoIdCode;
      this.bidContent.openAtt1 = this.result.openAtt1;
      this.bidContent.openAtt1Code = this.result.openAtt1Code;
      this.bidContent.openAtt2 = this.result.openAtt2;
      this.bidContent.openAtt2Code = this.result.openAtt2Code;
      this.bidContent.insModeCode = this.result.insModeCode;//내역방식
      if (!this.result.insModeCode) this.bidContent.insModeCode = "1";// "1" - 파일등록, "2" - 내역집적등록

      if (this.result.interrelatedCustCode === "02") {
        this.bidContent.matDept = this.result.matDept;
        this.bidContent.matProc = this.result.matProc;
        this.bidContent.matCls = this.result.matCls;
        this.bidContent.matFactory = this.result.matFactory;
        this.bidContent.matFactoryLine = this.result.matFactoryLine;
        this.bidContent.matFactoryCnt = this.result.matFactoryCnt;
      }
      this.$forceUpdate();
      $("#bidPast").modal("hide");
    },

    selectBid(mode) {//입찰방식 확인창 선택시

      if (mode === "cancel") {
        if (this.bidContent.biModeCode === "A")
          this.bidContent.biModeCode = "B";
        else this.bidContent.biModeCode = "A";
      } else if (mode === "ok") {
        if (this.bidContent.biModeCode === "A") {
          this.bidContent.biModeCode = "A";
        } else {
          this.custContent = [];
          this.$forceUpdate();
        }
      }
      this.$forceUpdate();
      $("#bmGeneral").modal("hide");
    },

    selectIns(mode) {//내역방식 confirm 창 선택시
      if (mode === "cancel") {
        if (this.bidContent.insModeCode === "1")
          this.bidContent.insModeCode = "2";
        else this.bidContent.insModeCode = "1";
      } else if (mode === "ok") {
        if (this.bidContent.insModeCode === "1") {
          this.bidContent.insModeCode = "1";
          this.tableContent = [];
        } else {
          this.bidContent.insModeCode = "2";
          this.fileContent = this.fileContent.filter(function (item) {
            return item.fileFlag !== "k";
          });
          this.filek = [];
          document.querySelector("#preview").innerHTML = "";
        }
      }
      this.$forceUpdate();
      $("#bmFile").modal("hide");
    },

    removeCust(index) {
      this.custContent.splice(index, 1);
    },
    addEmptyRow() {
      const seq = this.tableContent.length + 1;

      this.tableContent.push({
        biNo: this.bidContent.biNo,
        seq: seq,
        name: "",
        ssize: "",
        orderQty: "",
        unitcode: "",
        orderUc: "",
        type: "I",
      });
      this.$forceUpdate();
    },
    deleteRow(index) {
      this.tableContent.splice(index, 1);
    },

    validationCheck() {
      if (!this.bidContent.biName || this.bidContent.biName === "") {
        alert("입찰명을 입력해주세요.");
        return false;
      }
      if (!this.bidContent.itemCode || this.bidContent.itemCode === "") {
        alert("품목을 선택해주세요.");
        return false;
      }
      if (!this.bidContent || this.bidContent === "") {
        alert("입찰방식을 선택해주세요.");
        return false;
      }
      if (!this.datePart || this.datePart === "") {
        alert("현장설명일시 날짜를 입력해주세요.");
        return false;
      }
      if (!this.timePart || this.timePart === "") {
        alert("현장설명일시 시간을 입력해주세요.");
        return false;
      }
      if (!this.bidContent.spotArea || this.bidContent.spotArea === "") {
        alert("현장설명장소를 입력해주세요.");
        return false;
      }
      if (!this.bidContent.succDeciMethCode || this.bidContent.succDeciMethCode === "") {
        alert("낙찰자 결정방법을 선택해주세요.");
        return false;
      }
      if (!this.bidContent.amtBasis || this.bidContent.amtBasis === "") {
        alert("금액기준을 입력해주세요.");
        return false;
      }
      if (!this.datePart1 || this.datePart1 === "") {
        alert("제출시작일시 날짜를 선택해주세요.");
        return false;
      }
      if (!this.timePart1 || this.timePart1 === "") {
        alert("제출시작일시 시간을 선택해주세요.");
        return false;
      }
      if (!this.datePart2 || this.datePart2 === "") {
        alert("제출마감일시 날짜를 선택해주세요.");
        return false;
      }
      if (!this.timePart2 || this.timePart2 === "") {
        alert("제출마감일시 시간을 선택해주세요.");
        return false;
      }

      var startDateTime = new Date(`${this.datePart1}T${this.timePart1}`);
      var closeDateTime = new Date(`${this.datePart2}T${this.timePart2}`);

      if (startDateTime > closeDateTime) {
        alert("제출시작일시가 제출마감일시보다 큽니다.");
        return false;
      }

      this.bidContent.spotDate = this.datePart + " " + this.timePart;
      this.bidContent.estStartDate = this.datePart1 + " " + this.timePart1;
      this.bidContent.estCloseDate = this.datePart2 + " " + this.timePart2;
  
      if (!this.bidContent.estOpener || this.bidContent.estOpener === "") {
        alert("개찰자를 선택해주세요.");
        return false;
      }

      if (!this.bidContent.gongoId || this.bidContent.gongoId === "") {
        alert("입찰공고자를 선택해주세요.");
        return false;
      }

      if (!this.bidContent.estBidder || this.bidContent.estBidder === "") {
        alert("낙찰자를 선택해주세요.");
        return false;
      }

      if (!this.bidContent.supplyCond || this.bidContent.supplyCond === "") {
        alert("납품조건을 입력해주세요.");
        return false;
      }

      if (this.bidContent.insModeCode === "2") {
        if (this.tableContent.length === 0) {
          alert("세부내역을 작성해주세요.");
          return false;
        } else {
          this.tableContents = this.tableContent.filter(
            (item) => item.name !== null
          );
        }
      }

      var fileTag = document.getElementById('file-input');//세부내역 파일 태그
      if (this.bidContent.insModeCode === "1") {
        if (fileTag.files.length === 0) {
          alert("세부내역파일을 업로드 해주세요.");
          return false;
        }
      }

      return true;
    },
    save() {
      var vm = this;
 
      //insert 전에 숫자에 천단위로 있는 콤마 제거
      this.bidContent.bdAmt = this.bdAmt.replace(/[^\d-]/g, '');

      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bid/insertBid", this.bidContent)
        .then(async (response) => {
          //지명경쟁
          if (this.bidContent.biModeCode === "A") {
            //등록되는 입찰 bino로 set
            var custContent = this.custContent;
            custContent.forEach(function(element) {
                element.biNo = vm.bidContent.biNo;
            });

            await this.$http.post("/api/v1/bid/updateBidCust", custContent);

            //지명경쟁 협력사의 모든 대상자 이메일 insert
            await this.$http.post("/api/v1/bid/updateEmail", {
              biNo: this.bidContent.biNo,
              type: "insert",
              interCd: this.bidContent.interrelatedCustCode,
            });
          }

          //내역방식
          if (this.bidContent.insModeCode === "2") {//내역직접등록
            await this.$http.post("/api/v1/bid/updateBidItem", this.tableContent);
          }else if(this.bidContent.insModeCode === "1"){//파일등록
            this.sendFileContent();
          }  
          
          if (response.data.code == "OK") {
            this.$store.commit("searchParams", {});
          } else {
            this.$swal({
              type: "warning",
              text: "수정 중 오류가 발생했습니다.",
            });
          }
        })
        .finally(() => {
          $("#save").modal("hide");
          this.$router.push({ name: "bidProgress" });
          this.$store.commit("finish");
        });
        
        
    },

    async newBiNo() {//새로추가할 bino 가져오기
      this.$http
        .post("/api/v1/bid/newBiNo")
        .then((response) => {
          this.bidContent.biNo = response.data;

        })
        .catch((error) => {
          console.error("Error fetching biNo:", error);
        });
    },

    movetolist() {//목록으로 이동
      this.$store.commit("searchParams", {});
      this.$router.push({ name: "bidProgress" });
    },

    sendFileContent() {//파일 업로드
      this.fileContent.forEach((fileData) => {
        const formData = new FormData();
        if(fileData.selectedFile != null && fileData.selectedFile != undefined && fileData.selectedFile != ''){
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
        }
        
      });
    },

    changeFile(event) {
      // 파일 사이즈 체크
      // if(this.checkFileSize()){
      // 	return false;
      // }


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
      this.fileContent = this.fileContent.filter(
        (fileData) => fileData.fileFlag !== fileFlag
      );

      // 새로운 파일 정보 추가
      if (event.target.id === "file-input") {
        this.fileContent.push({
          biNo: this.bidContent.biNo,
          fileFlag: "K",
          fCustCode: "0",
          selectedFile: event.target.files[0],
        });
        this.filek.push({
          selectedFile: event.target.files[0],
        });
      }
      if (event.target.id === "file-input2") {
        this.fileContent.push({
          biNo: this.bidContent.biNo,
          fileFlag: "0",
          fCustCode: "0",
          selectedFile: event.target.files[0],
        });
      }
      if (event.target.id === "file-input3") {
        this.fileContent.push({
          biNo: this.bidContent.biNo,
          fileFlag: "1",
          fCustCode: "0",
          selectedFile: event.target.files[0],
        });
      }
      this.$forceUpdate();

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
    limitText() {//특수조건 글자수 제한
      if (this.bidContent.specialCond.length > 400) {
          // 최대 길이 초과 시 입력을 막음
          this.bidContent.specialCond = this.bidContent.specialCond.slice(0, 400);
      }
    },
    initDetailFile(){//내역직접등록 라디오 버튼 클릭시 세부내역 파일 초기화
      var fileTag = document.getElementById('file-input'); // 파일 입력 태그 가져오기
      fileTag.value = ''; // 파일 값 초기화
    },
    openConfirm(){//저장 전 valid 체크 및 확인창 띄우기
      if (!this.validationCheck()) {
        $("#save").modal("hide");
        return false;
      }else{
        $("#save").modal("show");
      }
    }
  },
  beforeMount() {},
  mounted() {
    this.newBiNo();

    this.userInfo.custCode = this.$store.state.loginInfo.custCode;
    this.userInfo.userName = this.$store.state.loginInfo.userName;
    this.userInfo.userId = this.$store.state.loginInfo.userId;
    //달력
    cmmn.applyCal();
    //파일첨부
    fileInput.applyFile();
  },
};
</script>