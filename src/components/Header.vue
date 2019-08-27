<template>
  <div class="wrap">
    <div class="left">1</div>
    <div class="middle" v-on:click="onClick">{{title}} {{subTitle}}</div>
    <div class="right">1</div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return "title";
      }
    },
    subTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("onGetMsg", "the sending data here");
    }
  }
};
</script>
<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
}
.wrap div {
  padding: 0.2rem;
  color: #fff;
}
.wrap .left {
  flex: 1;
  background: #f40;
}
.wrap .middle {
  flex: 2;
  background: #0cc;
}
.wrap .right {
  flex: 1;
  background: #709;
}
</style>


