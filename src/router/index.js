import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'
import InfoEmpleadoView from '../views/InfoEmpleadoView.vue'
import EditarEmpleadoView from '../views/EditarEmpleadoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/info/:id',
      name: 'info',
      component: InfoEmpleadoView
    },
    {
      path: '/editar/:id',
      name: 'editar',
      component: EditarEmpleadoView
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue")
    }

  ]
})

export default router
