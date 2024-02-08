<template>
  <!-- //conLeft -->
			<!-- conRightWrap -->
			<div class="conRightWrap">
				<!-- 본문 -->
				<div class="conRight">
					<!-- conHeader -->
					<div class="conHeader">
						<ul class="conHeaderCate">
							<li>전자입찰</li>
							<li>입찰계획</li>
						</ul>
					</div>
					<!-- //conHeader -->
					<!-- contents -->
					<div class="contents">
						<div class="conTopBox">
							<ul class="dList">
								<li><div>{{findComment.line1}}</div></li>
								<li class="textHighlight"><div>{{findComment.line2}}</div></li>
								<li><div>{{findComment.line3}}</div></li>
							</ul>
						</div>

						<!-- searchBox -->
						<div class="searchBox mt20">
							<div class="flex align-items-center">
								<div class="sbTit mr30">입찰번호</div>
								<div class="width250px">
									<input type="text" name="" id="" class="inputStyle" placeholder="" v-model="form.bidNo">
								</div>
								<div class="sbTit mr30 ml50">입찰명</div>
								<div class="width250px">
									<input type="text" name="" id="" class="inputStyle" placeholder="" v-model="form.bidName">
								</div>
								<a class="btnStyle btnSearch" @click="goOpen">검색</a>
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
							<div>
								<a href="group_sub01_1_3.html" class="btnStyle btnPrimary" title="입찰계획등록">입찰계획등록</a>
							</div>
						</div>
						<table class="tblSkin1 mt10">
							<colgroup>
								<col style="width:12%">
								<col style="">
								<col style="width:15%">
								<col style="width:15%">
								<col style="width:10%" span="4">
							</colgroup>
							<thead>
								<tr>
									<th>입찰번호</th>
									<th>입찰명</th>
									<th>제출시작일시</th>
									<th>제출마감일시</th>
									<th>입찰방식</th>
									<th>내역</th>
									<th>담당자</th>
									<th class="end">공고자</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a href="group_sub01_1_1.html" class="textUnderline" title="C202401005">C202401005</a></td>
									<td class="text-left"><a href="group_sub01_1_1.html" class="textUnderline" title="직물재배업 품목류">직물재배업 품목류</a></td>
									<td>2024-01-09 13:00</td>
									<td>2024-01-10 13:00</td>
									<td>지명</td>
									<td>파일</td>
									<td><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="홍길동">홍길동</a></td>
									<td class="end"><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="홍길동">홍길동</a></td>
								</tr>
								<tr>
									<td><a href="group_sub01_1_1.html" class="textUnderline" title="C202401005">C202401004</a></td>
									<td class="text-left"><a href="group_sub01_1_1.html" class="textUnderline" title="축산업 품목류">축산업 품목류</a></td>
									<td class="textHighlight"><i class="fa-regular fa-timer"></i> 2024-01-09 13:00</td>
									<td>2024-01-10 13:00</td>
									<td>일반</td>
									<td>직접입력</td>
									<td><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="이순신">이순신</a></td>
									<td class="end"><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="강감찬">강감찬</a></td>
								</tr>
								<tr>
									<td><a href="group_sub01_1_1.html" class="textUnderline" title="C202401003">C202401003</a></td>
									<td class="text-left"><a href="group_sub01_1_1.html" class="textUnderline" title="직물재배">직물재배</a></td>
									<td class="textHighlight"><i class="fa-regular fa-timer"></i> 2024-01-09 13:00</td>
									<td>2024-01-10 13:00</td>
									<td>일반(관리)</td>
									<td>파일</td>
									<td><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="이순신">이성계</a></td>
									<td class="end"><i class="fa-light fa-paper-plane-top"></i> <a href="mailto:james@iljin.co.kr" class="textUnderline" title="강감찬">이성계</a></td>
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
					</div>
					<!-- //contents -->
				</div>
				<!-- //본문 -->
</template>
<script>
import _ from "lodash";
import CheckboxCellRenderer from "@/components/agGrid/checkbox-cell-renderer";

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
  name: "bidProgress",
  components: {
  },
  data() {
    return {
      title: "전자입찰 > 입찰진행",
      findComment: {
        line1:
          "입찰담당자가 생성한 입찰목록입니다. 입찰 공고자는 입찰계획 내용을 상세히 확인하시고 공고 하십시오.(입찰번호 또는 입찰명을 클릭하시면 상세내용을 확인할 수 있습니다)",
        line2:
          "입찰공고자는 제출마감일시 전에 입찰공고 하지 않으면 해당 입찰은 자동으로 삭제됩니다.",
        line3:
          "담당자 또는 공고자를 클릭하면 해당인에게 메일을 보낼 수 있습니다.",
      },
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
      this.$store.commit('loading') 
      this.$http
        .post(_url("/api/bid/progresslist"), {
          bidNo: this.form.bidNo,
          bidName: this.form.bidName
        })
        .then(response => {
          this.data = response.data;

          if(response.data.length == 0){
              this.$swal({ type: 'warning', text: '조회내역이 존재하지 않습니다.' })
          }
        }).finally(() => {
          this.$store.commit('finish')
        });
    },
    
  },
  beforeMount() {
  },
  mounted() {
    document.title = this.title + " - IJEAS";
    this.goOpen();
  },
};
</script>