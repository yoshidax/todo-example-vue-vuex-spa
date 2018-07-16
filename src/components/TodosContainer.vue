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
import Todos from '@/components/Todos'
import { createNamespacedHelpers } from 'vuex'

const mapTodos = createNamespacedHelpers('todos')
const mapStateTodos = mapTodos.mapState
const mapActionsTodos = mapTodos.mapActions

export default {
  name: 'TodosContainer',
  components: {
    Todos
  },
  computed: {
    ...mapStateTodos(['todos'])
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
