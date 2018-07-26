<template>
  <div class="appHeader">
    <header class="header">{{ title }}</header>
    <div class="appHeader-control">
      <router-link :to="{ name: 'home' }">Top</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header {
  color: red;
}
</style>
