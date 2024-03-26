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
                        <input type="text" @keydown.enter="search(0)" v-model="searchParams.title" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit mr30 ml50">내용</div>
                    <div class="width200px">
                        <input type="text" @keydown.enter="search(0)" v-model="searchParams.content" class="inputStyle" placeholder="">
                    </div>
                    <div class="sbTit mr30 ml50">등록자</div>
                    <div class="width200px">
                        <input type="text" @keydown.enter="search(0)" v-model="searchParams.userName" class="inputStyle" placeholder="">
                    </div>
                    <a href="javascript:" @click="search(0)" class="btnStyle btnSearch">검색</a>
                </div>
            </div>
            <!-- //searchBox -->

            <div class="flex align-items-center justify-space-between mt40">
                <div class="width100">
                    전체 : <span class="textMainColor"><strong>{{ listPage.totalElements ? listPage.totalElements.toLocaleString() : 0 }}</strong></span>건
                    <select name="" @change="search(0)" v-model="searchParams.size" class="selectStyle maxWidth140px ml20">
                        <option value="10">10개씩 보기</option>
                        <option value="20">20개씩 보기</option>
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                    </select>
                </div>
                <div v-if="insertButton">
                    <router-link :to="{ path: '/notice/noticeUpdateInsert', query: { updateInsert: 'insert' } }" class="btnStyle btnPrimary" title="공지등록">공지등록</router-link>
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
                        <td class="text-left"><a href="javascript:" @click="clickNoticeDetail(val)" class="textUnderline notiTitle" title="공지사항 자세히 보기">{{ val.btitle }}</a></td>
                        <td><i v-if="val.bfile" class="fa-regular fa-file-lines notiFile"></i></td>
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
			searchParams: {},	
			listPage: {},
            custType: '',
            insertButton: false
		};
	},
	mounted() {     

		const params = {id: this.$options.name , title: '', content: '', userName: '', size: '10'};

        this.custType = this.$store.state.loginInfo.custType; 

        if(this.custType == 'inter'){//계열사인 경우
            var userAuth = this.$store.state.loginInfo.userAuth;//계열사 권한
            
            if(userAuth == '1' || userAuth == '2'){//시스템관리자 또는 각사관리자인 경우

                //공지사항 등록가능
                this.insertButton = true;
            }
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
		search(page) {//파라미터로 들어온 페이지로 데이터 검색

			if (page >= 0) this.searchParams.page = page;
			this.retrieve();

		},
		async retrieve() {//공지사항 조회

			try {
				this.$store.commit('loading');
        		this.$store.commit('searchParams', this.searchParams);
				const response = await this.$http.post('/api/v1/notice/noticeList', this.searchParams);
				this.listPage = response.data;
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		},
        clickNoticeDetail(data){//공지사항 상세 이동
            this.plusClickNum(data.bno);// 조회수 +1
            //this.$store.commit('setNoticeDetailData', data);//상세 페이지에 store로 넘기는 방법

            this.$router.push({name:"noticeDetail" , query: { 'bno': data.bno }});//상세 페이지 이동
        },
        plusClickNum(bno){// 조회수 +1
            this.$http.post('/api/v1/notice/updateClickNum', { 'bno': bno});
        }
    }
  };
  </script>