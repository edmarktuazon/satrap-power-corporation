<script setup>
import { ref } from 'vue'
import companyInfo from '../data/companyInfo.json'

const boardOfDirectors = ref(companyInfo.boardOfDirectors || [])
const management = ref(companyInfo.management || [])
</script>

<template>
  <div class="grid-2cols-xl">
    <div class="bg-secondary p-10">
      <h3 class="text-2xl font-bold mb-10 text-white">Board of Directors</h3>
      <div v-for="(person, index) in boardOfDirectors" :key="'board-' + index" class="mb-4">
        <h4 class="font-semibold text-lg text-white">{{ person.name }}</h4>
        <em class="text-white">{{ person.role }}</em>
      </div>
    </div>

    <div class="bg-primary p-10">
      <h3 class="text-2xl font-bold mb-10 text-white">Management</h3>
      <div v-for="(person, index) in management" :key="'management-' + index" class="mb-4">
        <h4 class="font-semibold text-lg text-white">{{ person.name }}</h4>
        <em class="text-white">{{ person.role }}</em>
      </div>
    </div>
  </div>
</template>
