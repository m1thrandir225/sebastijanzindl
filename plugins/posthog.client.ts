import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

import posthog, { type ConfigDefaults } from 'posthog-js'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()

    const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
        api_host: '/relay-65VX/', //proxy through vercel
        ui_host: runtimeConfig.public.posthogHost,
        defaults: runtimeConfig.public.posthogDefaults as ConfigDefaults,
        loaded: (posthog) => {
            if (import.meta.env.MODE === 'development') posthog.debug()
        },
        cookieless_mode: 'always', //use non-cookie mode for GDPR compliance
    })

    return {
        provide: {
            posthog: () => posthogClient,
        },
    }
})
