import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/css/reset.css";
import "./assets/css/border.css";
import "./assets/css/iconfont.css";
import "./assets/css/animate.css";

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')