<template>
  <div>
    <!-- wrap -->
    <div id="wrap">
      <!-- header -->
      <div class="header">
        <div class="headerLeft">
          <!-- <a
            href="group_main.html"
            class="headerLogo"
            title="메인 페이지로 이동"
            ><img
              src="./common/images/headerLogo.svg"
              class="img-responsive"
              alt="일진그룹 로고"
            /><span>e-Bidding System</span></a
          > -->
          <p>편하고 빠른 전자입찰시스템</p>
        </div>
        <div class="headerRight">
          <!-- 프로필 드롭다운1 -->
          <div class="profileDropWrap">
            <a href="javascript:void(0)" class="profileDrop"
              ><i class="fa-solid fa-circle-user"></i>ebidding 님<i
                class="fa-solid fa-sort-down"
              ></i
            ></a>
            <div class="profileDropMenu">
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#piMody1"
                title="개인정보 수정"
                ><i class="fa-light fa-gear"></i>개인정보 수정</a
              >
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#pwMody1"
                title="비밀번호 변경"
                ><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a
              >
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#logout"
                title="로그아웃"
                ><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a
              >
            </div>
          </div>
          <!-- //프로필 드롭다운1 -->
        </div>
      </div>
      <!-- //header -->

      <!-- contentWrap -->
      <div class="contentWrap">
        <!-- conLeft -->
        <div class="conLeftWrap">
          <!-- 프로필 드롭다운2 -->
          <div class="profileDropWrap2">
            <a href="javascript:void(0)" class="profileDrop2"
              >ebidding 님<i class="fa-solid fa-sort-down"></i
            ></a>
            <div class="profileDropMenu2">
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#piMody1"
                title="개인정보 수정"
                ><i class="fa-light fa-gear"></i>개인정보 수정</a
              >
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#pwMody1"
                title="비밀번호 변경"
                ><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a
              >
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#logout"
                title="로그아웃"
                ><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a
              >
            </div>
          </div>
          <!-- //프로필 드롭다운2 -->
          <!-- 좌측 입찰상태 표시 -->
          <div class="myState">
            <div>
              진행중<a
                href="javascript:void(0)"
                class="myStateNum"
                title="전자입찰 페이지로 이동"
                ><span>3</span>건</a
              >
            </div>
            <div>
              낙찰 (3개월)<a
                href="javascript:void(0)"
                class="myStateNum"
                title="전자입찰 페이지로 이동"
                ><span>5</span>건</a
              >
            </div>
          </div>
          <!-- //좌측 입찰상태 표시 -->
          <!-- LNB -->
          <ul class="conLeft">
            <li class="depth2None active">
              <a href="javascript:void(0)"
                ><span><i class="fa-light fa-desktop"></i></span>메인</a
              >
            </li>
            <!-- 하위메뉴 없을 때 depth2None 추가 -->
            <li>
              <a href="javascript:void(0)"
                ><span><i class="fa-light fa-file-contract"></i></span
                >전자입찰</a
              >
              <div class="depth2Lnb">
                <ul>
                  <li><a href="group_sub01_1.html">입찰계획</a></li>
                  <li><a href="group_sub01_2.html">입찰진행</a></li>
                  <li><a href="group_sub01_3.html">입찰완료</a></li>
                  <li><a href="group_sub01_4.html">입찰이력</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)"
                ><span><i class="fa-light fa-bullhorn"></i></span>공지</a
              >
              <div class="depth2Lnb">
                <ul>
                  <li><a href="group_sub02_1.html">공지사항</a></li>
                  <li><a href="group_sub02_2.html">FAQ</a></li>
                  <li><a href="">메뉴얼</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)"
                ><span><i class="fa-light fa-buildings"></i></span>업체정보</a
              >
              <div class="depth2Lnb">
                <ul>
                  <li><a href="group_sub03_1.html">업체승인</a></li>
                  <li><a href="group_sub03_2.html">업체관리</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)"
                ><span><i class="fa-light fa-chart-pie-simple"></i></span
                >통계</a
              >
              <div class="depth2Lnb">
                <ul>
                  <li><a href="group_sub04_1.html">회사별 입찰실적</a></li>
                  <li><a href="group_sub04_2.html">입찰실적 상세내역</a></li>
                  <li><a href="group_sub04_3.html">입찰현황</a></li>
                  <li><a href="group_sub04_4.html">입찰 상세내역</a></li>
                </ul>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)"
                ><span><i class="fa-light fa-memo-circle-info"></i></span
                >정보관리</a
              >
              <div class="depth2Lnb">
                <ul>
                  <li><a href="group_sub05_1.html">사용자관리</a></li>
                  <li><a href="group_sub05_2.html">품목정보관리</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <!-- //LNB -->
        </div>
        <!-- //conLeft -->
        <!-- conRightWrap -->
        <div class="conRightWrap">
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
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#pastBid"
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
                        value="사업 시설 유지관리 및 고용 서비스업 품목류"
                      />
                      <a
                        href="javascript:void(0)"
                        class="btnStyle btnSecondary ml10"
                        title="조회"
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
                        value=""
                        id="bm1_1"
                        class="radioStyle"
                        checked=""
                      /><label for="bm1_1">지명경쟁입찰</label>
                      <input
                        type="radio"
                        name="bm1"
                        value=""
                        id="bm1_2"
                        class="radioStyle"
                        data-toggle="modal"
                        data-target="#bmGeneral"
                      /><label for="bm1_2">일반경쟁입찰</label>
                    </div>
                  </div>
                  <div class="flex align-items-center mt20">
                    <div class="formTit flex-shrink0 width170px">
                      입찰참가자격
                    </div>
                    <div class="width100">C202401005</div>
                  </div>
                  <div class="flex mt20">
                    <div class="formTit flex-shrink0 width170px">특수조건</div>
                    <div class="width100">
                      <textarea
                        class="textareaStyle height100px overflow-y-scroll"
                        onkeydown="resize(this)"
                        onkeyup="resize(this)"
                        placeholder=""
                      >
