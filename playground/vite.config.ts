import { defineConfig } from 'vite'
import ExtraAppConfigPlugin from 'vite-plugin-extra-app-config'

export default defineConfig({
  base: './',
  server: {
    port: 8187,
  },
  plugins: [
    ExtraAppConfigPlugin({
      isBuild: true,
      globalVarName: '__APP_ENV__',
      envPrefixMatch: 'VITE_GLOB',
      configFile: '_app.config.js',
    }),
  ],
})
