// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxthq/studio'
  ],
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})