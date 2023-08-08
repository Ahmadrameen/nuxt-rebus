// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/devtools',
    'dayjs-nuxt'
  ],

  runtimeConfig: {
    public: {
      api_base_url: process.env.API_BASE_URL,
      storage_base_url: process.env.STORAGE_BASE_URL,
    }
  },

  image: {
    quality: 100,
  },

  dayjs: {
    locales: ['ru'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'en',
    defaultTimezone: 'America/New_York',
  }
})
