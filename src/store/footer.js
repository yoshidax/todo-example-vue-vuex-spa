const state = {
  completedCount: 0,
  totalCount: 0
}

const actions = {
  updateCount ({ commit }, { completedCount, totalCount }) {
    commit('UPDATE', { completedCount, totalCount })
  }
}

const getters = {}

const mutations = {
  UPDATE (state, count) {
    Object.keys(count).forEach(key => (state[key] = count[key]))
  }
}

export const footer = {
  namespaced: true,
  state () {
    return state
  },
  actions,
  getters,
  mutations
}
