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

			<!-- 가입관련은 faq1, 입찰관련 faq2, 인증서관련 faq3으로 필터됌 -->
			<div class="tabStyle tab3 faqList">
				<a href="javascript:void(0)" id="faq1" data-filter=".faq1" class="active">가입관련</a>		
				<a href="javascript:void(0)" id="faq2" data-filter=".faq2">입찰관련</a>
				<a href="javascript:void(0)" id="faq3" data-filter=".faq3">인증서관련</a>
			</div>
			<div class="faq_item_wrap">
				<div :class="{'faq_item': true, 'faq1': val.faqType === '1', 'faq2': val.faqType === '2', 'faq3': val.faqType === '3'}" v-for="(val, idx) in listPage.content">
					<div class="faqTitle"><div><span class="faqQ">Q</span><p class="faqTit">{{ val.title }}</p></div><i class="fal fa-chevron-down faqIcon"></i></div>
					<div class="faqAn">
						<span class="faqA">A.</span>
						<div class="faqTxt">
							{{ val.answer }}
						</div>
					</div>
				</div>
			</div>

		</div>
		<!-- //contents -->
	</div>
	<!-- //본문 -->
  </template>
  <script>
  import _ from "lodash";
  import cmmn from "../../../../public/js/common.js"

  
  export default {
    name: "userFaq",
    components: {

    },
	created() {
		//this.retrieve();
		
    },
    beforeMount() {
		this.retrieve();
	},
    async mounted() {

		//계열사 시스템관리자인 경우
		if(this.custType == 'inter' && this.userAuth == '1'){
			this.$router.push({name:"adminFaq"});//관리자 faq 화면으로 이동
		}

		const params = {id: this.$options.name, title:'', faqType: '', useYn: '',updateInsert: '', admin: 'N' ,size: ''};
		if (this.$store.state.searchParams.id == params.id) {
			this.searchParams = Object.assign(params, this.$store.state.searchParams);
		} else {
			this.searchParams = params;
		}

		

		await this.retrieve();

		$("#faq1").trigger("click");

		//faq 동작
		cmmn.applyFaq();

    },
    data() {
      return {
		searchParams: {},	
		listPage: {},
		custType : this.$store.state.loginInfo.custType,//계열사, 협력사 정보
		userAuth : this.$store.state.loginInfo.userAuth,//권한
      };
    },
    methods: {
		async retrieve() {
			try {
				this.$store.commit('loading');
        		this.$store.commit('searchParams', this.searchParams);
				const response = await this.$http.post('/api/v1/faq/faqList', this.searchParams);
				this.listPage = response.data;
				console.log('gogo', this.listPage);
				this.$store.commit('finish');
			} catch(err) {
				console.log(err)
				this.$store.commit('finish');
			}
		}
    }
  };
  </script>