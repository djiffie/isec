import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import map from '@/views/Map'
import profile from '@/views/Profile'
import users from '@/views/Users'
import reports from '@/views/Reports'




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
    {
      path: '/users',
      name: 'users',
      component: users
    },
    {
      path: '/reports',
      name: 'reports',
      component: reports
    },
    { path: '*', redirect: '/' }
  ]
})