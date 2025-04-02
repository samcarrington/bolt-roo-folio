<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
    <MoleculesAnimatedCard v-for="(project, index) in projects"
      :key="project.id"
      :index="index"
      :delay="index * 100"
      :ui="{
        base: 'overflow-hidden text-white mb-0', // Add text-white here for global text color
        background: 'bg-gray-700',
        shadow: 'shadow-md',
        rounded: 'rounded-lg',
        divide: 'divide-y-0',
        header: 'p-0 rounded-t-lg',
        body: {
          padding: 'px-4 py-1 sm:p-5',
        },
        ring: 'ring-0',
      }"
      :variant="'solid'">
      <template #cardhead>
        <img :src="project.image" :alt="project.title" class="card__image">
      </template>
      <NuxtLink :to="`/projects/${project.slug}`">
        <AtomsProjectHeading :title="project.title" />
        <p v-html="project.excerpt"></p>
      </NuxtLink>
      <template #cardfoot>
        <div class="flex flex-wrap gap-2">
          <!-- Category Tags -->
          <AtomsTag
            v-for="(category, catIndex) in project.category"
            :key="`cat-${catIndex}`"
            :title="category.title"
            :color="category.slug"
          />
        </div>
      </template>
    </MoleculesAnimatedCard>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the props this component accepts
const props = defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => [] // Provide a default empty array
  }
});

// Import necessary components if they are not globally registered
// Assuming AtomsTag, AtomsProjectHeading, MoleculesAnimatedCard are auto-imported by Nuxt
</script>

<style lang="postcss" scoped>
/* Styles specific to the project grid items if needed */
/* .projects-container a {
  @apply block text-gray-700 border-none outline-none;
  text-decoration: none;
} */

.card__image { /* Style applies to the img within #cardhead slot */
  @apply w-full h-48 object-cover mb-2;
}
</style>