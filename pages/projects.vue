<template>
    <div class="relative flex flex-col items-start w-full h-full max-w-screen-xl gap-4 mx-auto justift-start">
        <div class="relative flex flex-col items-start w-full gap-2 p-4 text-start justift-start md:p-0">
            <h1 class="font-sans text-3xl font-bold dark:text-neutral-100 text-neutral-800">
                Projects
            </h1>
            <p class="font-sans text-lg font-medium dark:text-neutral-100 text-neutral-800">
                Here is some of my work.
            </p>
        </div>
        <div
            class="relative z-50 flex flex-col max-h-[600px] justify-center w-auto h-full p-8 mx-auto transition-colors duration-200 ease-in-out lg:rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-200 dark:bg-neutral-800">
            <div v-if="status === 'pending'" class="self-center">
                <LucideIcon name="Loader2" class="animate-spin text-neutral-900 dark:text-neutral-200" :size="64" />
            </div>
            <div v-else-if="status === 'error'" class="flex flex-row items-center self-center justify-center gap-4">
                <LucideIcon name="HeartCrack" class="text-neutral-900 dark:text-neutral-200" :size="64" />
                <p class="font-sans text-2xl text-center text-neutral-900 dark:text-neutral-200">
                    Something went wrong...
                </p>
            </div>

            <div v-else-if="status === 'success' && projects && projects.length > 0"
                class="relative z-50 grid py-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start h-full gap-4 overflow-y-auto md:max-h-[95%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar scrollbar-thumb-neutral-100 dark:scrollbar-track-neutral-700/20">
                <ProjectOverview v-for="project in projects" :key="project._id" :project="project" />
            </div>
            <div v-else-if="status === 'success' && !projects" class="flex items-center self-center justify-center gap-4">
                <LucideIcon name="Meh" class="text-neutral-900 dark:text-neutral-100" :size="64" />
                <p class="font-sans text-2xl text-center text-neutral-900 dark:text-neutral-200">
                    No projects found.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'
import type { Project } from '~/types/project'

useHead({
    title: 'Sebastijan Zindl - Projects',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Sebastijan Zindl - Projects',
        },
    ],
})

useSeoMeta({
    title: 'Sebastijan Zindl - Projects',
    description: 'Sebastijan Zindl - Projects',
    ogTitle: 'Sebastijan Zindl - Projects',
    ogDescription: 'Sebastijan Zindl - Projects',
    ogType: 'website',
    ogUrl: 'https://sebastijanzindl.me/projects',
})

const query = groq`*[_type == "project"] {
  ...,
  tecnologies[] -> {
    ...,
    name
  }
} | order(_createdAt desc)`

const { data: projects, status } = useSanityQuery<Project[]>(query)
</script>
