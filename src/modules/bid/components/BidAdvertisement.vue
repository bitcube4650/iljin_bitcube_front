<template>
  <!-- 공고문 미리보기 -->
  <div
    class="modal fade modalStyle"
    id="biddingPreview"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="width: 100%; max-width: 800px">
      <div class="modal-content">
        <div class="modal-body">
          <a href="#" class="ModalClose" data-dismiss="modal" title="닫기"
            ><i class="fa-solid fa-xmark"></i
          ></a>
          <h2 class="modalTitle">입찰공고</h2>
          <h4 class="h4Tit mt20">가. 입찰에 부치는 사항</h4>
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
              <div class="formTit flex-shrink0 width170px">품명</div>
              <div class="width100">{{ props[0].itemName }}</div>
            </div>
          </div>

          <h4 class="h4Tit mt20">나. 입찰 및 낙찰자 결정방식</h4>
          <div class="modalBoxSt mt10">
            <div class="flex align-items-center">
              <div class="formTit flex-shrink0 width170px">입찰방식</div>
              <div class="width100">{{ props[0].biMode }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">낙찰자결정방법</div>
              <div class="width100">{{ props[0].succDeciMeth }}</div>
            </div>
          </div>

          <h4 class="h4Tit mt20">다. 입찰참가정보</h4>
          <div class="modalBoxSt mt10">
            <div class="flex align-items-center">
              <div class="formTit flex-shrink0 width170px">입찰참가자격</div>
              <div class="width100">{{ props[0].bidJoinSpec }}</div>
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
              <div class="formTit flex-shrink0 width170px">특수조건</div>
              <div class="width100">{{ props[0].specialCond }}</div>
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
              <div class="formTit flex-shrink0 width170px">결제조건</div>
              <div class="width100">{{ props[0].payCond }}</div>
            </div>
          </div>

          <h4 class="h4Tit mt20">라. 참고사항</h4>
          <div class="modalBoxSt mt10">
            <div class="flex align-items-center">
              <div class="formTit flex-shrink0 width170px">입찰담당자</div>
              <div class="width100">{{ props[0].cuser }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">입찰담당부서</div>
              <div class="width100">{{ props[0].cuserDept }}</div>
            </div>
          </div>

          <h4 class="h4Tit mt20">마. 전자입찰 등록서류</h4>
          <div class="modalBoxSt mt10">
            <div class="flex align-items-center">
              <div class="formTit flex-shrink0 width170px">제출시작일시</div>
              <div class="width100">{{ props[0].estStartDate }}</div>
            </div>
            <div class="flex align-items-center mt10">
              <div class="formTit flex-shrink0 width170px">제출마감일시</div>
              <div class="width100">{{ props[0].estCloseDate }}</div>
            </div>
            <div class="flex mt10" v-if="this.props[0].insMode === '직접입력'">
              <div class="formTit flex-shrink0 width170px">세부내역</div>
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
                      <th class="end">단위</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(val, idx) in props[1]">
                      <td class="text-left">{{ val.name }}</td>
                      <td class="text-left">{{ val.ssize }}</td>
                      <td class="text-right">{{ val.orderQty }}</td>
                      <td class="end">{{ val.unitCode }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="flex align-items-center mt10"
              v-if="this.props[0].insMode === '파일등록'"
            >
              <div class="formTit flex-shrink0 width170px">세부내역</div>
              <div class="width100">
                <a :href="val.filePath" class="textUnderline"
                v-for="(val, idx) in props[2]">{{val.fileNm}}</a
              >
              </div>
            </div>
          </div>
          <div class="modalFooter">
            <a
              href="javascript:void(0)"
              class="modalBtnClose"
              data-dismiss="modal"
              title="닫기"
              >닫기</a
            >
            <a
              href="javascript:void(0)"
              class="modalBtnCheck"
              data-toggle="modal"
              title="인쇄하기"
              >인쇄하기</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- //공고문 미리보기 -->
</template>
<script>
export default {
  name: "BidAdvertisement",
  props: ["props"],
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style>
</style>