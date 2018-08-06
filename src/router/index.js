import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import ViewClients from '@/components/ViewClients'
import Client from '@/components/Client'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/staff/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/view-clients',
      name: 'ViewClients',
      component: ViewClients
    },
    {
      path: '/view-client/:clientId',
      name: 'Client',
      component: Client
    }
  ]
})
