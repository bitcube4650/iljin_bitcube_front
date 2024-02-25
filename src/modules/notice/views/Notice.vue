<template>
    <!-- 본문 -->
    <div class="conRight">
        <!-- conHeader -->
        <div class="conHeader">
            <ul class="conHeaderCate">
                <li>공지</li>
                <li>공지사항</li>
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
                        <input type="text" v-model="searchParams.title" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit mr30 ml50">내용</div>
                    <div class="width200px">
                        <input type="text" v-model="searchParams.content" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit mr30 ml50">등록자</div>
                    <div class="width200px">
                        <input type="text" v-model="searchParams.userId" class="inputStyle" placeholder="">
                    </div>
                    <a href="javascript:" @click="search" class="btnStyle btnSearch">검색</a>
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
                <div >
                    <a href="group_sub02_1_1.html" class="btnStyle btnPrimary" title="공지등록">공지등록</a>
                </div>
            </div>
            <table class="tblSkin1 mt10">
                <colgroup>
                    <col style="width:7%">
                    <col style="">
                    <col style="width:10%">
                    <col style="width:10%">
                    <col style="width:10%">
                    <col style="width:10%">
                </colgroup>
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>제목</th>
                        <th>첨부파일</th>
                        <th>등록자</th>
                        <th>등록일시</th>
                        <th class="end">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(val, idx) in listPage.content">
                        <td>{{ val.rowNo }}</td>
                        <td class="text-left"><a href="javascript:" @click="clickNoticeDetail" class="textUnderline notiTitle" title="공지사항 자세히 보기">{{ val.btitle }}</a></td>
                        <td><i class="fa-regular fa-file-lines notiFile"></i></td>
                        <td>{{ val.buserName }}</td>
                        <td>{{ val.bdate }}</td>
                        <td class="end">{{ val.bcount }}</td>
                    </tr>
                </tbody>
            </table>

            <!-- pagination -->
            <div class="row mt40">
                <div class="col-xs-12">
                    <pagination @searchFunc="search" :page="listPage"/>
                </div>
            </div>
            <!-- //pagination -->

        </div>
        <!-- //contents -->
    </div>
    <!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";
  import Pagination from "@/components/Pagination.vue";

  
  export default {
    name: "notice",
    components: {
        Pagination
    },
    data() {
		return {
			itemGrpList: [],	
			searchParams: {},	
			listPage: {}
		};
	},
	mounted() {
        
		const params = {id: this.$options.name , title: '', content: '', userId: '', custCode: '', size: '10'};
        const custType = this.$store.state.loginInfo.custType; 
        if(custType == 'inter'){//계열사인 경우
            params.custCode = this.$store.state.loginInfo.custCode;//무슨 계열사인지
        }

        //파라미터 초기값 세팅
		if (this.$store.state.searchParams.id == params.id) {
			this.searchParams = Object.assign(params, this.$store.state.searchParams);
		} else {
			this.searchParams = params;
		}
		//this.init();

		this.retrieve();
	},
	methods: {
		search(page) {
			if (page >= 0) this.searchParams.page = page;
			this.retrieve();
		},
		async retrieve() {//공지사항 조회
			try {
				this.$store.commit('loading');
        		this.$store.commit('searchParams', this.searchParams);
				const response = await this.$http.post('/api/v1/notice/noticeList', this.searchParams);
				this.listPage = response.data;
                console.log('결과 데이터', response);
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
		callbackItem() {
			
		},
        clickNoticeDetail(){//공지사항 상세 이동
            this.$router.push({name:"noticeDetail"});
        }
    }
  };
  </script>