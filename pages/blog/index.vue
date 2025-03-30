<template>
  <div class="py-12">
    <h1 class="text-3xl font-bold mb-8">
      <GradientText>Innovation Blog</GradientText>
    </h1>
    <div class="grid gap-6">
      <ContentList path="/blog" v-slot="{ list }">
        <AnimatedCard v-for="article in list" :key="article._path" :delay="200" class="group">
          <NuxtLink :to="article._path">
            <h2 class="text-xl font-semibold group-hover:text-primary-500">{{ article.title }}</h2>
            <p class="text-gray-400 mt-2">{{ article.description }}</p>
            <ClientOnly>
              <div class="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <span>{{ new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                <span>•</span>
                <span>{{ article.readingTime }} min read</span>
              </div>
            </ClientOnly>
          </NuxtLink>
        </AnimatedCard>
      </ContentList>
    </div>
  </div>
</template>