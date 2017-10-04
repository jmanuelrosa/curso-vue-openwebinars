import Vue from 'vue'
import Vuex from 'vuex'

import bookmarkModule from './bookmarkModule'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bookmarkModule
  },
  strict: true
})

export default store
