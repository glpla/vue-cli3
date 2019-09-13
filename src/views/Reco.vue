<template>
  <div class="reco">
    <div class="wrap">
      <span class="iconfont iconfanhui back-btn"></span>
    </div>
    <div>{{this.$route.params.tips}}-{{this.$route.params.id}}</div>
  </div>
</template>
<script>
export default {
  name: "Reco",
  data() {
    return {
      msg: "hello"
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped>
.reco {
  background: #f40;
}
</style>


