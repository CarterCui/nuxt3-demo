<template>
  <div>
    <h1>index Page</h1>
    <NuxtLink to="/login">login</NuxtLink>
    <br />
    <NuxtLink to="/home">home</NuxtLink>
    <br />
    <NuxtLink to="/router-111">router id</NuxtLink>
    <br />
    <NuxtLink to="/routerName-carter/router-111">router id</NuxtLink>
    <br />
    <NuxtLink to="/userCenter/userSet">userSet</NuxtLink>

    <CommonButton @click="handleClick">隐藏/显示</CommonButton>

    <CommonLazyText v-if="show" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);

const show = ref(true);
const handleClick = () => {
  show.value = show.value ? false : true;
};
</script>
<style scoped></style>
