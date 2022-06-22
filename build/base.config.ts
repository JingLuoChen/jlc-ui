import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginVue from "../plugins/vue-view-code-plugins";
const mdPlugin = require("vite-plugin-markdown");

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
            packages: resolve(__dirname, '../packages'),
        },
    },
    plugins: [
        vue(),
        mdPlugin.plugin({
            mode: ["html", "vue"],
        }),
        vitePluginVue,
    ],
});