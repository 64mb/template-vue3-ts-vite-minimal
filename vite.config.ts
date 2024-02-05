import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // eslint-disable-next-line unicorn/prefer-module
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext'
  }
})
