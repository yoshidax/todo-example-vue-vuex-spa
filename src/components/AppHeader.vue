<template>
  <div class="appHeader">
    <header class="header">{{ title }}</header>
    <div class="appHeader-control">
      <router-link :to="{ name: 'home' }">Top</router-link>
      <ButtonBasic
        label="create todo"
        v-if="showCreateTodoButton"
        @clickButton="onClickButtonCreateTodo"
      />
    </div>
  </div>
</template>

<script>
import ButtonBasic from '@/components/ButtonBasic'

export default {
  name: 'AppHeader',
  components: {
    ButtonBasic
  },
  props: {
    title: {
      type: String,
      required: true
    },
    showCreateTodoButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickButtonCreateTodo () {
      this.$emit('clickButtonCreateTodo')
    }
  }
}
</script>

<style scoped>
.header {
  color: red;
}
</style>
