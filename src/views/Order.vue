<template>
  <div class="order">
    <h1>Order page</h1>
    <div>this.$route.query.id: {{this.$route.query.id}}</div>
  </div>
</template>
<script>
export default {
  name: "Order",
  data() {
    return {
      user: ""
    };
  },
  beforeRouteEnter: (to, from, next) => {
    window.console.log(to);
    window.console.log(from);
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    window.console.log(to);
    window.console.log(from);
    next();
  },
  mounted() {
    // window.console.log(this.$route);
    // this.user = this.$route.params.id;
  }
};
</script>

<style scoped>
.order {
  background: #f40;
}
</style>