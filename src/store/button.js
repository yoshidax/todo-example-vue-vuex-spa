const state = {
  isActive: true
}

const actions = {
  setActive ({ commit }, isActive) {
    commit('UPDATE', { isActive })
  }
}

const getters = {}

const mutations = {
  UPDATE (state, button) {
    Object.keys(button).forEach(key => (state[key] = button[key]))
  }
}

export const button = {
  namespaced: true,
  state () {
    return state
  },
  actions,
  getters,
  mutations
}
