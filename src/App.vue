<template>
  <div id="app">
    <Header title="welcome" :sub-title="msg" @onGetMsg="getMsg"></Header>
    <div id="nav">
      <router-link class="nav-item" to="/">
        <span class="iconfont iconhome2"></span>
        <div>首页</div>
      </router-link>
      <router-link class="nav-item" to="/reco">
        <span class="iconfont iconyiguanzhu"></span>
        <div>推荐</div>
      </router-link>
      <router-link class="nav-item" to="/message">
        <span class="iconfont iconshuru"></span>
        <div>留言</div>
      </router-link>
      <router-link class="nav-item" to="/order">
        <span class="iconfont icongwc"></span>
        <div>订单</div>
      </router-link>
      <router-link class="nav-item" to="/mine" :class="{'active':isNest}">
        <span class="iconfont iconkefuyouxian"></span>
        <div>我的</div>
      </router-link>
    </div>
    <div>{{newMsg}}</div>
    <transition mode="out-in">
      <router-view class="cont"/>
    </transition>
  </div>
</template>
<script>
import Header from "@/components/Header";
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
    Header
  },
  watch: {
    $route(to) {
      window.console.log(to);
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
@import "./assets/css/iconfont.css";
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
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  padding: 0.2rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
}

a.nav-item {
  padding: 0.2rem;
}
a.router-link-active {
  color: #ce4e56;
}
a.nav-item span {
  font-size: 1.6rem;
}
.active {
  color: #ce4e56;
}
.view-box {
  width: 100%;
  margin-top: 1rem;
  display: flex;
}
.view-box .side {
  flex: 1;
  background: #eee;
}
.view-box .cont {
  flex: 5;
}
.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
