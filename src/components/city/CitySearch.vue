<template>
  <div class="city-search">
    <div class="input-box">
      <input class="input" type="text" placeholder="请输入你要查找的城市" v-model.trim="selCity">
    </div>
    <div class="res-box" ref="res" v-show="selCity">
      <ul>
        <li
          class="res-item border-bottom"
          v-for="item in resCity"
          :key="item.id"
          :data-city="item.name"
          @click="select"
        >{{item.name}}</li>
        <li class="res-item border-bottom" v-show="hasNoData">结果不存在</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: {}
  },
  data() {
    return {
      selCity: "",
      resCity: []
    };
  },
  methods: {
    select(e) {
      // window.console.log(e);
      this.$emit("selectCity", e.target.dataset.city);
      this.resCity = [];
      this.selCity = "";
    }
  },
  watch: {
    selCity() {
      let tmp = [];
      if (!this.selCity) {
        this.resCity = [];
      }
      for (let i in this.cities) {
        this.cities[i].forEach(item => {
          if (
            item.name.includes(this.selCity) ||
            item.spell.includes(this.selCity)
          ) {
            tmp.push(item);
          }
        });
      }
      this.resCity = tmp;
    }
  },
  mounted() {
    // window.console.log(this.cities);
    this.bs = new BScroll(this.$refs.res, {});
  },
  computed: {
    hasNoData() {
      return !this.resCity.length;
    }
  }
};
</script>

<style scoped>
.input-box {
  padding: 0.1rem;
  background: #099;
}
.input {
  width: 100%;
  text-align: center;
  border-radius: 0.1rem;
  height: 0.54rem;
  line-height: 0.54rem;
  text-align: center;
  color: #2c3e50;
}
.res-box {
  position: absolute;
  top: 1.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fdfdfd;
  z-index: 1;
  overflow: hidden;
  z-index: 2;
}
.res-item {
  padding: 0.2rem 0.1rem;
}
</style>


