// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    components: {
        dirs: [
            {
                path: '~/components',
                ignore: ['ui/**'],
            },
        ],
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
        // Must run after shadcn-nuxt: patch its `components/ui` dir so Nuxt does not
        // file-scan it (empty `extensions: []` becomes `**/*.*` and duplicates addComponent).
        function (_options, nuxt) {
            nuxt.hook('components:dirs', (dirs) => {
                for (const dir of dirs) {
                    if (typeof dir !== 'object' || !dir.path) continue
                    const normalized = dir.path.replace(/\\/g, '/')
                    if (normalized.endsWith('/components/ui')) {
                        dir.ignore = [...(dir.ignore ?? []), '**/*']
                    }
                }
            })
        },
    ],
    devtools: { enabled: true },
    image: {
        sanity: {
            projectId: 'ptgttce5',
        },
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
    css: ['~/assets/css/tailwind.css'],

    colorMode: {
        classSuffix: '',
        preference: 'dark',
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

    routeRules: {
        '/': { isr: 3600 },
        '/blog': { prerender: true, isr: 3600 },
        '/posts/**': { prerender: true, isr: 3600 },
        '/projects': { isr: 3600 },
        '/projects/[slug]': { isr: 3600 },
    },

    compatibilityDate: '2024-09-05',
    vite: {
        optimizeDeps: {
            include: [
                "@vue/devtools-kit",
                "@vue/devtools-core",
                "posthog-js",
            ]
        },
        plugins: [tailwindcss()],
    },

    sanity: {
        projectId: 'ptgttce5',
    },
    shadcn: {
        prefix: '',
        componentDir: './components/ui',
    },
})