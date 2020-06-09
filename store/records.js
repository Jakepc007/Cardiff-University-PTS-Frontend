import EventService from '@/services/EventService'

export const state = () => ({
  records: []
})

export const mutations = {
  SET_RECORDS(state, records) {
    state.records = records
  },
  SET_RECORD(state, record) {
    state.record = record
  }
}

export const actions = {
  fetchRecords({ commit }) {
    return EventService.getRecords().then((res) => {
      commit('SET_RECORDS', res.data)
    })
  },
  fetchRecord({ commit, getters }, id) {
    const record = getters.getRecordById(id)

    if (record) {
      commit('SET_RECORD', record)
    } else {
      EventService.getRecord(id).then((response) => {
        commit('SET_RECORD', response.data)
      })
    }
  }
}

export const getters = {
  getRecordById: (state) => (id) => {
    return state.records.find((record) => record.id === id)
  }
}
