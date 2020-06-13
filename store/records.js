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
    search: '',
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
  SET_FILTERED(state, filtered) {
    state.filtered = filtered
  },
  TOGGLE_FILTER_STATUS(state, status) {
    if (state.filter.statuses.includes(status)) {
      const index = state.filter.statuses.indexOf(status)
      state.filter.statuses.splice(index, 1)
    } else {
      state.filter.statuses.push(status)
    }
  },
  SET_FILTER_SEARCH(state, search) {
    state.filter.search = search
  }
}

export const actions = {
  updateSearch({ commit, dispatch }, search) {
    commit('SET_FILTER_SEARCH', search)
    dispatch('fetchFiltered')
  },
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
  updateFilterStatus({ commit, dispatch }, status) {
    commit('TOGGLE_FILTER_STATUS', status)
    dispatch('fetchFiltered')
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
  getFilteredRecordsByStatus: (state) => (status) => {
    const filtered = state.records.filter((record) => {
      return record.status === status
    })
    return filtered
  },
  filterRecords: (state) => (records) => {
    const filter = state.filter

    // Filter by status
    if (filter.statuses.length !== 0) {
      records = records.filter((r) => {
        return filter.statuses.includes(r.status)
      })
    }

    if (filter.search === '') {
    } else {
      records = records.filter((r) => {
        return r.title.includes(filter.search)
      })
    }

    // Finally return the modified records array
    return records
  }
}
