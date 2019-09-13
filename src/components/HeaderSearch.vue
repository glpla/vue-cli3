<template>
  <div class="header-search">
    <div class="left">
      <span class="iconfont iconfanhui"></span>
    </div>
    <div class="input">
      <span class="iconfont iconsousuo1"></span>请输入您要查找的信息
    </div>
    <router-link to="/city">
      <div class="right">
        桂林
        <span class="iconfont iconliebiaoyedizhi"></span>
      </div>
    </router-link>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "HeaderSearch"
};
</script>
<style scoped>
.header-search {
  height: 0.86rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #099;
  color: #fff;
}
.left {
  width: 0.64rem;
  text-align: center;
}
.right {
  width: 1.24rem;
  text-align: center;
  color: #fff;
}
.input {
  flex: 1;
  border-radius: 0.1rem;
  background: #fff;
  padding: 0.1rem;
  color: #999;
}
</style>


