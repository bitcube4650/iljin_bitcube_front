<template>
    <div v-if="$route.path.startsWith('/signup')" class="wrap">
        <div id="app">
            <div id="wrap">
                <Header />
                <router-view :key="$route.fullPath" />
            </div>
        </div>
    </div>
    <div v-else-if="this.$store.state.loginInfo !== null && this.$store.state.token !== ''" class="wrap">
        <div id="app" v-if="$route.path=='/'">
            <div id="wrap">
                <Header />
                <div class="contentWrap">
                    <Menu />
                    <div class="conRightWrap">
                        <router-view :key="$route.fullPath" :name="this.$store.state.loginInfo.custType"/>
                        <div class="footer">
                            <Footer /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="app" v-else-if="$route.path.substr(0,20)=='/evidAtchPopModeless'">
            <div id="wrap">
                <Header />
                <div class="contentWrap">
                    <Menu />
                    <div class="conRightWrap">
                        <router-view :key="$route.fullPath"/>
                        <div class="footer">
                            <Footer /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="app" v-else>
            <div id="wrap">
                <Header />
                <div class="contentWrap">
                    <Menu />
                    <div class="conRightWrap">
                        <router-view :key="$route.fullPath"/>
                        <div class="footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vld-parent">
            <loading :active.sync="this.$store.state.isLoading" 
            :can-cancel="false" 
            :is-full-page="true"
            color="#6799FF"
            :opacity="0.1"></loading>
        </div>
        <!-- //contents -->
    </div>
    <div v-else>
        <Login/>
        <div class="vld-parent">
            <loading :active.sync="this.$store.state.isLoading" 
            :can-cancel="false" 
            :is-full-page="true"
            color="#6799FF"
            :opacity="0.1"></loading>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar.vue";
    import Swiper from "@/components/Swiper.vue";
    import router from '@/router.js';
    import Login from "@/views/Login.vue";
    import MyMain from "@/views/Main.vue";
    import Menu from "@/components/Menu.vue";
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
   // import router from './router';
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
 
    export default {
        name: "App",
        components: {Navbar, Menu, Swiper, Login, MyMain, Loading, Header, Footer},
        methods: {
        },
        data() {
            return {
                isOpen: true,
                route: router,
                isLoading: false,
                prevRoute: null,
                routeHistory:[]
            };

        },
        created() {
            if (this.$store.state.loginInfo) {
                this.$http.defaults.headers['x-auth-token'] = this.$store.state.loginInfo.token;
            }
            // server session check
            this.$http.get('/')
            .catch((ex) => {
                this.$store.commit('logout');
                this.$cookie.delete('loginInfo');
            })

            if (this.$cookie.get('loginInfo') !== null) {
                this.$store.commit('login', JSON.parse(this.$cookie.get('loginInfo')));

                const loginInfo = {};
                loginInfo.loginId = this.$store.state.loginInfo.loginId;
                loginInfo.token = this.$store.state.loginInfo.token;
                loginInfo.menu = this.$store.state.loginInfo.menu;
                loginInfo.authorities = this.$store.state.loginInfo.authorities;
                loginInfo.loginPw = 'Not Use';
            }
        },
        mounted() {
            this.$store.commit('finish');
        },
        watch: {
            '$route'(to, from) {
            if(to.name && from.name){
                if (this.$cookie.get('loginInfo') !== null) {
                    const orgLoginInfo = this.$store.state.loginInfo;
                    const loginInfo = JSON.parse(this.$cookie.get('loginInfo'));
                    this.$store.commit('login', loginInfo);
                    if (!(orgLoginInfo.custType == loginInfo.custType && orgLoginInfo.userAuth == loginInfo.userAuth)) {
                        location.href = "/";
                    }
                }
            this.prevRoute = from
            this.routeHistory.push({to, from})
              }
            }
        }
    };
</script>

