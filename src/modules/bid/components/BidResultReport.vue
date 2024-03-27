<template>
  <!-- 입찰결과 보고서 -->
  <div
    class="modal fade modalStyle printDiv"
    id="resultReport"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="width: 100%; max-width: 800px">
      <div class="modal-content">
        <div class="modal-body">
          <a class="ModalClose" data-dismiss="modal" title="닫기"
            ><i class="fa-solid fa-xmark"></i
          ></a>
          <h2 class="modalTitle">입찰결과 보고서</h2>
          <h4 class="h4Tit mt20">입찰정보</h4>
          <div class="modalBoxSt mt10">
            <div class="flex align-items-center">
              <div class="formTit flex-shrink0 width170px">입찰번호</div>
              <div class="width100">{{ props[0].biNo }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">입찰명</div>
              <div class="width100">{{ props[0].biName }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">입찰방식</div>
              <div class="width100">{{ props[0].biMode }}</div>
            </div>
            <div class="flex mt10">
              <div class="formTit flex-shrink0 width170px">특수조건</div>
              <div class="width100">
                {{ props[0].specialCond }}
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">현장설명일시</div>
              <div class="width100">{{ props[0].spotDate }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">현장설명장소</div>
              <div class="width100">{{ props[0].spotArea }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
              <div class="width100">{{ props[0].succDeciMeth }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">입찰일시</div>
              <div class="width100">
                {{ props[0].estStartDate }} ~ {{ props[0].estCloseDate }}
              </div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">납품조건</div>
              <div class="width100">{{ props[0].supplyCond }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">금액기준</div>
              <div class="width100">{{ props[0].amtBasis }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">예산금액</div>
              <div class="width100">{{ props[0].bdAmt }} 원</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">입찰담당자</div>
              <div class="width100">{{ props[0].cuser }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">계열사공유</div>
              <div class="width100">비공유</div>
            </div>
          </div>

          <h4 class="h4Tit mt20">투찰 내역</h4>
          <table class="tblSkin1 mt10">
            <colgroup>
              <col style="" />
            </colgroup>
            <thead>
              <tr>
                <th>순위</th>
                <th>업체명</th>
                <th>대표자</th>
                <th>낙찰금액</th>
                <th>예산대비</th>
                <th class="end">구분</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(val, idx) in props[1]" :key="idx">
                <td>{{ getRank(idx, val.succYn) }}</td>
                <td class="text-left">{{ val.custName }}</td>
                <td>{{ val.userName }}</td>
                <td class="text-right">{{ val.esmtCurr }}{{ val.esmtAmt }}</td>
                <td class="text-right">
                  {{ parseInt(val.esmtAmt) / parseInt(props[0].bdAmt) }}%
                </td>
                <td class="end" v-if="val.succYn === 'Y'">낙찰</td>
                <td class="end" v-else></td>
              </tr>
            </tbody>
          </table>

          <div class="modalFooter">
            <a class="modalBtnClose" data-dismiss="modal" title="닫기">닫기</a>
            <a
              class="modalBtnCheck"
              data-toggle="modal"
              title="인쇄하기"
              @click="fnPrint"
              >인쇄하기</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //입찰결과 보고서 -->
</template>
  <script>
export default {
  name: "bidResultReport",
  props: ["props"],
  components: {},
  data() {
    return {};
  },
  methods: {
    getRank(index, isWinning) {
      if (isWinning === "Y") {
        return 1;
      } else {
        const sortedRows = this.props[1]
          .filter((row) => row.succYn !== "Y")
          .sort((a, b) => {
            return (
              parseInt(b.esmtAmt) / parseInt(this.props[0].bdAmt) -
              parseInt(a.esmtAmt) / parseInt(this.props[0].bdAmt)
            );
          });
        return sortedRows.findIndex((row) => row === this.props[1][index]) + 1;
      }
    },
		fnPrint(){
			const printContents = document.querySelector('.printDiv').innerHTML;
			const html = document.querySelector('html');
			const printDiv = document.createElement("DIV");
			printDiv.className = "print-div modalStyle";
			html.appendChild(printDiv);
			printDiv.innerHTML = printContents;
			printDiv.querySelector(".modalFooter").style.display = "none";
			printDiv.querySelector(".ModalClose").style.display = "none";
			printDiv.querySelector(".modal-dialog").style.cssText = "width:100%; max-width:700px";
			document.body.style.display = 'none';
			window.print();
			document.body.style.display = 'block';
			$(".print-div").remove();
		},
  },
  beforeMount() {},
  mounted() {},
};
</script>