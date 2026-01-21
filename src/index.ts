import type { PluginOption } from 'vite'
import process from 'node:process'
import { ensureTrailingSlash, generatorContentHash, getConfigSource } from './utils'

const GLOBAL_CONFIG_FILE_NAME = '_app.config.js'
const GLOBAL_VAR_NAME = '_App_Conf_'
const DEFAULT_ENV_VAR_PREFIX = 'VITE_GLOB_'

export interface PluginOptions {
  /**
   * Indicates whether the current build is for production.
   */
  isBuild: boolean

  /**
   * The root directory of the project.
   * @default process.cwd()
   */
  envDir?: string

  /**
   * The configFile of the extra app config file.
   * @default '_app.config.js'
   */
  configFile?: string

  /**
   * The name of the global variable to store the app config. in window object.
   * like window[globalVarName]
   *
   * @default '_App_Conf_'
   */
  globalVarName?: string

  /**
   * The prefix used to match environment variables for inclusion in the app config.
   * @default 'VITE_GLOB_'
   */
  envPrefixMatch?: string
}

const DEFAULT_OPTIONS: Partial<PluginOptions> = {
  configFile: GLOBAL_CONFIG_FILE_NAME,
  globalVarName: GLOBAL_VAR_NAME,
  envPrefixMatch: DEFAULT_ENV_VAR_PREFIX,
  envDir: process.cwd(),
}

export function ViteExtraAppConfigPlugin(options: PluginOptions): PluginOption | undefined {
  const {
    isBuild,
    configFile,
    globalVarName,
    envPrefixMatch,
    envDir,
  } = Object.assign({}, DEFAULT_OPTIONS, options) as PluginOptions

  let publicPath: string
  let source: string

  // 仅在构建时注入
  if (!isBuild) {
    return undefined
  }

  return {
    name: 'vite:extra-app-config',
    async configResolved(config) {
      publicPath = ensureTrailingSlash(config.base)
      source = getConfigSource(globalVarName!, envPrefixMatch!, envDir!, config.envPrefix)
    },
    async generateBundle() {
      try {
        this.emitFile({
          type: 'asset',
          source,
          fileName: configFile,
        })

        console.log(`\n✨configuration file is build successfully!`)
      }
      catch (error) {
        console.log(`\nconfiguration file configuration file failed to package:\n${error}`)
      }
    },
    async transformIndexHtml(html) {
      const hash = `v=${generatorContentHash(html, 8)}`

      const appConfigSrc = `${publicPath}${configFile}?${hash}`

      return {
        html,
        tags: [{ attrs: { src: appConfigSrc }, tag: 'script' }],
      }
    },
  }
}

export default ViteExtraAppConfigPlugin
