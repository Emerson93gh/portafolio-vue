import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
  ? 'https://emerson93gh.github.io/portafolio-vue/'
  : '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
