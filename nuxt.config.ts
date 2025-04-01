import dotenv from 'dotenv'
dotenv.config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@vueuse/motion/nuxt',
    '@nuxt/content'
  ],
  ui: {
    global: true,
  },
  app: {
    head: {
      title: 'Innovation Leader Portfolio',
      meta: [
        { name: 'description', content: 'Senior Technology Leader Portfolio' }
      ]
    }
  },
  nitro: {
    preset: 'node-server',
    timing: true
  },
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulToken: process.env.CONTENTFUL_TOKEN
    }
  }
})