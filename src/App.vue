<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/name/John?age=30">Name</router-link> |
            <router-link to="/user/123?role=admin">User</router-link>
        </nav>
        <button @click="login" v-if="!isAuthenticated">Login</button>
        <button @click="logout" v-else>Logout</button>
        <Suspense>
            <template #default>
                <router-view />
            </template>
            <template #fallback>
                <Loading />
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Loading from '@/components/Loading.vue';

// 直接使用 Vuex 状态和操作
const store = useStore();
const isAuthenticated = computed(() => store.state.isAuthenticated);
const login = () => store.dispatch('login');
const logout = () => store.dispatch('logout');

// 直接访问环境变量
console.log('App Name:', import.meta.env.VITE_DEVELOP);
</script>
