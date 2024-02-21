export default [
    {
        path: '/info/group/user',
        name: 'GroupUser',
        desc: '계열사>정보관리>사용자관리',
        component: () => import ('../views/GroupUser.vue')
    },
    {
        path: '/info/group/item',
        name: 'ItemInfo',
        desc: '계열사>정보관리>품목정보관리',
        component: () => import ('../views/ItemInfo.vue')
    }
];