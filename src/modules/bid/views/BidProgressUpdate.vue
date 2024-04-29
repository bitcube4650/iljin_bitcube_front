<template>
  <!-- 본문 -->
  <div class="conRight">
    <!-- conHeader -->
    <div class="conHeader">
      <ul class="conHeaderCate">
        <li>전자입찰</li>
        <li>입찰계획 수정</li>
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
                @input="dataFromList.result.itemCode = $event.target.value"
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
                checked=""
                v-model="dataFromList.result.biModeCode"
                v-bind:data-target="dataFromList.result.biModeCode === 'B' ? '#bmGeneral' : ''"
              /><label for="bm1_1">지명경쟁입찰</label>
              <input
                type="radio"
                name="bm1"
                value="B"
                id="bm1_2"
                class="radioStyle"     
                v-model="dataFromList.result.biModeCode"
                data-toggle="modal"
                v-bind:data-target="dataFromList.result.biModeCode === 'A' ? '#bmGeneral' : ''"
              /><label for="bm1_2">일반경쟁입찰</label>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              입찰참가자격 <span class="star">*</span>
            </div>
            <div class="width100">
              <input
                type="text"
                name=""
                id=""
                class="inputStyle"
                placeholder=""
                v-model="dataFromList.result.bidJoinSpec"
                maxlength="100"
              />
            </div>
          </div>
          <div class="flex mt20">
            <div class="formTit flex-shrink0 width170px">특수조건</div>
            <div class="width100">
              <div class="width100">
                <textarea
                  class="textareaStyle boxOverflowY"
                  placeholder=""
                  v-model="dataFromList.result.specialCond"
                  @input="limitText"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              현장설명일시 <span class="star">*</span>
            </div>
            <div class="width100">
              <Calendar @update-date="fnUpdateSpotDate" calendarId="spotDate" classProps="datepicker inputStyle maxWidth140px" :initDate="datePart" :minDate="minDate"></Calendar>
              <!-- <input
                type="time"
                class="inputStyle maxWidth140px"
                v-model="timePart"
              /> -->
              <select class="inputStyle ml10" v-model="timePart" style="background:url('../images/selectArw.png') no-repeat right 15px center;max-width: 110px">
                  <option value="">시간 선택</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                  <option value="03:00">03:00</option>
                  <option value="04:00">04:00</option>
                  <option value="05:00">05:00</option>
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
              </select>
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
                maxlength="80"
              />
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="formTit flex-shrink0 width170px">
              낙찰자결정방법 <span class="star">*</span>
            </div>
            <div class="width100">
              <select name="" class="selectStyle maxWidth200px" v-model="dataFromList.result.succDeciMethCode">
                <option value="1">최저가</option>
                <option value="2">최고가</option>
                <option value="3">내부적격심사</option>
                <option value="4">최고가&내부적격심사</option>
                <option value="5">최저가&내부적격심사</option>
              </select>
            </div>
          </div>
          <div class="flex align-items-center mt20">
            <div class="formTit flex-shrink0 width170px">
              입찰참가업체 <span v-if="dataFromList.result.biModeCode==='A'" class="star">*</span>
            </div>
            <div class="flex align-items-center width100">
              <div class="overflow-y-scroll boxStSm width100" >
                <a v-if="dataFromList.result.biModeCode==='A' && dataFromList.custContent.length ===0"
                    >선택된 참가업체 없음</a>
                <div v-show="dataFromList.result.biModeCode==='A'" v-for="(val, idx) in dataFromList.custContent" :key="idx">   
                <a
                    @click.prevent="openCustUserDetailPop(val.custCode)"
                    class="textUnderline"
                    >{{ val.custName }}</a
                  >
                  <span v-for="(data,idx) in custUserName" :key="idx">{{ val.custCode == data.custCode ? ` ${data.userName}` : '' }} </span>
                  <i class="fa-regular fa-xmark textHighlight" @click="removeCust(idx,val.custCode)"></i></a>
                  <!-- <span v-if="idx !== dataFromList.custContent.length - 1">, </span>    -->
                </div>
                <div v-if="dataFromList.result.biModeCode==='B'">
                    <a>가입회원사 전체</a>
                    </div>
              </div>
              <a
                data-toggle="modal"
                data-target="#custPop"
                class="btnStyle btnSecondary ml10"
                title="업체선택"
                @click="$refs.custPop.initModal();"
                v-show="dataFromList.result.biModeCode==='A'"
                >업체선택</a
              >
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
            <div class="width100">{{ dataFromList.result.cuser }}</div>
          </div>
        </div>

        <h3 class="h3Tit mt50" v-if="dataFromList.result.interrelatedCustCode==='02'">입찰분류</h3>
        <div class="boxSt mt20" v-if="dataFromList.result.interrelatedCustCode==='02'">
          <div class="flex align-items-center" >
            <div class="formTit flex-shrink0 width170px">분류군</div>
            <div class="flex align-items-center width100">
              <select name="" class="selectStyle" v-model="dataFromList.result.matDept">
                <option value=null>사업부</option>
                <option v-for="(dept,idx) in dataFromList.lotteDeptList" :value="dept.codeVal" :key="idx">{{ dept.codeName }}</option>
              </select>
              <select name="" class="selectStyle" style="margin: 0 10px" v-model="dataFromList.result.matProc">
                <option value=null>공정</option>
                <option v-for="(proc,idx) in dataFromList.lotteProcList" :value="proc.codeVal" :key="idx">{{ proc.codeName }}</option>
              </select>
              <select name="" class="selectStyle" v-model="dataFromList.result.matCls">
                <option value=null>분류</option>
                <option v-for="(cls,idx) in dataFromList.lotteClsList" :value="cls.codeVal" :key="idx">{{ cls.codeName }}</option>
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
                <Calendar @update-date="fnUpdateStartDate" calendarId="startDate" classProps="datepicker inputStyle" :initDate="datePart1" :minDate="minDate"></Calendar>
                <!-- <input type="time" class="inputStyle ml10" v-model="timePart1"/> -->
                <select class="inputStyle ml10" v-model="timePart1" style="background:url('../images/selectArw.png') no-repeat right 15px center;max-width: 110px">
                  <option value="">시간 선택</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                  <option value="03:00">03:00</option>
                  <option value="04:00">04:00</option>
                  <option value="05:00">05:00</option>
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
              </select>
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">
                제출마감일시 <span class="star">*</span>
              </div>
              <div class="flex align-items-center width100">
                <Calendar @update-date="fnUpdateCloseDate" calendarId="closeDate" classProps="datepicker inputStyle" :initDate="datePart2" :minDate="minDate"></Calendar>
                <!-- <input type="time" class="inputStyle ml10" v-model="timePart2"/> -->
                <select class="inputStyle ml10" v-model="timePart2" style="background:url('../images/selectArw.png') no-repeat right 15px center;max-width: 110px">
                  <option value="">시간 선택</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                  <option value="03:00">03:00</option>
                  <option value="04:00">04:00</option>
                  <option value="05:00">05:00</option>
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
              </select>
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
                  v-model="dataFromList.result.estOpener"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#bidOpenUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidOpenUserPop.initModal(dataFromList.result.interrelatedCustCode);"
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
                  v-model="dataFromList.result.gongoId"
                  disabled
                />
                <a
                  id="gongoId"
                  data-toggle="modal"
                  data-target="#bidUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidUserPop.initModal('gongoId', dataFromList.result.interrelatedCustCode);"
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
                  v-model="dataFromList.result.estBidder"
                  disabled
                />
                <a
                  data-toggle="modal"
                  data-target="#biddingUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.biddingUserPop.initModal(dataFromList.result.interrelatedCustCode);"
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
                  v-model="dataFromList.result.openAtt1"
                  :style="{ 'margin-right': dataFromList.result.openAtt1Code ? '5px' : '0' }"
                  disabled
                />
                <i v-if="dataFromList.result.openAtt1Code" @click="removeOpenAttCode('1')" class="fa-regular fa-xmark textHighlight ml5"></i></a>
                <a
                id="openAtt1"
                  data-toggle="modal"
                  data-target="#bidUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidUserPop.initModal('openAtt1', dataFromList.result.interrelatedCustCode);"
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
                  v-model="dataFromList.result.openAtt2"
                  :style="{ 'margin-right': dataFromList.result.openAtt2Code ? '5px' : '0' }"
                  disabled
                />
                <i v-if="dataFromList.result.openAtt2Code" @click="removeOpenAttCode('2')" class="fa-regular fa-xmark textHighlight ml5"></i></a>
                <a
                id="openAtt2"
                  data-toggle="modal"
                  data-target="#bidUserPop"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
                  @click="$refs.bidUserPop.initModal('openAtt2', dataFromList.result.interrelatedCustCode);"
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
                  v-model="dataFromList.result.insModeCode"
                  data-toggle="modal"
                  v-bind:data-target="dataFromList.result.insModeCode === '2' ? '#bmFile' : ''"
                /><label for="bm2_1">파일등록</label>
                <input
                  type="radio"
                  name="bm2"
                  value="2"
                  id="bm2_2"
                  class="radioStyle"
                  v-model="dataFromList.result.insModeCode"
                  data-toggle="modal"
                  v-bind:data-target="dataFromList.result.insModeCode === '1' ? '#bmFile' : ''"
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
                  v-model="dataFromList.result.supplyCond"
                />
              </div>
            </div>
          </div>
          <div class="flex mt10" v-show="dataFromList.result.insModeCode==='2'">
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
                    <th>단위</th>
                    <th>예정단가</th>
                    <th>수량</th>
                    <th>합계</th>
                    <th class="end">삭제</th>
                  </tr>
                </thead>
                <tbody>
                   <tr v-for="(val, idx) in dataFromList.tableContent" :key="idx">
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
                        @input="changeNumOrderUc(idx)"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm text-right"
                        placeholder=""
                        v-model="val.orderQty"
                        maxlength="12"
                        @input="changeNumOrderQty(idx)"
                      />
                    </td>
                    
                    <td class="text-right">{{ (Number(val.orderQty.replace(/,/g, '')) * Number(val.orderUc.replace(/,/g, '')) ).toLocaleString()  }}</td>
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
          <div class="flex mt10" v-show="dataFromList.result.insModeCode==='1'">
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
                <div class="upload-box" v-if="!insFile">
                  <input type="file" id="file-input" @change="fileInputChangeInsFile"/>
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                      최대 10MB (등록 파일 개수 최대 1개)
                    </div>
                  </div>
                </div>
                <div class="uploadPreview" id="preview" v-if="insFile"><p style="line-height:80px;">{{ insFile.fileNm }}<button id="removeBtn" class="file-remove" @click="deleteFile('INS')">삭제</button></p></div>
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
                <div class="upload-box" v-if="!innerFile">
                  <input type="file" id="file-input2" @change="fileInputChangeInnerFile"/>
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                      최대 50MB (등록 파일 개수 최대 1개)
                    </div>
                  </div>
                </div>
                <div class="uploadPreview" id="preview2" v-if="innerFile"><p style="line-height:80px;">{{ innerFile.fileNm }}<button id="removeBtn" class="file-remove" @click="deleteFile('INNER')">삭제</button></p></div>
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
                <div class="upload-box" v-if="!outerFile">
                  <input type="file" id="file-input3" @change="fileInputChangeOuterFile"/>
                  <div class="uploadTxt">
                    <i class="fa-regular fa-upload"></i>
                    <div>
                      클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br />파일
                      최대 50MB (등록 파일 개수 최대 1개)
                    </div>
                  </div>
                </div>
                <div class="uploadPreview" id="preview3" v-if="outerFile"><p style="line-height:80px;">{{ outerFile.fileNm }}<button id="removeBtn" class="file-remove"  @click="deleteFile('OUTER')">삭제</button></p></div>
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
            >목록</a>
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
            <a
              class="ModalClose"
              data-dismiss="modal"
              title="닫기"
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
						<div class="alertText2">입찰계획을 수정하면 수정 History에<br>수정이력이 남습니다.<br>저장 하시겠습니까?</div>
						<div class="modalFooter">
							<a  class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
							<a  @click="save" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
						</div>
					</div>				
				</div>
			</div>
		</div>
		<!-- //입찰계획 저장 -->

    <!-- 품목 조회 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem" />
    <!-- //업체 조회 -->
    <cust-pop ref="custPop" @callbackFunc="callbackCust" />
    <!-- 협력사 사용자 조회-->
    <cust-user-pop ref="custUserPop" />
    <!-- 협력사 상세 사용자 조회-->
    <cust-user-detail-pop ref="custUserDetailPop"/>
    <!-- 개찰자 조회-->
    <bid-open-user-pop ref="bidOpenUserPop" @callbackFunc="callbackOpenUser"/>
    <!-- 낙찰자 조회-->
    <bidding-user-pop ref="biddingUserPop" @callbackFunc="callbackBiddingUser"/>
    <!-- 입찰관련 일반사용자 조회-->
    <bid-user-pop ref="bidUserPop" @callbackFunc="callbackUser"/>

  </div>
  <!-- //본문 -->
