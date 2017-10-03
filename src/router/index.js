import Vue from 'vue'
import Router from 'vue-router'

import CoDevelopers from '@/components/CoDevelopers'
import CoProfile from '@/components/CoProfile'
import CoNotFound from '@/components/CoNotFound'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoDevelopers
    },
    {
      path: '/profile/:user',
      name: 'profile',
      component: CoProfile,
      props: true
    },
    {
      path: '/not-found',
      name: '404',
      component: CoNotFound
    },
    {
      path: '*',
      redirect: {
        name: '404'
      }
    }
  ]
})

export default router
