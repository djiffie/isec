import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import map from '@/views/Map'
import profile from '@/views/Profile'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    { path: '*', redirect: '/' }
  ]
})