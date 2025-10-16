// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Habit Tracker',
      htmlAttrs:{
        lang: 'en',
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss:{},
      autoprefixer:{},
      'postcss-nested':{},
      'postcss-custom-media':{},
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})
