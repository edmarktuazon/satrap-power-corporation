<script setup>
// import companyInfo from '@/data/companyInfo.json'
import OurCompany from './OurCompany.vue'
</script>

<template>
  <section class="section-spacing bg-gray-100 font-montserrat">
    <div class="layout-container">
      <div class="grid-2cols gap-16">
        <div>
          <h2 class="text-fluid-md text-secondary font-medium">
            <slot name="about-heading"></slot>
          </h2>
          <span class="block bg-primary w-30 h-1 my-6"></span>
          <p class="text-base mb-8 text-secondary text-justify leading-relaxed">
            <slot name="about-paragraph"></slot>
          </p>
        </div>
        <OurCompany />
      </div>
    </div>
  </section>
</template>
