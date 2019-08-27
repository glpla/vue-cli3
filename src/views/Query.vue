<template>
  <div class="query">
    <h1>query page</h1>
    <div>[query with ? ] {{toUpper}}</div>
  </div>
</template>
<script>
export default {
  name: "Query",
  data() {
    return {
      msg: "hello"
    };
  },
  methods: {},
  computed: {
    toUpper() {
      return this.msg.toUpperCase();
    }
  },
  mounted() {
    this.msg = this.$route.query.gender;
  }
};
</script>

