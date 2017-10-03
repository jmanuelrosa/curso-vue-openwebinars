import Vue from 'vue'
import Router from 'vue-router'

import CoDevelopers from '@/components/CoDevelopers'
import CoProfile from '@/components/CoProfile'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
