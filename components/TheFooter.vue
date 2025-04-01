<template>
  <footer class="bg-gray-800 text-white py-4 text-center">
    <div class="container mx-auto">
      <p>&copy; {{ currentYear }} My Portfolio. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>