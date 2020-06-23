import EventService from '@/services/EventService'

export const state = () => ({
  form: {
    details: [
      {
        label: 'title',
        type: 'text',
        hint: 'Enter the title here!'
      },
      {
        label: 'status',
        hint: 'The applications current status',
        type: 'select',
        // TODO fetch these from state (less error prone)
        options: [
          'Just a thought',
          'Ready for submission',
          'Preparing documents',
          'Rejected',
          'Awarded'
        ]
      },
      {
        label: 'description',
        type: 'textarea'
      },
      {
        label: 'scheme',
        type: 'text'
      },
      {
        label: 'required facility',
        type: 'text'
      },
      {
        label: 'comments',
        type: 'text'
      }
    ],
    people: [
      {
        label: 'principal investigator',
        type: 'text'
      },
      {
        label: 'co-investigator',
        type: 'text'
      },
      {
        label: 'partners',
        type: 'text'
      },
      {
        label: 'research group',
        type: 'text'
      }
    ],
    'date and time': [
      {
        label: 'estimated submission date',
        type: 'date'
      },
      {
        label: 'estimated start date',
        type: 'date'
      },
      {
        label: 'estimated duration',
        type: 'integer'
      },
      {
        label: 'estimated end date',
        type: 'date'
      }
    ],
    pricing: [
      {
        label: 'funder',
        type: 'text'
      },
      {
        label: 'requested amount',
        type: 'integer'
      },
      {
        label: 'estimated engin amount',
        type: 'integer'
      }
    ]
  },
  defaultForm: {},
  inputsComplete: [],
  progress: 0,
  page: 1,
  formCount: 17,
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
    state.page = 1
  },
  UPDATE_FORM(state, { newValue, page, pos }) {
    state.form[page][pos].value = newValue
  },
  ADD_INPUT(state, label) {
    state.inputsComplete.push(label)
  },
  SET_PROGRESS(state, progress) {
    state.progress = progress
  },
  CLEAR_FORM(state) {
    const def = {}
    def.details = state.form.details.map((el) => {
      const newEl = el
      newEl.value = ''
      return newEl
    })
    def.people = state.form.people.map((el) => {
      const newEl = el
      newEl.value = ''
      return newEl
    })
    def['date and time'] = state.form['date and time'].map((el) => {
      const newEl = el
      newEl.value = ''
      return newEl
    })
    def.pricing = state.form.pricing.map((el) => {
      const newEl = el
      newEl.value = ''
      return newEl
    })
    state.form = def
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
    const pos = findPos(state.form[page], label)
    commit('UPDATE_FORM', { newValue, page, pos })
  },
  addInput({ commit, state }, label) {
    commit('ADD_INPUT', label)
    const progress = (state.inputsComplete.length / state.formCount) * 100
    commit('SET_PROGRESS', progress)
  },
  submit({ commit, dispatch, state }) {
    const newForm = {}

    // Combine pages to a simple array
    const combined = [
      ...state.form.details,
      ...state.form.people,
      ...state.form['date and time'],
      ...state.form.pricing
    ]
    combined.forEach((input) => {
      newForm[input.label] = input.value
    })

    // Post the the form to the api
    return EventService.submitForm(newForm).then(() => {
      commit('CLEAR_FORM')
      commit('RESET_PAGE')
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
