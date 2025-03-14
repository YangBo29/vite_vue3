import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // 导入 Vuex store
import routes from './routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth); // 检查是否需要登录
    const isAuthenticated = store.state.isAuthenticated; // 获取登录状态

    if (requiresAuth && !isAuthenticated) {
    // 如果需要登录但用户未登录，重定向到首页
        next({ name: 'Home' });
    } else {
    // 否则继续导航
        next();
    }
});

export default router;