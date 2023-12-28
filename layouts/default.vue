<template>
    <div
        class="w-full h-full min-h-screen overflow-hidden lg:overflow-auto lg:h-screen bg-neutral-100 dark:bg-neutral-900"
    >
        <div class="container relative h-full max-h-[80%] mx-auto">
            <GlobalHeader />
            <slot />
        </div>
        <SpeedInsights />
    </div>
</template>

<script lang="ts" setup>
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<style></style>
