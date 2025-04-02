<template>
  <article class="prose prose-invert max-w-none">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <ClientOnly>
      <div v-if="date || readingTime" class="flex items-center gap-2 text-sm text-gray-500 mt-4">
        <span v-if="date">{{ formattedDate }}</span>
        <span v-if="date && readingTime">•</span>
        <span v-if="readingTime">{{ readingTime }} min read</span>
      </div>
    </ClientOnly>
    <div class="mt-8">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
/**
 * BlogContent component
 * 
 * Displays blog content with consistent styling using Tailwind Typography
 * Includes title, date, reading time, and content slot
 */

// Define props with proper type validation
const props = defineProps<{
  title: string;
  date?: string;
  readingTime?: number;
}>();

// Computed property for formatted date with error handling
const formattedDate = computed(() => {
  if (!props.date) return '';
  
  try {
    return new Date(props.date).toLocaleDateString('en-GB', { 
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

<style>
/* Additional custom styles for markdown content */
.prose pre {
  background-color: rgb(17, 24, 39) !important; /* Darker background for code blocks */
  border: 1px solid rgb(55, 65, 81);
  margin: 1.5em 0;
}

.prose code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5em;
}

.prose ol {
  list-style-type: decimal;
  padding-left: 1.5em;
}

.prose p {
  margin: 1.25em 0;
}

.prose blockquote {
  border-left-width: 4px;
  border-left-color: rgb(59, 130, 246);
  padding-left: 1em;
  font-style: italic;
  margin: 1.5em 0;
}

.prose img {
  border-radius: 0.375rem;
  margin: 2em auto;
  display: block;
  max-width: 100%;
  height: auto;
}

.prose a {
  color: rgb(59, 130, 246);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose a:hover {
  color: rgb(96, 165, 250);
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 2em 0;
}

.prose table th,
.prose table td {
  padding: 0.75em;
  border-bottom: 1px solid rgb(55, 65, 81);
}

.prose table th {
  font-weight: 600;
  color: white;
}
</style>