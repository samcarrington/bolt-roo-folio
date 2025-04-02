<template>
  <div class="py-12">
    
    <AtomsPageTitle>Innovation Blog</AtomsPageTitle>
    
    <div class="grid gap-6">
      <ContentList path="/blog" v-slot="{ list }">
        <div v-if="list && list.length > 0">
          <OrganismsBlogArticleList
            v-for="article in list"
            :key="article._path"
            :article="article"
          />
        </div>
        <p v-else class="text-gray-500 py-4">No blog articles available at the moment.</p>
      </ContentList>
    </div>
  </div>
</template>