import EventService from '@/services/EventService'

export const state = () => ({
  records: [],
  filtered: [],
  record: {},
  statuses: [
    'Just a thought',
    'Ready for submission',
    'Preparing documents',
    'Awarded'
  ],
  filter: {
    statuses: ['Just a thought', 'Ready for submission', 'Awarded']
  },
  filterActive: false
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
  },
  TOGGLE_FILTER(state) {
    state.filterActive = !state.filterActive
  },
  TOGGLE_FILTER_STATUS(state, { status, checked }) {
    if (state.filter.statuses.includes(status)) {
      const index = state.filter.statuses.indexOf(status)
      state.filter.statuses.splice(index, 1)
    } else {
      state.filter.statuses.push(status)
    }
  }
}

export const actions = {
  fetchRecords({ commit }) {
    return EventService.getRecords().then((res) => {
      commit('SET_RECORDS', res.data)
    })
  },
  fetchFiltered({ commit, getters }) {
    return EventService.getRecords().then((res) => {
      return commit('SET_FILTERED', getters.filterRecords(res.data))
    })
  },
  toggleFilter({ commit, dispatch }) {
    commit('TOGGLE_FILTER')
    dispatch('fetchFiltered')
  },
  updateFilterStatus({ commit }, { status, checked }) {
    commit('TOGGLE_FILTER_STATUS', { status, checked })
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

  getFilterActive: (state) => () => {
    return state.filterActive
  },
  filterRecords: (state) => (records) => {
    const filteredRecords = records.filter((r) => {
      return state.filter.statuses.includes(r.status)
    })
    return filteredRecords
  }
}

// const isEmpty = (obj) => {
//   for (const i in obj) {
//     return false
//   }
//   return true
// }
