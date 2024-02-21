<template>
	<!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>공지</li>
                <li>FAQ</li>
            </ul>
        </div>
        <!-- //conHeader -->
        <!-- contents -->
        <div class="contents">

            <!-- searchBox -->
            <div class="searchBox">
                <div class="flex align-items-center">
                    <div class="sbTit mr30">제목</div>
                    <div class="width200px">
                        <input type="text" name="" id="" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit mr30 ml50">구분</div>
                    <div class="width200px">
                        <select name="" class="selectStyle">
                            <option value="">선택</option>
                        </select>
                    </div>
                    <a href="javascript:void(0)" class="btnStyle btnSearch">검색</a>
                </div>
            </div>
            <!-- //searchBox -->

            <div class="flex align-items-center justify-space-between mt40">
                <div class="width100">
                    전체 : <span class="textMainColor"><strong>100</strong></span>건
                    <select name="" class="selectStyle maxWidth140px ml20">
                        <option value="">10개씩 보기</option>
                        <option value="">20개씩 보기</option>
                    </select>
                </div>
                <div class="flex-shrink0">
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#faqReg" class="btnStyle btnPrimary" title="FAQ 등록">FAQ 등록</a>
                </div>
            </div>
            <table class="tblSkin1 mt10">
                <colgroup>
                    <col style="width:15%">
                    <col style="">
                    <col style="width:15%">
                    <col style="width:15%">
                </colgroup>
                <thead>
                    <tr>
                        <th>구분</th>
                        <th>제목</th>
                        <th>등록자</th>
                        <th class="end">등록일시</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>가입관련</td>
                        <td class="text-left"><a href="javascript:void(0)" data-toggle="modal" data-target="#faqReg" class="textUnderline notiTitle" title="FAQ 자세히 보기">직물재배업 품목류</a></td>
                        <td>관리자</td>
                        <td class="end">2024-01-13 13:00</td>
                    </tr>
                    <tr>
                        <td>가입관련</td>
                        <td class="text-left"><a href="javascript:void(0)" data-toggle="modal" data-target="#faqReg" class="textUnderline notiTitle" title="FAQ 자세히 보기">축산업 품목류</a></td>
                        <td>관리자</td>
                        <td class="end">2024-01-13 13:00</td>
                    </tr>
                    <tr>
                        <td>가입관련</td>
                        <td class="text-left"><a href="javascript:void(0)" data-toggle="modal" data-target="#faqReg" class="textUnderline notiTitle" title="FAQ 자세히 보기">직물재배</a></td>
                        <td>관리자</td>
                        <td class="end">2024-01-13 13:00</td>
                    </tr>
                    <tr>
                        <td>가입관련</td>
                        <td class="text-left"><a href="javascript:void(0)" data-toggle="modal" data-target="#faqReg" class="textUnderline notiTitle" title="FAQ 자세히 보기">직물재배업 품목류</a></td>
                        <td>관리자</td>
                        <td class="end">2024-01-13 13:00</td>
                    </tr>
                    <tr>
                        <td>가입관련</td>
                        <td class="text-left"><a href="javascript:void(0)" data-toggle="modal" data-target="#faqReg" class="textUnderline notiTitle" title="FAQ 자세히 보기">축산업 품목류</a></td>
                        <td>관리자</td>
                        <td class="end">2024-01-13 13:00</td>
                    </tr>
                </tbody>
            </table>

            <!-- pagination -->
            <div class="row mt40">
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

        </div>
        <!-- //contents -->

        <!-- FAQ 상세 -->
        <div class="modal fade modalStyle" id="faqReg" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" style="width:100%; max-width:600px">
                <div class="modal-content">
                    <div class="modal-body">
                        <a href="javascript:void(0)" class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                        <h2 class="modalTitle">FAQ 상세</h2>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width150px">FAQ 제목 <span class="star">*</span></div>
                            <div class="width100">
                                <input type="text" name="" id="" class="inputStyle" placeholder="" value="발신번호를 선택할 수 없습니다.">
                            </div>
                        </div>
                        <div class="flex align-items-center mt20">
                            <div class="formTit flex-shrink0 width150px">FAQ 구분 <span class="star">*</span></div>
                            <div class="flex align-items-center width100">
                                <input type="radio" name="bm2" value="" id="bm2_1" class="radioStyle" checked=""><label for="bm2_1">가입관련</label>
                                <input type="radio" name="bm2" value="" id="bm2_2" class="radioStyle"><label for="bm2_2">입찰관련</label>
                            </div>
                        </div>
                        <div class="flex mt20">
                            <div class="formTit flex-shrink0 width150px">FAQ 내용 <span class="star">*</span></div>
                            <div class="width100">
                                <textarea class="textareaStyle overflow-y-scroll height150px" onkeydown="resize(this)" onkeyup="resize(this)" placeholder="">직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 직물재배업 품목류 </textarea>
                            </div>
                        </div>
                        <div class="modalFooter">
                            <a href="javascript:void(0)" class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
                            <a href="javascript:void(0)" class="modalBtnCheck" data-toggle="modal" title="저장">저장</a>
                        </div>
                    </div>				
                </div>
            </div>
        </div>
        <!-- //FAQ 상세 -->
    </div>
    <!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";


  
  export default {
    name: "adminFaq",
    components: {

    },
    data() {
      return {

      };
    },
    methods: {

    },
    beforeMount() {},
    mounted() {

    },
  };
  </script>