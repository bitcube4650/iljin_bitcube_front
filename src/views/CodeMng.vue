<template>
  <div class="inner-box">
  <form @submit.prevent="save"> 
    <div class="content-name">
      <h2 class="dp-ib">{{title}}</h2>
      <div class="btn-wrap btn-type1 clearfix">
        <button type="button" class="btn-size btn-gray fl_left" @click="goOpen">
          <span class="btn-icon">
            <i class="fas fa-search"></i>
          </span>
          조회
        </button>
        <button type="submit" class="btn-size btn-blue fl_left">
          <span class="btn-icon">
            <i class="fas fa-save"></i>
          </span>
          저장
        </button>
      </div>
    </div>
  </form>
  <!-- 검색조건 영역 -->
  <div class="desc-content search-border">
    <div class="item desc-left">
      <div class="desc-item">
        <div class="tit">
          <span class="label-tit">- 그룹코드/명</span>
        </div>
        <div class="desc">
          <input class="input Rt-M tal" type="text" id="group_cd" v-model="form.codeNm" />
        </div>
      </div>
    </div>
    <div class="item desc-center">
      <div class="desc-item">
        <div class="tit">
          <span class="label-tit">- 사용여부</span>
        </div>
        <div class="desc">
          <b-select class="select is-fullwidth" id="use_yn" v-model="form.useType">
            <option value="Y">예</option>
            <option value="N">아니오</option>
          </b-select>
        </div>
      </div>
    </div>
  </div>
    <!-- 테이블 -->
    <div class="table-b">
      <div class="table-header">
        <div class="table-name">
          <h3 class="ico_table_name">그룹코드</h3>
        </div>
        <div class="btn-wrap btn-type2 clearfix">
          <button class="btn-size btn-w-gray" @click="addRow()">
            <span class="btn-icon">
              <i class="fas fa-plus"></i>
            </span>행추가
          </button>
          <button class="btn-size btn-w-gray" @click="deleteRow">
            <span class="btn-icon">
              <i class="fas fa-trash-alt"></i>
            </span>행삭제
          </button>
        </div>
      </div>
      <!-- <dhx-grid ref="grid1" v-model="data" :config="config" /> -->
      <ag-grid-vue         
          ref="gridMain"
          style="width: 100%; height: 30vh; min-height: 25px;"
          class="ag-theme-alpine"
          rowSelection="multiple"
                                  
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"        
          :frameworkComponents="frameworkComponents"          
          :rowData="data"
          :gridOptions="gridOptions"                                                
          :suppressRowClickSelection="false"
          @grid-ready="onReadyMain"          
          @selection-changed="onSelectionChangedMain"
      />
    </div>
    <div class="table-b">
      <div class="table-header">
        <div class="table-name">
          <h3 class="ico_table_name">상세코드</h3>
        </div>
        <div class="btn-wrap btn-type2 clearfix">
          <button class="btn-size btn-w-gray" @click="addRowd">
            <span class="btn-icon">
              <i class="fas fa-plus"></i>
            </span>행추가
          </button>
          <button class="btn-size btn-w-gray" @click="deleteRowd">
            <span class="btn-icon">
              <i class="fas fa-trash-alt"></i>
            </span>행삭제
          </button>
        </div>
      </div>
      <!-- <dhx-grid ref="grid2" v-model="subData" :config="config_child" /> -->
      <ag-grid-vue         
          ref="gridSub"
          style="width: 100%; height: 30vh; min-height: 25px;"
          class="ag-theme-alpine"
          rowSelection="multiple"
                                  
          :columnDefs="columnDefsSub" 
          :defaultColDef="defaultColDef"        
          :frameworkComponents="frameworkComponents"          
          :rowData="subData"
          :gridOptions="gridOptionsSub"                                                
          :suppressRowClickSelection="false"
          @grid-ready="onReadySub"
      />
    </div>
  </div>
</template>
<script>
import _ from "lodash";

import {AgGridVue} from 'ag-grid-vue'
import CheckboxCellRenderer from '@/components/agGrid/checkbox-cell-renderer'

/**
 * Url JOIN
 */
