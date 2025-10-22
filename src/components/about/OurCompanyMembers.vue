<script setup>
import { ref } from 'vue'
import CompanyMembers from '../../data/companyMembers.json'

const boardOfDirectors = ref(CompanyMembers.boardOfDirectors || [])
const management = ref(CompanyMembers.management || [])

// const companyMembers = ref([])

// onMounted(async () => {
//   try {
//     const response = await fetch('../data/companyMembers.json')
//     const data = await response.json()
//     companyMembers.value = data.projects || []
//   } catch (error) {
//     console.error('Error fetching projects:', error)
//   }
// })
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
