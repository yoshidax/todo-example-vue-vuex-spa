import Vue from 'vue'
import Vuex from 'vuex'

import { header } from './header'
import { todos } from './todos'
import { todoEdit } from './todoEdit'

Vue.use(Vuex)

const state = {}

const actions = {}

const getters = {}

const mutations = {}

export const store = new Vuex.Store({
  state () {
    return state
  },
  actions,
  getters,
  mutations,
  modules: {
    header,
    todos,
    todoEdit
  }
})
