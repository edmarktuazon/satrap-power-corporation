<script setup>
import HeroSection from '@/components/HeroSection.vue'
import NavigationSection from '@/components/NavigationWrapper.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ChevronUpIcon from '@/components/icons/ChevronUpIcon.vue'
import FooterSection from '@/components/FooterSection.vue'

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
          class="fixed bottom-5 right-5 bg-primary p-3 rounded-full cursor-pointer"
        >
          <ChevronUpIcon class="w-7 h-7 text-white" />
        </button>
      </transition>
    </div>
    <NavigationSection />
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <FooterSection />
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
