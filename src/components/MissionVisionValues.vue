<script setup>
import companyInfo from '@/data/companyInfo.json'
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-sm md:text-lg text-white mb-2">
        <slot name="heading"></slot>
      </h1>
      <p class="text-lg md:text-2xl mb-8 text-white">
        <slot name="paragraph"></slot>
      </p>
      <div v-for="(item, index) in companyInfo" :key="index">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
