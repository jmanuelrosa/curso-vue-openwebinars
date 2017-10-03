import Vue from 'vue'
import Router from 'vue-router'

import CoDevelopers from '@/components/CoDevelopers'
import CoProfile from '@/components/CoProfile'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: CoDevelopers,
      beforeEnter (to, from, next) {
        console.log('Hook beforeEnter en home')
        next()
      }
    },
    {
      path: '/profile/:user',
      name: 'profile',
      component: CoProfile,
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('Hook beforeEach')
  next()
})

router.afterEach((to, from) => {
  console.log('Hook afterEach')
})

export default router
