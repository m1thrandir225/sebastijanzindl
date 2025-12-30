<script setup lang="ts">
import type { HomeFavouriteToolsSection } from '~/types/pages/homePage'
import TechnologyItem from '../technology-item.vue'

defineProps<{
    section: HomeFavouriteToolsSection
}>()
</script>

<template>
    <div class="flex flex-col items-start gap-2">
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
                    delay: 1000,
                },
            }"
            class="font-array font-bold text-2xl text-neutral-900 dark:text-neutral-100"
        >
            {{ section.title }}
        </h1>
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
                    delay: 1200,
                },
            }"
            class="italic font-semibold text-sm text-neutral-900 dark:text-neutral-100"
        >
            {{ section.subtitle }}
        </p>
    </div>
    <div
        class="grid grid-cols-3 justify-start md:flex md:flex-row md:flex-wrap items-start gap-[12px] relative z-[150]"
    >
        <template v-for="(tool, index) in section.tools" :key="index">
            <TechnologyItem :tool="tool" :index="index" />
        </template>
    </div>
</template>
