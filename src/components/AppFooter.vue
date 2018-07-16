<template>
  <footer class="footer">
    completed todo: {{ completedCount }}/{{ totalCount }}
  </footer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const mapFooter = createNamespacedHelpers('footer')
const mapStateFooter = mapFooter.mapState
const mapActionsFooter = mapFooter.mapActions

export default {
  name: 'AppFooter',
  computed: {
    ...mapStateFooter(['completedCount', 'totalCount'])
  },
  methods: {
    ...mapActionsFooter(['updateCount'])
  },
  created () {
    this.$store.subscribe((mutation, { todos }) => {
      if (!mutation.type.startsWith('todos/')) return
      this.updateCount({
        totalCount: todos.todos.length,
        completedCount: todos.todos.filter(todo => todo.isDone === true).length
      })
    })
  }
}
</script>

<style>

</style>
