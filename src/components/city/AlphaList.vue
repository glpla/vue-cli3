<template>
  <div class="alpha-list" ref="alpha">
    <div
      class="alpha-key"
      v-for="(item,index) in getKeyFromCities"
      :key="item"
      :ref="item"
      :data-key="item"
      :data-idx="index"
      :class="indexKey==index?'active':''"
      @click="onClick"
      @touchstart.prevent="onStart"
      @touchmove="onMove"
      @touchend="onEnd"
    >{{item}}</div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "AlphaList",
  props: {
    cities: {},
    hots: {}
  },
  data() {
    return {
      isTouch: false,
      startY: "",
      endY: "",
      indexKey: 0,
      domH: ""
    };
  },
  computed: {
    getKeyFromCities() {
      let arr = Object.keys(this.cities);
      // window.console.log(arr.length);
      return arr;
    }
  },
  methods: {
    onClick(e) {
      // window.console.log(e.target.dataset.key);
      this.indexKey = e.target.dataset.idx;
      this.$emit("change", e.target.dataset.key);
    },
    onStart() {
      this.isTouch = true;
    },
    onMove(e) {
      if (this.isTouch) {
        // window.console.log(this.$refs["A"], this.startY, this.domH);
        this.endY = e.touches[0].clientY;
        this.indexKey = Math.floor((this.endY - this.startY) / this.domH);
        if (this.indexKey < 0) {
          this.indexKey = 0;
        }
        if (this.indexKey >= this.getKeyFromCities.length) {
          this.indexKey = this.getKeyFromCities.length - 1;
        }
        this.$emit("change", this.getKeyFromCities[this.indexKey]);
      }
    },
    onEnd() {
      this.isTouch = false;
    }
  },
  updated() {
    this.startY =
      this.$refs["A"][0].offsetTop + this.$refs["A"][0].parentNode.offsetTop;
    this.domH = this.$refs["A"][0].offsetHeight;
    // window.console.log(this.$refs["A"], this.startY, this.domH);
  }
};
</script>

<style scoped>
.alpha-list {
  position: fixed;
  width: 0.54rem;
  bottom: 0;
  right: 0;
  top: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  /* background: #f05; */
}
.alpha-key {
  padding: 0.06rem;
}
.active {
  background: rgba(0, 153, 153, 0.6);
  border-radius: 0.1rem;
  color: #fff;
}
</style>


