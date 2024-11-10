/*
 * @Author: GylingP gylingpolar@outlook.com
 * @Date: 2024-05-05 12:34:44
 * @LastEditors: GylingP gylingpolar@outlook.com
 * @LastEditTime: 2024-05-08 17:02:31
 * @FilePath: \smog-web\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css'



import App from './App.vue'

createApp(App).use(router).use(ElementPlus).mount('#app')
