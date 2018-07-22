<template>
  <footer class="footer">
    completed todo: {{ doneTodosCount }}/{{ todosCount }}
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    todosCount: {
      type: Number,
      required: true
    },
    doneTodosCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>
