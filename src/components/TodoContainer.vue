<template>
  <div class="todo-container">
    <Todo
      v-if="beforeEditingTodo"
      :title.sync="title"
      :description.sync="description"
      :id="beforeEditingTodo.id"
      :isDone="beforeEditingTodo.isDone"
      @submitTodo="onSubmitTodo"
      @clickUpdateCancel="onClickUpdateCancel"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Todo from '@/components/Todo'
import { toPdeaAccesser } from '@/utils/helper'

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
    // map from store
    ...mapStateTodoEdit({
      inputTitle: 'title',
      inputDescription: 'description'
    }),
    ...mapGettersTodos([
      'todo'
    ]),
    // shorthand for event up and props down
    title: toPdeaAccesser('inputTitle'),
    description: toPdeaAccesser('inputDescription'),
    // etc
    beforeEditingTodo () {
      return this.todo(this.id)
    }
  },
  methods: {
    // map actions
    ...mapActionsTodos({
      updateTodo: 'update'
    }),
    ...mapActionsTodoEdit({
      setInputTitle: 'setTitle',
      setInputDescription: 'setDescription'
    }),
    // event handlers
    onSubmitTodo () {
      this.updateTodo({
        id: this.beforeEditingTodo.id,
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'todos' })
    },
    onClickUpdateCancel () {
      this.$router.push({ name: 'todos' })
    }
  },
  created () {
    if (!this.beforeEditingTodo) return
    this.setInputTitle(this.beforeEditingTodo.title)
    this.setInputDescription(this.beforeEditingTodo.description)
  }
}
</script>

<style scoped>
</style>
