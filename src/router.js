import Vue from 'vue';
import Router from 'vue-router';
import bidRoutes from './modules/bid/router/index.js';
import noticeRoutes from './modules/notice/router/index.js';
import companyRoutes from './modules/company/router/index.js';
import statisticsRoutes from './modules/statistics/router/index.js'
import infoRoutes from './modules/info/router/index.js';
import axios from 'axios';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            props: true,
            component: () =>
                import ('./views/Login.vue'),
        },
        {
            path: '/',
            name: 'Main',
            components: {
                inter : () => import ('./views/Main.vue'),
                cust : () => import ('./views/PartnerMain.vue')
            }
        },
        {
            path: '/signup',
            name: 'Signup',
            component: () =>
                import ('./views/Signup.vue'),
        },
        {
            path: '/signup2',
            name: 'Signup2',
            component: () =>
                import ('./views/Signup2.vue'),
        },
        {
            path: '/codeMng',
            name: 'codeMng',
            component: () =>
                import ('./views/CodeMng.vue'),
        },
        ...bidRoutes,
        ...noticeRoutes,
        ...companyRoutes,
        ...statisticsRoutes,
        ...infoRoutes,
        {
            path: '/chgPwdFirst',
            name : '',
            beforeEnter() {
                axios.defaults.headers = {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                  };
                axios.post("/api/v1/main/chgPwdFirst", {})
            },
        }

        
//template[end]         
    ],
});

