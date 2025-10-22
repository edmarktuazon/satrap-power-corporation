<script setup>
import NavigationSection from '@/components/NavigationWrapper.vue'
import ProjectSection from '@/components/projects/ProjectSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import GoToTopButton from '@/components/buttons/GoToTopButton.vue'
</script>

<template>
  <GoToTopButton />
  <NavigationSection />
  <main>
    <section
      class="bg-[url('https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg')] h-[50vh] w-full bg-center bg-no-repeat bg-cover font-montserrat after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 relative flex items-center justify-center"
    >
      <div
        class="min-h-[50dvh] flex flex-col justify-center items-center text-center px-4 z-10 animate-fade-up"
      >
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">Our Projects</h1>
      </div>
    </section>
    <ProjectSection />
    <FooterSection />
  </main>
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
