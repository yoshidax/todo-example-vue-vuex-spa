import Vue from 'vue'
import Vuex from 'vuex'

import { header } from '@/store/header'
import { todos } from '@/store/todos'
import { todo } from '@/store/todo'

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
    todo
  }
})