function _url(...args) {
  args = args.map(x =>
    String(x || "")
      .trim()
      .replace(/^\/*|\/*$/g, "")
  );
  return args.filter(x => x).join("/");
}

export default {
  name: "codeMng",
  components: {
    AgGridVue
  },
  data() {
    return {
      title: "코드관리",
      deleteid: "",
      deleteList: [],
      form: {
        codeNm: "",
        useType: ""
      },
      data: [],
      subData: [],
      gridOptions: {         
        //enableColResize: true,
        //enableFilter: true,
        //animateRows: false,
        //enableSorting: true
      },
      gridOptionsSub: {         
        //enableColResize: true,
        //enableFilter: true,
        //animateRows: false,
        //enableSorting: true
      },
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
    //메인그리드 Ready
    onReadyMain(params) {      
        //메인그리드 api 정의
        this.gridApi = this.gridOptions.api;
        this.columnApi = this.gridOptions.columnApi;

        //화면 width에 맞게 컬럼 size 조정
        this.gridApi.sizeColumnsToFit();
    },
    //서브그리드 Ready
    onReadySub(params) {
        //서브그리드 api 정의
        this.gridApiSub = this.gridOptionsSub.api;
        this.columnApiSub = this.gridOptionsSub.columnApi;

        this.gridApiSub.sizeColumnsToFit();
    },
    //그리드컬럼 정의
    createColumnDefs() {
        const vm = this
        
        this.columnDefs = [
            {headerName: 'No.', width : 30, valueGetter: (params) => {return params.node.rowIndex + 1 }},
            {headerName:'그룹코드', field:'groupCd', width:100, editable:true}, 
            {headerName:'그룹코드명', field:'groupNm', width:120, editable:true},
            {  headerName:'사용여부'
             , field:'useYn'
             , width: 50
             , cellStyle : {'justify-content': 'center','align-items': 'center', 'display': 'flex','height': '100%'}
             , cellRenderer: 'checkboxRenderer'
            }, 
            {headerName:'설명', field:'groupDesc', width:300, editable:true},
            {headerName:'', field:'comCd', hide : true},
        ];

        this.columnDefsSub = [
            {headerName: 'No.', width : 30, valueGetter: (params) => {return params.node.rowIndex + 1 }},
            {headerName:'상세코드', field:'detailCd', width:100, editable:true}, 
            {headerName:'상세코드명', field:'detailNm', width:120, editable:true},
            {  headerName:'사용여부'
             , field:'useYn'
             , width:50
             , cellStyle : {'justify-content': 'center','align-items': 'center', 'display': 'flex','height': '100%'}
             , cellRenderer: 'checkboxRenderer'
             , cellRendererParams: {
                  trueValue: "Y"    //true값  지정 defalut-"Y" ex) "Y", true, "1"
                , falseValue: "N"  //false값 지정 defalut-"N" ex) "N", false, "0"
             }  
             },                        
            {headerName:'정렬순서', field:'orderSeq', width:50, editable:true},
            {headerName:'비고1', field:'remark1', width:50, editable:true},
            {headerName:'비고2', field:'remark2', width:50, editable:true},
            {headerName:'비고3', field:'remark3', width:50, editable:true},
            {headerName:'비고4', field:'remark4', width:50, editable:true},
            {headerName:'비고5', field:'remark5', width:50, editable:true},
            {headerName:'설명', field:'detailDesc', width:50, editable:true},
            {headerName:'', field:'comCd', hide : true},
        ];
    },
    //Main 그리드 SelctionChange 발생
    onSelectionChangedMain(event) {  
        
        const voRow = this.gridApi.getSelectedRows() //선택된 Row
        
        this.$store.commit('loading') 
        this.$http
          .post("/api/code/detail", {
            groupCd: voRow[0].groupCd
          })
          .then(response => {
            console.log(response.data)
            this.subData = response.data
          }).finally(() => {
            this.$store.commit('finish')
          });
          
    },        
    goOpen() {

      // code list 조회
      this.$store.commit('loading') 
      this.$http
        .post(_url("/api/code/list"), {
          groupCd: this.form.codeNm,
          useYn: this.form.useType
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
    save() {
      //그룹코드 확인
      for(var i = 0;i<this.data.length;i++){
        for(var j = i+1; j<this.data.length;j++){
          if(this.data[i].groupCd === this.data[j].groupCd){
            this.$swal({type: 'warning', text: '해당 그룹코드가 이미 존재합니다.'});
            return false;
          }
        }
      }

      //상세코드 확인
      for(var i = 0;i<this.subData.length;i++){
        for(var j = i+1; j<this.subData.length;j++){
          if(this.subData[i].detailCd === this.subData[j].detailCd){
            this.$swal({type: 'warning', text: '해당 상세코드가 이미 존재합니다.'});
            return false;
          }
        }
      }

      //저장 시작
      
       // this.$http
        //.delete('/api/code/delete/' + this.deleteid)
        //.then(response => {
          this.$http
          .put('/api/code/save',{codeHeader : this.data, codeDetail : this.subData})
          .then(response => {
          this.$swal({ type: 'success', text: '저장되었습니다.' });              
          this.goOpen()
        })
        .catch(({ message }) => {
          if (message === "Request failed with status code 500") {
            this.$swal({ type: "error", text: "상세코드를 입력해주세요." });
          }
        });  
       // })
      
    },
    deleteRow() {
      
      if(this.subData.length > 0){
        this.$swal({type: 'error' , text:'해당 그룹코드의 상세코드가 존재합니다. 상세코드 삭제 후 그룹코드 삭제가 가능합니다.'})
        return
      }
      
      const row = this.gridApi.getSelectedNodes()

      if (row.length < 1) {
        this.$swal({
          type: 'error',
          text: '삭제할 행을 선택하여주세요.'
        })
      } else {
        const rowIndex = row[0].rowIndex
        const isNew = this.data[rowIndex].new
        const groupCd = this.data[rowIndex].groupCd

        this.data.splice(rowIndex, 1)

        if (!isNew) {
          this.$http.delete('/api/code/delete/' + groupCd
          ).then(response => {
            this.$swal({ type: 'success', text: '삭제 되었습니다.' });
            this.goOpen()
            // Do nothing!
          })
        }
      }
      
    },
    addRow() {      
      this.data.push({
        groupCd: "",
        groupNm: "",
        useYn: "Y",
        groupDesc: "",
        compCd: this.$store.state.loginInfo.compCd,
      });
    },
    deleteRowd() {
      try{
        
        const row = this.gridApiSub.getSelectedNodes()

        if(row.length < 1)
          throw '선택된 행이 없습니다.'
        
        let index = row[0].rowIndex
        this.subData.splice(index, 1)

      }catch (e) {
        this.$swal({
          type: 'warning',
          text: e
        })
      }
    },
    addRowd() {
      try{
        
        const row = this.gridApi.getSelectedNodes()

        if(row.length < 1)
         throw '그룹코드가 선택되지 않았습니다.'

        const idx = row[0].rowIndex

        this.subData.push({
        detailCd: "",
        detailNm: "",
        useYn: "Y",
        orderSeq:"",
        remark1: "",
        remark2: "",
        remark3: "",
        remark4: "",
        remark5: "",
        detailDesc: "",
        groupCd: this.data[idx].groupCd,
        compCd: this.data[idx].compCd,

        });
      }catch (e) {
        this.$swal({
          type: 'warning',
          text: e
        })
      }
    }
  },
  beforeMount() {
    
    this.createColumnDefs(); //그리드 컬럼정의 함수 호출
    
    this.frameworkComponents = {//그르드에서 사용할 외부 comp 등록
      checkboxRenderer: CheckboxCellRenderer,      
    };

  },  
  mounted() {
    document.title = this.title + ' - IJEAS';
    this.goOpen();
  }
};
</script>


<style scoped>
.gridbox {
  height: 200px !important;
}
.gridbox .objbox {
  height: 350px !important;
}

.desc-content:after {
  clear: both;
  content: "";
  display: block;
}
.btn-wrap {
  margin-bottom: 20px;
}
.desc-content {
  border: 2px solid #9db6c9;
  background: #f9fafc;
  margin: 0 0 20px 0;
  border-radius: 4px;
  padding: 15px 2%;
  clear: both;
}
.desc-content .item {
  float: left;
}
.desc-content .item .desc-item {
  position: relative;
  padding-left: 82px;
  margin-bottom: 8px;
}
.desc-content .item .desc-item:last-child {
  margin-bottom: 0;
  height: 25px;
}
.desc-content .item .desc-item .tit {
  position: absolute;
  left: 0;
}
.desc-content .item .desc-item .label-tit {
  font-family: "NotoM";
  color: #222;
  font-size: 15px;
}
.desc-content .item.desc-left .desc-item {
  padding-left: 90px;
}
.desc-content .item.desc-left .desc-item .desc:after {
  clear: both;
  content: "";
  display: block;
}
.desc-content .item.desc-left .desc-item .desc .datepicker {
  float: left;
}
.desc-content .item.desc-left .desc-item .desc span.wave {
  float: left;
  padding: 0 6px;
}
.desc-content .item.desc-left .desc-item .td-s-thumb.search-area:after {
  clear: both;
  content: "";
  display: block;
}
.desc-content .item.desc-left .desc-item .td-s-thumb.search-area input,
.desc-content .item.desc-left .desc-item .td-s-thumb.search-area .ip-box {
  float: left;
}
.desc-content .item.desc-left .desc-item .desc.select select {
  width: 70%;
}
.desc-content .item.desc-left {
  width: 35%;
  padding-right: 40px;
}
.desc-content .item.desc-center {
  width: 35%;
  padding-right: 40px;
}
.desc-content .item.desc-right {
  width: 30%;
}
.search-area input {
  position: relative;
}
.search-area .icon {
  position: absolute;
  right: 8px;
  top: 1px;
  z-index: 100;
  cursor: pointer;
  font-size: 16px;
  color: #555;
}
.search-border .td-s-thumb {
  position: relative;
  display: inline-block;
}
.search-border .td-s-thumb.search-area > input,
.search-border
  .td-s-thumb.search-area
  > .ip-box
  .search-border
  .td-s-thumb.search-area
  > button {
  float: left;
}
.search-border .td-s-thumb.search-area .ip-box.ip-box-w02 {
  width: 60%;
  margin-left: 6px;
}
.remove_text {
  margin-left: 0;
}
.contents div.gridbox_material.gridbox .xhdr {
  border-bottom: 1px solid #dfdfdf;
}

@media (max-width: 1580px) {
  .search-border .td-s-thumb.search-area .ip-box.ip-box-w02 {
    width: 50%;
  }
}
</style>