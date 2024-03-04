<template>
    <div
        class="flex flex-col items-start justify-start w-full gap-4 rounded-md bg-neutral-100 dark:bg-neutral-800 max-w-[400px] max-h-[500px] h-full transform-gpu md:hover:-translate-y-4 z-[100] transition-transform ease-in-out duration-150 relative"
    >
        <SanityImage
            :asset-id="project.mainImage.asset._ref"
            :ref_for="project.mainImage.asset._ref"
            auto="format"
            class="object-contain w-full h-auto rounded-t-lg max-h-[200px]"
        />
        <div
            class="flex flex-col items-start justify-between w-full gap-4 p-4 md:items-center md:flex-row"
        >
            <div class="flex flex-row items-center gap-4">
                <p
                    class="font-sans text-2xl font-bold text-neutral-900 dark:text-neutral-100"
                >
                    {{ project.title }}
                </p>
            </div>
            <div class="flex flex-row gap-4">
                <NuxtLink
                    v-if="project.githubLink"
                    :to="project.githubLink"
                    target="_blank"
                    class="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                    <LucideIcon name="Github" :size="24" />
                </NuxtLink>

                <NuxtLink
                    v-if="project.liveLink"
                    :to="project.liveLink"
                    target="_blank"
                    class="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
                >
                    <LucideIcon name="ExternalLink" :size="24" />
                </NuxtLink>
            </div>
        </div>
        <p class="p-4 font-sans text-neutral-900 dark:text-neutral-100">
            {{ project.description }}
        </p>
        <div class="flex flex-col w-full gap-2 p-4">
            <h1
                class="font-sans text-xl font-semibold text-neutral-900 dark:text-neutral-100"
            >
                Technologies:
            </h1>
            <div class="flex flex-row flex-wrap items-center gap-2">
                <p
                    v-for="tecnology in project.tecnologies"
                    :key="tecnology._id"
                    class="font-sans text-lg italic underline transition-all duration-150 ease-in-out cursor-pointer text-neutral-900 dark:text-neutral-100 decoration-1 decoration-wavy hover:underline-offset-4"
                    :class="
                        decorationColors[
                            Math.floor(Math.random() * decorationColors.length)
                        ]
                    "
                >
                    {{ tecnology.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'
import type { Project } from '~/types/project'

const { project } = defineProps<{
    project: Project
}>()

const decorationColors = ref([
    'decoration-red-400',
    'decoration-orange-400',
    'decoration-yellow-400',
    'decoration-green-400',
    'decoration-blue-400',
    'decoration-purple-400',
    'decoration-pink-400',
])
</script>

<style></style>
