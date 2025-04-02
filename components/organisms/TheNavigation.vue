<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold no-underline text-white">My Portfolio</NuxtLink>
      <ul class="list-none flex gap-8">
        <li v-for="item in navigationItems" :key="item.label">
          <NuxtLink :to="item.path" class="text-white no-underline">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import navigationItems from '~/navigation.json';
</script>