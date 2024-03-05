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
              /><label for="bm1_1">지명경쟁입찰</label>
              <input
                type="radio"
                name="bm1"
                value="B"
                id="bm1_2"
                class="radioStyle"
                
                v-model="dataFromList.result.biModeCode"
                data-toggle="modal"
                data-target="#bmGeneral"
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
                  data-target="#userSearch1"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
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
                  data-toggle="modal"
                  data-target="#userSearch2"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
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
                  data-toggle="modal"
                  data-target="#userSearch2"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
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
                  data-toggle="modal"
                  data-target="#userSearch2"
                  class="btnStyle btnSecondary ml10"
                  title="선택"
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
                  value=""
                  id="bm2_1"
                  class="radioStyle"
                  checked=""
                /><label for="bm2_1">파일등록</label>
                <input
                  type="radio"
                  name="bm2"
                  value=""
                  id="bm2_2"
                  class="radioStyle"
                  data-toggle="modal"
                  data-target="#bmGeneral2"
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
                  value="현장납품"
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
          <div class="flex mt10">
            <div class="formTit flex-shrink0 width170px">
              세부내역 <span class="star">*</span
              ><a
                href="javascript: return false;"
                class="btnStyle btnSecondary ml10"
                title="추가"
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
                  <tr>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        value="페수처리슬러지"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        value="ton"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        value="1"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder=""
                        value="ton"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm text-right"
                        placeholder=""
                        value="1,000"
                      />
                    </td>
                    <td class="text-right">1,000</td>
                    <td class="text-right end">
                      <a
                        href="javascript: return false;"
                        class="btnStyle btnSecondary btnSm"
                        title="삭제"
                        >삭제</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder="텍스트 입력"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder="200*200"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder="14"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm"
                        placeholder="ton"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="inputStyle inputSm text-right"
                        placeholder="1,100,000"
                      />
                    </td>
                    <td class="text-right">15,400,000</td>
                    <td class="text-right end">
                      <a
                        href="javascript: return false;"
                        class="btnStyle btnSecondary btnSm"
                        title="삭제"
                        >삭제</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="text-right mt10">
                <strong>총합계 : 15,401,000</strong>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt50">
          <a
            class="btnStyle btnOutline"
            title="목록"
            >목록</a
          >
          <a
            data-toggle="modal"
            data-target="#biddingSave"
            class="btnStyle btnPrimary"
            title="저장"
            >저장</a
          >
        </div>
      </div>
    </div>
    <!-- //contents -->

    <!-- 개찰자 조회 -->
    <div
      class="modal fade modalStyle"
      id="userSearch1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 800px">
        <div class="modal-content">
          <div class="modal-body">
            <a
              href="javascript:void(0)"
              class="ModalClose"
              data-dismiss="modal"
              title="닫기"
              ><i class="fa-solid fa-xmark"></i
            ></a>
            <h2 class="modalTitle">개찰자 조회</h2>
            <div class="modalTopBox">
              <ul>
                <li>
                  <div>
                    소속사의 개찰권한을 가진 사용자만 조회됩니다. (사용자 조회
                    후 선택버튼을 누르십시오)
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
                  />
                </div>
                <a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
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
                <tr>
                  <td class="text-left">웹서비스 팀</td>
                  <td class="text-left">강개발</td>
                  <td class="end">
                    <a
                      href="javascript:void(0)"
                      class="btnStyle btnSecondary btnSm"
                      title="선택"
                      >선택</a
                    >
                  </td>
                </tr>
                <tr>
                  <td class="text-left">웹서비스 팀</td>
                  <td class="text-left">강개발</td>
                  <td class="end">
                    <a
                      href="javascript:void(0)"
                      class="btnStyle btnSecondary btnSm"
                      title="선택"
                      >선택</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- pagination -->
            <div class="row mt30">
              <div class="col-xs-12">
                <div class="pagination1 text-center">
                  <a
                    href="javascript:void(0)"
                    title="10페이지 이전 페이지로 이동"
                    ><i class="fa-light fa-chevrons-left"></i
                  ></a>
                  <a href="javascript:void(0)" title="이전 페이지로 이동"
                    ><i class="fa-light fa-chevron-left"></i
                  ></a>
                  <a
                    href="javascript:void(0)"
                    title="1페이지로 이동"
                    class="number active"
                    >1</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="2페이지로 이동"
                    class="number"
                    >2</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="3페이지로 이동"
                    class="number"
                    >3</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="4페이지로 이동"
                    class="number"
                    >4</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="5페이지로 이동"
                    class="number"
                    >5</a
                  >
                  <a href="javascript:void(0)" title="다음 페이지로 이동"
                    ><i class="fa-light fa-chevron-right"></i
                  ></a>
                  <a
                    href="javascript:void(0)"
                    title="10페이지 다음 페이지로 이동"
                    ><i class="fa-light fa-chevrons-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <!-- //pagination -->
            <div class="modalFooter">
              <a
                href="javascript:void(0)"
                class="modalBtnClose"
                data-dismiss="modal"
                title="닫기"
                >닫기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //개찰자 조회 -->

    <!-- 사원 조회 -->
    <div
      class="modal fade modalStyle"
      id="userSearch2"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="width: 100%; max-width: 800px">
        <div class="modal-content">
          <div class="modal-body">
            <a
              href="javascript:void(0)"
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
                    소속사 사용자를 조회합니다. (사용자 조회 후 선택버튼을
                    누르십시오)
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
                  />
                </div>
                <a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
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
                <tr>
                  <td class="text-left">웹서비스 팀</td>
                  <td class="text-left">김개발</td>
                  <td class="end">
                    <a
                      href="javascript:void(0)"
                      class="btnStyle btnSecondary btnSm"
                      title="선택"
                      >선택</a
                    >
                  </td>
                </tr>
                <tr>
                  <td class="text-left">웹서비스 팀</td>
                  <td class="text-left">김개발</td>
                  <td class="end">
                    <a
                      href="javascript:void(0)"
                      class="btnStyle btnSecondary btnSm"
                      title="선택"
                      >선택</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- pagination -->
            <div class="row mt30">
              <div class="col-xs-12">
                <div class="pagination1 text-center">
                  <a
                    href="javascript:void(0)"
                    title="10페이지 이전 페이지로 이동"
                    ><i class="fa-light fa-chevrons-left"></i
                  ></a>
                  <a href="javascript:void(0)" title="이전 페이지로 이동"
                    ><i class="fa-light fa-chevron-left"></i
                  ></a>
                  <a
                    href="javascript:void(0)"
                    title="1페이지로 이동"
                    class="number active"
                    >1</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="2페이지로 이동"
                    class="number"
                    >2</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="3페이지로 이동"
                    class="number"
                    >3</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="4페이지로 이동"
                    class="number"
                    >4</a
                  >
                  <a
                    href="javascript:void(0)"
                    title="5페이지로 이동"
                    class="number"
                    >5</a
                  >
                  <a href="javascript:void(0)" title="다음 페이지로 이동"
                    ><i class="fa-light fa-chevron-right"></i
                  ></a>
                  <a
                    href="javascript:void(0)"
                    title="10페이지 다음 페이지로 이동"
                    ><i class="fa-light fa-chevrons-right"></i
                  ></a>
                </div>
              </div>
            </div>
            <!-- //pagination -->
            <div class="modalFooter">
              <a
                href="javascript:void(0)"
                class="modalBtnClose"
                data-dismiss="modal"
                title="닫기"
                >닫기</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //사원 조회 -->

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
              ><i class="fa-solid fa-xmark"></i
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
                @click="selectBid('named')"
                >취소</a
              >
              <a
                class="modalBtnCheck"
                data-toggle="modal"
                title="선택"
                @click="selectBid('general')"
                >선택</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- //일반경쟁입찰 -->

    <!-- 품목 선택 팝업 -->
    <item-pop ref="itemPop" @callbackFunc="callbackItem" />
    <!-- //업체 조회 -->
    <cust-pop ref="custPop" @callbackFunc="callbackCust" />
    <!-- 협력사 사용자-->
    <cust-user-pop ref="custUserPop" />

  </div>
  <!-- //본문 -->
