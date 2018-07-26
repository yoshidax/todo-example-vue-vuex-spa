<template>
  <div class="todo-list">
    <section>
      <Todos
        :todos="todos"
        @delete:todo="onDeleteTodo"
        @toggle:todo="onToggleTodo"
        @edit:todo="onEditTodo"
        @create:todo="onCreateTodo"
      />
    </section>
  </div>
</template>

<script>
import Todos from '@/components/Todos'
import ButtonBasic from '@/components/ButtonBasic'

export default {
  name: 'TodoList',
  components: {
    Todos,
    ButtonBasic
  },
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    onDeleteTodo (todoId) {
      this.$emit('delete:todo', todoId)
    },
    onToggleTodo (todoId) {
      this.$emit('toggle:todo', todoId)
    },
    onEditTodo (todoId) {
      this.$emit('edit:todo', todoId)
    },
    onCreateTodo () {
      this.$emit('create:todo')
    }
  }
}
</script>

<style>

</style>
