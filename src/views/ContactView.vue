<script setup>
import NavigationSection from '@/components/NavigationWrapper.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import GoToTopButton from '@/components/buttons/GoToTopButton.vue'
</script>

<template>
  <main>
    <GoToTopButton />
    <NavigationSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>
