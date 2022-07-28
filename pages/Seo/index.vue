<!--
 * @Author: cuizq
 * @Date: 2022-07-28 23:19:25
 * @LastEditors: cuizq cuizq@biyouxinli.com
 * @LastEditTime: 2022-07-28 23:21:13
 * @Description: 
-->
<template>
  <div class="">
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="" />
      <Meta name="keywords" content="" />
    </Head>
  </div>
</template>
<script setup>
//二选一
useHead({
  title: "title",
  viewport: "width=device-width,initial-scale=1,maximum-scale=1 ",
  charset: "utf-8",
  meta: [
    { name: "description", content: "description" },
    { name: "keywords", content: "keywords" },
  ],
});
</script>
<style lang="less" scoped></style>
