<template>
  <!-- 본문 -->
  <div class="conRight">
      <!-- conHeader -->
      <div class="conHeader">
          <ul class="conHeaderCate">
              <li>전자입찰</li>
              <li>입찰진행 상세</li>
          </ul>
      </div>
      <!-- //conHeader -->
      <!-- contents -->
      <div class="contents">
          <div class="formWidth">

              <partnerBidCommon :data="data"/>
              
              <!--견적을 제출 했을 경우-->
              <template v-if="data.esmtYn == '2'">
                  <h3 class="h3Tit mt50">견적 제출 정보</h3>
                  <div class="boxSt mt20" v-if="data.esmtYn != '2'">
                      <div class="flex align-items-center">
                          <div class="flex align-items-center width100">
                              <div class="formTit flex-shrink0 width170px">견적제출일시</div>
                              <div class="width100">{{ data.updateDate }}</div>
                          </div>
                      </div>
                  </div>
              </template>
              <!--견적을 제출 했을 경우-->

              <!--견적을 아직 제출 안한 경우-->
              <template v-else>
                  <h3 class="h3Tit mt50">견적 제출</h3>
                  <div class="conTopBox mt20">
                      <ul class="dList">
                          <li><div>견적 제출 후 수정할 수 없으니 꼼꼼히 확인하시고 제출하시기 바랍니다.</div></li>
                      </ul>
                  </div>
                  <div class="boxSt mt20">
                      <table class="tblSkin1" v-if="data.insMode == '2'">
                          <colgroup>
                              <col style="" />
                          </colgroup>
                          <thead>
                              <tr>
                                  <th>품목명</th>
                                  <th>규격</th>
                                  <th>수량</th>
                                  <th>단위</th>
                                  <th>견적단가</th>
                                  <th class="end">견적금액</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(val, idx) in tableContent" :key="idx">
                                  <td class="text-left">{{ val.name }}</td>
                                  <td class="text-left">{{ val.ssize }}</td>
                                  <td class="text-right">{{ val.orderQty }}</td>
                                  <td>{{ val.unitcode }}</td>
                                  <td class="text-right">
                                  <input type="text" class="inputStyle inputSm text-right readonly" placeholder="" v-model="val.orderUc" readonly />
                                  </td>
                                  <td class="text-right">
                                  <input type="text" class="inputStyle inputSm text-right" placeholder="" v-model="tableContent[idx].esmtAmt" /> 
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <div class="flex align-items-center justify-space-end mt10" v-if="data.insMode == '2'" >
                          <div class="flex align-items-center">
                          <div class="formTit flex-shrink0 mr20">총 견적금액</div>
                              <div class="flex align-items-center width100">
                                  <select class="selectStyle maxWidth140px" v-model="curr" > 
                                      <option v-for="(val, idx) in currlist" :value="val.codeVal" :key="idx" >{{ val.codeName }}</option>
                                  </select>
                                  <input type="text" class="inputStyle readonly ml10" :value="totalAmount" placeholder="" readonly />
                              </div>
                          </div>
                      </div>

                      <div class="flex align-items-center width100 mt10" v-if="data.insMode == '2'">
                          <div class="formTit flex-shrink0 width170px">견적금액 <span class="star">*</span></div>
                          <div class="flex align-items-center width100">
                              <select name="" class="selectStyle maxWidth140px" v-model="curr" > 
                                  <option v-for="(val, idx) in currlist" :value="val.codeVal" :key="idx" >{{ val.codeName }}</option>
                              </select>
                              <input type="text" class="inputStyle" placeholder="숫자만 입력" style="margin: 0 10px" v-model="amt" /> 
                              <input type="text" class="inputStyle readonly" placeholder="" readonly />
                          </div>
                      </div>
                      <div class="flex mt10" v-if="data.insMode == '2'">
                          <div class="formTit flex-shrink0 width170px">견적내역파일 <span class="star">*</span>
                              <!-- 툴팁 -->
                              <i class="fas fa-question-circle toolTipSt ml5">
                                  <div class="toolTipText" style="width: 370px">
                                      <ul class="dList">
                                          <li><div>전자입찰 등록서류의 세부내역 파일을 다운받아 내역 작성후 첨부해 주십시오</div></li>
                                          <li class="textHighlight"><div>파일형식은 세부내역과 같은 형식으로 작성해 주십시오</div></li>
                                      </ul>
                                  </div>
                              </i>
                              <!-- //툴팁 -->
                          </div>
                          <div class="width100">
                              <!-- 다중파일 업로드 -->
                              <div class="upload-boxWrap">
                                  <div class="upload-box">
                                      <input type="file" id="file-input" @change="fileInputChange">
                                      <div class="uploadTxt">
                                          <i class="fa-regular fa-upload"></i>
                                          <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                      </div>
                                  </div>
                                  <div class="uploadPreview" id="preview"></div>
                              </div>
                              <!-- //다중파일 업로드 -->
                          </div>
                      </div>
                      <div class="flex mt10">
                          <div class="formTit flex-shrink0 width170px">기타첨부</div>
                          <div class="width100">
                              <!-- 다중파일 업로드 -->
                              <div class="upload-boxWrap">
                                  <div class="upload-box">
                                      <input type="file" id="file-input2" @change="fileInput2Change">
                                      <div class="uploadTxt">
                                          <i class="fa-regular fa-upload"></i>
                                          <div>클릭 혹은 파일을 이곳에 드롭하세요.(암호화 해제)<br>파일 최대 10MB (등록 파일 개수 최대 1개)</div>
                                      </div>
                                  </div>
                                  <div class="uploadPreview" id="preview2"></div>
                              </div>
                              <!-- //다중파일 업로드 -->
                          </div>
                      </div>
                  </div>
              </template>
              <!--//견적을 아직 제출 안한 경우-->

              <div class="text-center mt50">
                  <a class="btnStyle btnOutline" title="목록" @click="fnMovePage('partnerBidStatus')"> 목록 </a>
                  <a data-toggle="modal" data-target="#biddingPreview" class="btnStyle btnOutline" title="공고문 미리보기" >공고문 미리보기</a>
                  <a class="btnStyle btnSecondary" title="수정" v-if="data.insMode == '2'" >견적금액 임시저장</a>
                  <a @click="fnCheck" class="btnStyle btnPrimary" title="견적서 제출">견적서 제출</a>
              </div>
          </div>
      </div>
          <!-- //contents -->

      <!-- 개찰 -->
      <div class="modal fade modalStyle" id="suggestBid" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" style="width: 100%; max-width: 550px">
              <div class="modal-content">
                  <div class="modal-body">
                      <a class="ModalClose" data-dismiss="modal" title="닫기"><i class="fa-solid fa-xmark"></i></a>
                      <h2 class="modalTitle">투찰</h2>
                      <div class="modalTopBox">
                          <ul><div>견적서를 제출하시겠습니까?</div></ul>
                      </div>
                      <div class="modalFooter">
                          <a class="modalBtnClose" data-dismiss="modal" title="취소">취소</a>
                          <a class="modalBtnCheck" @click="bidSubmitting" data-toggle="modal" title="투찰">투찰</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- //개찰 -->

      <!--공고문 미리보기 팝업-->
      <!-- <BidAdvertisement :props="[this.result, this.tableContent, this.fileContent]"/> -->
  </div>
  <!-- //본문 -->
