<template>
  <section class="projects my-6">
    <h1>Projects</h1>
    <div class="projects-container mt-6">
      <MoleculesAnimatedCard v-for="(project, index) in projects" 
        :key="project.id" 
        :index="index" 
        
        :delay="index * 100"
        :ui="{
          base: 'overflow-hidden text-white mb-0', // Add text-white here for global text color
          background: 'bg-gray-700',
          shadow: 'shadow-md',
          rounded: 'rounded-lg',
          divide: 'divide-y-0',
          header: 'p-0 rounded-t-lg',
          body: {
            padding: 'px-4 py-1 sm:p-5',
          },
          ring: 'ring-0',
        }"
        :variant="'solid'">
        <template #cardhead>
          <img :src="project.image" :alt="project.title">
        </template>
        <NuxtLink :to="`/projects/${project.slug}`">
          <AtomsProjectHeading :title="project.title" />
          <p v-html="project.excerpt"></p>
        </NuxtLink>
        <template #cardfoot>
          <AtomsTag
            v-for="(category, index) in project.category"
            :key="index"
            :title="category.title"
            :color="category.slug"
            class="mr-2"
          />
        </template>
      </MoleculesAnimatedCard>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import useContentful from '~/composables/useContentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const { client } = useContentful();

const projects = ref([]);

onMounted(async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'project', // Replace with your content type ID
    });

    projects.value = entries.items.map((entry) => {
      const fields = entry.fields || {};
      const image = fields.thumbnail?.fields?.file.url || 'https://via.placeholder.com/300x200';
      return {
        id: entry.sys.id,
        title: fields.title || 'No Title',
        excerpt: fields.excerpt ? documentToHtmlString(fields.excerpt) : 'No Excerpt',
        description: fields.description || 'No Description',
        image: image,
        link: fields.link || '#',
        slug: fields.slug || '',
        category: Array.isArray(fields.category)
          ? fields.category.map((cat) => ({title: cat?.fields?.title, slug: cat?.fields?.slug}))
          : [{title: fields.category?.fields?.title, slug: fields.category?.fields?.slug}],
      };
    });
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error);
  }
});
</script>

<style scoped>
.projects-container {
  @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4;
}


/* .projects-container a {
  @apply block text-gray-700 border-none outline-none;
  text-decoration: none;
} */

.projects-container img {
  @apply w-full h-48 object-cover mb-2;
}

.project-category {
  @apply text-xs font-bold py-1 px-2 rounded-full mt-2 inline-block;
}

</style>