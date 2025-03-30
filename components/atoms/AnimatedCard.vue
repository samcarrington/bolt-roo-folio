<template>
  <UCard
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0 }"
    :delay="delay"
    class="backdrop-blur-sm bg-white/10"
  >
    <slot />
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  delay?: number
}>()
</script>