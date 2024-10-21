<script setup>
import { ref } from 'vue'
import TheGrids from '@/components/TheGrids.vue';

defineProps({
  msg: String
})
</script>

<template>
  <the-header></the-header>
  <TheGrids />
  
  <the-footer></the-footer>
</template>

<style scoped>

</style>
