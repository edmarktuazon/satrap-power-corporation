<script setup>
import NavigationSection from '@/components/NavigationWrapper.vue'
import FooterSection from '@/components/FooterSection.vue'
import GoToTopButton from '@/components/buttons/GoToTopButton.vue'
import AboutSection from '@/components/about/AboutSection.vue'
</script>

<template>
  <main>
    <GoToTopButton />
    <NavigationSection />
    <section
      class="bg-[url('https://images.pexels.com/photos/157827/pexels-photo-157827.jpeg')] h-[50vh] w-full bg-center bg-no-repeat bg-cover font-montserrat after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 relative flex items-center justify-center"
    >
      <div class="min-h-[50dvh] flex flex-col justify-center items-center text-center px-4 z-10">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
        <p class="text-lg md:text-2xl text-white max-w-3xl">
          Learn our story, mission, and values that drive us to excel in our industry.
        </p>
      </div>
    </section>
    <AboutSection />
    <FooterSection />
  </main>
</template>
