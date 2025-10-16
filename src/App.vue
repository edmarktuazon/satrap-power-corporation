<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { toRefs, reactive, ref } from 'vue'

const navLinks = reactive({
  home: 'Home',
  about: 'About',
  services: 'Services',
  testimonials: 'Testimonials',
  contact: 'Contact',
})

const { home, about, services, testimonials, contact } = toRefs(navLinks)

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <header
    class="flex justify-between lg:justify-around items-center bg-white font-montserrat px-10 shadow-md min-h-[4.375rem] border-b border-gray-200 relative z-10"
  >
    <a href="">Logo</a>

    <!-- Desktop nav -->
    <nav>
      <ul class="space-x-8 font-medium text-secondary hidden lg:block">
        <RouterLink to="/">{{ home }}</RouterLink>
        <RouterLink to="/about">{{ about }}</RouterLink>
        <RouterLink to="/services">{{ services }}</RouterLink>
        <RouterLink to="/testimonials">{{ testimonials }}</RouterLink>
        <RouterLink to="/contact">{{ contact }}</RouterLink>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute top-[4.375rem] left-0 w-full bg-white shadow-md flex flex-col items-start py-6 px-10 space-y-4 font-medium text-secondary lg:hidden"
      >
        <RouterLink to="/" @click="closeMenu">{{ home }}</RouterLink>
        <RouterLink to="/about" @click="closeMenu">{{ about }}</RouterLink>
        <RouterLink to="/services" @click="closeMenu">{{ services }}</RouterLink>
        <RouterLink to="/testimonials" @click="closeMenu">{{ testimonials }}</RouterLink>
        <RouterLink to="/contact" @click="closeMenu">{{ contact }}</RouterLink>
      </ul>
    </transition>

    <div
      @click="toggleMenu"
      aria-label="Toggle Menu"
      class="relative w-6 h-5 flex flex-col justify-between cursor-pointer lg:hidden"
    >
      <span
        class="absolute top-0 left-0 w-6 h-0.5 bg-secondary transition-all duration-300"
        :class="{ 'rotate-45 translate-y-2': isOpen }"
      ></span>

      <span
        class="absolute top-2 left-0 w-6 h-0.5 bg-secondary transition-all duration-300"
        :class="{ 'opacity-0': isOpen }"
      ></span>

      <span
        class="absolute bottom-0 left-0 w-6 h-0.5 bg-secondary transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-2': isOpen }"
      ></span>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
