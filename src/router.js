import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Message from '@/views/Message.vue'
import Reco from '@/views/Reco.vue'
import Order from '@/views/Order.vue'
import Mine from '@/views/Mine.vue'
import Nest0 from '@/components/Nest0.vue'
import Nest1 from '@/components/Nest1.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkExactActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/reco',
    name: 'reco',
    component: Reco
  }, {
    path: '/message',
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