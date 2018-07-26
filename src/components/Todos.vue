<template>
  <div class="todos">
    <ButtonBasic
      eventName="create:todo"
      @create:todo="onCreateTodo"
    >
      <span>create todo</span>
    </ButtonBasic>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div class="todo-content">
          <span
            class="todo-title"
            :class="{ 'isDone': todo.isDone }"
          >
            {{ todo.title }}
          </span>
          <ButtonBasic
            eventName="delete:todo"
            @delete:todo="onDeleteTodo(todo.id)"
          >
            <span>remove</span>
          </ButtonBasic>
          <ButtonBasic
            eventName="toggle:todo"
            @toggle:todo="onToggleTodo(todo.id)"
          >
            <span>{{toggleLabel(todo.isDone)}}</span>
          </ButtonBasic>
          <ButtonBasic
            eventName="edit:todo"
            :disabled="todo.isDone"
            @edit:todo="onEditTodo(todo.id)"
          >
            <span>edit</span>
          </ButtonBasic>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ButtonBasic from '@/components/ButtonBasic'

export default {
  name: 'Todos',
  components: {
    ButtonBasic
  },
  props: {
    todos: {
      type: Array,
      default: () => []
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
    toggleLabel (isDone) {
      return isDone ? 'incomplete' : 'complete'
    },
    onCreateTodo () {
      this.$emit('create:todo')
    }
  }
}
</script>

<style scoped>
.todo-title {
  color: black;
  font-weight: bold;
}
.todo-title.isDone {
  color: grey;
  font-weight: lighter;
  text-decoration: line-through red;
}
</style>
