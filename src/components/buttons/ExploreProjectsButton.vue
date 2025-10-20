<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPage = () => {
  router.push('/our-projects')
}

defineProps({
  label: {
    type: String,
    default: 'Click me',
  },
})
</script>

<template>
  <button
    @click="goToPage"
    class="bg-white p-3 font-medium text-secondary transition duration-150 hover:bg-primary cursor-pointer lg:w-auto w-full"
  >
    {{ label }}
  </button>
</template>
