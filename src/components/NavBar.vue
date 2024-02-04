<script setup>
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
  { name: 'Inicio', href: '/inicio', current: true },
  { name: 'Acerca de mi', href: '/about', current: false },
  { name: 'Proyectos', href: '/proyectos', current: false },
  { name: 'Calendar', href: '/calendar', current: false },
  { name: 'Repositorios', href: '/repositorios', current: false },
]

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
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>

</style>