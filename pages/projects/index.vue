<template>
  <section class="projects my-6">
    <AtomsPageTitle>Projects</AtomsPageTitle>
    <!-- Filter Section -->
    <div class="flex space-x-4 my-4">
      <USelectMenu
        v-model="selectedCategory"
        :options="allCategories"
        value-attribute="slug"
        option-attribute="title"
        placeholder="Filter by Category"
        class="w-48"
      />
      <USelectMenu
        v-model="selectedTechnology"
        :options="allTechnologies"
        value-attribute="slug"
        option-attribute="title"
        placeholder="Filter by Technology"
        class="w-48"
      />
    </div>
    <div class="projects-container mt-6">
      <MoleculesAnimatedCard v-for="(project, index) in filteredProjects"
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
          <div class="flex flex-wrap gap-2">
            <!-- Category Tags -->
            <AtomsTag
              v-for="(category, catIndex) in project.category"
              :key="`cat-${catIndex}`"
              :title="category.title"
              :color="category.slug"
            />
          </div>
        </template>
      </MoleculesAnimatedCard>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'; // Import computed
import useContentful from '~/composables/useContentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const { client } = useContentful();

const projects = ref([]);
const allCategories = ref([]);
const allTechnologies = ref([]);
const selectedCategory = ref(null);
const selectedTechnology = ref(null);

onMounted(async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'project',
    });

    const fetchedProjects = entries.items.map((entry) => {
      const fields = entry.fields || {};
      const image = fields.thumbnail?.fields?.file.url || 'https://via.placeholder.com/300x200';
      const categories = Array.isArray(fields.category)
          ? fields.category.map((cat) => ({title: cat?.fields?.title, slug: cat?.fields?.slug})).filter(cat => cat.title && cat.slug)
          : fields.category?.fields?.title ? [{title: fields.category.fields.title, slug: fields.category.fields.slug}] : [];
      // Correctly map technologies using fields.name and filter out entries without a name
      const technologies = Array.isArray(fields.technologies)
          ? fields.technologies.map((tech) => ({title: tech?.fields?.name, slug: tech?.fields?.name})).filter(tech => tech.title)
          : [];

      return {
        id: entry.sys.id,
        title: fields.title || 'No Title',
        excerpt: fields.excerpt ? documentToHtmlString(fields.excerpt) : 'No Excerpt',
        description: fields.description || 'No Description',
        image: image,
        link: fields.link || '#',
        slug: fields.slug || '',
        category: categories,
        technologies: technologies, // Add technologies field
      };
    });

    projects.value = fetchedProjects;

    // Populate filter options
    const categoriesSet = new Map();
    const technologiesSet = new Map();
    fetchedProjects.forEach(project => {
      project.category.forEach(cat => categoriesSet.set(cat.slug, cat.title));
      // Use the corrected tech structure (title/slug are both 'name')
      project.technologies.forEach(tech => technologiesSet.set(tech.slug, tech.title));
    });
    // Add "All" option and convert Maps to arrays for USelectMenu
    allCategories.value = [{ title: 'All Categories', slug: null }, ...Array.from(categoriesSet, ([slug, title]) => ({ title, slug }))];
    allTechnologies.value = [{ title: 'All Technologies', slug: null }, ...Array.from(technologiesSet, ([slug, title]) => ({ title, slug }))];

  } catch (error) {
    console.error('Error fetching projects from Contentful:', error);
  }
});

// Computed property for filtered projects
const filteredProjects = computed(() => {
  return projects.value.filter(project => {
    const categoryMatch = !selectedCategory.value || project.category.some(cat => cat.slug === selectedCategory.value);
    // Ensure technology matching uses the correct 'slug' (which is the name)
    const technologyMatch = !selectedTechnology.value || project.technologies.some(tech => tech.slug === selectedTechnology.value);
    return categoryMatch && technologyMatch;
  });
});
</script>

<style lang="postcss" scoped>
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