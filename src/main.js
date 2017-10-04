// Dependencies
import Vue from 'vue'
import router from '@/router'
import store from '@/store'

// Components
import CoApp from '@/App'

import '@/directives/focus.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#codit',
  template: '<co-app/>',
  components: { CoApp }
})
