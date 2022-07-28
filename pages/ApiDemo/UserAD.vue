<!--
 * @Author: cuizq
 * @Date: 2022-07-28 23:12:32
 * @LastEditors: cuizq cuizq@biyouxinli.com
 * @LastEditTime: 2022-07-28 23:15:44
 * @Description: 
-->
<template>
  <div class="">{{res}}</div>
</template>

<script setup>
import {} from "vue";

const res = await useAsyncData("getList", () =>
  $fetch("http://XXXXXXXX:8000/getTenArticleList")
);
console.log(res);
</script>

<style scoped></style>