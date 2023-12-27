import {fileURLToPath, URL} from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


import inject from '@rollup/plugin-inject'
export default defineConfig({
    base:'./',
    plugins: [
        vue(),
        inject({
            $: "jquery", 
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
