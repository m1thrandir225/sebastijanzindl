<script setup lang="ts">
import type { HomeFavouriteToolsSection } from '~/types/pages/homePage'
import { useDark, useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
defineProps<{
    section: HomeFavouriteToolsSection
}>()

const isDark = useDark()

const { isMobile } = useDevice()

const { copy } = useClipboard()

const copyToClipboard = (text: string) => {
    if (isMobile) return null
    copy(text)
    toast('Copied to clipboard')
}
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
        <div
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
            class="flex flex-col gap-2 items-center justify-center relative z-[150] px-4 py-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 group hover:cursor-copy"
            @click="copyToClipboard(tool.title)"
        >
            <SanityImage
                v-if="!isDark"
                :image="tool.lightImage"
                :asset-id="tool.lightImage.asset._ref"
                auto="format"
                w="40"
                h="40"
                class="self-center w-10 h-10 rounded-md"
                :alt="tool.hoverText"
            />
            <SanityImage
                v-else
                w="40"
                h="40"
                auto="format"
                class="self-center w-10 h-10 rounded-md"
                :image="tool.darkImage"
                :asset-id="tool.darkImage.asset._ref"
                :alt="tool.hoverText"
            />
            <p
                class="font-array dark:text-neutral-100 text-neutral-900 group-hover:text-brand"
            >
                {{ tool.title }}
            </p>
        </div>
    </div>
</template>
