import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoListContainer from '@/components/TodoListContainer'
import EditableTodoContainer from '@/components/EditableTodoContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todos',
      name: 'todoList',
      component: TodoListContainer
    },
    {
      path: '/todos/:id/edit',
      name: 'todoEdit',
      component: EditableTodoContainer,
      props: (route) => ({ id: Number(route.params.id) })
    }
  ]
})
