<template>
  <section class="min-h-screen flex items-center justify-center">
    <MoleculesAnimatedCard :delay="200" class="max-w-2xl" :ui="{ background: 'bg-transparent', ring: 'ring-0', shadow: 'shadow-none' }">
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
    </MoleculesAnimatedCard>
  </section>
</template>

<script setup lang="ts">
const navigateToWork = () => {
  navigateTo('/work')
}
</script>