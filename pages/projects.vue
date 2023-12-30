<template>
    <div
        class="relative z-50 flex flex-col justify-center w-full h-full p-8 mx-auto transition-colors duration-200 ease-in-out rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-200 dark:bg-neutral-800"
    >
        <div v-if="status === 'pending'" class="self-center">
            <LucideIcon
                name="Loader2"
                class="animate-spin text-neutral-900 dark:text-neutral-200"
                :size="64"
            />
        </div>
        <div
            v-else-if="status === 'error'"
            class="flex flex-row items-center self-center justify-center gap-4"
        >
            <LucideIcon
                name="HeartCrack"
                class="text-neutral-900 dark:text-neutral-200"
                :size="64"
            />
            <p
                class="font-sans text-2xl text-center text-neutral-900 dark:text-neutral-200"
            >
                Something went wrong...
            </p>
        </div>

        <div
            v-else-if="status === 'success' && projects && projects?.length > 0"
            class="flex flex-col items-start justify-start h-full gap-4 overflow-y-auto md:max-h-[90%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar scrollbar-thumb-neutral-100 dark:scrollbar-track-neutral-700/20"
        >
            <ProjectOverview
                v-for="project in projects"
                :key="project._id"
                :project="project"
            />
        </div>
        <div
            v-else-if="status === 'success' && !projects"
            class="flex items-center self-center justify-center gap-4"
        >
            <LucideIcon
                name="Meh"
                class="text-neutral-900 dark:text-neutral-100"
                :size="64"
            />
            <p
                class="font-sans text-2xl text-center text-neutral-900 dark:text-neutral-200"
            >
                No projects found.
            </p>
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

const query = groq`*[_type == "project"] {
  ...,
  tecnologies[] -> {
    ...,
    name
  }
}`

const { data: projects, status } = useSanityQuery<Project[]>(query)
</script>

<style></style>
