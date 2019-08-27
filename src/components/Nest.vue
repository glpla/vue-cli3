<template>
  <div id="wrap">
    <h1>nest page</h1>
    <router-link to="nest0">nest one</router-link>|
    <router-link to="nest1">nest two</router-link>|
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Nest"
};
</script>
<style scoped>

</style>
