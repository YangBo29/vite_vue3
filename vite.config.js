import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    // build: {
    //     // 启用 CSS 代码分割
    //     cssCodeSplit: true,
    // },
    // 全局样式注入
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use \'@scss/global\' as *; \n', // 全局注入变量
            },
        },
    },
    server: {
        host: '0.0.0.0', // 监听所有 IP 地址
    },
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@page': path.resolve(__dirname, './src/page'),
            '@router': path.resolve(__dirname, './src/views'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@store': path.resolve(__dirname, './src/store'),
            '@scss': path.resolve(__dirname, './src/scss'),
        },
    },
});