</template>
  <script>
import fileInput from "../../../../public/js/fileInput.js";
import cmmn from "../../../../public/js/common.js";
import ItemPop from "@/components/ItemPop.vue";
import CustPop from "@/modules/company/components/CustPop.vue";
import CustUserPop from "@/modules/company/components/CustUserPop.vue";
import CustUserDetailPop from "@/modules/company/components/CustUserDetailPop.vue";
import BidOpenUserPop from "@/modules/company/components/BidOpenUserPop.vue";
import BidUserPop from "@/modules/company/components/BidUserPop.vue";
import BiddingUserPop from "@/modules/company/components/BiddingUserPop.vue";
import Calendar from "@/components/Calendar.vue";

export default {
  name: "bidProgressUpdate",
  components: {
    ItemPop,
    CustPop,
    CustUserPop,
    CustUserDetailPop,
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
      detail: {},
      dataFromList: [],
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
      bdAmt: "",
      insFile : '', // 내역방식 파일 등록할 때 첨부파일 데이터
      innerFile : '', // 대내용 첨부파일 데이터
      outerFile : '', // 대외용 첨부파일 데이터
      changeFileCheck : {insFileCheck : 'Y', innerFileCheck : 'Y',  outerFileCheck : 'Y'}, // 기존에 들어 있는 파일들이 어떻게 변경되는지 확인 =  Y : 기존과 동일한 상태라 아무 것도 처리 안 해도 되는 상태. N : 파일이 있다가 사라진 상태라 삭제 해야 함, C : 기존에 있던 없던 파일이 추가되거나 변경된 상태. 기존에 있던 걸 지우고 새로 넣어야 함
      minDate : new Date().toISOString().slice(0, 10),
      bidPlan : 'O',
      custUserInfo : [],
      custUserName : []
    };
  },
  computed: {
    totalSum() {
      // 테이블 내 모든 행의 합계 계산
      return this.dataFromList.tableContent.reduce(
        (sum, val) => sum + ((Number(val.orderQty.replace(/,/g, '')) * Number(val.orderUc.replace(/,/g, '')) ) || 0),
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
    callbackItem(data) {//품목정보 set
      this.dataFromList.result.itemCode = data.itemCode;
      this.dataFromList.result.itemName = data.itemName;
      this.$forceUpdate();
    },
    callbackCust(data) {//업체정보 set
      const existingCust = this.dataFromList.custContent.find(
        (item) => item.custCode === data.custCode
      );

      if (!existingCust) {
        this.dataFromList.custContent.push({
          biNo: this.dataFromList.result.biNo,
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
      this.$forceUpdate();
    },
    callbackOpenUser(data) {//개찰자 정보 set
      this.dataFromList.result.estOpener = data.userName;
      this.dataFromList.result.estOpenerCode = data.userId;
      this.dataFromList.result.estBidder = data.userName;
      this.dataFromList.result.estBidderCode = data.userId;
      this.$forceUpdate();
    },
    callbackBiddingUser(data) {//낙찰자 정보 set
      this.dataFromList.result.estBidder = data.userName;
      this.dataFromList.result.estBidderCode = data.userId;
      this.$forceUpdate();
    },
    callbackUser({ data, buttonId }) {//사용자 정보 set

      switch (buttonId) {
        case "gongoId":
          this.dataFromList.result.gongoId = data.userName;
          this.dataFromList.result.gongoIdCode = data.userId;
          break;
        case "openAtt1":
          this.dataFromList.result.openAtt1 = data.userName;
          this.dataFromList.result.openAtt1Code = data.userId;
          break;
        case "openAtt2":
          this.dataFromList.result.openAtt2 = data.userName;
          this.dataFromList.result.openAtt2Code = data.userId;
          break;
      }

      this.$forceUpdate();
    },
    assignDataFromList() {//날짜 및 시간 정보 set
      this.datePart = this.dataFromList.result.spotDate.substring(0, 10);
      this.timePart = this.dataFromList.result.spotDate.substring(11, 16);

      this.datePart1 = this.dataFromList.result.estStartDate.substring(0, 10);
      this.timePart1 = this.dataFromList.result.estStartDate.substring(11, 16);

      this.datePart2 = this.dataFromList.result.estCloseDate.substring(0, 10);
      this.timePart2 = this.dataFromList.result.estCloseDate.substring(11, 16);
    },
    removeCust(index,custCode) {//입찰참가업체 삭제
      this.custUserInfo = this.custUserInfo.filter(item => item.custCode != custCode)
      this.custUserName = this.custUserName.filter(item => item.custCode != custCode)
      this.dataFromList.custContent.splice(index, 1);
      this.$forceUpdate();
    },
    selectBid(mode) {//입찰방식 confirm창 선택
      if (mode === "cancel") {
        //취소시 되돌림
        if (this.dataFromList.result.biModeCode === "A")
          this.dataFromList.result.biModeCode = "B";
        else this.dataFromList.result.biModeCode = "A";
      } else if (mode === "ok") {
        if (this.dataFromList.result.biModeCode === "A") {//지명경쟁
          this.dataFromList.result.biModeCode = "A";
        } else {//일반경쟁
          this.dataFromList.custContent = [];
          this.$forceUpdate();
        }
      }
      this.$forceUpdate();
      $("#bmGeneral").modal("hide");
    },

    selectIns(mode) {//세부내역 confirm창 선택
      if (mode === "cancel") {
        if (this.dataFromList.result.insModeCode === "1")
          this.dataFromList.result.insModeCode = "2";
        else this.dataFromList.result.insModeCode = "1";
      } else if (mode === "ok") {
        if (this.dataFromList.result.insModeCode === "1") {
          //this.dataFromList.result.insModeCode = "1";
          this.dataFromList.tableContent = []
        } else {
          this.insFile = ''
          /*this.dataFromList.result.insModeCode = "2";
          this.dataFromList.fileContent.forEach((item) => {
            if (item.fileFlagKo === "세부내역") {
              const matchingItem = this.originFileData.find(
                (data) => data.fileFlagKo === "세부내역"
              );
              if (matchingItem) {
                item = matchingItem;
              }
            }
          });
          */

        }
      }
      this.$forceUpdate();
      $("#bmFile").modal("hide");
    },

    addEmptyRow() {//세부내역 직접 입력 데이터 로우 추가
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
    deleteRow(index) {//세부내역 직접 입력 데이터 로우 삭제
      this.dataFromList.tableContent.splice(index, 1);
    },
    fileSetting() {//기존에 업로드 한 파일 set
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
          } else if (fileFlagKo === "대외용") {
            preview = preview3;
          }

          /*
          preview.innerHTML += `
        <p id=${fileFlagKo}>
          ${fileName}
          <button data-index=${fileFlagKo} class='file-remove'>삭제</button>
        </p>`;
        */

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
        this.$swal({ type: "warning", text: "입찰명을 입력해 주세요." });
        return false;
      }
      if (
        !this.dataFromList.result.itemCode ||
        this.dataFromList.result.itemCode === ""
      ) {
        this.$swal({ type: "warning", text: "품목을 선택해 주세요." });
        return false;
      }
      if (
        !this.dataFromList.result.biModeCode ||
        this.dataFromList.result.biModeCode === ""
      ) {
        this.$swal({ type: "warning", text: "입찰방식을 선택해 주세요." });
        return false;
      }
      if (
        !this.dataFromList.result.bidJoinSpec ||
        this.dataFromList.result.bidJoinSpec === ""
      ) {
        this.$swal({ type: "warning", text: "입찰참가자격을 선택해 주세요." });
        return false;
      }
      if (
        !this.datePart 
      ) {
        this.$swal({ type: "warning", text: "현장설명일시 날짜를 입력해 주세요." });
        return false;
      }
      if (
        !this.timePart
      ) {
        this.$swal({ type: "warning", text: "현장설명일시 시간을 입력해 주세요." });
        return false;
      }

      const inputDate = new Date(this.datePart + " " + this.timePart)

      const currentTime1 = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"}));

      if (currentTime1 > inputDate) {
        this.$swal({ type: "warning", text: "현장설명일시는 현재 시간보다 큰 시간을 선택해야 합니다." });
          return false
      } 

      if (
        !this.dataFromList.result.spotArea ||
        this.dataFromList.result.spotArea === ""
      ) {
        this.$swal({ type: "warning", text: "현장설명장소를 입력해 주세요." });
        return false;
      }
      if (
        !this.dataFromList.result.succDeciMethCode ||
        this.dataFromList.result.succDeciMethCode === ""
      ) {
        this.$swal({ type: "warning", text: "낙찰자 결정방법을 선택해 주세요." });
        return false;
      }
      if (this.dataFromList.custContent.length === 0 && this.dataFromList.result.biModeCode === "A") {
        this.$swal({ type: "warning", text: "입찰참가업체를 선택해 주세요." });
        return false;
      }

      const custCodes = this.dataFromList.custContent.map(content => content.custCode);

      const allCustCodesInUserInfo = custCodes.every(custCode => {
        return this.custUserInfo.some(userInfo => userInfo.custCode == custCode);
      });

      if(this.dataFromList.result.biModeCode === "A" && !allCustCodesInUserInfo){
        this.$swal({ type: "warning", text: "협력사 사용자를 선택하지 않은 입찰참가업체가 있습니다.\n입찰참가업체 명을 클릭하여 협력사 사용자를 선택해 주세요." });
        return false
      }

      if (!this.dataFromList.result.amtBasis || this.dataFromList.result.amtBasis === "") {
        this.$swal({ type: "warning", text: "금액기준을 입력해 주세요." });
        return false;
      }
      if (this.dataFromList.result.interrelatedCustCode == "02" 
          && (!this.dataFromList.result.matDept || !this.dataFromList.result.matProc || !this.dataFromList.result.matCls)) {
            this.$swal({ type: "warning", text: "분류군을 입력해 주세요." });
        return false;
      }
      if (
        !this.datePart1 ||
        this.datePart1 === ""
      ) {
        this.$swal({ type: "warning", text: "제출시작일시 날짜를 입력해 주세요." });
        return false;
      }
      if (
        !this.timePart1 ||
        this.timePart1 === ""
      ) {
        this.$swal({ type: "warning", text: "제출시작일시 시간을 입력해 주세요." });
        return false;
      }
      if (
        !this.datePart2 ||
        this.datePart2 === ""
      ) {
        this.$swal({ type: "warning", text: "제출마감일시 날짜를 입력해 주세요." });
        return false;
      }
      if (
        !this.timePart2 ||
        this.timePart2 === ""
      ) {
        this.$swal({ type: "warning", text: "제출마감일시 시간을 입력해 주세요." });
        return false;
      }

      var startDateTime = new Date(`${this.datePart1}T${this.timePart1}`);
      var closeDateTime = new Date(`${this.datePart2}T${this.timePart2}`);

      const closeDate = new Date(this.datePart2 + " " + this.timePart2)

      const currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"}));

      if (currentTime > closeDate) {
          this.$swal({ type: "warning", text: "제출마감일시는 현재 시간보다 큰 시간을 선택해야 합니다." });
          return false
      } 

      if (startDateTime > closeDateTime) {
        this.$swal({ type: "warning", text: "제출시작일시가 제출마감일시보다 큽니다." });
        return false;
      }

      this.dataFromList.result.spotDate = this.datePart + " " + this.timePart;
      this.dataFromList.result.estStartDate = this.datePart1 + " " + this.timePart1;
      this.dataFromList.result.estCloseDate = this.datePart2 + " " + this.timePart2;
      
      if (!this.dataFromList.result.estOpener || this.dataFromList.result.estOpener === "") {
        this.$swal({ type: "warning", text: "개찰자를 선택해 주세요." });
        return false;
      }

      if (!this.dataFromList.result.gongoId || this.dataFromList.result.gongoId === "") {
        this.$swal({ type: "warning", text: "입찰공고자를 선택해 주세요." });
        return false;
      }

      if (!this.dataFromList.result.estBidder || this.dataFromList.result.estBidder === "") {
        this.$swal({ type: "warning", text: "낙찰자를 선택해 주세요." });
        return false;
      }
      if (!this.dataFromList.result.supplyCond || this.dataFromList.result.supplyCond === "") {
        this.$swal({ type: "warning", text: "납품조건을 입력해 주세요." });
        return false;
      }
      
      //세부내역 내역집적등록인 경우
      if (this.dataFromList.result.insModeCode  === "2") {
        if (this.dataFromList.tableContent.length === 0) {
          this.$swal({ type: "warning", text: "세부내역을 추가해 주세요." });
          return false;
        } else if(this.dataFromList.tableContent.length > 0){
          
          const nameCheck = this.dataFromList.tableContent.filter(item=> item.name == '')
          const ssizeCheck = this.dataFromList.tableContent.filter(item=> item.ssize == '')
          const orderQtyCheck = this.dataFromList.tableContent.filter(item=> item.orderQty == '')
          const unitcodeCheck = this.dataFromList.tableContent.filter(item=> item.unitcode == '')
          const orderUcCheck = this.dataFromList.tableContent.filter(item=> item.orderUc == '')

          if(nameCheck.length > 0){
            this.$swal({ type: "warning", text: "세부내역 품목명을 작성해 주세요." });
            return false;
          }
          if(ssizeCheck.length > 0){
            this.$swal({ type: "warning", text: "세부내역 규격을 작성해 주세요." });
            return false;
          }
          if(unitcodeCheck.length > 0){
            this.$swal({ type: "warning", text: "세부내역 단위를 작성해 주세요." });

            return false;
          }
          if(orderUcCheck.length > 0){
            this.$swal({ type: "warning", text: "세부내역 예정단가를 작성해 주세요." });
            return false;
          }
          if(orderQtyCheck.length > 0){
            this.$swal({ type: "warning", text: "세부내역 수량을 작성해 주세요."});
            return false;
          }

        }

      }

      //세부내역 파일등록 경우
      if (this.dataFromList.result.insModeCode === "1") {
        if (this.insFile == '') {
          this.$swal({ type: "warning", text: "세부내역파일을 업로드 해 주세요." });

          return false;
        }
      }

      return true;
    },
    save() {
      const vm = this
      //update 전에 숫자에 천단위로 있는 콤마 제거
      this.dataFromList.result.bdAmt = this.bdAmt.replace(/[^\d-]/g, '');
      let custContent = {}
      let updateEmail = {}

      if (this.dataFromList.result.biModeCode === "A") {
        //등록되는 입찰 bino로 set
        custContent = this.dataFromList.custContent;
        
        custContent.forEach(function(element) {
            element.biNo = vm.dataFromList.result.biNo
        })
        updateEmail = {
          biNo: this.dataFromList.result.biNo,
          type: "update",
          interCd: this.dataFromList.result.interrelatedCustCode,
        }

        this.dataFromList.result.custCode = custContent.map(item => item.custCode).join(',')

        const custUserInfoFilter = {};

        this.custUserInfo.forEach(info => {

            if (!custUserInfoFilter[info.custCode]) {

              custUserInfoFilter[info.custCode] = '';
            } else {

              custUserInfoFilter[info.custCode] += ',';
            }

            custUserInfoFilter[info.custCode] += info.userId;
        });


        const custUserInfo = Object.keys(custUserInfoFilter).map(custCode => ({
            custCode: custCode,
            usemailId: custUserInfoFilter[custCode]
        }));

        this.dataFromList.result.custUserInfo = custUserInfo
      }

      let tableContent = []
      //내역방식
      if(this.dataFromList.result.insModeCode === "2") {//내역직접등록

        tableContent = this.dataFromList.tableContent.map((item, idx) => {
          return { ...item, seq: idx + 1, orderQty : Number(item.orderQty.replace(/,/g, '')),orderUc: Number(item.orderUc.replace(/,/g, ''))}
        });
        this.changeFileCheck.insFileCheck = 'N'
      }

      let fd = new FormData()
      if(this.dataFromList.result.insModeCode === "1"){
        fd.append("insFile", this.changeFileCheck.insFileCheck == 'Y' ? '' : this.insFile)
      }

      if(this.innerFile != ''){
        fd.append("innerFile", this.changeFileCheck.innerFileCheck == 'Y' ? '' : this.innerFile)
      }
      if(this.outerFile != ''){
        fd.append("outerFile", this.changeFileCheck.outerFileCheck == 'Y' ? '' : this.outerFile)
      }


      this.dataFromList.result.changeFileCheck = this.changeFileCheck
      const params = {
        bidContent : this.dataFromList.result,
        custContent : custContent,
        updateEmail : updateEmail,
        tableContent : tableContent,
      }
      
      fd.append("bidContent", JSON.stringify(params))

      this.$store.commit("loading");
      vm.$http.post("/api/v1/bid/updateBid", fd)
      .then((response) => {
          if (response.data.code == "OK") {
            $("#commonAlertMsg").html('저장되었습니다.');
            $("#commonAlertPop").modal("show"); 
            this.$router.push({ name: "bidProgress" });
            this.$store.commit("finish");
            return;
          } 
          else {
            this.$store.commit("finish");
            this.$swal({
              type: "warning",
              text: "저장 중 오류가 발생했습니다.",
            });
            return;
          }
      })
      
      
    /*
      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bid/updateBid", this.dataFromList.result)
        .then(async (response) => {
          //지명경쟁
          if (this.dataFromList.result.biModeCode === "A") {
            this.dataFromList.custContent[0].insertYn = 'Y'
          }else if(this.dataFromList.result.biModeCode === "B"){
           if(this.dataFromList.custContent.length == 0){
            this.dataFromList.custContent.push({biNo : this.dataFromList.result.biNo})
           }
          }
            //지명경쟁 협력사 등록
            await this.$http.post(
              "/api/v1/bid/updateBidCust",
              this.dataFromList.custContent
            );

          if (this.dataFromList.result.insModeCode === "2") {//내역직접등록
            await this.$http.post(
              "/api/v1/bid/updateBidItem",
              this.dataFromList.tableContent
            );
          }else if(this.dataFromList.result.insModeCode === "1"){//파일등록
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
          this.$router.push({ name: "bidProgressDetail" });
          this.$store.commit("finish");
        });
        */
    },
    movetolist() {//목록이동
      this.$router.push({ name: "bidProgress" });
    },

    sendFileContent() {//파일 업로드
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
      if (this.dataFromList.result.specialCond.length > 400) {
          // 최대 길이 초과 시 입력을 막음
          this.dataFromList.result.specialCond = this.dataFromList.result.specialCond.slice(0, 400);
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
    },
    changeNumOrderQty(idx) {
      const inputValue = this.dataFromList.tableContent[idx].orderQty.replace(/\D/g, '')
      this.dataFromList.tableContent[idx].orderQty = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    changeNumOrderUc(idx) {
      const inputValue = this.dataFromList.tableContent[idx].orderUc.replace(/\D/g, '');
      this.dataFromList.tableContent[idx].orderUc = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    fileInputChangeInsFile(event){//견적세부파일
      const fileData = event.target.files[0]
        if(fileData.size > 10485760){
          event.target.value = ''
          this.$swal({ type: "warning", text: "파일 크기는 최대 10MB까지입니다.\n파일 크기를 확인해 주세요." });
          return 
        }
        fileData.fileNm = fileData.name
        this.insFile = fileData;
        this.changeFileCheck.insFileCheck = 'C'
    },
    fileInputChangeInnerFile(event){//대내용파일
      const fileData = event.target.files[0]
        if(fileData.size > 52428800){
          event.target.value = ''
          this.$swal({ type: "warning", text: "파일 크기는 최대 50MB까지입니다.\n파일 크기를 확인해 주세요." });
          return 
        }
        fileData.fileNm = fileData.name
        this.innerFile = fileData;
        this.changeFileCheck.innerFileCheck = 'C'
    },
    fileInputChangeOuterFile(event){//대외용파일
      const fileData = event.target.files[0]
        if(fileData.size > 52428800){
          event.target.value = ''
          this.$swal({ type: "warning", text: "파일 크기는 최대 50MB까지입니다.\n파일 크기를 확인해 주세요." });
          return 
        }
      fileData.fileNm = fileData.name
      this.outerFile = fileData
      this.changeFileCheck.outerFileCheck = 'C'
    },
    deleteFile(fileFlag){
      if(fileFlag == 'INS'){
        this.insFile = ''
        this.changeFileCheck.insFileCheck = 'N'
      }else if(fileFlag == 'INNER'){
        this.innerFile = ''
        this.changeFileCheck.innerFileCheck = 'N'
      }else if(fileFlag == 'OUTER'){
        this.outerFile = ''
        this.changeFileCheck.outerFileCheck = 'N'
      }
    },
    openCustUserDetailPop(custCode){
      const vm = this

      let custUserInfo = vm.custUserInfo.filter(item => item.custCode == custCode)
      $('#custUserDetailPop').modal('show');
      this.$refs.custUserDetailPop.initModal(custCode,custUserInfo)
    },
    removeOpenAttCode(num){
      const vm = this
      if(num == '1'){
        vm.$set(vm.dataFromList.result, 'openAtt1', '')
        vm.$set(vm.dataFromList.result, 'openAtt1Code', '')
      }else{
        vm.$set(vm.dataFromList.result, 'openAtt2', '')
        vm.$set(vm.dataFromList.result, 'openAtt2Code', '')
      }
    }
  },
  beforeMount() {
    window.scrollTo(0, 0)
    const dataFromList =  Object.assign({},this.$route.params.bidUpdateData)
    this.$store.state.bidDetailData = dataFromList.result.biNo
    if(dataFromList.tableContent){
      const tableContent = dataFromList.tableContent
      if(tableContent.length > 0){
        dataFromList.tableContent = tableContent.map((item, idx) => {
          return { ...item, orderQty : item.orderQty.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),orderUc: item.orderUc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')};
       });
      }

    }
    
    this.dataFromList = dataFromList;
    this.custUserInfo = this.dataFromList.custUserInfo
    if(this.custUserInfo.length >0){

      const custCodeUserName = this.custUserInfo.reduce((acc, userInfo) => {
      const custCode = acc.find(item => item.custCode === userInfo.custCode);

        if (custCode) {
          custCode.userName += ', ' + userInfo.userName;
        } else {
            acc.push({ custCode: userInfo.custCode, userName: userInfo.userName });
        }

          return acc;
        }, []);
     this.custUserName = custCodeUserName
    }

    this.bdAmt = dataFromList.result.bdAmt;
    if (!this.originCustData) {
      this.originCustData = dataFromList.custContent.slice();
    }
    if (!this.originFileData) {
      this.originFileData = dataFromList.fileContent.slice();
    }
    if (!this.originTableData) {
      this.originTableData = dataFromList.tableContent.slice();
    }

    if(this.dataFromList.fileContent.length > 0){
      this.insFile = this.dataFromList.fileContent.filter(item => item.fileFlag == 'K')[0]
      this.innerFile = this.dataFromList.fileContent.filter(item => item.fileFlag == '0')[0]
      this.outerFile = this.dataFromList.fileContent.filter(item => item.fileFlag == '1')[0]
    }

  },
  mounted() {
    fileInput.applyFile();
    cmmn.applyCal();
    
    this.assignDataFromList();//날짜 및 시간 정보 set
    //this.fileSetting();//기존에 업로드 한 파일 set
  },
};
</script>