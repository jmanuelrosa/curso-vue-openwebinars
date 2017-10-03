// Dependencies
import Vue from 'vue'
import router from '@/router'

// Components
import CoApp from '@/App'

import '@/directives/focus.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#codit',
  template: '<co-app/>',
  components: { CoApp }
})