1. 스쿼즈닙룰 제작 및 성적서 제출
	2. 검토 후 현장납품
	3. 검토 후 현장납품</textarea
                      >
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
                      />
                      <input type="time" class="inputStyle maxWidth140px" />
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
                        value="접견실"
                      />
                    </div>
                  </div>
                  <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">
                      낙찰자결정방법 <span class="star">*</span>
                    </div>
                    <div class="width100">
                      <select name="" class="selectStyle maxWidth200px">
                        <option value="">최저가&내부적격심사</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex align-items-center mt20">
                    <div class="formTit flex-shrink0 width170px">
                      입찰참가업체
                    </div>
                    <div class="flex align-items-center width100">
                      <div
                        class="overflow-y-scroll boxStSm"
                        style="height: 50px"
                      >
                        <a href="javascript:void(0)" class="textUnderline"
                          >동서산업㈜ <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >비트큐브 <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >신양금속공업㈜ <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체1
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체2
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체3
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체4
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체5
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체6
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체7
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체8
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체9
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체10
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체11
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체12
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체13
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체14
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체15
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체16
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체17
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체18
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체19
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                        <a href="javascript:void(0)" class="textUnderline"
                          >테스트협력업체20
                          <i class="fa-regular fa-xmark"></i></a
                        >,
                      </div>
                      <a
                        href="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#partnerUserSearch"
                        class="btnStyle btnSecondary ml10"
                        title="업체선택"
                        >업체선택</a
                      >
                    </div>
                  </div>
                  <div class="flex align-items-center mt20">
                    <div class="formTit flex-shrink0 width170px">
                      입찰참가업체
                    </div>
                    <div class="flex align-items-center width100">
                      <div
                        class="overflow-y-scroll boxStSm width100"
                        style="height: 50px"
                      >
                        <a href="javascript:void(0)" class="textUnderline"
                          >가입회원사 전체 <i class="fa-regular fa-xmark"></i
                        ></a>
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
                        value="VAT 별도"
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
                        value="당사 정기 결제 조건"
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
                        value="231,232,400"
                      />
                      <div class="ml10">원</div>
                    </div>
                  </div>
                  <div class="flex align-items-center mt20">
                    <div class="formTit flex-shrink0 width170px">
                      입찰담당자
                    </div>
                    <div class="width100">강입찰</div>
                  </div>
                </div>

                <h3 class="h3Tit mt50">입찰분류</h3>
                <div class="boxSt mt20">
                  <div class="flex align-items-center">
                    <div class="formTit flex-shrink0 width170px">
                      분류군 <span class="star">*</span>
                    </div>
                    <div class="flex align-items-center width100">
                      <select name="" class="selectStyle">
                        <option value="">사업부</option>
                      </select>
                      <select
                        name=""
                        class="selectStyle"
                        style="margin: 0 10px"
                      >
                        <option value="">공정</option>
                      </select>
                      <select name="" class="selectStyle">
                        <option value="">분류</option>
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
                        />
                        <input type="time" class="inputStyle ml10" />
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
                        />
                        <input type="time" class="inputStyle ml10" />
                      </div>
                    </div>
                  </div>
                  <div class="flex align-items-center mt10">
                    <div class="flex align-items-center width100">
                      <div class="formTit flex-shrink0 width170px">
                        개찰자/낙찰자
                      </div>
                      <div class="flex align-items-center width100">
                        <input
                          type="text"
                          name=""
                          id=""
                          class="inputStyle"
                          placeholder=""
                          value="강개찰"
                        />
                        <a
                          href="javascript:void(0)"
                          data-toggle="modal"
                          data-target="#userSearch1"
                          class="btnStyle btnSecondary ml10"
                          title="선택"
                          >선택</a
                        >
                      </div>
                    </div>
                    <div class="flex align-items-center width100 ml80">
                      <div class="formTit flex-shrink0 width170px">
                        입찰공고자
                      </div>
                      <div class="flex align-items-center width100">
                        <input
                          type="text"
                          name=""
                          id=""
                          class="inputStyle"
                          placeholder=""
                          value="강공고"
                        />
                        <a
                          href="javascript:void(0)"
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
                        />
                        <a
                          href="javascript:void(0)"
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
                        />
                        <a
                          href="javascript:void(0)"
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
                      <div class="formTit flex-shrink0 width170px">
                        내역방식
                      </div>
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
                      <div class="formTit flex-shrink0 width170px">
                        납품조건
                      </div>
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
                                내역방식이 파일등록 일 경우 필수로 파일을
                                등록해야 합니다.
                              </div>
                            </li>
                            <li>
                              <div>
                                파일이 암호화 되어 있는지 확인해 주십시오
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
                    <div class="formTit flex-shrink0 width170px">
                      첨부파일(대내용) <span class="star">*</span>
                      <!-- 툴팁 -->
                      <i class="fas fa-question-circle toolTipSt ml5">
                        <div class="toolTipText" style="width: 320px">
                          <ul class="dList">
                            <li>
                              <div>
                                그룹사 내부 입찰관계자가 확인하는 첨부파일
                                입니다.
                              </div>
                            </li>
                            <li>
                              <div>
                                파일이 암호화 되어 있는지 확인해 주십시오
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
                  <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">
                      첨부파일(대외용) <span class="star">*</span>
                      <!-- 툴팁 -->
                      <i class="fas fa-question-circle toolTipSt ml5">
                        <div class="toolTipText" style="width: 300px">
                          <ul class="dList">
                            <li>
                              <div>
                                입찰 참가업체들이 확인하는 첨부파일 입니다.
                              </div>
                            </li>
                            <li>
                              <div>
                                파일이 암호화 되어 있는지 확인해 주십시오
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
                      <!-- //다중파일 업로드 -->
                    </div>
                  </div>
                  <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">
                      세부내역 <span class="star">*</span
                      ><a
                        href="javascript:void(0)"
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
                                href="javascript:void(0)"
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
                                href="javascript:void(0)"
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
                    href="javascript:void(0)"
                    class="btnStyle btnOutline"
                    title="목록"
                    >목록</a
                  >
                  <a
                    href="javascript:void(0)"
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
          </div>
          <!-- //본문 -->

          <!-- 서브 푸터 -->
          <div class="subFooter">
            © ILJIN ALL RIGHTS RESERVED.
            <div class="subFooterUtill">
              <a href="javascript:void(0)" title="공동인증서">공동인증서</a>
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#regProcess"
                title="업체등록절차"
                >업체등록절차</a
              >
              <a
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#biddingInfo"
                title="입찰업무안내"
                >입찰업무안내</a
              >
            </div>
          </div>
          <!-- //서브 푸터 -->
        </div>
        <!-- //conRightWrap -->
      </div>
    </div>
    <!-- //wrap -->
  </div>
