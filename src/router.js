import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import City from '@/components/city/City'
import Message from '@/views/Message'
import Reco from '@/views/Reco'
import Order from '@/views/Order'
import Mine from '@/views/Mine'
import Nest0 from '@/components/Nest0'
import Nest1 from '@/components/Nest1'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // linkExactActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/city',
    name: 'city',
    component: City
  }, {
    path: '/reco',
    name: 'reco',
    component: Reco
  }, {
    path: '/message/:id',
    name: 'message',
    component: Message
  }, {
    path: '/order',
    name: 'order',
    component: Order
  }, {
    path: '/mine',
    name: 'mine',
    component: Mine,
    redirect: {
      name: 'nest0'
    },
    children: [{
      path: 'nest0',
      name: 'nest0',
      component: Nest0
    }, {
      path: 'nest1',
      name: 'nest1',
      component: Nest1.vue
    }]
  }]
})