<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cityList" @selectCity="chooseCity"></city-search>
    <city-list :cities="cityList" :hots="hotList" :cur="curKey" @selectCity="chooseCity"></city-list>
    <alpha-list :cities="cityList" @change="onChange"></alpha-list>
  </div>
</template>

<script>
/* eslint-disable */
import { city } from "@/assets/js/city.js";
import CityHeader from "./CityHeader";
import CitySearch from "./CitySearch";
import CityList from "./CityList";
import AlphaList from "./AlphaList";
export default {
  name: "City",
  data() {
    return {
      cityList: {},
      hotList: {},
      selCity: null,
      curKey: ""
    };
  },
  methods: {
    onChange(e) {
      this.curKey = e;
      // window.console.log("key from alpha-list:" + this.curKey);
    },
    chooseCity(e) {
      window.console.log(e);
    }
  },
  mounted() {
    this.cityList = city.data.cities;
    this.hotList = city.data.hotCities;
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    AlphaList
  }
};
</script>

<style scoped>
</style>
