<template>
  <div class="home">
    <header-search/>
    <home-swiper/>
    <home-nav/>
    <home-reco/>
    <home-weekend/>
  </div>
</template>

<script>
/* eslint-disable */
import HeaderSearch from "@/components/HeaderSearch";
import HomeSwiper from "@/components/HomeSwiper";
import HomeNav from "@/components/HomeNav";
import HomeReco from "@/components/HomeReco";
import HomeWeekend from "@/components/HomeWeekend";
export default {
  name: "home",
  components: {
    HeaderSearch,
    HomeSwiper,
    HomeNav,
    HomeReco,
    HomeWeekend
  }
};
</script>
