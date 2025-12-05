// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                {
                    name: 'description',
                    content: "Sebastijan's personal portfolio site. ",
                },
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            bodyAttrs: {
                class: 'bg-neutral-100 dark:bg-neutral-900 transition-all ease-in-out duration-150',
            },
        },
    },

    routeRules: {
        '/': { isr: 3600 },
        '/blog': { prerender: true, isr: 3600 },
        '/posts/**': { prerender: true, isr: 3600 },
        '/projects': { isr: 3600 },
        '/projects/[slug]': { isr: 3600 },
    },

    modules: [
        'floating-vue/nuxt',
        '@nuxtjs/color-mode',
        '@nuxt/image',
        '@vueuse/motion/nuxt',
        '@nuxtjs/sanity',
        '@nuxtjs/robots',
        '@nuxt/eslint',
        '@nuxtjs/device',
        'reka-ui/nuxt',
        'shadcn-nuxt',
    ],
    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },

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
            posthogPublicKey: process.env.NUXT_PUBLIC_POSTHOG_KEY,
            posthogHost: 'https://eu.i.posthog.com',
            posthogDefaults: '2025-05-24',
        },
    },

    compatibilityDate: '2024-09-05',
})
