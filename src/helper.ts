/**
 * helper functions for get env config
 *
 * @param env import.meta.env
 * @param isProd import.meta.env.PROD
 * @param globalVar _App_Conf_
 * @returns T
 */
export function useAppConfig<T = Record<string, any>>(env: Record<string, any>, isProd: boolean, globalVar: string): T {
  const ENV = isProd
    ? window[globalVar as any] as unknown as T
    : (env as unknown as T)

  return ENV
}
