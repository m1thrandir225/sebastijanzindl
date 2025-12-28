<template>
    <div
        v-if="(pageStatus == 'success' || pageStatus == 'idle') && projectPage"
        class="relative flex flex-col items-start w-full h-full gap-4 mx-auto justift-start"
    >
        <div
            class="relative flex flex-col items-start w-full gap-2 p-4 text-start justift-start md:p-0"
        >
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
                class="font-array font-bold text-3xl dark:text-neutral-100 text-neutral-800"
            >
                {{ projectPage.title }}
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
                        delay: 200,
                    },
                }"
                class="font-array text-sm italic md:text-lg font-medium dark:text-neutral-100 text-neutral-800"
            >
                {{ projectPage.subtitle }}
            </p>
        </div>
        <div
            class="relative-z-50 flex flex-col max-h-full md:max-h-[600px] justify-center w-full h-full mx-auto transition-colors duration-200 ease-in-out lg:rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl scrollbar-thumb-primary scrollbar-track-neutral-100 dark:scrollbar-track-neutral-900"
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
                v-else-if="
                    status === 'success' && projects && projects.length > 0
                "
                class="relative z-50 flex flex-col py-2 md:py-4 md:grid-cols-2 lg:grid-cols-1 items-start justify-start h-full gap-4 md:overflow-y-auto md:max-h-[95%] px-4 lg:px-0 transition-height ease-in-out duration-200 scrollbar-thin scrollbar-track-rounded-full sm:overflow-y-scroll scrollbar-track-neutral-200 dark:scrollbar-track-neutral-600 scrollbar-thumb-[#fbbf23]"
            >
                <div class="pr-2 w-full">
                    <ProjectCardV3
                        v-for="(project, index) in projects"
                        :key="project._id"
                        v-motion
                        :project="project"
                        :index="index"
                    />
                </div>
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
    </div>
</template>

<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'
import ProjectCardV3 from '~/components/project-card-v3.vue'
import type { Project } from '~/types/content/project'
import type { ProjectsPageProperties } from '~/types/pages/projectsPage'
const pageQuery = groq`*[_type == 'projectPage'][0]`

const query = groq`*[_type == "project"] {
  ...,
  techStack[] -> {
    ...,
    technology->
  }
} | order(_createdAt desc)`

const { data: projects, status } = useSanityQuery<Project[]>(query)
const { data: projectPage, status: pageStatus } =
    useSanityQuery<ProjectsPageProperties>(pageQuery)

const pageTitle = computed(() => {
    return projectPage.value?.seo.pageTitle ?? 'Sebastijan Zindl - Projects'
})

const pageDescription = computed(() => {
    return projectPage.value?.seo.metaDescription ?? 'Projects'
})

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogType: 'website',
    ogUrl: 'https://sebastijanzindl.me/projects',
})
</script>
