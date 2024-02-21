import compPerformance from '../views/CompPerformance.vue';
import performanceDetail from '../views/PerformanceDetail.vue';
import biddingStatus from '../views/BiddingStatus.vue';
import biddingDetail from '../views/BiddingDetail.vue';

export default [
    {
        path: '/statistics/performance/company',
        name: 'compPerformance',
        component: compPerformance
        //meta: { bid: true }
    },
    {
        path: '/statistics/performance/detail',
        name: 'performanceDetail',
        component: performanceDetail
        //meta: { bid: true }
    },
    {
        path: '/statistics/status',
        name: 'biddingStatus',
        component: biddingStatus
        //meta: { bid: true }
    },
    {
        path: '/statistics/detail',
        name: 'biddingDetail',
        component: biddingDetail
        //meta: { bid: true }
    },
];