import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/ContactPage.vue'

const routes = [
  {
    path: '/inicio',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/acerca_de_mi',
    name: 'Acerca de mi',
    component: About
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contact
  }
]

const router = createRouter({
    //history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router