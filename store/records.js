import EventService from '@/services/EventService'

export const state = () => ({
  records: []
})

export const mutations = {
  SET_RECORDS(state, records) {
    state.records = records
  }
}

export const actions = {
  fetchRecords({ commit }) {
    return EventService.getRecords().then((res) => {
      commit('SET_RECORDS', res.data)
    })
  }
}
