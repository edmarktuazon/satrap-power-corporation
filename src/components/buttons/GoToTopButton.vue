<script setup>
import ChevronUpIcon from '@/components/icons/ChevronUpIcon.vue'
import { useToTopButton } from '@/composables/useToTopButton'

const { isActiveToTopButton, goToTop } = useToTopButton()
</script>

<template>
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
