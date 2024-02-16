<template>
<div>
    <div class="joinWrap">
        <div class="inner">
            <div class="joinTop">
                <ul class="conHeaderCate">
                    <li>회원가입</li>
                    <li>회원가입</li>
                </ul>
            </div>
            <div class="conTopBox">
                <ul class="dList">
                    <li><div>회원가입은 가입 신청 후 승인과정을 통해 정식으로 가입이 됩니다. (가입 승인은 최대 3일 소요됩니다)</div></li>
                    <li><div>가입 승인이 완료되면 관리자에게 이메일로 승인 되었음을 알려드립니다.</div></li>
                    <li><div>회원가입 <span class="star">*</span> 부분은 필수 입력 정보 입니다.</div></li>
                </ul>
            </div>

            <h3 class="h3Tit mt50">회사 정보</h3>
            <div class="boxSt mt20">
                <div class="flex align-items-center">
                    <div class="formTit flex-shrink0 width170px">가입희망 계열사 <span class="star">*</span></div>
                    <div class="width100">
                        <select name="" class="selectStyle">
                            <option value="">계열사를 선택해 주세요</option>
                        </select>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">업체유형 1 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#itemSelect" class="btnStyle btnSecondary ml10" title="조회">조회</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">업체유형 2</div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle readonly" placeholder="우측 검색 버튼을 클릭해 주세요" readonly>
                        <a href="javascript:void(0)" data-toggle="modal" data-target="#itemSelect" class="btnStyle btnSecondary ml10" title="조회">조회</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">회사명 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">대표자명 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">사업자등록번호 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                        <span style="margin:0 10px">-</span>
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                        <span style="margin:0 10px">-</span>
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">법인번호 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                        <span style="margin:0 10px">-</span>
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">자본금 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="ex) 10,000,000">
                        <div class="ml10">원</div>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">설립년도 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="ex) 2021">
                        <div class="ml10">년</div>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">대표전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">팩스</div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">회사주소 <span class="star">*</span></div>
                    <div class="width100">
                        <div class="flex align-items-center width100">
                            <input type="text" name="" id="" class="inputStyle readonly" placeholder="주소 조회 클릭" readonly>
                            <a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="주소 조회">주소 조회</a>
                        </div>
                        <div class="mt5"><input type="text" name="" id="" class="inputStyle readonly" placeholder="" readonly></div>
                        <div class="mt5"><input type="text" name="" id="" class="inputStyle" placeholder="상세 주소 입력"></div>
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">사업자등록증 <span class="star">*</span></div>
                    <div class="width100">
                        <!-- 다중파일 업로드 -->
                        <div class="upload-boxWrap">
                            <div class="upload-box">
                                <input type="file" id="file-input">
                                <div class="uploadTxt">
                                    <i class="fa-regular fa-upload"></i>
                                    <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                </div>
                            </div>
                            <div class="uploadPreview" id="preview">
                            </div>
                        </div>
                        <!-- //다중파일 업로드 -->
                    </div>
                </div>
                <div class="flex mt10">
                    <div class="formTit flex-shrink0 width170px">첨부파일 <span class="star">*</span>
                        <!-- 툴팁 -->
                        <i class="fas fa-question-circle toolTipSt ml5">
                            <div class="toolTipText" style="width:420px">
                                <ul class="dList">
                                    <li><div>첨부파일은 간단한 업체 소개 자료 등의 파일을 첨부해 주십시오.</div></li>
                                    <li><div>1개  이상의 파일을 첨부하실 경우 Zip으로 압축하여 첨부해 주십시오</div></li>
                                    <li><div>파일은 10M 이상을 초과할 수 없습니다.</div></li>
                                </ul>
                            </div>
                        </i>
                        <!-- //툴팁 -->
                    </div>
                    <div class="width100">
                        <!-- 다중파일 업로드 -->
                        <div class="upload-boxWrap">
                            <div class="upload-box">
                                <input type="file" id="file-input2">
                                <div class="uploadTxt">
                                    <i class="fa-regular fa-upload"></i>
                                    <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                </div>
                            </div>
                            <div class="uploadPreview" id="preview2">
                            </div>
                        </div>
                        <!-- //다중파일 업로드 -->
                    </div>
                </div>
            </div>



            <h3 class="h3Tit mt50">관리자 정보</h3>
            <div class="boxSt mt20">
                <div class="flex align-items-center">
                    <div class="formTit flex-shrink0 width170px">이름 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="우측 검색 버튼을 클릭해 주세요">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">이메일 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="ex) sample@iljin.co.kr">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">아이디 <span class="star">*</span></div>
                    <div class="flex align-items-center width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="영문, 숫자 입력(8자 이내) 후 중복확인">
                        <a href="javascript:void(0)" class="btnStyle btnSecondary flex-shrink0 ml10" title="중복 확인">중복 확인</a>
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="password" name="" id="" class="inputStyle" placeholder="대/소문자, 숫자, 특수문자 2 이상 조합(길이 8~16자리)">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">비밀번호 확인 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="password" name="" id="" class="inputStyle" placeholder="비밀번호와 동일해야 합니다.">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">휴대폰 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">유선전화 <span class="star">*</span></div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">직급</div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
                <div class="flex align-items-center mt10">
                    <div class="formTit flex-shrink0 width170px">부서</div>
                    <div class="width100">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                </div>
            </div>

            <div class="text-center mt50">
                <a href="javascript:void(0)" data-toggle="modal" data-target="#joinBtn" class="btnStyle btnPrimary btnMd" title="회원가입 신청">회원가입 신청</a>
            </div>

            
        </div>
        <div class="subFooter mt50">
            © ILJIN ALL RIGHTS RESERVED.
            <div class="subFooterUtill">
                <a href="javascript:void(0)" title="공동인증서">공동인증서</a>
                <a href="javascript:void(0)" data-toggle="modal" data-target="#regProcess" title="업체등록절차">업체등록절차</a>
                <a href="javascript:void(0)" data-toggle="modal" data-target="#biddingInfo" title="입찰업무안내">입찰업무안내</a>
            </div>
        </div>
    </div>

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


	<!-- 회원가입 신청 -->
	<div class="modal fade modalStyle" id="joinBtn" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">입력하신 정보로 회원가입을 신청합니다.<br>신정 후 승인까지 최대 3일 소요됩니다.<br><br>회원가입을 신청하시겠습니까?</div>
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
						<a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" data-target="#joinBtn2" title="신청">신청</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 -->

	<!-- 회원가입 신청 후 -->
	<div class="modal fade modalStyle" id="joinBtn2" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:420px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<div class="alertText2">회원가입을 신청하였습니다.</div>
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //회원가입 신청 후 -->

	<!-- 품목 선택 -->
	<div class="modal fade modalStyle" id="itemSelect" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" style="width:100%; max-width:800px">
			<div class="modal-content">
				<div class="modal-body">
					<a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
					<h2 class="modalTitle">품목 선택</h2>
					<div class="modalTopBox">
						<ul>
							<li><div>검색 창에 품목명 또는 품목코드를 입력하시고 엔터 또는 [품목조회]버튼을 클릭하시고 품목을 선택해 주십시오.</div></li>
							<li><div>품목코드는 2017년부터 적용되는 한국표준산업분류 10차 개정 자료를 기준으로 합니다.</div></li>
						</ul>
					</div>
					
					<div class="modalSearchBox mt20">						
						<div class="flex align-items-center">
							<div style="width:calc(100% - 120px)">
								<select name="" class="selectStyle">
									<option value="">품목그룹 전체</option>
								</select>
								<input type="text" name="" id="" class="inputStyle mt10" placeholder="품목명 또는 품목코드 입력 조회">
							</div>
							<a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
						</div>
					</div>
					<table class="tblSkin1 mt30">
						<colgroup>
							<col style="">
						</colgroup>
						<thead>
							<tr>
								<th>품목코드</th>
								<th>품목명</th>
								<th class="end">선택</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>011</td>
								<td class="text-left">직물재배업 품목류</td>
								<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
							</tr>
							<tr>
								<td>011</td>
								<td class="text-left">직물재배업 품목류</td>
								<td class="end"><a href="javascript:void(0)" class="btnStyle btnSecondary btnSm" title="선택">선택</a></td>
							</tr>
						</tbody>
					</table>
					<!-- pagination -->
					<div class="row mt30">
						<div class="col-xs-12">
							<div class="pagination1 text-center">
								<a href="javascript:void(0)" title="10페이지 이전 페이지로 이동"><i class="fa-light fa-chevrons-left"></i></a>
								<a href="javascript:void(0)" title="이전 페이지로 이동"><i class="fa-light fa-chevron-left"></i></a>
								<a href="javascript:void(0)" title="1페이지로 이동" class="number active">1</a>
								<a href="javascript:void(0)" title="2페이지로 이동" class="number">2</a>
								<a href="javascript:void(0)" title="3페이지로 이동" class="number">3</a>
								<a href="javascript:void(0)" title="4페이지로 이동" class="number">4</a>
								<a href="javascript:void(0)" title="5페이지로 이동" class="number">5</a>
								<a href="javascript:void(0)" title="다음 페이지로 이동"><i class="fa-light fa-chevron-right"></i></a>
								<a href="javascript:void(0)" title="10페이지 다음 페이지로 이동"><i class="fa-light fa-chevrons-right"></i></a>
							</div>
						</div>
					</div>
					<!-- //pagination -->
					<div class="modalFooter">
						<a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
					</div>
				</div>				
			</div>
		</div>
	</div>
	<!-- //품목 선택 -->
    
</div>
</template>

<script>

export default {
  name: 'Signup',
  components: {},
  data() {},
  mounted() {},
  methods: {}
}