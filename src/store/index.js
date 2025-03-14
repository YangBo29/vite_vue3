import { createStore } from 'vuex';

export default createStore({
    state: {
        isAuthenticated: false, // 用户是否已登录
    },
    mutations: {
        setAuth(state, isAuthenticated) {
            state.isAuthenticated = isAuthenticated;
        },
    },
    actions: {
        login({ commit }) {
            commit('setAuth', true);
        },
        logout({ commit }) {
            commit('setAuth', false);
        },
    },
});