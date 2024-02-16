import notice from '../views/Notice.vue';
import userFaq from '../views/UserFaq.vue';
import noticeDetail from '../views/NoticeDetail.vue';

export default [
    {
        path: '/notice',
        name: 'notice',
        component: notice
        //meta: { bid: true }
    },
    {
        path: '/notice/detail',
        name: 'noticeDetail',
        component: noticeDetail
        //meta: { bid: true }
    },
    {
        path: '/notice/faq/user',
        name: 'userFaq',
        component: userFaq
        //meta: { bid: true }
    },
];