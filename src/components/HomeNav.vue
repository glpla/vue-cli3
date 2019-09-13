<template>
  <div class="home-nav">
    <swiper :options="swiperOption" ref="home-nav">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="wrap">
          <div class="nav-box" v-for="item in page" :key="item.id">
            <img class="nav-img" :src="item.url" alt>
            <p class="nav-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
import { navList } from "@/assets/js/data";
export default {
  name: "HomeNav",
  data() {
    return {
      navList: [],
      swiperOption: {
        scrollbar: ".swiper-scrollbar",
        scrollbarHide: false
      }
    };
  },
  computed: {
    pages() {
      let pages = [];
      this.navList.forEach((item, index) => {
        let pageIndex = Math.floor(index / 8);
        if (!pages[pageIndex]) {
          pages[pageIndex] = [];
        }
        pages[pageIndex].push(item);
      });
      return pages;
    }
  },
  mounted() {
    this.navList = navList;
  }
};
</script>

<style scoped>
.home-nav {
  margin-top: 0.2rem;
}
.wrap {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
}
.nav-box {
  box-sizing: border-box;
  width: 25%;
  padding: 0.1rem;
}
.nav-img {
  width: 100%;
}
.nav-desc {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-nav >>> .swiper-scrollbar-drag {
  background: rgba(0, 153, 153, 0.4);
}
</style>
