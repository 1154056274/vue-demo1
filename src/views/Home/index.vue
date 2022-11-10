<script setup>
import HomeHeader from "../../components/HomeHeader.vue";
import { useCountDown } from "@vant/use";
import axios from "axios";
import { onMounted, onUnmounted, reactive, ref } from "vue";
import "../../mock/index.js";

const data = ref([]);
const loadImg = ref(
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190821%2F222f99b1bbdd467eaf8d6c87d444de5b.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670554964&t=13bb8930b918d410991f6bb0c0bb67e7"
);
const imgWrapper = ref(null);
const imgbox = ref(null);
const scroll = () => {
  setTimeout(() => {
    const length = data.value.length;
    const clientHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    for (let i = 0; i < length; i++) {
      // 拿到照片距离父级顶部的距离，offsetTop（固定不变的值）
      const imgOffsetTop = imgbox.value[i].offsetTop;

      if (imgOffsetTop < clientHeight + scrollTop) {
        imgbox.value[i].children[0].children[0].src = imgbox.value[
          i
        ].children[0].children[0].getAttribute("data-src");
      }
    }
  }, 100);
};

onMounted(() => {
  axios.get("/list").then((res) => {
    console.log(res);
    if (res.data.status == 200) {
      data.value = res.data.data.list;
    }
  });
  scroll();
  window.addEventListener("scroll", scroll, true);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scroll, true);
});
</script>

<template>
  <div class="home">
    <HomeHeader />
    <main>
      <ul ref="imgWrapper">
        <li v-for="item in data" :key="item.id" ref="imgbox">
          <div class="imgWrapper">
            <img :src="loadImg" :data-src="item.img" alt="" />
          </div>
          <div class="contentWrapper">
            <h2>{{ item.title }}</h2>
            <div class="middle">
              <span class="rate">评分：{{ item.score }} </span>
              <span>月售100单</span>
            </div>
            <div class="bottom">
              <span class="one">配送费约¥5</span>
              <span>10公里|40分钟</span>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>


<style lang='scss' scoped >
.home {
  main {
    margin-top: 8vh;
    ::-webkit-scrollbar {
      display: none;
    }
    p {
      line-height: 200px;
    }
    ul {
      li {
        display: flex;
        .imgWrapper {
          width: 117px;
          height: 117px;
          text-align: center;
          padding-top: 8px;
          img {
            width: 78px;
            height: 78px;
          }
        }
        .contentWrapper {
          h2 {
            font-weight: 900;
          }
          .middle {
            .rate {
              margin-right: 10px;
            }
          }
          .bottom {
            .one {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
