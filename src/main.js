// Dependencies
import Vue from 'vue'

// Components
import CoApp from '@/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#codit',
  template: '<co-app/>',
  components: { CoApp }
})
