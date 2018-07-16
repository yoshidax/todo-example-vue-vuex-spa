<template>
  <div class="todos">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div class="todo-content">
          <span class="todo-title" :class="{ 'isDone': todo.isDone }">{{ todo.title }}</span>
          <ButtonBasic
            label="remove"
            @clickButton="onClickButtonRemove(todo.id)"
          />
          <ButtonBasic
            :label="getLabel(todo.isDone)"
            @clickButton="onToggleButtonDone(todo.id)"
          />
          <ButtonBasic
            label="edit"
            :disabled="todo.isDone"
            @clickButton="onClickButtonEdit(todo.id)"
          />
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
    onClickButtonRemove (todoId) {
      this.$emit('clickButtonRemove', todoId)
    },
    onToggleButtonDone (todoId) {
      this.$emit('toggleButtonDone', todoId)
    },
    onClickButtonEdit (todoId) {
      this.$emit('clickButtonEdit', todoId)
    },
    getLabel (isDone) {
      return isDone ? 'incomplete' : 'complete'
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
