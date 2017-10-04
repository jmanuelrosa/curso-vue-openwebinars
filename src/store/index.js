import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // bookmarks: JSON.parse(localStorage.getItem('codit'))
  bookmarks: [
    {
      login: 'addyosmani',
      name: 'Addy Osmani',
      id: 110953
    },
    {
      login: 'yyx990803',
      name: 'Evan You',
      id: 499550
    }
  ]
}

const getters = {
  bookmarks: state => state.bookmarks
}

const store = new Vuex.Store({
  state,
  getters
})

export default store
