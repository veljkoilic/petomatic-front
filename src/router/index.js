import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import AllVisits from '@/components/AllVisits'
import Login from '@/components/Login'
import ViewClients from '@/components/ViewClients'
import Client from '@/components/Client'
import Pet from '@/components/Pet'
import CreateUser from '@/components/CreateUser'
import addPet from '@/components/addPet'
import EditClient from '@/components/EditClient'

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
    },
    {
      path: '/pet/:petId',
      name: 'Pet',
      component: Pet
    },
    {
      path: '/all-visits',
      name: 'AllVisits',
      component: AllVisits
    },
    {
      path: '/create-client',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/add-pet',
      name: 'addPet',
      component: addPet
    },
    {
      path: '/edit-client/:clientId',
      name: 'EditClient',
      component: EditClient
    }
  ]
})
