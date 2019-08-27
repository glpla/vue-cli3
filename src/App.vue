<template>
  <div id="app">
    <Header title="welcome" :sub-title="msg" @onGetMsg="getMsg"></Header>
    <div id="nav">
      <router-link class="nav-item" to="/">Home</router-link>|
      <router-link class="nav-item" to="/query?gender=male">?Query</router-link>|
      <router-link class="nav-item" :to="{name:'download',params:{tips:router}}">Download</router-link>|
      <router-link class="nav-item" to="/colons/glpla">:Colons</router-link>|
      <router-link class="nav-item" to="/nest" :class="{'router-link-exact-active':isNest}">Nest</router-link>
    </div>
    <div>{{newMsg}}</div>
    <div class="nav-box">
      <router-view class="cont-nav"/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  data() {
    return {
      msg: "54414",
      newMsg: "for receiving data form About...",
      router: "data in App.vue",
      isNest: false
    };
  },
  methods: {
    getMsg(e) {
      this.newMsg = e;
      // window.console.log(e);
    }
  },
  components: {
    Header,
    Footer
  },
  watch: {
    $route(to) {
      // window.console.log(to);
      if (to.path == "/nest/nest0" || to.path == "/nest/nest1") {
        this.isNest = true;
      } else {
        this.isNest = false;
      }
    }
  }
};
</script>

<style>
body {
  color: #999;
}
div {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-top: 1rem;
  padding: 0.2rem;
}

a {
  text-decoration: none;
  color: inherit;
}
a.nav-item {
  padding: 0.2rem;
  font-weight: bold;
}
a.router-link-exact-active {
  color: #42b983;
}
.nav-box {
  width: 100%;
  margin-top: 1rem;
}
</style>
