<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Inicio',       href: '/inicio',       current: true },
  { name: 'Acerca de mi', href: '/acerca_de_mi', current: false },
  { name: 'Contacto',     href: '/contacto',     current: false },
  //{ name: 'Proyectos', href: '/proyectos', current: false },
  //{ name: 'Calendar', href: '/calendar', current: false },
  //{ name: 'Repositorios', href: '/repositorios', current: false },
]

const isOpen = ref(false)
const isCurrent = (href) => route.path === href
</script>

<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <!-- Your logo here -->
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <ul class="flex space-x-4">
                <li v-for="item in navigation" :key="item.name">
                    <a @click="router.push(item.href)" :class="{'text-white': isCurrent(item.href), 'text-gray-300 hover:text-white': !isCurrent(item.href)}">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button @click="isOpen = !isOpen" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <!-- Icon when menu is closed. -->
            <svg v-if="!isOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Icon when menu is open. -->
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ul>
          <li v-for="item in navigation" :key="item.name">
            <a @click="router.push(item.href)" :class="{'text-white': isCurrent(item.href), 'text-gray-300 hover:text-white': !isCurrent(item.href)}">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>

</style>