<template>
  <div class="mine">
    <h1>mine page</h1>
    <router-link to="nest0">nest one</router-link>|
    <router-link to="nest1">nest two</router-link>|
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Mine"
};
</script>

<style scoped>
.mine {
  background: #f40;
}
</style>
