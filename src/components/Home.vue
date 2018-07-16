<template>
 <div class="home">
   <h1>Welcome to Todo App!!</h1>
   <div class="home-start">
     <router-link :to="{ name: 'todos' }">start!!</router-link>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Todo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
