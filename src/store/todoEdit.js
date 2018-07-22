import { button } from '@/store/button'

const state = {
  title: '',
  description: ''
}

const actions = {
  setTitle ({ commit }, title) {
    commit('UPDATE', { title })
  },
  setDescription ({ commit }, description) {
    commit('UPDATE', { description })
  }
}

const getters = {}

const mutations = {
  UPDATE (state, todo) {
    Object.keys(todo).forEach(key => (state[key] = todo[key]))
  }
}

export const todoEdit = {
  namespaced: true,
  state () {
    return state
  },
  actions,
  getters,
  mutations,
  modules: {
    update: button,
    cancel: button
  }
}
