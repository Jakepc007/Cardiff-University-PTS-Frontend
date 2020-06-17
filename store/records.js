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
    statuses: []
  },
  filterActive: false,
  page: 1,
  paged: []
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
  },
  SET_PAGE(state, page) {
    state.page = page
  },
  SET_PAGED(state, records) {
    state.paged = records
  },
  SET_RECORDS_FOR_PAGE(state, records) {
    state.paged = records
  }
}

export const actions = {
  updateSearch({ commit, dispatch }, search) {
    commit('SET_FILTER_SEARCH', search)
    commit('SET_PAGE', 1)
    dispatch('findRecords')
  },
  fetchRecords({ commit }) {
    return EventService.getRecords().then((res) => {
      commit('SET_RECORDS', res.data)
    })
  },
  filterRecords({ commit, getters }) {
    commit('SET_FILTERED', getters.filterRecords())
  },
  pageRecords({ commit, getters }) {
    commit('SET_PAGED', getters.pageRecords())
  },
  updateFilterStatus({ commit, dispatch }, status) {
    commit('TOGGLE_FILTER_STATUS', status)
    commit('SET_PAGE', 1)
    dispatch('findRecords')
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
  },
  findRecords({ dispatch }) {
    dispatch('filterRecords')
    dispatch('pageRecords')
  },
  updatePage({ commit, dispatch }, page) {
    commit('SET_PAGE', page)
    dispatch('findRecords')
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
  filterRecords: (state) => () => {
    const filter = state.filter
    let records = state.records

    if (filter.statuses.length !== 0) {
      records = records.filter((r) => {
        return filter.statuses.includes(r.status)
      })
    }

    if (filter.search === '') {
    } else {
      records = records.filter((r) => {
        return (
          r.desc.toLowerCase().includes(filter.search.toLowerCase()) ||
          r.title.toLowerCase().includes(filter.search.toLowerCase())
        )
      })
    }

    return records
  },
  pageRecords: (state) => () => {
    const page = state.page - 1
    const pageSize = 5
    const pageStart = page * pageSize
    const pageEnd = page * pageSize + pageSize
    const data = state.filtered.slice(pageStart, pageEnd)
    return data
  }
}
