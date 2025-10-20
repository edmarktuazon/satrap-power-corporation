<script setup>
import HeroSection from '@/components/HeroSection.vue'
import NavigationSection from '@/components/NavigationWrapper.vue'
import AboutSection from '@/components/AboutSection.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const isActiveToTopButton = ref(false)

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  isActiveToTopButton.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <main>
    <div class="fixed bottom-5 right-5">
      <transition name="fade">
        <button
          v-if="isActiveToTopButton"
          @click="goToTop"
          class="fixed bottom-5 right-5 bg-white px-4 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Top
        </button>
      </transition>
    </div>

    <NavigationSection />
    <HeroSection />
    <AboutSection />
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
