<template>
  <div class="editable-todo-container">
    <EditableTodo
      v-if="beforeEditingTodo"
      :id="inputId"
      :isDone="inputIsDone"
      :title.sync="title"
      :description.sync="description"
      @submitTodo="onSubmitTodo"
      @clickUpdateCancel="onClickUpdateCancel"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import EditableTodo from '@/components/EditableTodo'
import { toPdeaAccesser } from '@/utils/helper'
import { ActionTypes } from '@/store/todo'

const mapTodos = createNamespacedHelpers('todos')
const mapGettersTodos = mapTodos.mapGetters
const mapActionsTodos = mapTodos.mapActions

const mapTodo = createNamespacedHelpers('todo')
const mapStateTodo = mapTodo.mapState
const mapActionsTodo = mapTodo.mapActions

export default {
  name: 'EditableTodoContainer',
  components: {
    EditableTodo
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    // map from store
    ...mapStateTodo({
      inputId: 'id',
      inputTitle: 'title',
      inputDescription: 'description',
      inputIsDone: 'isDone'
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
    ...mapActionsTodo({
      initInput: ActionTypes.INIT,
      setInputTitle: ActionTypes.SET_TITLE,
      setInputDescription: ActionTypes.SET_DESCRIPTION
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
    this.initInput({
      id: this.beforeEditingTodo.id,
      title: this.beforeEditingTodo.title,
      description: this.beforeEditingTodo.description,
      isDone: this.beforeEditingTodo.isDone
    })
  }
}
</script>

<style scoped>
</style>
