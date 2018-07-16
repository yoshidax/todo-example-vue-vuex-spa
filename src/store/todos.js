const CREATE = 'CREATE'
const UPDATE = 'UPDATE'
const DELETE = 'DELETE'

const state = {
  todos: []
}

const actions = {
  create ({ commit }) {
    commit(CREATE, {
      id: Date.now(),
      title: 'new todo'
    })
  },
  setTitle ({ commit }, title) {
    commit(UPDATE, { title })
  },
  setDescription ({ commit }, description) {
    commit(UPDATE, { description })
  },
  toggleDone ({ commit, getters }, id) {
    commit(UPDATE, { id, isDone: !getters.todo(id).isDone })
  },
  update ({ commit }, { id, title, description }) {
    commit(UPDATE, { id, title, description })
  },
  remove ({ commit }, id) {
    commit(DELETE, id)
  }
}

const getters = {
  todo: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  },
  doneTodos (state) {
    return state.todos.filter(todo => todo.isDone)
  }
}

const mutations = {
  [CREATE] (state, { id, title, description, isDone = false }) {
    if (id == null) throw new Error('not found id')
    state.todos.push({
      id,
      title,
      description,
      isDone
    })
  },
  [UPDATE] (state, updatedTodo) {
    const todo = state.todos.find(todo => todo.id === updatedTodo.id)
    Object.keys(updatedTodo).forEach(key => (todo[key] = updatedTodo[key]))
  },
  [DELETE] (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  }
}

export const todos = {
  namespaced: true,
  state () {
    return state
  },
  actions,
  getters,
  mutations
}
