<template>
  <div class="message">
    <h1>message page</h1>
    <div>this.$route.params.id: {{this.$route.params.id}}</div>
  </div>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      tips: ""
    };
  },
  mounted() {}
};
</script>

<style scoped>
.message {
  background: #f40;
}
</style>