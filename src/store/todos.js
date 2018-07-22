// action types
const CREATE = 'create'
const SET_TITLE = 'setTitle'
const SET_DESCRIPTION = 'setDescription'
const TOGGLE_DONE = 'toggleDone'
const UPDATE = 'update'
const REMOVE = 'remove'

// getter types
const TODOS = 'todos'
const TODO = 'todo'
const TODOS_COUNT = 'todosCount'
const DONE_TODOS = 'doneTodos'
const DONE_TODOS_COUNT = 'doneTodosCount'

// mutation types
const MT_CREATE = 'CREATE'
const MT_UPDATE = 'UPDATE'
const MT_DELETE = 'DELETE'

const state = {
  todos: []
}

const actions = {
  [CREATE] ({ commit }) {
    commit(MT_CREATE, {
      id: Date.now(),
      title: 'new todo'
    })
  },
  [SET_TITLE] ({ commit }, title) {
    commit(MT_UPDATE, { title })
  },
  [SET_DESCRIPTION] ({ commit }, description) {
    commit(MT_UPDATE, { description })
  },
  [TOGGLE_DONE] ({ commit, getters }, id) {
    commit(MT_UPDATE, { id, isDone: !getters.todo(id).isDone })
  },
  [UPDATE] ({ commit }, { id, title, description }) {
    commit(MT_UPDATE, { id, title, description })
  },
  [REMOVE] ({ commit }, id) {
    commit(MT_DELETE, id)
  }
}

const getters = {
  [TODOS] (state) {
    return state.todos
  },
  [TODO]: state => id => {
    return state.todos.find(todo => todo.id === id)
  },
  [TODOS_COUNT]: state => {
    return state.todos.length
  },
  [DONE_TODOS] (state) {
    return state.todos.filter(todo => todo.isDone)
  },
  [DONE_TODOS_COUNT] (state, getters) {
    return getters[DONE_TODOS].length
  }
}

const mutations = {
  [MT_CREATE] (state, { id, title, description, isDone = false }) {
    if (id == null) throw new Error('not found id')
    state.todos.push({
      id,
      title,
      description,
      isDone
    })
  },
  [MT_UPDATE] (state, updatedTodo) {
    const todo = state.todos.find(todo => todo.id === updatedTodo.id)
    Object.keys(updatedTodo).forEach(key => (todo[key] = updatedTodo[key]))
  },
  [MT_DELETE] (state, id) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  }
}

export const ActionTypes = {
  CREATE,
  SET_TITLE,
  SET_DESCRIPTION,
  TOGGLE_DONE,
  UPDATE,
  REMOVE
}

export const GetterTypes = {
  TODOS,
  TODO,
  TODOS_COUNT,
  DONE_TODOS,
  DONE_TODOS_COUNT
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
