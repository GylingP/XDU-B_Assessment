/*
 * @Author: GylingP gylingpolar@outlook.com
 * @Date: 2024-05-07 09:04:20
 * @LastEditors: GylingP gylingpolar@outlook.com
 * @LastEditTime: 2024-05-09 16:08:11
 * @FilePath: \smog\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
 
// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    name:'/',
    path: "/",
    redirect: "/index",
  },
  {
    name:'/index',
    path: "/index",
    component: () => import("../views/IndexPage.vue"),
  },
];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH as string),
  routes,
});
 
// 3导出路由   然后去 main.ts 注册 router.ts
export default router