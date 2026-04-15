# vite-plugin-extra-app-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![License][license-src]][license-href]

用于将配置文件抽离出来并注入到项目中的Vite Plugin

## 安装

``` bash
pnpm add -D vite-plugin-extra-app-config
```

## 使用

``` ts
import { defineConfig } from 'vite'
import ExtraAppConfigPlugin from 'vite-plugin-extra-app-config'

export default defineConfig({
  plugins: [
    ExtraAppConfigPlugin({
      isBuild: true,
      globalVarName: '__APP_ENV__',
      envPrefixMatch: 'VITE_GLOB',
      configFile: '_app.config.js',
    }),
  ],
})
```

**辅助函数获取**

``` ts
import { useAppConfig } from 'vite-plugin-extra-app-config/helper'

console.log('App Config:', useAppConfig(import.meta.env, import.meta.env.PROD, '__APP_ENV__'))
```

## License

[MIT](./LICENSE) License © [hackycy](https://github.com/hackycy)

## Credits

This project also partially contains code derived or copied from the following projects:

- [Vben](https://github.com/vbenjs/vue-vben-admin/)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/vite-plugin-extra-app-config?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/vite-plugin-extra-app-config
[npm-downloads-src]: https://img.shields.io/npm/dm/vite-plugin-extra-app-config?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/vite-plugin-extra-app-config
[bundle-src]: https://img.shields.io/bundlephobia/minzip/vite-plugin-extra-app-config?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=vite-plugin-extra-app-config
[license-src]: https://img.shields.io/github/license/hackycy/vite-plugin-extra-app-config.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/hackycy/vite-plugin-extra-app-config/blob/main/LICENSE
