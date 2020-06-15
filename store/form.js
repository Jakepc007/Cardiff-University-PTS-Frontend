export const state = () => ({
  form: {},
  page: 1
})

export const mutations = {
  CHANGE_PAGE(state, pageMod) {
    // Takes in a positive or negative integer
    // which increments or deincrements the page
    state.page += pageMod
  }
}

export const actions = {
  nextPage({ commit }) {
    commit('CHANGE_PAGE', 1)
  },
  prevPage({ commit }) {
    commit('CHANGE_PAGE', -1)
  }
}

export const getters = {}
