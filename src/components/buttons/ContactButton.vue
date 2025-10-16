<script setup>
defineProps({
  label: {
    type: String,
    default: 'Click me',
  },
})
</script>

<template>
  <button>{{ label }}</button>
</template>
