<template>
  <div id="app">
    <div class="header">
      <AppHeader
        :title="headerTitle"
        :showCreateTodoButton="showTodosControl"
        @clickButtonCreateTodo="clickButtonCreateTodo"
      />
    </div>
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'

const mapRoute = createNamespacedHelpers('route')
const mapStateRoute = mapRoute.mapState

const mapHeader = createNamespacedHelpers('header')
const mapStateHeader = mapHeader.mapState
const mapActionsHeader = mapHeader.mapActions

const mapTodos = createNamespacedHelpers('todos')
const mapActionsTodos = mapTodos.mapActions

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
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
      createTodo: 'create',
      setTodoTitle: 'setTitle',
      setTodoDescription: 'setDescription',
      removeTodo: 'remove'
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
