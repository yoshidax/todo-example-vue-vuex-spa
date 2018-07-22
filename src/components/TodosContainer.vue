<template>
  <div>
    <Todos
      :todos="todos"
      @clickButtonRemove="onClickButtonRemove"
      @toggleButtonDone="onToggleButtonDone"
      @clickButtonEdit="onClickButtonEdit"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

import Todos from '@/components/Todos'
import { GetterTypes } from '@/store/todos'

const mapTodos = createNamespacedHelpers('todos')
const mapGettersTodos = mapTodos.mapGetters
const mapActionsTodos = mapTodos.mapActions

export default {
  name: 'TodosContainer',
  components: {
    Todos
  },
  computed: {
    ...mapGettersTodos({
      todos: GetterTypes.TODOS
    })
  },
  methods: {
    ...mapActionsTodos(['toggleDone']),
    ...mapActionsTodos({
      removeTodo: 'remove'
    }),
    onClickButtonRemove (todoId) {
      this.removeTodo(todoId)
    },
    onToggleButtonDone (todoId) {
      this.toggleDone(todoId)
    },
    onClickButtonEdit (todoId) {
      this.$router.push({ name: 'todoEdit', params: { id: todoId } })
    }
  }
}
</script>

<style>
</style>
