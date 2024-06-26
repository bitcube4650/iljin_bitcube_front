
import bidProgress from '../views/BidProgress.vue';
import bidProgressDetail from '../views/BidProgressDetail.vue';
import bidProgressUpdate from '../views/BidProgressUpdate.vue';
import bidProgressInsert from '../views/BidProgressInsert.vue';
import bidStatus from '../views/BidStatus.vue';
import bidStatusDetail from '../views/BidStatusDetail.vue';
import bidOpenDetail from '../views/BidOpenDetail.vue';
import bidComplete from '../views/BidComplete.vue';
import bidCompleteDetail from '../views/BidCompleteDetail.vue';
import bidHistory from '../views/BidHistory.vue';
import partnerBidStatus from '../views/PartnerBidStatus.vue';
import partnerBidComplete from '../views/PartnerBidComplete.vue';
import partnerBidStatusDetail from '../views/PartnerBidStatusDetail.vue';
import partnerBidCompleteDetail from '../views/PartnerBidCompleteDetail.vue';
import rebid from '../views/Rebid.vue';

export default [
    {
        path: '/bid/progress',
        name: 'bidProgress',
        component: bidProgress
        //meta: { bid: true }
    },
    {
        path: '/bid/progressDetail',
        name: 'bidProgressDetail',
        component: bidProgressDetail,
        //meta: { bid: true }
    },
    {
        path: '/bid/progressUpdate',
        name: 'bidProgressUpdate',
        component: bidProgressUpdate
        //meta: { bid: true }
    },
    {
        path: '/bid/progressInsert',
        name: 'bidProgressInsert',
        component: bidProgressInsert
        //meta: { bid: true }
    },
    {
        path: '/bid/status',
        name: 'bidStatus',
        component: bidStatus
        //meta: { bid: true }
    },
    {
        path: '/bid/statusDetail',
        name: 'bidStatusDetail',
        component: bidStatusDetail
        //meta: { bid: true }
    },
    {
        path: '/bid/openDetail',
        name: 'bidOpenDetail',
        component: bidOpenDetail
        //meta: { bid: true }
    },
    {
        path: '/bid/complete',
        name: 'bidComplete',
        component: bidComplete
        //meta: { bid: true }
    },
    {
        path: '/bid/completeDetail',
        name: 'bidCompleteDetail',
        component: bidCompleteDetail
        //meta: { bid: true }
    },
    {
        path: '/bid/history',
        name: 'bidHistory',
        component: bidHistory
        //meta: { bid: true }
    },
    {
        path: '/bid/partnerStatus',
        name: 'partnerBidStatus',
        component: partnerBidStatus
        //meta: { bid: true }
    },
    {
        path: '/bid/partnerStatusDetail',
        name: 'partnerBidStatusDetail',
        component: partnerBidStatusDetail
        //meta: { bid: true }
    },
    {
        path: '/bid/partnerComplete',
        name: 'partnerBidComplete',
        component: partnerBidComplete
        //meta: { bid: true }
    },
    {
        path: '/bid/partnerCompleteDetail',
        name: 'partnerBidCompleteDetail',
        component: partnerBidCompleteDetail
        //meta: { bid: true }
    },
    {
        path: '/bid/rebid',
        name: 'rebid',
        component: rebid
        //meta: { bid: true }
    }
];