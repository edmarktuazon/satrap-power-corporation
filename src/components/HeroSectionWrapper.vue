<script setup>
import ExploreProjectsButton from './buttons/ExploreProjectsButton.vue'
import LearnMoreButton from './buttons/LearnMoreButton.vue'
</script>
<template>
  <section class="section-spacing min-h-[50dvh] bg-primary font-montserrat">
    <div class="layout-container">
      <div class="grid-2cols">
        <div class="flex-start space-y-5">
          <!-- heading -->
          <h1 class="text-6xl text-white text-fluid-lg font-medium">
            <slot name="hero-heading"></slot>
          </h1>
          <!-- paragraph -->
          <p class="text-md text-white">
            <slot name="hero-paragraph"></slot>
          </p>
          <!-- props button -->
          <div class="flex-center-row mt-6">
            <ExploreProjectsButton label="Explore Our Projects" />
            <LearnMoreButton label="Learn More About Us" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
