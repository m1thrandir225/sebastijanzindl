<script setup lang="ts">
import type { HomeSocialSection } from '~/types/pages/homePage'

defineProps<{
    section: HomeSocialSection
}>()
</script>

<template>
    <div class="my-4 z-[150]">
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
                    delay: 600,
                },
            }"
            class="font-bold italic text-lg text-neutral-900 dark:text-neutral-100"
        >
            {{ section.title }}
        </p>
        <div
            class="flex flex-col flex-wrap w-full gap-4 md:gap-2 my-2 lg:flex-row font-array font-bold"
        >
            <NuxtLink
                v-for="(link, index) in section?.socialLinks"
                :key="link._key"
                v-motion
                :to="link.url"
                :initial="{
                    opacity: 0,
                    scale: 0,
                }"
                :enter="{
                    opacity: 100,
                    scale: 1,
                    transition: {
                        delay: 800 + 100 * index,
                    },
                }"
                target="_blank"
                class="flex flex-row items-center gap-2 group z-[150] text-neutral-900 dark:text-neutral-100"
            >
                <LucideIcon
                    :name="link.lucideIcon"
                    class="text-neutral-900 dark:text-neutral-100"
                    :size="24"
                />
                <span
                    class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 group-hover:decoration-blue-400"
                    >{{ link.title }}</span
                >
            </NuxtLink>
        </div>
    </div>
</template>
