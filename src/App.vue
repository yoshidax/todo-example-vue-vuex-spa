<template>
  <div id="app">
    <section class="header">
      <AppHeader
        :title="headerTitle"
        :showCreateTodoButton="showTodosControl"
        @clickButtonCreateTodo="clickButtonCreateTodo"
      />
    </section>
    <main>
      <router-view />
    </main>
    <section class="footer">
      <AppFooter
        :todosCount="todosCount"
        :doneTodosCount="doneTodosCount"
      />
    </section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import { ActionTypes, GetterTypes } from '@/store/todos'

import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

const mapRoute = createNamespacedHelpers('route')
const mapStateRoute = mapRoute.mapState

const mapHeader = createNamespacedHelpers('header')
const mapStateHeader = mapHeader.mapState
const mapActionsHeader = mapHeader.mapActions

const mapTodos = createNamespacedHelpers('todos')
const mapGettersTodos = mapTodos.mapGetters
const mapActionsTodos = mapTodos.mapActions

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapGettersTodos({
      todosCount: GetterTypes.TODOS_COUNT,
      doneTodosCount: GetterTypes.DONE_TODOS_COUNT
    }),
    ...mapStateHeader({
      headerTitle: 'title'
    }),
    ...mapStateRoute({
      routeName: 'name'
    }),
    showTodosControl () {
      return this.routeName === 'todos'
    }
  },
  methods: {
    ...mapActionsHeader([
      'setTitle'
    ]),
    ...mapActionsTodos({
      createTodo: ActionTypes.CREATE,
      setTodoTitle: ActionTypes.SET_TITLE,
      setTodoDescription: ActionTypes.SET_DESCRIPTION,
      removeTodo: ActionTypes.REMOVE
    }),
    clickButtonCreateTodo () {
      this.createTodo()
    }
  },
  created () {
    this.setTitle('Todo App')
  }
}
</script>

<style scoped>
#app {
  background-color: white;
}
</style>
