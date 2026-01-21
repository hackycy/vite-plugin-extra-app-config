import { defineConfig } from 'vite'
import ExtraAppConfigPlugin from '../src/index'

export default defineConfig({
  base: './',
  plugins: [
    ExtraAppConfigPlugin({ isBuild: true }),
  ],
})
