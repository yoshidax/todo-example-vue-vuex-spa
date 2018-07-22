import { button } from '@/store/button'

const state = {
  title: ''
}

const actions = {
  setTitle ({ commit }, title) {
    commit('UPDATE', { title })
  }
}

const getters = {}

const mutations = {
  UPDATE (state, header) {
    Object.keys(header).forEach(key => (state[key] = header[key]))
  }
}

export const header = {
  namespaced: true,
  state () {
    return state
  },
  actions,
  getters,
  mutations,
  modules: {
    buttonLeft: button,
    buttonRight: button
  }
}
