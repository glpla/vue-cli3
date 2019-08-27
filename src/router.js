import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Download from '@/components/Download.vue'
// import Sidebar from '@/components/Sidebar.vue'
import Nest from '@/components/Nest.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/query',
    name: 'query',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "query" */ '@/views/Query.vue')
  }, {
    path: '/download',
    name: 'download',
    component: Download
  }, {
    path: '/colons/:id',
    name: 'colons',
    component: () => import('@/components/Colons.vue')
  }, {
    path: '/nest',
    name: 'nest',
    component: Nest,
    redirect: {
      name: 'nest0'
    },
    children: [{
      path: 'nest0',
      name: 'nest0',
      component: () => import('@/components/Nest0.vue')
    }, {
      path: 'nest1',
      name: 'nest1',
      component: () => import('@/components/Nest1.vue')
    }]
  }]
})