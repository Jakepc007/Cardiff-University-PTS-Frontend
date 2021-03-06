import EventService from '@/services/EventService'

export const state = () => ({
  alert: {}
})

export const mutations = {
  SET_ALERT(state, alert) {
    state.alert = alert
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    await EventService.getActiveAlert().then((res) => {
      commit('SET_ALERT', res.data)
    })
  },
  fetchAlert({ commit }) {
    return EventService.getActiveAlert().then((res) => {
      commit('SET_ALERT', res.data)
    })
  }
}
