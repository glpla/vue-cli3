<template>
  <div class="wrap">
    <h1>Order page</h1>
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