</template>
<script>
import partnerBidCommon from "../components/PartnerBidCommon.vue"
import mixin from "../service/mixin.js";
import BidAdvertisement from "@/modules/bid/components/BidAdvertisement.vue";
import fileInput from "../../../../public/js/fileInput.js";

export default {
  name: "partnerBidStatusDetail",
  components: {
      BidAdvertisement,
      partnerBidCommon
  },
  data() {
      return {
          biNo : '',
          data : {},
          submitData : {},
          file1: {},//견적세부파일
          file2: {}//기타파일
      };
  },
  mixins: [mixin],
  beforeMount() {
      this.biNo = this.$route.params.biNo;
  },
  async mounted() {
      await this.checkBid();
      await this.retrieve();
      // fileInput.applyFile();
  },
  // computed: {
  //     totalAmount() {
  //     // tableContent 배열의 esmtAmt 속성들의 합을 계산합니다.
  //     return this.tableContent.reduce(
  //         (acc, cur) => acc + parseFloat(cur.esmtAmt || 0),
  //         0
  //     );
  //     },
  // },
  methods: {
      // async init() {
      //     try {
      //         this.$store.commit("loading");
      //         const response = await this.$http.post("/api/v1/bidPtStatus/currlist");
      //         this.currlist = response.data;
      //         this.$store.commit("finish");
      //     } catch (err) {
      //         console.log(err);
      //         this.$store.commit("finish");
      //     }
      // },
      //업체 공고확인
      async checkBid() {
          let params = {
              biNo : this.biNo
          }
          this.$http.post("/api/v1/bidPtStatus/checkBid", params);
      },
      //데이터 상세 조회
      async retrieve() {
          let searchParams = {
      biNo : this.biNo
    }

    this.$store.commit('loading');
    await this.$http.post('/api/v1/bidPtStatus/bidStatusDetail', searchParams).then((response) => {
      if(response.data.code == 'OK'){
        this.data = response.data.data;
      }else{
        this.$swal({
          type: "warning",
          text: response.data.msg,
        });
      }
    }).finally(() => {
      this.$store.commit("finish");
    });
          
      },
      //필수요소 값 확인
      validationCheck() {
      
      },
      //투찰 전 체크
      fnCheck(){
          if(!this.validationCheck()){
              return false;
          }
          $('#suggestBid').modal('show');
      },
      // calculateTotal() {
      //     let total = 0;
      //     this.tableContent.forEach((val) => {
      //         total += val.orderQty * val.orderUc;
      //     });
      //     return total;
      // },
      
      bidSubmitting(){//투찰
          $('#suggestBid').modal('hide');
          var formData = new FormData();

          // this.detail.biNo = this.dataFromList;//입찰번호
          // this.detail.insModeCode = this.result.insModeCode;//파일등록인지 직접입력인지
          // this.detail.amt =  this.amt;//파일입력 방식인 경우 견적금액
          // this.detail.tableContent = this.tableContent;//직접입력 방식인 경우 품목당 견적금액
          
          // if(this.result.insModeCode === '2'){//직접입력인 경우
          //     this.detail.amt = this.calculateTotal();//각 품목당 견적금액 더한 값
          // }
          // this.detail.amt = String(this.detail.amt);

          formData.append('data', JSON.stringify(this.submitData));
          formData.append('file1', this.file1);
          formData.append('file2', this.file2);

          this.$store.commit("loading");
          this.$http.post("/api/v1/bidPtStatus/bidSubmitting", formData).then((response) => {
              if (response.data.code == "OK") {
              } else {
              }
          })
          .finally(() => {
              this.$store.commit("finish");
          });

      },
      fileInputChange(event){//견적세부파일
          this.file1 = event.target.files[0];
      },
      fileInput2Change(event){//기타파일
          this.file2 = event.target.files[0];
      },
  }
};
</script>