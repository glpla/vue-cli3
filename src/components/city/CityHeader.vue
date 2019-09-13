<template>
  <div class="city-header">
    <router-link to="/">
      <div class="back-btn">
        <span class="iconfont iconfanhui"></span>
      </div>
    </router-link>城市选择
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style scoped>
.city-header {
  position: relative;
  text-align: center;
  color: #fff;
  height: 0.76rem;
  line-height: 0.76rem;
  background: #099;
}
.back-btn {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.76rem;
  height: 100%;
  color: #fff;
}
</style>


