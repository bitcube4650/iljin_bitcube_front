
import partnerCompInfo from '../views/PartnerCompInfo.vue';
import partnerCompUpdate from '../views/PartnerCompUpdate.vue';
import partnerUser from '../views/PartnerUser.vue';

export default [
    {
        path: '/company/partner',
        name: 'partnerCompInfo',
        component: partnerCompInfo
        //meta: { bid: true }
    },
    {
        path: '/company/partner/update',
        name: 'partnerCompUpdate',
        component: partnerCompUpdate
        //meta: { bid: true }
    },
    {
        path: '/company/partner/user',
        name: 'partnerUser',
        component: partnerUser
        //meta: { bid: true }
    }
];