import { getEnvConfig } from 'vite-plugin-extra-app-config/helper'

document.getElementById('app')!.innerHTML = '__UNPLUGIN__'
console.log('Env Config:', getEnvConfig('__APP_ENV__'))
