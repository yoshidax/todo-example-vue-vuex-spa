<template>
  <div class="editable-todo">
    <form @submit.prevent="onSubmitTodo">
      <div>id: {{ id }}</div>
      <div>
        <label>
          <span>title:</span>
          <input
            name="title"
            type="text"
            :value="title"
            @input="onChangeTitle($event.currentTarget.value)"
          />
        </label>
      </div>
      <div>
        <label>
          <span>description:</span>
          <textarea
            name="description"
            :value="description"
            @input="onChangeDescription($event.currentTarget.value)"
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
  name: 'EditableTodo',
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
      this.$emit('update:title', title)
    },
    onChangeDescription (description) {
      this.$emit('update:description', description)
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
