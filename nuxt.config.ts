// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: {
        class: 'bg-neutral-100 dark:bg-neutral-900',
      },
    },
  },

  routeRules: {
    '/': { prerender: true, isr: 3600 },
    '/blog': { prerender: true, isr: 3600 },
    '/posts/**': { prerender: true, isr: 3600 },
    '/projects': { isr: 3600 },
  },

  modules: [
    'floating-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@nuxtjs/sanity',
    '@nuxtjs/robots',
    "@nuxt/eslint"
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },

  sanity: {
    projectId: 'ptgttce5',
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },

  compatibilityDate: '2024-09-05',
})