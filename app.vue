<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <UContainer>
      <UHeader>
        <template #left>
          <NuxtLink to="/" class="text-white hover:text-primary-500">Home</NuxtLink>
        </template>
        <template #right>
          <NuxtLink to="/blog" class="text-white hover:text-primary-500">Blog</NuxtLink>
        </template>
      </UHeader>
      <NuxtPage />
    </UContainer>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
</style>