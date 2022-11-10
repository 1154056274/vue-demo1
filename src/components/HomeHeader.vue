
<script setup>
import { onMounted, onUnmounted } from "vue";

const sticky = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const clientHeight = document.querySelector(".top").clientHeight;
  if (scrollTop > clientHeight) {
    document.querySelector(".bot").classList.add("sticky");
  } else {
    document.querySelector(".bot").classList.remove("sticky");
  }
};

onMounted(() => {
  window.addEventListener("scroll", sticky);
});
onUnmounted(() => {
  window.removeEventListener("scroll", sticky);
});
</script>

<template>
  <div class="homeHeaderWrapper">
    <div class="top">
      <span>登录</span>
      <span class="division">|</span>
      <span>注册</span>
    </div>
    <div class="bot">欢迎来到饿了么</div>
  </div>
</template>


<style lang="scss" scoped>
@import "../styles/index.scss";
.homeHeaderWrapper {
  width: 100%;
  background: #0085ff;
  height: 8vh;
  color: white;
  // position: fixed;
  // top: 0;
  // z-index: 10;
  .top {
    height: 3vh;
    line-height: 3vh;
    text-align: right;
    .division {
      margin: 0 5px;
    }
  }
  .bot {
    text-align: center;
    height: 5vh;
    line-height: 5vh;
    background: #0085ff;
    width: 100%;
  }
  .sticky {
    @include displaySticky();
  }
}
</style>
