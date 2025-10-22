<script setup>
import NavigationSection from '@/components/NavigationWrapper.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import GoToTopButton from '@/components/buttons/GoToTopButton.vue'
</script>

<template>
  <GoToTopButton />
  <NavigationSection />
  <main>
    <section
      class="relative h-[50vh] w-full bg-[url('https://images.pexels.com/photos/8250904/pexels-photo-8250904.jpeg')] bg-center bg-cover bg-no-repeat font-montserrat flex items-center justify-center overflow-hidden"
    >
      <!-- Dark Glass Overlay -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div
        class="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-up"
      >
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg tracking-wide">
          Get in Touch
        </h1>
      </div>
    </section>
    <ContactSection />
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
