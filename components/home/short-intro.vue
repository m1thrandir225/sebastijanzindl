<script setup lang="ts">
import type { HomeShortIntroSection } from '~/types/pages/homePage'

defineProps<{
    section: HomeShortIntroSection
}>()
</script>

<template>
    <h1
        v-motion
        :initial="{
            opacity: 0,
            y: -50,
        }"
        :enter="{
            opacity: 1,
            y: 0,
            transition: {
                delay: 0,
            },
        }"
        class="font-sans text-3xl font-bold text-neutral-900 dark:text-neutral-100"
    >
        {{ section.title }}
    </h1>
    <div class="my-4">
        <p
            v-motion
            :initial="{
                opacity: 0,
                y: -50,
            }"
            :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 200,
                },
            }"
            class="italic text-md text-neutral-900 dark:text-neutral-100"
        >
            {{ section.subtitle }}
        </p>
    </div>
    <div
        id="shortIntro"
        v-motion
        class="relative z-[150] my-4 font-sans text-lg text-neutral-900 dark:text-neutral-100 shortIntro"
        :initial="{
            opacity: 0,
            y: -50,
        }"
        :enter="{
            opacity: 1,
            y: 0,
            transition: {
                delay: 400,
            },
        }"
    >
        <SanityContent :blocks="section.shortIntro" />
    </div>
</template>
