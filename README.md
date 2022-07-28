<!--
 * @Author: cuizq
 * @Date: 2022-07-19 05:12:43
 * @LastEditors: cuizq cuizq@biyouxinli.com
 * @LastEditTime: 2022-07-28 23:25:10
 * @Description: 
-->
组件
components
  --common
    --Button
<CommonButton></CommonButton>


方法
composable
  --文件中直接使用(有点像全局mixin),只有顶层文件会被引入
  const time = ref(getTime());



数据获取api
Nuxt3中提供了四种方法：useAsyncData 、useFetch 、useLazyFetch 、useLazyAsyncData 。提供的四个方法，都是获取后台数据的，但是使用场景和使用方法有所不同。

$fetch( )方法是nuxt3提供的内置方法，我们直接可以使用。

https://v3.nuxtjs.org/api/composables/use-async-data  (七个配置项)
useAsyncData 异步获取数据，它可以使用在页面中，组件和插件中。返回四个对象:
data: 返回的数据，我们需要的服务器数据就在这个属性里。
error：是否存在错误，如果存在错误，可以在这个属性中获得，返回的是一个对象。
pending：这次请求的状态，返回的是布尔值。
refresh：这个返回的是一个函数，可以用来刷新 handler函数返回的数据。

useFetch 可以理解为所有的都选择默认配置的useAsyncData 方法
const res = await useFetch("http://XXXXX/getTenArticleList");

Lazy 设置成了true， 也就是会阻塞页面。



middleware路由中间件


SEO请看/pages/seo


设置cookie
const cookie = useCookie(name, options)
options = {
  maxAge:3600,
  htttpOnly:true,
  secure:true, //仅有https传递cookie
}