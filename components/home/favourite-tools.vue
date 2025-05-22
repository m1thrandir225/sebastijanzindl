<script setup lang="ts">
import type { HomeFavouriteToolsSection } from '~/types/pages/homePage'
import { useDark } from '@vueuse/core'
defineProps<{
    section: HomeFavouriteToolsSection
}>()

const isDark = useDark()
const { isMobile } = useDevice()
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
            class="font-titan text-2xl font-bold text-neutral-900 dark:text-neutral-100"
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
            class="italic font-array text-sm text-neutral-900 dark:text-neutral-100"
        >
            {{ section.subtitle }}
        </p>
    </div>
    <div
        class="grid grid-cols-3 justify-start md:flex md:flex-row md:flex-wrap items-start gap-[12px] relative z-[150]"
    >
        <VTooltip
            v-for="(tool, index) in section.tools"
            :key="index"
            v-motion
            :initial="{
                opacity: 0,
                scale: 0,
            }"
            :enter="{
                opacity: 100,
                scale: 1,
                transition: {
                    delay: 1400 + 75 * index,
                },
            }"
            :triggers="isMobile ? ['click'] : ['hover']"
        >
            <template #popper>
                <span class="font-array">{{ tool.title }}</span>
            </template>
            <div
                class="relative z-[150] p-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 flex flex-row items-center justify-center"
            >
                <SanityImage
                    v-if="isDark"
                    :image="tool.lightImage"
                    :asset-id="tool.lightImage.asset._ref"
                    class="self-center w-10 h-10 rounded-md"
                    :alt="tool.lightImage.alt"
                />
                <SanityImage
                    v-else
                    class="self-center w-10 h-10 rounded-md"
                    :image="tool.darkImage"
                    :asset-id="tool.darkImage.asset._ref"
                />
            </div>
        </VTooltip>
    </div>
</template>
