<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <TheNavigation />
    <UContainer>
      <NuxtPage />
    </UContainer>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavigation from '~/components/TheNavigation.vue'
import TheFooter from '~/components/TheFooter.vue'
</script>

<style>
body {
  @apply bg-gray-900;
}

</style>