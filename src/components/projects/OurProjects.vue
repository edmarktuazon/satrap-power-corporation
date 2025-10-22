<script setup>
import { ref } from 'vue'
import CompanyProjects from '../../data/companyProjects.json'
import MetrowalkSolar2 from '../../assets/images/projects/metrowalk_solar_2.png'
import SanmarcelinoSolar1 from '../../assets/images/projects/sanmarcelino_solar_1.png'
import SantaAgroBiomass1 from '../../assets/images/projects/santa_agro_biomass_1.png'
import SantaMswBiomass1 from '../../assets/images/projects/santa_msw_biomass_1.png'
import Suyo1Hydro1 from '../../assets/images/projects/suyo1_hydro_1.png'

const projects = ref([])

const imageMap = {
  metrowalk_solar_2: MetrowalkSolar2,
  sanmarcelino_solar_1: SanmarcelinoSolar1,
  santa_agro_biomass_1: SantaAgroBiomass1,
  santa_msw_biomass_1: SantaMswBiomass1,
  suyo1_hydro_1: Suyo1Hydro1,
}

projects.value = (CompanyProjects.projects || []).map((project) => ({
  ...project,
  image: imageMap[project.imageId] || '',
}))
</script>

<template>
  <div class="grid-2cols">
    <div v-for="(project, index) in projects" :key="index" class="flex-center mb-6">
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
