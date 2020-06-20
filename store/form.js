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
          'Preparing Documents',
          'Ready for submission',
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
    state.page = 0
  },
  UPDATE_FORM(state, { newValue, page, pos }) {
    state.form[page][pos].value = newValue
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
    const pos = findPos(state.form[page], label)
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
