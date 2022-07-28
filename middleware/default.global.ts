/*
 * @Author: cuizq
 * @Date: 2022-07-28 23:17:17
 * @LastEditors: cuizq cuizq@biyouxinli.com
 * @LastEditTime: 2022-07-28 23:25:13
 * @Description: 
 */
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("要去那个页面:"+to.path)
  console.log("来自那个页面:"+from.path)
})