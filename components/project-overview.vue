<template>
    <div
        class="flex flex-col items-start justify-start w-full gap-4 rounded-md bg-neutral-100 dark:bg-neutral-800 max-w-[400px] max-h-[500px] h-full transform-gpu md:hover:-translate-y-4 z-[100] transition-transform ease-in-out duration-150 relative"
    >
        <SanityImage
            :asset-id="project.mainImage.asset._ref"
            :ref_for="!!project.mainImage.asset._ref"
            auto="format"
            height="200"
            class="object-contain w-full h-auto rounded-t-lg max-h-[200px]"
        />
        <div
            class="flex flex-col items-start justify-between w-full gap-4 p-4 md:items-center md:flex-row"
        >
            <div class="flex flex-row items-center gap-4">
                <p
                    class="font-sans text-[18px] font-bold text-neutral-900 dark:text-neutral-100"
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
        <p
            class="p-4 font-sans text-[16px] text-neutral-900 dark:text-neutral-100"
        >
            {{ project.description }}
        </p>
        <div class="flex flex-col w-full gap-2 p-4">
            <h3
                class="font-sans font-semibold text-neutral-900 dark:text-neutral-100"
            >
                Technologies:
            </h3>
            <div class="flex flex-row flex-wrap items-center gap-2">
                <p
                    v-for="tecnology in project.tecnologies"
                    :key="tecnology._id"
                    class="px-4 text-[16px] py-1 font-sans text-lg italic underline transition-all duration-150 ease-in-out rounded-full cursor-pointer text-neutral-900 dark:text-neutral-100 decoration-1 decoration-wavy hover:underline-offset-4"
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
    'bg-red-400 dark:bg-red-600',
    'bg-orange-400 dark:bg-orange-600',
    'bg-yellow-400 dark:bg-orange-600',
    'bg-green-400 dark:bg-green-600',
    'bg-blue-400 dark:bg-blue-600',
    'bg-purple-400 dark:bg-purple-600',
    'bg-pink-400 dark:bg-pink-600',
])
</script>

<style></style>
