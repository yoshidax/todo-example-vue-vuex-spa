<template>
  <div class="todo">
    <Todo
      :id="todo.id"
      :title="editedTitle"
      :description="editedDescription"
      :isDone="todo.isDone"
      @submitTodo="onSubmitTodo"
      @changeTodoTitle="onChangeTodoTitle"
      @changeTodoDescription="onChangeTodoDescription"
      @clickUpdateCancel="onClickUpdateCancel"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Todo from '@/components/Todo'

const mapTodos = createNamespacedHelpers('todos')
const mapGettersTodos = mapTodos.mapGetters
const mapActionsTodos = mapTodos.mapActions

const mapTodoEdit = createNamespacedHelpers('todoEdit')
const mapStateTodoEdit = mapTodoEdit.mapState
const mapActionsTodoEdit = mapTodoEdit.mapActions

export default {
  name: 'TodoContainer',
  components: {
    Todo
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGettersTodos({
      getTodo: 'todo'
    }),
    ...mapStateTodoEdit({
      editedTitle: 'title',
      editedDescription: 'description'
    }),
    todo () {
      return this.getTodo(this.id)
    }
  },
  methods: {
    ...mapActionsTodos({
      updateTodo: 'update'
    }),
    ...mapActionsTodoEdit({
      setTodoTitle: 'setTitle',
      setTodoDescription: 'setDescription'
    }),
    onSubmitTodo () {
      this.updateTodo({
        id: this.todo.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
      this.$router.push({ name: 'todos' })
    },
    onChangeTodoTitle (title) {
      this.setTodoTitle(title)
    },
    onChangeTodoDescription (description) {
      this.setTodoDescription(description)
    },
    onClickUpdateCancel () {
      this.$router.push({ name: 'todos' })
    }
  },
  created () {
    this.setTodoTitle(this.todo.title)
    this.setTodoDescription(this.todo.description)
  }
}
</script>

<style scoped>
</style>
