import Vue from 'vue';
import Router from 'vue-router';
import bidRoutes from './modules/bid/router/router';

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
                import ('./components/Login.vue'),
        },
        {
            path: '/',
            name: 'main',
            component: () =>
                import ('./views/Main.vue'),
        },
        {
            path: '/codeMng',
            name: 'codeMng',
            component: () =>
                import ('./views/CodeMng.vue'),
        },
        
        {
            path: '/bid',
            name: 'bidProgress',
            component: () =>
                import ('./modules/bid/views/BidProgress.vue'),
            // children: [
            //     ...bidRoutes,
            // ]
        },

        
//template[end]         
    ],
});

