import baseConfig from './base.config';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

export default defineConfig({
    ...baseConfig,
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, '../packages/index.ts'),
            name: 'JLCUI',
            fileName: (format) => `jlc-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            // 确保外部化处理那些你不想打包进库的依赖
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [
        vue(),
        dts(),
        libCss()
    ]
});
