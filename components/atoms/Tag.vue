<template>
  <span :class="`tag bg-${color}`">{{ title }}</span>
</template>

<script setup>
defineProps({
  title: {
      type: String,
      default: 'Category'
    },
  color: {
    type: String,
    default: 'gray'
  }
})
</script>

<style scoped>
.tag {
  @apply text-xs font-bold py-1 px-2 rounded-full mt-2 mr-2 inline-block text-white;
}
</style>