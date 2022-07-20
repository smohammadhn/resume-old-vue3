<template>
  <button @click="handleError">Clear errors</button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>
