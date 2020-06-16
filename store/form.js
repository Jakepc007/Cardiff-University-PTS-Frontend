export const state = () => ({
  form: {
    title: {
      label: 'title',
      value: '',
      page: 1
    },
    status: {
      label: 'status',
      hint: 'The applications current status',
      value: '',
      page: 1,
      // TODO fetch these from state (less error prone)
      options: ['Just a thought', 'Ready for submission']
    },
    description: {
      label: 'description',
      help: 'Title of the application',
      value: '',
      page: 1
    },

    pi: {
      label: 'principal investigator',
      value: '',
      page: 2
    }
  },
  page: 1,
  inProgress: false
})

export const mutations = {
  CHANGE_PAGE(state, pageMod) {
    state.page += pageMod
  },
  TOGGLE_IN_PROCESS(state) {
    state.inProgress = !state.inProgress
  },
  RESET_PAGE(state) {
    state.page = 0
  }
}

export const actions = {
  nextPage({ commit }) {
    commit('CHANGE_PAGE', 1)
  },
  prevPage({ commit }) {
    commit('CHANGE_PAGE', -1)
  }
  // submit({ commit }) { }
}

export const getters = {}
