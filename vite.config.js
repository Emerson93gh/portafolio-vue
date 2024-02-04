import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
  ? 'https://emerson93gh.github.io/portafolio-vue/'
  : '/'
})
