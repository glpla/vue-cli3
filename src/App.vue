<template>
  <div id="app">
    <router-view class="cont"/>
    <div class="nav">
      <router-link class="nav-item" to="/" exact>
        <span class="iconfont iconshouye"></span>
        <div>首页</div>
      </router-link>
      <router-link class="nav-item" :to="{name:'reco',params:{tips:'hello,reco',id:'glpla'}}">
        <span class="iconfont iconyiguanzhu"></span>
        <div>推荐</div>
      </router-link>
      <router-link class="nav-item" to="/message/cnplaman">
        <span class="iconfont iconshuru"></span>
        <div>留言</div>
      </router-link>
      <router-link class="nav-item" to="/order?id=54414">
        <span class="iconfont icongwc"></span>
        <div>订单</div>
      </router-link>
      <router-link class="nav-item" to="/mine" :class="{'router-link-exact-active':isNest}">
        <span class="iconfont iconkefuyouxian"></span>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      msg: "54414",
      newMsg: "for receiving data form About...",
      router: "data in App.vue",
      isNest: false,
      curNavIndex: 0,
      isRoot: false
    };
  },
  methods: {
    getMsg(e) {
      this.newMsg = e;
      // window.console.log(e);
    }
  },
  watch: {
    $route(to, from) {
      window.console.log(to, from);
      window.console.log(to.path == "/");
      this.isRoot = to.path == "/";
      if (to.path == "/mine/nest0" || to.path == "/mine/nest1") {
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
  margin: 0;
  background: #fdfdfd;
}
div {
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center; */
}
.nav {
  width: 100%;
  padding: 0.1rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgba(253, 253, 253, 1);
}
a.nav-item {
  padding: 0.1rem;
  color: #999;
}
a.router-link-active,
a.router-link-exact-active {
  color: #ce4e56;
}
a.nav-item span {
  font-size: 0.4rem;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.2s;
}
</style>
