<!--
 * @Author: cuizq
 * @Date: 2022-07-28 21:53:11
 * @LastEditors: cuizq cuizq@biyouxinli.com
 * @LastEditTime: 2022-07-28 22:03:36
 * @Description: 
-->
<template>
  <div class="class">获取的id:{{ $route.params.id }}</div>
</template>

<script setup>
import { ref } from "vue";
let router = useRoute();
let id = ref(router.params.id);
</script>
<style scoped></style>
