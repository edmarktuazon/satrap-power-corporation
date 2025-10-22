<script setup>
import HeroSection from '@/components/HeroSection.vue'
import NavigationSection from '@/components/NavigationWrapper.vue'
import AboutSection from '@/components/AboutSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import GoToTopButton from '@/components/buttons/GoToTopButton.vue'
</script>

<template>
  <main>
    <GoToTopButton />
    <NavigationSection />
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <FooterSection />
  </main>
</template>
