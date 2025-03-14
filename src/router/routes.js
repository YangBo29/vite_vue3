// import { defineAsyncComponent } from 'vue';
// 导入加载页面
// import Loading from '@components/Loading.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@page/Home/index.vue'),
    },
    {
        path: '/name/:name?',
        name: 'Name',
        component: () => import('@page/Name/index.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import('@page/User/index.vue'),
        meta: { requiresAuth: true },
    },
];

export default routes;