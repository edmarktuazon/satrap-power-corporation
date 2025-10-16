<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, onMounted, onUnmounted } from 'vue'

const navLinks = reactive([
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Testimonials', to: '/testimonials' },
  { name: 'Contact', to: '/contact' },
])

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header
    class="flex justify-between lg:justify-around items-center bg-white font-montserrat px-10 shadow-md min-h-[4.375rem] border-b border-gray-200 relative z-10"
  >
    <a href="">Logo</a>

    <!-- Desktop nav -->
    <nav>
      <ul class="space-x-8 font-medium text-secondary lg:flex hidden">
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink :to="link.to" class="hover:text-primary">{{ link.name }}</RouterLink>
        </li>
      </ul>
    </nav>

    <!-- Mobile nav -->
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute top-[4.375rem] left-0 w-full bg-white shadow-md rounded-b-lg flex flex-col items-start py-6 px-10 space-y-4 font-medium text-secondary lg:hidden"
      >
        <li v-for="link in navLinks" :key="link.to">
          <RouterLink :to="link.to" @click="closeMenu" class="hover:text-primary">{{
            link.name
          }}</RouterLink>
        </li>
      </ul>
    </transition>

    <button
      @click="toggleMenu"
      aria-label="Toggle Menu"
      class="relative w-6 h-5 flex flex-col justify-between cursor-pointer lg:hidden"
    >
      <span
        class="absolute top-[0.125rem] left-0 w-5 h-0.5 bg-primary transition-all duration-300 rounded-full"
        :class="{ 'rotate-45 translate-y-[0.5rem]': isOpen }"
      ></span>

      <span
        class="absolute top-2 left-0 w-5 h-0.5 bg-primary transition-all duration-300 rounded-full"
        :class="{ 'opacity-0': isOpen }"
      ></span>

      <span
        class="absolute bottom-[0.25rem] left-0 w-5 h-0.5 bg-primary transition-all duration-300 rounded-full"
        :class="{ '-rotate-45 -translate-y-1': isOpen }"
      ></span>
    </button>
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
