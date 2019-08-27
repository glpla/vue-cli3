<template>
  <div class="wrap">
    <h1>colons page</h1>
    <div>[params with : ] {{this.$route.params.id}}</div>
  </div>
</template>
<script>
export default {
  name: "Colons",
  data() {
    return {
      user: ""
    };
  },
  mounted() {
    // window.console.log(this.$route);
    this.user = this.$route.params.id;
  }
};
</script>