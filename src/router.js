import Vue from 'vue';
import Router from 'vue-router';
import bidRoutes from './modules/bid/router/index.js';
import noticeRoutes from './modules/notice/router/index.js';
import companyRoutes from './modules/company/router/index.js';


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
        ...companyRoutes

        
//template[end]         
    ],
});

