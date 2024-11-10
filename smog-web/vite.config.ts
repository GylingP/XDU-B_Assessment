/*
 * @Author: GylingP gylingpolar@outlook.com
 * @Date: 2024-05-05 12:34:44
 * @LastEditors: GylingP gylingpolar@outlook.com
 * @LastEditTime: 2024-05-09 16:12:12
 * @FilePath: \smog\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ command, mode }: ConfigEnv) =>{
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [vue()],
    server: {
      host: '0.0.0.0'
    },
    base: env.VITE_BASE_PATH
  })
}