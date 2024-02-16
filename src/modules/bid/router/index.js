
import bidProgress from '../views/BidProgress.vue';
import partnerBidStatus from '../views/PartnerBidStatus.vue';
import partnerBidComplete from '../views/PartnerBidComplete.vue';
import partnerBidStatusDetail from '../views/PartnerBidStatusDetail.vue';
import partnerBidCompleteDetail from '../views/PartnerBidCompleteDetail.vue';

export default [
    {
        path: '/bid/progress',
        name: 'bidProgress',
        component: bidProgress
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
    }
];