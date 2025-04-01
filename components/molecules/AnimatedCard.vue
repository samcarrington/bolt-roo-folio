<template>
  <UCard
      class="animated-card relative"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
      :leave="{ opacity: 0, y: -20 }"
      :duration="400"
      :delay="delay"
      :ui="ui"
    >
    <template #header>
      <slot name="cardhead" />
    </template>
    <slot />
      <template #footer>
        <slot name="cardfoot" />
      </template>
    </UCard>
</template>

<script setup lang="ts">
defineProps<{
  delay?: number,
  ui?: any,
  variant?: any,
}>()

import type { variants } from '#tailwind-config';
import { onMounted } from 'vue';

// onMounted(() => {
//   const elements = document.querySelectorAll('.animated-card');
//   elements.forEach(el => {
//     el.classList.add('loaded');
//   });
// });
</script>