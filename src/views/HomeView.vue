<script setup>
import HeroSection from '@/components/HeroSection.vue'
import NavigationSection from '@/components/NavigationWrapper.vue'
import AboutSection from '@/components/about/AboutSection.vue'
import ProjectSection from '@/components/projects/ProjectSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import GoToTopButton from '@/components/buttons/GoToTopButton.vue'
</script>

<template>
  <GoToTopButton />
  <NavigationSection />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <FooterSection />
  </main>
</template>
