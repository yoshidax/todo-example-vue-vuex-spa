import Vue from 'vue'
import Vuex from 'vuex'

import { header } from './header'
import { footer } from './footer'
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
    footer,
    todos,
    todoEdit
  }
})
