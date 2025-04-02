<template>
  <AtomsAnimatedCard :delay="200" class="group" v-memo="[article._path, article.title]">
    <NuxtLink :to="article._path">
      <h2 class="text-xl font-semibold group-hover:text-primary-500">
        {{ article.title || 'Untitled Article' }}
      </h2>
      <p class="text-gray-400 mt-2">
        {{ article.description || 'No description available' }}
      </p>
      <ClientOnly>
        <div class="flex items-center gap-2 mt-4 text-sm text-gray-500">
          <span>{{ formattedDate }}</span>
          <span v-if="article.date && article.readingTime">•</span>
          <span v-if="article.readingTime">{{ article.readingTime }} min read</span>
        </div>
      </ClientOnly>
    </NuxtLink>
  </AtomsAnimatedCard>
</template>

<script setup lang="ts">
/**
 * BlogArticleList component
 *
 * Displays a single blog article card with title, description, date, and reading time
 * Uses AtomsAnimatedCard for animation and styling
 */

// Define the article interface
interface BlogArticle {
  _path: string;
  title?: string;
  description?: string;
  date?: string;
  readingTime?: number;
}

// Define props with proper type validation
const props = defineProps<{
  article: BlogArticle;
}>();

// Computed property for formatted date with error handling
const formattedDate = computed(() => {
  if (!props.article.date) return 'No date available';
  
  try {
    return new Date(props.article.date).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid date';
  }
});
</script>