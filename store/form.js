import EventService from '@/services/EventService'

export const state = () => ({
  form: {
    details: [
      {
        label: 'title',
        type: 'text'
      },
      {
        label: 'status',
        hint: 'The applications current status',
        type: 'select',
        // TODO fetch these from state (less error prone)
        options: [
          'Just a thought',
          'Preparing Documents',
          'Ready for submission',
          'Awarded'
        ]
      },
      {
        label: 'description',
        type: 'text'
      },
      {
        label: 'scheme',
        type: 'text'
      }
    ],
    people: [
      {
        label: 'principal investigator',
        type: 'text'
      },
      {
        label: 'co-people',
        type: 'text'
      }
    ]
  },
  inputsComplete: [],
  progress: 0,
  page: 1,
  formCount: 6,
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
  UPDATE_FORM(state, { newValue, page, pos }) {
    switch (page) {
      case 'details':
        state.form.details[pos].value = newValue
        break
      case 'people':
        state.form.people[pos].value = newValue
        break
    }
  },
  ADD_INPUT(state, label) {
    state.inputsComplete.push(label)
  },
  SET_PROGRESS(state, progress) {
    state.progress = progress
  }
}

export const actions = {
  nextPage({ commit }) {
    commit('CHANGE_PAGE', 1)
  },
  prevPage({ commit }) {
    commit('CHANGE_PAGE', -1)
  },
  update({ commit, state }, { label, newValue, page }) {
    let pos
    switch (page) {
      case 'details':
        pos = findPos(state.form.details, label)
        break
      case 'people':
        pos = findPos(state.form.people, label)
        break
    }
    commit('UPDATE_FORM', { newValue, page, pos })
  },
  addInput({ commit, state }, label) {
    commit('ADD_INPUT', label)
    const progress = (state.inputsComplete.length / state.formCount) * 100
    commit('SET_PROGRESS', progress)
  },
  submit({ commit, state }) {
    const newForm = {}

    // Combine pages to a simple array
    const combined = [...state.form.details, ...state.form.people]
    combined.forEach((input) => {
      newForm[input.label] = input.value
    })

    // Post the the form to the api
    return EventService.submitForm(newForm).then(() => {
      commit('records/ADD_RECORD', newForm, { root: true })
    })
  }
}

export const getters = {}

const findPos = (arr, label) => {
  return arr
    .map((e) => {
      return e.label
    })
    .indexOf(label)
}
