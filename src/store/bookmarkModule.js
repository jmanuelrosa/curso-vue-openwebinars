const state = {
  bookmarks: JSON.parse(localStorage.getItem('codit'))
}

const getters = {
  bookmarks: state => state.bookmarks,
  isSelected: state =>
    login => state.bookmarks.some(bookmark => bookmark.id === login)
}

const mutations = {
  EDIT_BOOKMARKS (state, { bookmark }) {
    if (state.bookmarks.some(item => item.id === bookmark.id)) {
      // Eliminamos
      state.bookmarks = state.bookmarks.filter(item => item.id !== bookmark.id)
    } else {
      state.bookmarks.push(bookmark)
    }
  }
}

const actions = {
  modify ({ commit, state }, bookmark) {
    commit('EDIT_BOOKMARKS', { bookmark })

    window.localStorage.setItem('codit', JSON.stringify(state.bookmarks))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
