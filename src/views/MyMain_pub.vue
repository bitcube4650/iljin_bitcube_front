<template>

    <div>
        <!-- wrap -->
        <div id="wrap">
            <!-- header -->
            <div class="header">
                <div class="headerLeft">
                    <a href="group_main.html" class="headerLogo" title="메인 페이지로 이동"><img src="/images/headerLogo.svg" class="img-responsive" alt="일진그룹 로고"><span>e-Bidding System</span></a>
                    <p>편하고 빠른 전자입찰시스템</p>
                </div>
                <div class="headerRight">
                    <!-- 프로필 드롭다운1 -->
                    <div class="profileDropWrap">
                        <a href="javascript:void(0)" class="profileDrop"><i class="fa-solid fa-circle-user"></i>{{ this.$store.state.loginInfo.userName }}님<i class="fa-solid fa-sort-down"></i></a><!--{{ this.$store.state.loginInfo.loginId }}-->
                        <div class="profileDropMenu">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#piMody1" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#pwMody1" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
                            <a data-toggle="modal" data-target="#logout" title="로그아웃"><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a>
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
                        <a href="javascript:void(0)" class="profileDrop2">{{ this.$store.state.loginInfo.userName }} 님<i class="fa-solid fa-sort-down"></i></a>
                        <div class="profileDropMenu2">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#piMody1" title="개인정보 수정"><i class="fa-light fa-gear"></i>개인정보 수정</a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#pwMody1" title="비밀번호 변경"><i class="fa-light fa-lock-keyhole"></i>비밀번호 변경</a>
                            <a data-toggle="modal" data-target="#logout" title="로그아웃"><i class="fa-light fa-arrow-right-from-bracket"></i>로그아웃</a>
                        </div>
                    </div>
                    <!-- //프로필 드롭다운2 -->
                    <!-- 좌측 입찰상태 표시 -->
                    <div class="myState">
                        <div>진행중<a href="javascript:void(0)" class="myStateNum" title="전자입찰 페이지로 이동"><span>3</span>건</a></div>
                        <div>낙찰 (3개월)<a href="javascript:void(0)" class="myStateNum" title="전자입찰 페이지로 이동"><span>5</span>건</a></div>
                    </div>
                    <!-- //좌측 입찰상태 표시 -->
                    <!-- LNB -->
                    <ul class="conLeft">
                        <li class="depth2None active"><a href="javascript:void(0)"><span><i class="fa-light fa-desktop"></i></span>메인</a></li> <!-- 하위메뉴 없을 때 depth2None 추가 -->
                        <li>			
                            <a href="javascript:void(0)"><span><i class="fa-light fa-file-contract"></i></span>전자입찰</a>
                            <div class="depth2Lnb">
                                <ul>
                                    <li><a href="bidProgress">입찰계획</a></li>
                                    <li><a href="group_sub01_2.html">입찰진행</a></li>
                                    <li><a href="group_sub01_3.html">입찰완료</a></li>
                                    <li><a href="group_sub01_4.html">입찰이력</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>			
                            <a href="javascript:void(0)"><span><i class="fa-light fa-bullhorn"></i></span>공지</a>
                            <div class="depth2Lnb">
                                <ul>
                                    <li><a href="group_sub02_1.html">공지사항</a></li>
                                    <li><a href="group_sub02_2.html">FAQ</a></li>
                                    <li><a href="">메뉴얼</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>			
                            <a href="javascript:void(0)"><span><i class="fa-light fa-buildings"></i></span>업체정보</a>
                            <div class="depth2Lnb">
                                <ul>
                                    <li><a href="group_sub03_1.html">업체승인</a></li>
                                    <li><a href="group_sub03_2.html">업체관리</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>			
                            <a href="javascript:void(0)"><span><i class="fa-light fa-chart-pie-simple"></i></span>통계</a>
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
                            <a href="javascript:void(0)"><span><i class="fa-light fa-memo-circle-info"></i></span>정보관리</a>
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
                                <li>메인</li>
                            </ul>
                        </div>
                        <!-- //conHeader -->
                        <!-- contents -->
                        <div class="contents">
                            <div class="mainBanner"><img src="/images/mainBanner01.jpg" class="img-responsive" alt="투명합니다,함께합니다,미래를 엽니다"></div>

                            <div class="mainConLayout">
                                <div class="mcl_left mainConBox">
                                    <h2 class="h2Tit">전자입찰</h2>
                                    <div class="biddingList">
                                        <a href="javascript:void(0)" class="biddingStep1">
                                            <div class="biddingListLeft"><i class="fa-light fa-flag"></i>입찰계획</div>
                                            <div class="biddingListRight"><span>3</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep2">
                                            <div class="biddingListLeft"><i class="fa-light fa-comments"></i>진행중</div>
                                            <div class="biddingListRight"><span>3</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep3">
                                            <div class="biddingListLeft"><i class="fa-light fa-files"></i>개찰대상</div>
                                            <div class="biddingListRight"><span>1</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep4">
                                            <div class="biddingListLeft"><i class="fa-light fa-file-check"></i>낙찰 (3개월)</div>
                                            <div class="biddingListRight"><span>5</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                        <a href="javascript:void(0)" class="biddingStep5">
                                            <div class="biddingListLeft"><i class="fa-light fa-puzzle-piece"></i>유찰 (3개월)</div>
                                            <div class="biddingListRight"><span>7</span>건<i class="fa-light fa-angle-right"></i></div>
                                        </a>
                                    </div>
                                </div>
                                <div class="mcl_right">
                                    <div class="mainConBox">
                                        <h2 class="h2Tit">협력업체<a href="javascript:void(0)" title="협력업체 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                                        <div class="cooperativ">
                                            <a href="javascript:void(0)" title="미승인 업체 페이지로 이동">
                                                <span class="cooperativ_tit">미승인 업체</span>
                                                <span class="cooperativ_num">0</span>
                                            </a>
                                            <a href="javascript:void(0)" title="승인 업체 (인증서 제출) 페이지로 이동">
                                                <span class="cooperativ_tit">승인 업체 (인증서 제출)</span>
                                                <span class="cooperativ_num">55</span>
                                            </a>
                                            <a href="javascript:void(0)" title="승인 업체 (인증서 미제출) 페이지로 이동">
                                                <span class="cooperativ_tit">승인 업체 (인증서 미제출)</span>
                                                <span class="cooperativ_num">7</span>
                                            </a>
                                            <a href="javascript:void(0)" title="삭제 업체 페이지로 이동">
                                                <span class="cooperativ_tit">삭제 업체</span>
                                                <span class="cooperativ_num">18</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="mainConBox">
                                        <h2 class="h2Tit">공지사항<a href="javascript:void(0)" title="공지사항 페이지로 이동" class="mainConBoxMore">더보기<i class="fa-solid fa-circle-plus"></i></a></h2>
                                        <div class="notiList">
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[시스템 OPEN공지] e-BIDDING SYSTEM(전자입찰시스템)이 오픈했습니다 e-BIDDING SYSTEM(전자입찰시스템)이 오픈했습니다</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[공통] 문자 발송 오류 안내</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[일진전기] 01월 협력사 등록 안내 01월 협력사 등록 안내</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                            <a href="javascript:void(0)" data-toggle="modal" data-target="#notiModal" title="해당 게시글 자세히 보기">
                                                <span class="notiTit">[일진전기] 12월 협력사 등록 안내 12월 협력사 등록 안내</span>
                                                <span class="notiDate">2024-01-15</span>
                                            </a>
                                        </div>
                                    </div>
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
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
                        </div>
                    </div>
                    <!-- //서브 푸터 -->
                </div>
                <!-- //conRightWrap -->
            </div>

        </div>
        <!-- //wrap -->

        <!-- 개인정보 비밀번호 확인 -->
        <div class="modal fade modalStyle" id="piMody1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">비밀번호 확인</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width100px">비밀번호</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="">
                            </div>
                        </div>
                        <p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                            <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#piMody2" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- 개인정보 비밀번호 확인 -->

        <!-- 개인정보 -->
        <div class="modal fade modalStyle" id="piMody2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">개인정보</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">로그인</div>
                            <div class="width100">{{ this.$store.state.loginInfo.userName }}</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">이름</div>
                            <div class="width100">이순신</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">소속 계열사</div>
                            <div class="width100">일신전기</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">사용자 권한</div>
                            <div class="width100">각사관리자</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width120px">개찰권한</div>
                            <div class="width100">아니오</div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="flex align-items-center width100">
                                <div class="width100">최종변경일 : 2024-01-30</div>
                                <a href="javascript:void(0)" data-toggle="modal" data-target="#pwMody2" class="btnStyle btnSecondary btnSm flex-shrink0 ml10" title="비밀번호 변경">비밀번호 변경</a>
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">휴대폰 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="010-1234-1234"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">유선전화 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="02-123-1234"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">이메일 <span class="star">*</span></div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="james@iljin.co.kr"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">직급</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="과장"></div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">부서</div>
                            <div class="width100"><input type="text" name="" id="" class="inputStyle" placeholder="" value="경영지원"></div>
                        </div>

                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#piMody3" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //개인정보 -->

        <!-- 개인정보 저장 얼럿 -->
        <div class="modal fade modalStyle" id="piMody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">개인정보를 수정하였습니다.</div>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //개인정보 저장 얼럿 -->

        <!-- 비밀번호 확인 -->
        <div class="modal fade modalStyle" id="pwMody1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">비밀번호 확인</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width100px">비밀번호</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="">
                            </div>
                        </div>
                        <p class="text-center mt20"><i class="fa-light fa-circle-info"></i> 안전을 위해서 비밀번호를 입력해 주십시오</p>

                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                            <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#pwMody2" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //비밀번호 확인 -->

        <!-- 비밀번호 변경 -->
        <div class="modal fade modalStyle" id="pwMody2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:510px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">비밀번호 변경</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width120px">비밀번호</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
                            </div>
                        </div>
                        <div class="flex align-items-center mt10">
                            <div class="formTit flex-shrink0 width120px">비밀번호 확인</div>
                            <div class="width100">
                                <input type="password" name="" id="" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
                            </div>
                        </div>

                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#pwMody3" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //비밀번호 변경 -->

        <!-- 비밀번호 저장 얼럿 -->
        <div class="modal fade modalStyle" id="pwMody3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText2">비밀번호를 저장하였습니다.</div>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //비밀번호 저장 얼럿 -->

        <!-- 로그아웃 -->
        <div class="modal fade modalStyle" id="logout" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:420px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <div class="alertText1">로그아웃 하시겠습니까?</div>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                            <a @click="logout" class="modalBtnCheck" data-toggle="modal" title="확인">확인</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //로그아웃 -->

        <!-- 공지사항 자세히 보기 -->
        <div class="modal fade modalStyle" id="notiModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:600px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">공지사항</h2>
                        <div class="flex align-items-center">
                            <div class="formTit flex-shrink0 width100px">제목</div>
                            <div class="width100 line140">[공통] Edge에서 Internet Explore(IE) 호환 설정 방법</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width100px">작성자</div>
                            <div class="width100">관리자</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width100px">공지일시</div>
                            <div class="width100">2023-12-31 13:21</div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width100px">조회수</div>
                            <div class="width100">2342</div>
                        </div>
                        <div class="modalBoxSt overflow-y-scroll height250px mt30">
                            <p>Edge로 전자입찰을 사용하실 때 오류가 나는 경우<br>(※ [ 설치파일#1 ] [ 설치파일#2 ] 두 개의 설치 파일을 전부 설치 하셨다는 전제 하에 오류입니다. )<br><br>1. 팝업창의 정보가 보이지 않는다.<br>2. 입찰에 파일을 첨부 후 입찰하기 버튼을 클릭했을 때 105 또는 138 오류가 나타난다.<br><br>해당 오류가 나타난 경우 첨부된 파일을 참고하시어 설정 바랍니다.<br><br>테스트<br><br>테스트</p>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width100px">첨부파일</div>
                            <div class="width100">
                                <a href="javascript:void(0)" class="textUnderline">전자입찰 Edge 사용 설정안내.pptx</a>
                            </div>
                        </div>

                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- 공지사항 자세히 보기 -->

        <!-- 업체등록절차 -->
        <div class="modal fade modalStyle" id="regProcess" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:700px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">업체등록 절차</h2>
                        <div class="modalTopBox">
                            <ul>
                                <li><div>업체 등록신청 후 서류심사로 인해 최대 3일 소요할 수 있습니다.</div></li>
                                <li><div>서류심사 결과는 작성된 담당자 이메일로 전달됩니다.</div></li>
                            </ul>
                        </div>
                        <dl class="regProList mt20">
                            <dt><i class="fa-light fa-message-pen"></i></dt>
                            <dd>
                                <h3>Step.1  <span class="textMainColor">[업체등록신청]</span></h3>
                                <ul class="dList mt10">
                                    <li><div>로그인 페이지에서 [회원가입] 버튼을 이용, 약관동의 및 회원가입을 신청합니다.</div></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="regProList mt10">
                            <dt><i class="fa-light fa-ballot-check"></i></dt>
                            <dd>
                                <h3>Step.2  <span class="textMainColor">[업체심사(서류,실사)]</span></h3>
                                <ul class="dList mt10">
                                    <li><div>계열사 업체관리 담당자는 신청 정보를 확인합니다.</div></li>
                                    <li><div>업체 규모, 납품실적, 품질인증, 신용평가자료 등 서류 검토</div></li>
                                    <li><div>필요시 실사 병행합니다.</div></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="regProList mt10">
                            <dt><i class="fa-light fa-file-check"></i></dt>
                            <dd>
                                <h3>Step.3  <span class="textMainColor">[업체등록]</span></h3>
                                <ul class="dList mt10">
                                    <li><div>심사 후 요구조건에 적합한 업체 등록을 확정합니다.</div></li>
                                    <li><div>등록된 이메일로 심사결과를 통보합니다.</div></li>
                                </ul>
                            </dd>
                        </dl>
                        <dl class="regProList mt10">
                            <dt><i class="fa-light fa-rectangle-history-circle-user"></i></dt>
                            <dd>
                                <h3>Step.4  <span class="textMainColor">[업체평가(사후관리)]</span></h3>
                                <ul class="dList mt10">
                                    <li><div>연간 거래실적을 바탕으로 업체를 평가합니다.</div></li>
                                    <li><div>계열사 간 협력업체 등록 시 평가자료로 반영됩니다.</div></li>
                                </ul>
                            </dd>
                        </dl>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //업체등록절차 -->

        <!-- 업무(입찰)안내 -->
        <div class="modal fade modalStyle" id="biddingInfo" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:800px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">업무(입찰)안내</h2>
                        <div class="modalTopBox">
                            <ul>
                                <li><div>그룹사(당사)에서 전자입찰을 공고/개찰/낙찰 처리 합니다.</div></li>
                                <li><div>협력업체는 공고된 입찰을 확인하고 개찰 및 입찰 결과를 확인할 수 있습니다.</div></li>
                                <li><div>입찰 진행중 그룹사 개찰담당자는 입찰을 유찰할 수 있습니다.<br>(입찰에 참여한 업체에게 메일 발송)</div></li>
                            </ul>
                        </div>
                        <table class="biddingInfoTbl mt20">						
                            <caption>업무(입찰)안내의 절차(그룹사,협력업체), 주요내용을 나타내는 표</caption>
                            <colgroup>
                                <col style="width:23%">
                                <col style="width:23%">
                                <col style="width:64%">
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <th colspan="2">절차</th>
                                    <th rowspan="2" class="end">주요내용</th>
                                </tr>
                                <tr>
                                    <th>그룹사</th>
                                    <th>협력업체</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colspan="2" style="position:relative"><img src="/images/biddingInfo.png" class="img-responsive" alt="절차" style="position:absolute; top:0; left:0"></td>
                                    <td class="text-left end">
                                        <ul class="dList">
                                            <li><div>입찰 담당자는 입찰 계획을 등록합니다.</div></li>
                                            <li><div>입찰 공고자는 입찰 계획을 확인하고 입찰을 공고합니다.</div></li>
                                            <li><div>공고 시 지정업체 담당자에게 메일 발송됩니다.</div></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-left end">
                                        <ul class="dList">
                                            <li><div>공고된 입찰을 조회합니다.</div></li>
                                            <li><div>지명입찰 일 경우 담당자는 메일을 통해 확인할 수 있습니다.</div></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-left end">
                                        <ul class="dList">
                                            <li><div>입찰 세부내역을 확인하고 견적서를 제출합니다.</div></li>
                                            <li><div>투찰(견적서 제출) 시 공동인증서를 통해 인증을 합니다.</div></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-left end">
                                        <ul class="dList">
                                            <li><div>입찰의 제출마감일시가 지나면 개찰자는 업체의 투찰 내역을<br>확인할 수 있습니다.</div></li>
                                            <li><div>개찰 시 공동인증서 암호를 입력해야 합니다.</div></li>
                                            <li><div>진행 중인 입찰에 대해서 공고자는 입찰을 유찰 할 수 있습니다.</div></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-left end">
                                        <ul class="dList">
                                            <li><div>개찰자는 낙찰업체를 선정할 수 있습니다.<br>(선정된 업체에게는 낙찰 메일 발송)</div></li>
                                            <li><div>개찰자는 개찰 된 입찰에 유찰 또는 재입찰 할 수 있습니다.</div></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2"></td>
                                    <td class="text-left end">
                                        <ul class="dList">
                                            <li><div>낙찰된 내역을 확인할 수 있습니다.</div></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //업무(입찰)안내 -->
    </div>


    <!--//////////////////////////////////////////////////////////////////////////////////////////-->
    <!--기존 소스-->
    <!--
    <div class="wrap type-main">

        <div class="header">
            <div class="logo" title="전체메뉴">
                <a href="#none"></a>
                <button>메뉴</button>
            </div>
            <div class="user-info">
                <span class="user-msg">[{{ this.$store.state.loginInfo.loginDeptNm }}] <span class="point-blue">{{ this.$store.state.loginInfo.userName }}</span> <span>({{ this.$store.state.loginInfo.loginId }})</span></span>
                <a href="/" class="ico ico-home" title="HOME"></a>
                <a href="/quickSetting" class="ico ico-top02" title="환경설정"></a>
                <a href="#" class="ico ico-top03" title="메뉴얼" @click="menual()"></a>
                <a href="#" class="ico ico-logout" title="로그아웃" @click="logout"></a>
            </div>
        </div>


        <div class="menu-wrap">
            <ul class="menu">
                <li v-for="(menuhead,i) in menuheads" :key="i">
                    <a>{{menuhead.menuNm}}</a>
                    <ul>
                        <li v-for="(mainmenu,i) in mainmenus" :key="i">
                            <a v-if="menuhead.menuNo === mainmenu.upperMenuNo">

                                <router-link :to="{path:mainmenu.programFileNm}"><a>{{mainmenu.menuNm}}</a></router-link>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>



        <div class="contents2 main_blue">
            <div class="inner">
                <div class="clearfix">

                    <div class="main_quick_top">

                        <ul v-if="myquicks === null" class="quick-menu" >
                            <li v-for="index in six"  class="">
                                <a href=""></a>
                            </li>
                            <li class="ico06-07 card"><router-link to="/quickSetting">시스템관리</router-link></li>
                        </ul>
                        <ul v-else-if="myquicks.length !== 6" class="quick-menu" >
                            <li v-for="(quick,i) in myquicks" :class="quickIcon[i]">
                                <router-link :to="{path:quick.programFileNm}">{{quick.menuNm}}<div class="more_link">자세히보기</div></router-link>

                            </li>
                            <li v-for="index in six"  class="no_choice">
                                <div class="no_choice_icon"></div>
                                <h4>개인별 권한</h4>
                                <h5>개인별로 권한이 상이함</h5>
                            </li>
                            <li class="ico06-07 card"><router-link to="/codeMng">코드관리</router-link></li>
                        </ul>

                        <ul v-else class="quick-menu" >
                            <li v-for="(quick,i) in myquicks" :class="quickIcon[i]">
                                <router-link :to="{path:quick.programFileNm}">{{quick.menuNm}}</router-link>
                            </li>
                        </ul>


                    </div>


                    <div class="box_wrap">
                        <div class="b_left">

                            <div class="white_box_wrap">
                                <div class="main_card_box">
                                    <div class="c_left">

                                        <div class="card-box">
                                            <img src="img/img_card.png">
                                        </div>


                                        <div class="box_title">

                                            <router-link to="pExpense?lnk=mainCard">더보기</router-link>
                                        </div>
                                    </div>
                                    <div class="c_right">
                                        <div class="line-list">

                                            <ul class="line-list using-list">
                                                <li v-for="(unCard,i) in mymains.unCardList" :key="i">
                                                    <router-link to="pExpense?lnk=mainCard">

                                                        <span class="store">{{unCard.merchNm}}</span>
                                                        <span class="money">{{unCard.apprTot | currency}}<b>원</b></span>
                                                        <span class="date">{{unCard.apprDate}}</span>

                                                    </router-link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div class="white_box_wrap mgt20 height164">
                                <div class="box_title mgb10">
                                    <h1 class="box-title dp-ib">경비처리내역</h1>
                                    <router-link class="btn-more mgl10" to="/slipLst">더보기</router-link>
                                </div>
                                <div class="data-box">
                                    <ul class="line-list">
                                        <li v-for="(rcSlip,i) in mymains.rcSlipList" :key="i">
                                            <a :href="rcSlipData[i]">
                                                <span class="txt">{{rcSlip.slipTypeNm}}</span>
                                                <span class="money">{{rcSlip.totAmt | currency}}</span>
                                                <span class="status statue-wait" >{{rcSlip.slipStatNm}}</span>
                                                <span class="status01">{{rcSlip.hdSgtxt}}</span>
                                                <span class="date">{{rcSlip.chgDtm}}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                        <div class="b_right">

                            <div class="white_box_wrap status">
                                <div class="box_title">
                                    <h1 class="box-title dp-ib">사용현황</h1>
                                    <router-link class="btn-more mgl10" to="/slipLst">더보기</router-link>
                                </div>
                                <div class="data-box mgt35" >

                                    <div class="graph-box">
                                        <div id="chartbox" style="width:375px;height:200px;padding-top:40px"></div>
                                    </div>

                                    <div>

                                        <ul v-if="psConds !==''" class="status-list">
                                            <li v-for="(psCond,i) in psConds" :key="i">
                                                <span class="dot"></span>{{psCond.acctNm}}
                                            </li>
                                        </ul>

                                        <ul v-if = "psConds.length===0" class="status-list">
                                            <li>
                                                <span class="dot"></span>없음
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </div>



                <div class="main_ing_wrap">
                    <ul>
                        <li class="blue blue01">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="pExpense?lnk=main">
                                        <span> {{ this.uncounts.untrCard && this.uncounts.untrCard.length > 0 ? this.uncounts.untrCard[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">0<b>건</b></div>
                            </span>
                            <span class="txt-kor">법인카드 미처리</span>
                            <span class="txt-eng">Corporate card unprocessed</span>
                        </li>
                        <li class="blue blue02">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/ebillSlipRcvLst?dealStatCd=10">
                                        <span>{{ this.uncounts.untrEtax && this.uncounts.untrEtax.length > 0 ? this.uncounts.untrEtax[0].cnt : ''}}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">121<b>건</b></div>
                            </span>
                            <span class="txt-kor">세금계산서 미처리</span>
                            <span class="txt-eng">Unprocessed tax invoice</span>
                        </li>
                        <li class="blue blue03">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/slipLst?slipStatCd=10">
                                        <span>{{ this.uncounts.unApprSlip && this.uncounts.unApprSlip.length > 0 ? this.uncounts.unApprSlip[0].cnt : ''}} {{this.uncounts.unApprErpSlip && this.uncounts.unApprErpSlip.length > 0 ?  '(' + this.uncounts.unApprErpSlip[0].cnt + ')' : ''}}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">0<b>건</b></div>
                            </span>
                            <span class="txt-kor">전표미상신</span>
                            <span class="txt-eng">Not approved for slip</span>
                        </li>
                        <li class="blue blue04">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/apprPendLst">
                                        <span>{{ this.uncounts.todoAppr && this.uncounts.todoAppr.length > 0 ? this.uncounts.todoAppr[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right" style="display:none">0<b>건</b></div>
                            </span>
                            <span class="txt-kor">결재</span>
                            <span class="txt-eng">Approve proposal</span>
                        </li>
                        <li class="blue blue05">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/slipLst?slipStatCd=40">
                                        <span>{{ this.uncounts.rjctAppr && this.uncounts.rjctAppr.length > 0 ? this.uncounts.rjctAppr[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right">
                                    <router-link to="/slipLst?slipStatCd=60">
                                        <span>{{ this.uncounts.rjctFnc && this.uncounts.rjctFnc.length > 0 ? this.uncounts.rjctFnc[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                            </span>
                            <span class="txt-kor">전표반려</span>
                            <span class="txt-eng">Return a document</span>
                        </li>
                        <li class="blue blue06">
                            <span class="count">
                                <div class="c_left">
                                    <router-link to="/bdgtReqLst?budStatCd=40">
                                        <span>{{ this.uncounts.rjctBjt && this.uncounts.rjctBjt.length > 0 ? this.uncounts.rjctBjt[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                                <div class="c_right">
                                    <router-link to="/bdgtReqLst?budStatCd=60">
                                        <span>{{ this.uncounts.rjctPln && this.uncounts.rjctPln.length > 0 ? this.uncounts.rjctPln[0].cnt : '' }}</span><b>건</b>
                                    </router-link>
                                </div>
                            </span>
                            <span class="txt-kor">예산반려</span>
                            <span class="txt-eng">Return a document</span>
                        </li>
                    </ul>

                </div>

            </div>

        </div>



        <div class="footer2">
            <span class="copyright">COPYRIGHT © ILJIN ALL RIGHTS RESERVED.</span>
        </div>

    </div>
    -->


</template>

<script>
import mixinSlip from '@/mixin/slip';
import menual from '@/components/Menual.vue';
import DhxGrid from '@/components/DhxGrid.vue';
import router from '@/router.js';

export default {
  name: 'MyMain',
  mixins: [ mixinSlip],
  components: {
    DhxGrid,
    menual,
    router
  },
  data() {
    return {
        /*
        //메인화면 전체데이터
        mymains: [],
        //1.메인메뉴
        mainmenus:[],
        menuheads:[],
        menulink:[],
        //2.메인바로가기(퀵메뉴)
        mysets:[],
        myquicks:[],
        six:[],
        quickIcon:[],
        //3.메인법인카드내역
        unCardLists:[],
        uCard:[],
        //4.메인경비처리내역
        rcSlipLists:[],
        rcSlipData:[],
        //5. 사용현황
        psConds:[],
        piData:[],
        //6.메인처리예정건수
        uncounts: [],
        */
    }
  },
  /* 숫자에 콤마(,)넣기*/
  filters:{
    /*
    currency:function (value) {
        var num = new Number(value);
        return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")
    }
    */
  },
  mounted() {
      //프로필 드롭다운 (헤더)
    $('.profileDrop').click(function() {
        $('.profileDropWrap').addClass('active');
    });
    $(document).mouseup(function (e){
        var LayerPopup1 = $(".profileDropWrap");
        if(LayerPopup1.has(e.target).length === 0){
            LayerPopup1.removeClass("active");
        }
    });
    //프로필 드롭다운 (LNB)
    $('.profileDrop2').click(function() {
        $('.profileDropWrap2').addClass('active');
    });
    $(document).mouseup(function (e){
        var LayerPopup1 = $(".profileDropWrap2");
        if(LayerPopup1.has(e.target).length === 0){
            LayerPopup1.removeClass("active");
        }
    });

    //LNB
    $('.conLeft > li > a').click(function() {
        $('.depth2Lnb').hide();
        $(this).next('.depth2Lnb').fadeToggle();
        $('.conLeft > li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    //select
    const label = document.querySelectorAll('.selLabel');
    label.forEach(function(lb){
        lb.addEventListener('click', e => {
            let optionList = lb.nextElementSibling;
            let optionItems = optionList.querySelectorAll('.optionItem');
            clickLabel(lb, optionItems);
        })
    });
    const clickLabel = (lb, optionItems) => {
        if(lb.parentNode.classList.contains('active')) {
            lb.parentNode.classList.remove('active');
            optionItems.forEach((opt) => {
                opt.removeEventListener('click', () => {
                    handleSelect(lb, opt)
                })
            })
        } else {
            lb.parentNode.classList.add('active');
            optionItems.forEach((opt) => {
                opt.addEventListener('click', () => {
                    handleSelect(lb, opt)
                })
            })
            
        }
    }
    const handleSelect = (label, item) => {
        label.innerHTML = item.textContent;
        label.parentNode.classList.remove('active');		
        $('.selLabel').addClass('selAct');
    }



	//datepicker
	$( function() {
		$( ".datepicker" ).datepicker();
	} );

	$(".datepicker").datepicker({
		changeMonth: true, 
		changeYear: true,
		minDate: '-50y',
		nextText: '다음 달',
		prevText: '이전 달',
		yearRange: 'c-50:c+20',
		currentText: '오늘 날짜',
		closeText: '닫기',
		dateFormat: "yy-mm-dd",
		showAnim: "slide",
		showMonthAfterYear: true, 
		dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
	});




	//faq
	$('.faq1').show();
	$(".faqList > a").on("click", function (e) {
		$('.faq1').hide();
		e.preventDefault();
		var filterValue = $(this).data("filter");
		$(".faq_item_wrap div").removeClass("show");
		$(filterValue).addClass("show");
	});
	//faq
	$('.faq_item_wrap > div').click(function() {
		$('.faq_item_wrap > div').removeClass('active');
		$(this).addClass('active');
	});

	//tabStyle
	$('.tabStyle > a').click(function() {
		$('.tabStyle > a').removeClass("active");
		$(this).addClass("active");
	});


    //modal
    $(document).on('show.bs.modal', '.modal', function () {
        // 현재 열린 모달의 개수
        var visibleModals = $('.modal:visible');
        
        // 모달이 열릴 때마다 현재 열린 모달의 z-index를 가장 높게 조정
        var zIndex = 1040 + (10 * visibleModals.length);
        $(this).css('z-index', zIndex);
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1);
        $('.modal-dialog').css('z-index', zIndex + 1);

        // 이전에 열린 모달에는 modal-stack 클래스 추가
        visibleModals.not(this).addClass('modal-stack');
    });

    $(document).on('hidden.bs.modal', '.modal', function () {
        // 모달이 닫힐 때 modal-stack 클래스를 제거
        $('.modal:visible').removeClass('modal-stack');
        
        // 현재 열린 모달의 개수를 기준으로 z-index 값을 설정
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        
        // 최상위에 있는 모달의 z-index 값을 다시 설정
        $('.modal:visible').last().css('z-index', zIndex);
        
        // 최상위에 있는 모달의 modal-backdrop과 modal-dialog의 z-index도 다시 설정
        $('.modal-backdrop:visible').last().css('z-index', zIndex - 1);
        $('.modal-dialog:visible').last().css('z-index', zIndex + 1);
    });


    //이미지맵 반응형

	$('img[usemap]').rwdImageMaps();





      this.getMyMain();
      this.mainMenu();
      this.getStartDate();
  },
  methods: {
    getStartDate(){
      //22.5.10 open 회계일자 조회
      let openDt = ''
      this.$http.get(`/api/acctPeriod/openDate`)
        .then(response => {
          if(response.data){
            openDt = response.data.toString()
            this.$store.commit('updateOpenDt', openDt)
          }else{
            this.$store.commit('updateOpenDt', this.$moment().format('YYYYMMDD'))
          }
        }).catch(response => {
        this.$store.commit('updateOpenDt', null)
        console.log(response)
      })
    },
    //21.03.25 메뉴얼 다운로드
    menual(){
        this.$modal.open({
        component: menual,
      });
    },

    //로그아웃
    logout() {

        this.$http
              .get('/logout')
              .then(() => {
                this.$store.commit('logout');
                this.$cookie.delete('loginInfo');
                //this.$router.push({path: `/backOffice`});
              })
              .catch((e) => {
                console.error(e);
              })

    //------------------------------------------------------
    //기존 소스
    /* 
      this.$swal({
        type: 'info',
        html: `그룹웨어 로그아웃이 선행되야 로그아웃이 됩니다.<br>아닌경우 다시 자동 로그인 처리됩니다.<br>로그아웃을 진행하시겠습니까?`,
        showCancelButton: true,
        confirmButtonText: '예',
        cancelButtonText: '아니오',
      }).then((result) => {
        if (result.value) {
          this.$http
              .get('/logout')
              .then(() => {
                this.$store.commit('logout');
                this.$cookie.delete('loginInfo');
                this.$router.push({path: `/backOffice`});
              })
              .catch((e) => {
                console.error(e);
              })
        }
      })
    */
    },
    //메인화면 데이터 불러오기
    getMyMain() {
        this.$http.get(`/api/dashboard/${this.$store.state.loginInfo.compCd}/${this.$store.state.loginInfo.loginId}`)
        .then(response => {
            //모든 데이터
            this.mymains = response.data;

            //1. 메인메뉴
            this.mainmenus = response.data.menuList;
            let menuupper=[];
            for(let i=0; i<this.mainmenus.length; i++){
                if(this.mainmenus[i].upperMenuNo==0){
                    menuupper.push(this.mainmenus[i]);
                }
            }

            //메뉴순서 정렬
            this.mainmenus.sort(function (a, b) {
                return a.menuOrder < b.menuOrder ? -1 : a.menuOrder > b.smenuOrdereq ? 1 : 0;
            });

            this.menuheads =menuupper;

            //2.메인바로가기(퀵메뉴)
            this.myquicks = response.data.userMenuList;
            if(this.myquicks==null){
                this.six = 5;
            } else {
                for(let ic=0; ic<this.myquicks.length; ic++){
                    switch (this.myquicks[ic].menuIconCd) {
                        case '10':
                            this.quickIcon.push( "ico01 card");
                            break;
                        case '20':
                            this.quickIcon.push( "ico02 card");
                            break;
                        case '30':
                            this.quickIcon.push( "ico03 card");
                            break;
                        case '40':
                            this.quickIcon.push( "ico04 card");
                            break;
                        case '50':
                            this.quickIcon.push( "ico05 card");
                            break;
                        case '60':
                            this.quickIcon.push( "ico06 card");
                            break;
                        case '70':
                            this.quickIcon.push( "ico06-01 card");
                            break;
                        case '80':
                            this.quickIcon.push( "ico06-02 card");
                            break;
                        case '90':
                            this.quickIcon.push( "ico06-03 card");
                            break;
                        case '100':
                            this.quickIcon.push( "ico06-04 card");
                            break;
                        case '110':
                            this.quickIcon.push( "ico06-05 card");
                            break;
                        case '120':
                            this.quickIcon.push( "ico06-06 card");
                            break;
                    }
                }
                if(this.myquicks.length!=6){
                    this.six = 5-this.myquicks.length;
                }
            }

            //3. 메인법인카드내역
            this.unCardLists = response.data.unCardList;

            //4. 메인경비처리내역
            this.rcSlipLists = response.data.rcSlipList;
            let rc = [];
            if(this.rcSlipLists != null){
                for(let x=0; x<this.rcSlipLists.length;x++){
                    switch (this.rcSlipLists[x].slipTypeCd) {
                        case 'E1':
                            //개인비용(경비) 신청서
                            rc = '/pExpense/'+ this.rcSlipLists[x].eaSlipNo;
                            break
                        case 'E2':
                            //개인비용(경비)외 신청서
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/exctpExpense/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break
                        case 'E3':
                            //전자세금계산서
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/ebillSlipReg/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break
                        case 'E4':
                            //수기세금계산서
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/billSlipReg/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break
                        case 'E5':
                            //법인카드 분할전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/cardSlipReg/'+ this.rcSlipLists[x].eaSlipNo;
                            } else {
                                rc = '/billSlipMng/'+ this.rcSlipLists[x].eaSlipNo;
                            }
                            break

                        case 'E11':
                            //자금지급전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/paySlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        case 'E12':
                            //구매전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/purSlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        case 'E13':
                            //공사비전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/consSlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        case 'E14':
                            //기타전표
                            if(this.rcSlipLists[x].slipStatCd==='10') {
                                rc = '/etcSalesSlipLst'
                            } else {
                                rc = '/slipLst/'+ this.rcSlipLists[x].slipTypeCd;
                            }
                            break
                        default :
                            rc = '';
                            break
                    }
                    this.rcSlipData.push(rc);
                }
            }

            //5.메인사용현황
            this.psConds = response.data.psCond;
            let pieData=[];
            if(this.psConds ===null){
                this.psConds = [];
            }
            if(this.psConds.length>0){
                pieData = this.psConds;

                for(let i=0; i<pieData.length; i++){

                    pieData[i].sumAcctAmtTxt = this.getNumberFormat(pieData[i].sumAcctAmt)

                    if(i===0){
                        pieData[i].color="#2a84c9";
                    } else if(i===1) {
                        pieData[i].color="#f05f52";
                    } else if(i===2) {
                        pieData[i].color="#f5920c";
                    } else if(i===3) {
                        pieData[i].color="#14c7fe";
                    } else if(i===4) {
                        pieData[i].color="#69d697";
                    } else {
                        pieData[i].color="#f3c563";
                    }
                }
            }
            let myPieChart = new dhtmlXChart({
                view:"donut",
                container:"chartbox",
                value:"#sumAcctAmt#",
                color:"#color#",
                radius:65,
                innerRadius:30,
                tooltip:"<b>#acctNm#: #sumAcctAmtTxt#</b>",
                shadow:false,
            });
            myPieChart.parse(pieData,"json");

            //6.메인처리예정건수
            this.uncounts = response.data.counts;
        });
    },
    //메뉴wrap
    mainMenu(){
        $(".wrap.type-main .header .logo > button").click(function(){
            if($(".menu-wrap").css("display") == "none"){
                $(".menu-wrap").slideDown(300);
            }else{
                $(".menu-wrap").slideUp(300);
            }
        });
    },
    goPage(params) {
        // eslint-disable-next-line
        console.log("페이지이동", params)
        let targetName = (params.eaSlipNo === null || params.slipStatCd === '10') ? 'pExpense' : 'billSlipMng';
        this.$router.push({ name: targetName, params: params });
    },
    //////////////////////////////////////////////////////////////////
  },
};

</script>


<!-- <style scoped lang="scss">
@import "public/css/main";

.wrap.lnb.minimized~.contents2 {
    left: 50px;
}

/* contents */

.contents2 {
    max-width: 100%;
    min-width: 1033px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    transition: .3s;
    padding: 0px 25px 33px 25px;
    /*overflow-y: auto;*/
}


.contents2>.inner-box {
    padding-bottom: 80px;
    min-height: 80vh;
}

.contents2 .content-name {
    margin-top: 33px;
}

.contents2 .content-name:after {
    clear: both;
    content: '';
    display: block;
}

.contents2 .content-name h2 {
    font-size: 24px;
    color: #061c3a;
    font-family: 'NotoM';
    float: left;
    line-height: 1;
}

.contents2 {
    /*overflow-y:auto;*/
    padding: 0;
}

.contents2>.inner-box {
    max-width: 100%;
    min-width: 1033px;
    padding: 0px 25px 33px 25px;
}
.contents2 div.gridbox_material.gridbox .xhdr {
    background: #f3f5f9;
    border-bottom: none;
    max-height: 100%;
    margin-top: -1px;
}

.contents2 .grid-tbl-box.type03 div.gridbox_material.gridbox .xhdr {
    height: 112px!important;
}
.contents2 div.gridbox_material.gridbox table.hdr td div.hdrcell {
    font-size: 14px;
    line-height: 24px;
    padding: 5.5px 0px;
    text-align: center;
    font-family: NotoM;
    color: #222;
}
.right .white-box .data-box{
    height: 239px;
}
</style> -->
