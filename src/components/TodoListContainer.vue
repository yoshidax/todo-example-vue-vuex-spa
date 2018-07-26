<template>
  <div>
    <TodoList
      :todos="todos"
      @delete:todo="onDeleteTodo"
      @toggle:todo="onToggleTodo"
      @edit:todo="onEditTodo"
      @create:todo="onCreateTodo"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import TodoList from '@/components/TodoList'
import { GetterTypes, ActionTypes } from '@/store/todos'

const mapTodos = createNamespacedHelpers('todos')
const mapGettersTodos = mapTodos.mapGetters
const mapActionsTodos = mapTodos.mapActions

export default {
  name: 'TodoListContainer',
  components: {
    TodoList
  },
  computed: {
    ...mapGettersTodos({
      todos: GetterTypes.TODOS
    })
  },
  methods: {
    ...mapActionsTodos([
      'toggleDone'
    ]),
    ...mapActionsTodos({
      removeTodo: ActionTypes.REMOVE,
      createTodo: ActionTypes.CREATE
    }),
    onDeleteTodo (todoId) {
      this.removeTodo(todoId)
    },
    onToggleTodo (todoId) {
      this.toggleDone(todoId)
    },
    onEditTodo (todoId) {
      this.$router.push({ name: 'todoEdit', params: { id: todoId } })
    },
    onCreateTodo () {
      this.createTodo()
    }
  }
}
</script>

<style scoped>
</style>
