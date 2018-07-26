import { button } from '@/store/button'

// action types
const INIT = 'init'
const SET_TITLE = 'setTitle'
const SET_DESCRIPTION = 'setDescription'
const TOGGLE_DONE = 'toggleDone'

// mutation types
const MT_UPDATE = 'UPDATE'

const state = {
  id: -1,
  title: '',
  description: '',
  isDone: false
}

const actions = {
  [SET_TITLE] ({ commit }, title) {
    commit(MT_UPDATE, { title })
  },
  [SET_DESCRIPTION] ({ commit }, description) {
    commit(MT_UPDATE, { description })
  },
  [TOGGLE_DONE] ({ commit }, isDone) {
    commit(MT_UPDATE, { isDone: !isDone })
  },
  [INIT] ({ commit }, { id, title, description, isDone = false }) {
    commit(MT_UPDATE, { id })
    commit(MT_UPDATE, { title })
    commit(MT_UPDATE, { description })
    commit(MT_UPDATE, { isDone })
  }
}

const getters = {}

const mutations = {
  [MT_UPDATE] (state, todo) {
    Object.keys(todo).forEach(key => (state[key] = todo[key]))
  }
}

export const ActionTypes = {
  INIT,
  SET_TITLE,
  SET_DESCRIPTION,
  TOGGLE_DONE
}

export const todo = {
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
