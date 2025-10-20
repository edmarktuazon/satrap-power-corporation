<script setup>
// import companyInfo from '@/data/companyInfo.json'
import OurProjects from './OurProjects.vue'
</script>

<template>
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
