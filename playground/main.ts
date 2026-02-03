import { useAppConfig } from 'vite-plugin-extra-app-config/helper'

document.getElementById('app')!.innerHTML = '__UNPLUGIN__'
console.log('Env Config:', useAppConfig(import.meta.env, import.meta.env.PROD, '__APP_ENV__'))