</template>
<script>
import _ from "lodash";
import router from "@/router.js";
import Menu from "@/components/Menu.vue";
import Header from "../../../components/Header.vue";
import Footer from "../../../components/Footer.vue";

/**
 * Url JOIN
 */
function _url(...args) {
  args = args.map((x) =>
    String(x || "")
      .trim()
      .replace(/^\/*|\/*$/g, "")
  );
  return args.filter((x) => x).join("/");
}

export default {
  name: "bidProgressInsert",
  components: {
    Menu,
    Header,
    Footer,
  },
  data() {
    return {
      title: "전자입찰 > 입찰진행",
      deleteid: "",
      deleteList: [],
      form: {
        bidNo: "",
        bidName: "",
      },

      data: [],
      subData: [],

      defaultColDef: {
        resizable: true,
        filter: true,
        sortable: true,
      },
      gridApi: null,
      columnApi: null,
      columnDefs: [],
      gridApiSub: null,
      columnApiSub: null,
      columnDefsSub: [],
      frameworkComponents: null,
    };
  },
  methods: {
    goOpen() {
      // code list 조회
      this.$store.commit("loading");
      this.$http
        .post(_url("/api/bid/progresslist"), {
          bidNo: this.form.bidNo,
          bidName: this.form.bidName,
          loginId: this.$store.state.loginInfo.loginId,
        })
        .then((response) => {
          this.data = response.data;

          if (response.data.length == 0) {
            this.$swal({
              type: "warning",
              text: "조회내역이 존재하지 않습니다.",
            });
          }
        })
        .finally(() => {
          this.$store.commit("finish");
        });
    },
  },
  beforeMount() {},
  mounted() {
    console.log(this.$store.state.loginInfo);
    document.title = this.title + " - IJEAS";
    this.goOpen();
  },
};
</script>