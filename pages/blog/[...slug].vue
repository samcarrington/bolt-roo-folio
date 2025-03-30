<template>
  <div class="py-12">
    <ContentDoc v-slot="{ doc }">
      <AnimatedCard :delay="200">
        <article class="prose prose-invert max-w-none">
          <h1 class="text-3xl font-bold">{{ doc.title }}</h1>
          <ClientOnly>
            <div class="flex items-center gap-2 text-sm text-gray-500 mt-4">
              <span>{{ new Date(doc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              <span>•</span>
              <span>{{ doc.readingTime }} min read</span>
            </div>
          </ClientOnly>
          <ContentRenderer :value="doc" />
        </article>
      </AnimatedCard>
    </ContentDoc>
  </div>
</template>