<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useNav } from '@/composables/useNavbar' // Adjust the path based on your project structure
import navLogo from '/src/assets/images/Satrap_logo_gold_transparent.png'

const { navLinks, isOpen, isHidden, toggleMenu, closeMenu } = useNav()
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 transition-transform duration-300"
    :class="isHidden ? '-translate-y-full' : 'translate-y-0'"
  >
    <div
      class="flex justify-between lg:justify-around items-center font-montserrat px-6 lg:px-0 min-h-[6.25rem]"
    >
      <RouterLink to="/">
        <figure
          class="flex justify-center gap-2 lg:justify-start items-center lg:px-12 min-h-[6.25rem]"
        >
          <img :src="navLogo" alt="Company Logo" class="h-12 lg:h-16 w-auto object-contain" />
          <figcaption class="font-medium text-secondary lg:text-base text-sm">
            Satrap Power Corporation
          </figcaption>
        </figure>
      </RouterLink>
      <!-- Desktop nav -->
      <nav>
        <ul class="space-x-8 font-medium text-secondary lg:flex hidden">
          <li v-for="link in navLinks" :key="link.to" class="relative group">
            <RouterLink
              :to="link.to"
              class="text-secondary-color transition-colors duration-300 group-hover:text-primary"
            >
              {{ link.name }}
              <span
                class="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
              ></span>
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile nav -->
      <transition name="fade">
        <ul
          v-if="isOpen"
          class="absolute top-[6.25rem] left-0 w-full bg-white shadow-md rounded-b-lg flex flex-col items-start font-medium text-secondary lg:hidden"
        >
          <li
            v-for="link in navLinks"
            :key="link.to"
            class="border-b-[0.0625rem] border-gray-200 w-full py-4 px-6"
          >
            <RouterLink :to="link.to" @click="closeMenu">{{ link.name }}</RouterLink>
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
