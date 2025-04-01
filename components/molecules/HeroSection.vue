<template>
  <section class="min-h-screen flex items-center justify-center">
    <AnimatedCard :delay="200" class="max-w-2xl">
      <div class="space-y-4 text-center">
        <h1 class="text-4xl font-bold">
          <AtomsGradientText>Innovation Leadership</AtomsGradientText>
        </h1>
        <p class="text-lg text-gray-400">
          Driving technological transformation and strategic innovation
        </p>
        <UButton
          icon="i-heroicons-arrow-right"
          variant="soft"
          color="primary"
          label="Explore My Work"
          @click="navigateToWork"
        />
      </div>
    </AnimatedCard>
  </section>
</template>

<script setup lang="ts">
import AnimatedCard from '~/components/atoms/AnimatedCard.vue';
const navigateToWork = () => {
  navigateTo('/work')
}
</script>