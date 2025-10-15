<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { toRefs, reactive } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

const navLinks = reactive({
  home: 'Home',
  about: 'About',
  services: 'Services',
  contact: 'Contact',
})

const { home, about, services, contact } = toRefs(navLinks)
</script>

<template>
  <header class="flex justify-between">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <nav>
      <RouterLink to="/" class="text-red-500">{{ home }}</RouterLink>
      <RouterLink to="/about">{{ about }}</RouterLink>
      <RouterLink to="/services">{{ services }}</RouterLink>
      <RouterLink to="/contact">{{ contact }}</RouterLink>
    </nav>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
    </div>
  </header>

  <RouterView />
</template>
