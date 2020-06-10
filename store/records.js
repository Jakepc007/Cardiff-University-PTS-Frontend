import EventService from '@/services/EventService'

export const state = () => ({
  records: [],
  filtered: [],
  record: {},
  filter: {}
})

export const mutations = {
  SET_RECORDS(state, records) {
    state.records = records
  },
  SET_RECORD(state, record) {
    state.record = record
  },
  SET_FILTER_STATUS(state, status) {
    state.filter.status = status
  },
  SET_FILTERED(state, filtered) {
    state.filtered = filtered
  }
}

export const actions = {
  fetchRecords({ commit, getters }) {
    const filter = getters.getFilter()

    if (isEmpty(filter)) {
      return EventService.getRecords().then((res) => {
        commit('SET_RECORDS', res.data)
      })
    } else {
      return commit('SET_FILTERED', getters.getFilteredRecords())
    }
  },
  updateFilterStatus({ commit, getters }, status) {
    commit('SET_FILTER_STATUS', status)
    const r = getters.getFilteredRecords()
    commit('SET_FILTERED', r)
  },
  fetchCurrentRecord({ commit, getters }, id) {
    const record = getters.getRecordById(id)

    if (record) {
      commit('SET_RECORD', record)
    } else {
      return EventService.getCurrentRecord(id).then((res) => {
        commit('SET_RECORD', res.data)
      })
    }
  }
}

export const getters = {
  getRecordById: (state) => (id) => {
    return state.records.find((record) => record.id === id)
  },
  getFilter: (state) => () => {
    return state.filter
  },
  getFilteredRecordsByStatus: (state) => (status) => {
    const filtered = state.records.filter((record) => {
      return record.status === status
    })
    return filtered
  },
  getFilteredRecords: (state) => () => {
    // First check if the status matches
    const filtered = state.records.filter((record) => {
      return record.status === state.filter.status
    })

    return filtered
    // Finally return the filtered records
  },
  getStatusLengths: (state, getters) => () => {
    console.log('hm')
    return [
      getters.getFilteredRecordsByStatus('Just a thought').length,
      getters.getFilteredRecordsByStatus('Preparing documents').length,
      getters.getFilteredRecordsByStatus('Ready for submission').length,
      getters.getFilteredRecordsByStatus('Awarded').length
    ]
  }
}

const isEmpty = (obj) => {
  for (const i in obj) {
    return false
  }
  return true
}
