<template>
  <div class="py-12">
    <ContentDoc v-slot="{ doc }">

        <MoleculesBlogContent
          :title="doc.title"
          :date="doc.date"
          :reading-time="doc.readingTime"
        >
          <ContentRenderer :value="doc" />
        </MoleculesBlogContent>

    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
/**
 * Blog post page
 *
 * Displays a single blog post with its content
 * Uses ContentDoc to fetch the blog post data
 * Uses MoleculesBlogContent for consistent styling
 */
</script>
