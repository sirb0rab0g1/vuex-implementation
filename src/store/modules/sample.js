export const state = () => ({
  condition: false
})

export const mutations = {
  SET_CONDITION (state, payload) {
    state.condition = payload
  }
}

export const getters = {
  condition: state => state.condition
}

export const actions = {
  CHANGE_CONDITION ({ commit }, payload) {
    commit('SET_CONDITION', payload)
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
