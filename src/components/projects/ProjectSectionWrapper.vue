<script setup>
// import companyInfo from '@/data/companyInfo.json'
import OurProjects from '../projects/OurProjects.vue'
</script>

<template>
  <section
    class="bg-[url('https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg')] h-[50vh] w-full bg-center bg-no-repeat bg-cover font-montserrat after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 relative flex items-center justify-center"
  >
    <div
      class="min-h-[50dvh] flex flex-col justify-center items-center text-center px-4 z-10 animate-fade-up"
    >
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">Our Projects</h1>
    </div>
  </section>
  <section class="section-spacing bg-white font-montserrat">
    <div class="layout-container">
      <div class="flex-start mb-10">
        <h2 class="text-fluid-md text-secondary font-medium">
          <slot name="project-heading"></slot>
        </h2>
        <span class="block bg-primary w-30 h-1 my-6"></span>
      </div>
      <OurProjects />
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fade-up 800ms ease-out forwards;
}
</style>
