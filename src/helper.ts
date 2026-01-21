/**
 * helper functions for get env config
 *
 * @param globalVar
 */
export function getEnvConfig<T = Record<string, any>>(globalVar: string): T {
  const ENV = (import.meta.env.DEV
    ? (import.meta.env as unknown as T)
    : window[globalVar as any]) as unknown as T

  return ENV
}
