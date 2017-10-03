// Dependencies
import Vue from 'vue'
import Vuex from 'vuex'

// Plugins
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// Only strict in another environment different to production
const DEBUG = process.env.NODE_ENV !== 'production'

const state = {
  bookmarks: []
}

const getters = {
  bookmarks: state => state.bookmarks,
  isBookmarked: state =>
    id => state.bookmarks.some(bookmark => bookmark.id === id)
}

const mutations = {
  EDIT_BOOKMARKS (state, { bookmark }) {
    if (state.bookmarks.some(item => item.id === bookmark.id)) {
      state.bookmarks = state.bookmarks.filter(item => item.id !== bookmark.id)
    } else {
      state.bookmarks.push(bookmark)
    }
  },
  FILL_BOOKMARKS (state, payload) {
    state.bookmarks = payload.bookmarks || []
  }
}

const actions = {
  bookmarks ({ commit }) {
    return new Promise(resolve => {
      const ITEMS = window.localStorage.getItem('codit')

      if (!ITEMS) {
        return resolve([])
      }

      return resolve(JSON.parse(ITEMS))
    })
      .then(bookmarks => commit('FILL_BOOKMARKS', { bookmarks }))
  },
  modify ({ commit, state }, bookmark) {
    commit('EDIT_BOOKMARKS', { bookmark })

    window.localStorage.setItem('codit', JSON.stringify(state.bookmarks))
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: DEBUG,
  plugins: DEBUG ? [createLogger()] : []
})

export default store
