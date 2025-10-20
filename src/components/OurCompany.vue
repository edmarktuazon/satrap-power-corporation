<script setup>
import { ref, onMounted } from 'vue'

const boardOfDirectors = ref([])
const management = ref([])

onMounted(async () => {
  const response = await fetch('/public/data/companyInfo.json')
  const data = await response.json()

  boardOfDirectors.value = data.boardOfDirectors
  management.value = data.management
})
</script>

<template>
  <div class="grid-2cols-xl">
    <div class="bg-secondary p-10">
      <h3 class="text-2xl font-bold mb-10 text-white">Board of Directors</h3>
      <div v-for="(person, index) in boardOfDirectors" :key="'board-' + index" class="mb-4">
        <h4 class="font-semibold text-lg text-white">{{ person.name }}</h4>
        <em class="text-white">{{ person.role }}</em>
        <!-- <img :src="person.image" :alt="person.name" class="w-32 h-32 object-cover rounded-lg mt-2" /> -->
      </div>
    </div>

    <div class="bg-primary p-10">
      <h3 class="text-2xl font-bold mb-10 text-white">Management</h3>
      <div v-for="(person, index) in management" :key="'management-' + index" class="mb-4">
        <h4 class="font-semibold text-lg text-white">{{ person.name }}</h4>
        <em class="text-white">{{ person.role }}</em>
        <!-- <img :src="person.image" :alt="person.name" class="w-32 h-32 object-cover rounded-lg mt-2" /> -->
      </div>
    </div>
  </div>
</template>
