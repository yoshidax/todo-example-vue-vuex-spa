<template>
  <div class="todo">
    <form @submit.prevent="onSubmitTodo">
      <div>id: {{ id }}</div>
      <div>
        <label>
          <span>title:</span>
          <input
            name="title"
            type="text"
            :value="title"
            @change="onChangeTitle($event.currentTarget.value)"
          />
        </label>
      </div>
      <div>
        <label>
          <span>description:</span>
          <textarea
            name="description"
            :value="description"
            @change="onChangeDescription($event.currentTarget.value)"
          />
        </label>
      </div>
      <button type="submit">update</button>
      <button @click.prevent="onClickCancel">cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    isDone: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onChangeTitle (title) {
      this.$emit('changeTodoTitle', title)
    },
    onChangeDescription (description) {
      this.$emit('changeTodoDescription', description)
    },
    onSubmitTodo () {
      this.$emit('submitTodo')
    },
    onClickCancel () {
      this.$emit('clickUpdateCancel')
    }
  }
}
</script>

<style>
</style>
