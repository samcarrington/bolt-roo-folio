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

.projects {
  @apply p-5;
}

.projects-container {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
}

.projects-container > * {
  opacity: 0;
  transform: translateY(50px) !important;
}

.projects-container > *.animate-in {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

.projects-container a {
  @apply block text-gray-700 border-none outline-none;
  text-decoration: none;
}

.projects-container img {
  @apply w-full h-48 object-cover mb-2;
}

.project-category {
  @apply text-xs font-bold py-1 px-2 rounded-full mt-2 inline-block;
}

.category1 {
  @apply bg-red-200 text-red-800;
}

.category2 {
  @apply bg-green-200 text-green-800;
}

.category3 {
  @apply bg-blue-200 text-blue-800;
}
</style>