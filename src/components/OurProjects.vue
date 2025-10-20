<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([])

onMounted(async () => {
  const response = await fetch('/api/companyProjects.json')
  const data = await response.json()

  projects.value = data.projects
})
</script>

<template>
  <div v-for="(project, index) in projects" :key="index">
    <div class="flex-center mb-6">
      <img :src="project.image" :alt="project.title" class="max-w-64 w-full h-40 object-cover" />
      <div class="my-2">
        <h4 class="font-semibold text-lg text-secondary">{{ project.title }}</h4>
        <em class="text-gray-500 text-sm">{{ project.location }}</em>
        <p class="text-secondary text-base my-3">{{ project.description }}</p>
        <a :href="project.mapUrl" target="_blank" class="text-primary underline"
          >View in Google Maps</a
        >
      </div>
    </div>
  </div>
</template>
