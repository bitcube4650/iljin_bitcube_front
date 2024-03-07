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
                data-toggle="modal"
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
              <input
                type="text"
                class="datepicker inputStyle maxWidth140px"
                title="월 입력란"
                v-model="datePart"
              />
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
                v-model="dataFromList.result.spotArea"
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
            <div class="formTit flex-shrink0 width170px">입찰참가업체</div>
            <div class="flex align-items-center width100">
              <div class="boxStSm boxOverflowY">
                <div v-if="dataFromList.result.biModeCode==='A'" v-for="(val, idx) in dataFromList.custContent" style="display: inline">   
                <div v-if="val.custName !== null">
                <a
                    
                    @click.prevent="$refs.custUserPop.initModal(val.custCode)"
                    data-toggle="modal"
                    data-target="#custUserPop"
                    class="textUnderline"
                    >{{ val.custName }}</a
                  ><i class="fa-regular fa-xmark" @click="removeCust(idx)"></i></a>
                  <span v-if="idx !== dataFromList.custContent.length - 1">, </span>
                  </div>
                <div v-else-if="val.custName == null">
                <a
                    @click.prevent="$refs.custUserPop.initModal(val.custCode)"
                    data-toggle="modal"
                    data-target="#custUserPop"
                    class="textUnderline"
                    >미등록업체</a
                  ><i class="fa-regular fa-xmark" @click="removeCust(idx)"></i></a>
                  <span v-if="idx !== dataFromList.custContent.length - 1">, </span>
                  </div>
                  
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
                type="text"
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

        <h3 class="h3Tit mt50" v-if="dataFromList.result.interrelatedCustCode==='02'">입찰분류</h3>
        <div class="boxSt mt20" v-if="dataFromList.result.interrelatedCustCode==='02'">
          <div class="flex align-items-center" >
            <div class="formTit flex-shrink0 width170px">분류군</div>
            <div class="flex align-items-center width100">
              <select name="" class="selectStyle" v-model="dataFromList.result.matDept">
                <option value=null>사업부</option>
                <option v-for="dept in dataFromList.lotteDeptList" :value="dept.value">{{ dept.label }}</option>
              </select>
              <select name="" class="selectStyle" style="margin: 0 10px" v-model="dataFromList.result.matProc">
                <option value=null>공정</option>
                <option v-for="proc in dataFromList.lotteProcList" :value="proc.value">{{ proc.label }}</option>
              </select>
              <select name="" class="selectStyle" v-model="dataFromList.result.matCls">
                <option value=null>분류</option>
                <option v-for="cls in dataFromList.lotteClsList" :value="cls.value">{{ cls.label }}</option>
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
                <input
                  type="text"
                  class="datepicker inputStyle"
                  title="월 입력란"
                  v-model="datePart1"
                />
                <input type="time" class="inputStyle ml10" v-model="timePart1"/>
              </div>
            </div>
            <div class="flex align-items-center width100 ml80">
              <div class="formTit flex-shrink0 width170px">
                제출마감일시 <span class="star">*</span>
              </div>
              <div class="flex align-items-center width100">
                <input
                  type="text"
                  class="datepicker inputStyle"
                  title="월 입력란"
                  v-model="datePart2"
                />
                <input type="time" class="inputStyle ml10" v-model="timePart2"/>
              </div>
            </div>
          </div>
          <div class="flex align-items-center mt10">
            <div class="flex align-items-center width100">
              <div class="formTit flex-shrink0 width170px">개찰자/낙찰자</div>
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
                  disabled
                />
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
          <div class="flex mt10">
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
                  <input type="file" ref="uploadedFile" id="file-input" @change="chageFile"/>
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
                  <input type="file" id="file-input3" />
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
          <div class="flex mt10" v-if="dataFromList.result.insModeCode==='2'">
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
                        v-model="val.unitCode"
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
        </div>

        <div class="text-center mt50">
          <a
            class="btnStyle btnOutline"
            title="목록"
            ><router-link :to="{ name: 'bidProgress' }">목록 </router-link></a>
          <a
            data-toggle="modal"
            data-target="#save"
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
                @click="selectBidBottom('cancel')"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                title="선택"
                @click="selectBidBottom('ok')"
                >선택</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //일반경쟁입찰 -->

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
    <!-- 개찰자 조회-->
    <bid-open-user-pop ref="bidOpenUserPop" @callbackFunc="callbackOpenUser"/>
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
import BidOpenUserPop from "@/modules/company/components/BidOpenUserPop.vue";
import BidUserPop from "@/modules/company/components/BidUserPop.vue";

