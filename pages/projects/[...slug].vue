<template>
  <section class="project-detail">
    <h1>{{ project.title }}</h1>
    <img :src="project.image" :alt="project.title">
    <p>{{ project.description }}</p>
    <pre>{{ JSON.stringify(project, null, 2) }}</pre>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import useContentful from '~/composables/useContentful';

const route = useRoute();
const slug = route.params.slug;

const { client } = useContentful();

const project = ref({});

onMounted(async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'project',
      'fields.slug': slug
    });

    if (entries.items.length > 0) {
      const entry = entries.items[0];
      const fields = entry.fields || {};
      const image = fields.thumbnail?.fields?.file?.url || 'https://via.placeholder.com/300x200';
      project.value = {
        id: entry.sys.id,
        title: fields.title || 'No Title',
        description: fields.description || 'No Description',
        image: image,
        link: fields.link || '#',
        ...fields
      };
    }
  } catch (error) {
    console.error('Error fetching project from Contentful:', error);
  }
});
</script>