export const state = () => ({
  condition: false,
  sample: 'xd'
})

export const mutations = {
  SET_CONDITION (state, payload) {
    state.condition = payload
  },
  SET_SAMPLE (state, payload) {
    state.sample = payload
  }
}

export const getters = {
  condition: state => state.condition,
  sample: state => state.sample
}

export const actions = {
  CHANGE_CONDITION ({ commit }, payload) {
    commit('SET_CONDITION', payload)
  },
  CHANGE_SAMPLE ({ commit }, payload) {
    commit('SET_SAMPLE', payload)
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
