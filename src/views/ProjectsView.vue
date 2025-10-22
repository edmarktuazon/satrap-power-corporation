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
    <ProjectSection />
    <FooterSection />
  </main>
</template>
