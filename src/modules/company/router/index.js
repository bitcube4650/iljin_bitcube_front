
import partnerCompInfo from '../views/PartnerCompInfo.vue';
import partnerCompUpdate from '../views/PartnerCompUpdate.vue';
import partnerUser from '../views/PartnerUser.vue';

export default [
    {
        path: '/company/partner/approval',
        name: 'PartnerApproval',
        desc: '계열사>업체정보>업체승인',
        component: () => import ('../views/PartnerApproval.vue')
    },
    {
        path: '/company/partner/approval/:id',
        name: 'PartnerApprovalDetail',
        desc: '계열사>업체정보>업체승인상세',
        component: () => import ('../views/PartnerApprovalDetail.vue')
    },
    {
        path: '/company/partner/management',
        name: 'PartnerManagement',
        desc: '계열사>업체정보>업체관리',
        component: () => import ('../views/PartnerManagement.vue')
    },
    {
        path: '/company/partner/management/create',
        name: 'PartnerManagementCreate',
        desc: '계열사>업체정보>업체관리>업체등록',
        component: () => import ('../views/PartnerManagementForm.vue')
    },
    {
        path: '/company/partner/management/:id/update',
        name: 'PartnerManagementUpdate',
        desc: '계열사>업체정보>업체관리>업체수정',
        component: () => import ('../views/PartnerManagementForm.vue')
    },
    {
        path: '/company/partner/management/:id',
        name: 'PartnerManagementDetail',
        desc: '계열사>업체정보>업체관리>업체상세',
        component: () => import ('../views/PartnerManagementDetail.vue')
    },
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