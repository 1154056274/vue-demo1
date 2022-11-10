<script  setup>
import { onMounted, ref, watch } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();
const active = ref("home");

watch(
  () => route.path,
  (newVal) => {
    active.value = newVal;
  }
);
</script>


<template>
  <van-tabbar v-model="active">
    <router-link to="/home">
      <van-tabbar-item icon="home-o" name="/home"> 首页 </van-tabbar-item>
    </router-link>
    <router-link to="/order">
      <van-tabbar-item icon="search" name="/order"> 订单 </van-tabbar-item>
    </router-link>
    <router-link to="/mine">
      <van-tabbar-item icon="setting-o" name="/mine"> 我的 </van-tabbar-item>
    </router-link>
  </van-tabbar>
</template>



<style lang='scss' scoped>
.van-tabbar {
  height: 5vh;
  display: flex;
  justify-content: space-around;
}
</style>