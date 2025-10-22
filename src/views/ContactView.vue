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
    <ContactSection />
    <FooterSection />
  </main>
</template>
