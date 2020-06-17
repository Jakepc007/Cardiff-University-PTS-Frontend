export const state = () => ({
  form: {
    details: [
      {
        label: 'title',
        type: 'text',
        value: 'delet this'
      },
      {
        label: 'status',
        hint: 'The applications current status',
        value: '',
        type: 'select',
        // TODO fetch these from state (less error prone)
        options: ['Just a thought', 'Ready for submission']
      },
      {
        label: 'description',
        type: 'text',
        value: ''
      },
      {
        label: 'scheme',
        type: 'text',
        value: ''
      }
    ],
    investigators: [
      {
        label: 'principal investigator',
        type: 'text',
        value: ''
      },
      {
        label: 'co-investigators',
        type: 'text',
        value: ''
      }
    ]
  },
  page: 1,
  formCount: 14,
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
  },
  UPDATE_FORM(state, { label, newValue }) {
    const pos = state.form.details
      .map((e) => {
        return e.label
      })
      .indexOf(label)
    state.form.details[pos].value = newValue
  }
}

export const actions = {
  nextPage({ commit }) {
    commit('CHANGE_PAGE', 1)
  },
  prevPage({ commit }) {
    commit('CHANGE_PAGE', -1)
  },
  update({ commit }, payload) {
    commit('UPDATE_FORM', payload)
  }
  // submit({ commit }) { }
}

export const getters = {}