export default {
  name: "bidProgressUpdate",
  components: {
    ItemPop,
    CustPop,
    CustUserPop,
    BidOpenUserPop,
    BidUserPop,
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
      fileCnt: 0, //업로드한 파일 수
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
    callbackItem(data) {
      this.dataFromList.result.itemCode = data.itemCode;
      this.dataFromList.result.itemName = data.itemName;
      this.$forceUpdate();
    },
    callbackCust(data) {
      this.dataFromList.custContent.push({
        biNo: this.dataFromList.result.biNo,
        custCode: data.custCode,
        custName: data.custName,
      });
      console.log(1111111111111, this.dataFromList.custContent);
      this.$forceUpdate();
    },
    callbackOpenUser(data) {
      this.dataFromList.result.estOpener = data.userName;
      this.dataFromList.result.estOpenerCode = data.userId;
      this.$forceUpdate();
    },
    callbackUser({ data, buttonId }) {
      console.log(buttonId);
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
    selectBid(mode) {
      if (mode === "cancel") {
        if (this.dataFromList.result.biModeCode === "A")
          this.dataFromList.result.biModeCode = "B";
        else this.dataFromList.result.biModeCode = "A";
      } else if (mode === "ok") {
        if (this.dataFromList.result.biModeCode === "A") {
          this.dataFromList.result.biModeCode = "A";
        } else {
          this.dataFromList.custContent = this.originCustData;
          console.log(this.originCustData);
          this.$forceUpdate();
        }
      }
      this.$forceUpdate();
      $("#bmGeneral").modal("hide");
    },

    selectBidBottom(mode) {
      if (mode === "cancel") {
        if (this.dataFromList.result.insModeCode === "1")
          this.dataFromList.result.insModeCode = "2";
        else this.dataFromList.result.insModeCode = "1";
      } else if (mode === "ok") {
        if (this.dataFromList.result.insModeCode === "1") {
          this.dataFromList.result.insModeCode = "1";
          this.dataFromList.tableContent = this.originTableData;
          this.$forceUpdate();
        } else {
          this.dataFromList.result.insModeCode = "2";
          this.dataFromList.fileContent = this.originFileData;
          this.$forceUpdate();
        }
      }
      this.$forceUpdate();
      $("#bmFile").modal("hide");
    },

    addEmptyRow() {
      const seq = this.dataFromList.tableContent.length + 1;

      this.dataFromList.tableContent.push({
        biNo: this.dataFromList.result.biNo,
        seq: seq,
        name: "",
        ssize: "",
        orderQty: "",
        unitCode: "",
        orderUc: "",
      });
    },
    deleteRow(index) {
      this.dataFromList.tableContent.splice(index, 1);
    },
    fileSetting() {
      if (
        this.dataFromList.fileContent.fileNm != null &&
        this.dataFromList.fileContent.filePath != null
      ) {
        var preview = document.querySelector("#preview");
        var fileName = dataFromList.fileContent.fileNm;

        var timestamp = Date.now();

        preview.innerHTML += `
										<p id=${timestamp}>
											${fileName}
											<button data-index=${timestamp} id='removeFile' class='file-remove'>삭제</button>
										</p>`;

        //삭제 버튼 클릭시 기존 첨부된 파일 정보 삭제
        $("#removeFile").click(
          function () {
            this.dataFromList.fileContent.fileNm = null;
            this.dataFromList.fileContent.filePath = null;
          }.bind(this)
        );
      }
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
      //파일관련 추후 보강 필요
      if (
        !this.dataFromList.result.biName ||
        this.dataFromList.result.biName === ""
      ) {
        alert("입찰명을 입력해주세요.");
        return false;
      }
      if (
        !this.dataFromList.result.itemCode ||
        this.dataFromList.result.itemCode === ""
      ) {
        alert("품목을 선택해주세요.");
        return false;
      }
      if (
        !this.dataFromList.result.biModeCode ||
        this.dataFromList.result.biModeCode === ""
      ) {
        alert("입찰방식을 선택해주세요.");
        return false;
      }

      this.dataFromList.result.spotDate = this.datePart + " " + this.timePart;
      this.dataFromList.result.estStartDate =
        this.datePart1 + " " + this.timePart1;
      this.dataFromList.result.estCloseDate =
        this.datePart2 + " " + this.timePart2;
      if (
        !this.dataFromList.result.spotDate ||
        this.dataFromList.result.spotDate === ""
      ) {
        alert("현장설명일시를 입력해주세요.");
        return false;
      }
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
      if (
        !this.dataFromList.result.estStartDate ||
        this.dataFromList.result.estStartDate === ""
      ) {
        alert("제출시작일시를 입력해주세요.");
        return false;
      }
      if (
        !this.dataFromList.result.estCloseDate ||
        this.dataFromList.result.estCloseDate === ""
      ) {
        alert("제출마감일시를 입력해주세요.");
        return false;
      }

      if (this.dataFromList.result.insModeCode === "2") {
        if (this.dataFromList.tableContents.length === 0) {
          alert("세부내역을 작성해주세요.");
          return false;
        } else {
          this.dataFromList.tableContents =
            this.dataFromList.tableContents.filter(
              (item) => item.name !== null
            );
        }
      }

      return true;
    },
    save() {
      //파일관련 추후 보강 필요
      if (!this.validationCheck()) {
        $("#save").modal("hide");
        console.log("false");
        return false;
      }

      this.detail.result = this.dataFromList.result;
      // this.detail.tableContent = this.dataFromList.tableContent;
      // this.detail.fileContent = this.dataFromList.fileContent;

      this.$store.commit("loading");
      this.$http
        .post("/api/v1/bid/updateBid", this.detail)
        .then((response) => {
          this.$http.post("/api/v1/bid/updateBidCust",this.dataFromList.custContent);
          if (response.data.code == "OK") {
            this.$store.commit("searchParams", {});
            //this.$router.push({ name: "bidProgressDetail" }); //라우팅 추가 모달에 부착예정
          } else {
            this.$swal({
              type: "warning",
              text: "수정 중 오류가 발생했습니다.",
            });
            $("#save").modal("hide");
          }
        })
        .finally(() => {
          this.$store.commit("finish");
        });
    },
  },
  beforeMount() {},
  mounted() {
    this.dataFromList = Object.assign({}, this.$store.state.bidUpdateData);
    this.fileSetting();
    //달력
    cmmn.applyCal();
    this.assignDataFromList();
    //파일첨부
    fileInput.applyFile();
    if (!this.originCustData) {
      this.originCustData = this.dataFromList.custContent.slice();
    }
    if (!this.originFileData) {
      this.originFileData = this.dataFromList.fileContent.slice();
    }
    if (!this.originTableData) {
      this.originTableData = this.dataFromList.tableContent.slice();
    }
    console.log(this.dataFromList);
  },
};
</script>