</template>
  <script>
import fileInput from "../../../../public/js/fileInput.js";
import cmmn from "../../../../public/js/common.js";
import ItemPop from "@/components/ItemPop.vue";
import CustPop from "@/modules/company/components/CustPop.vue";
import CustUserPop from "@/modules/company/components/CustUserPop.vue";

export default {
  name: "bidProgressUpdate",
  components: {
    ItemPop,
    CustPop,
    CustUserPop,
  },
  data() {
    return {
      dataFromList: {},
      originCustData: null,
      datePart: "",
      timePart: "",
      datePart1: "",
      timePart1: "",
      datePart2: "",
      timePart2: "",
    };
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
      //this.dataFromList.custContent.custName = data.custName;
      console.log(1111111111111, this.dataFromList.custContent);
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
      if (mode === "named") {
        this.dataFromList.result.biModeCode = "A"; // 지명경쟁입찰 선택
      } else if (mode === "general") {
        this.dataFromList.result.biModeCode = "B"; // 일반경쟁입찰 선택
        this.dataFromList.custContent = this.originCustData;
        console.log(this.originCustData);
        this.$forceUpdate();
      }
      $("#bmGeneral").modal("hide"); // 모달 닫기
    },
  },
  beforeMount() {},
  mounted() {
    this.dataFromList = Object.assign({}, this.$store.state.bidUpdateData);

    //달력
    cmmn.applyCal();
    this.assignDataFromList();
    //파일첨부
    fileInput.applyFile();
    if (!this.originCustData) {
      this.originCustData = this.dataFromList.custContent.slice();
    }
    console.log(this.dataFromList);
  },
};
</script>