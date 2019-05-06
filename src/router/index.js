import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Honor from '@/components/Honor'
import Perform from '@/components/Perform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/perform',
      name: 'Perform',
      component: Perform
    }
  ]
})
