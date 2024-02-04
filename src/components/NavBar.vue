<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Inicio', href: '/inicio', current: true },
  { name: 'Acerca de mi', href: '/about', current: false },
  // { name: 'Proyectos', href: '/proyectos', current: false },
  // { name: 'Calendar', href: '/calendar', current: false },
  // { name: 'Repositorios', href: '/repositorios', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>

<template>
  <div>
    <ul>
      <li v-for="item in navigation" :key="item.name">
        <a @click="router.push(item.href)">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped></style>