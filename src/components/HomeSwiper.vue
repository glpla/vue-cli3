<template>
  <div class="home-swiper">
    <swiper :options="swiperOption" ref="home-swiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.url" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
import { swiperList } from "@/assets/js/data";
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperList: [],
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000,
        speed: 1000
      }
    };
  },
  mounted() {
    this.swiperList = swiperList;
  }
};
</script>

<style scoped>
.swiper-img {
  width: 100%;
  height: 3.6rem;
}
.home-swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>
