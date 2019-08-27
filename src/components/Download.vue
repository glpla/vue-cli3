<template>
  <div class="wrap">
    <h1>download page</h1>
    <div>[params]{{this.$route.params.tips}}:{{tips}}</div>
  </div>
</template>
<script>
export default {
  name: "Download",
  data() {
    return {
      tips: ""
    };
  },
  mounted() {
    // window.console.log(this.$route);
    this.tips = this.$route.params.tips;
  }
};
</script>