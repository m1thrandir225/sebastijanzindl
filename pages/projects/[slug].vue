<script setup lang="ts">
import { useRoute } from 'vue-router'

import LucideIcon from '@/components/lucide-icon.vue'
import type { Project } from '~/types/content/project'
import TechnologyItem from '~/components/technology-item.vue'
import { useMediaQuery } from '@vueuse/core'

const route = useRoute()

const query = groq`*[_type == "project" && slug.current == $slug][0] {
      ...,
      techStack[] -> {
        ...,
      }
    }`

const {
    data: project,
    status,
    error,
} = useSanityQuery<Project>(query, {
    slug: route.params.slug,
})

const router = useRouter()

const isSmallScreen = useMediaQuery('(max-width: 640px)')

function goBack() {
    router.back()
}

const pageTitle = computed(() => {
    const paramsTitle = `${route.params.slug} - Sebastijan Zindl`
    return project.value?.title
        ? `${project.value.title} - Sebastijan Zindl`
        : paramsTitle
})

const pageDescription = computed(() => {
    return project.value?.shortDescription ?? ''
})

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
})
</script>

<template>
    <div
        v-if="status !== 'pending' && project"
        class="relative flex flex-col items-start w-full h-full px-4 md:px-0 gap-4 mx-auto justift-start"
    >
        <div
            v-if="isSmallScreen"
            class="w-full flex flex-col gap-4 items-start"
        >
            <div class="w-full flex flex-row items-center justify-between">
                <button
                    class="group p-2 rounded-md bg-neutral-800 dark:bg-neutral-100"
                    @click="goBack"
                >
                    <LucideIcon
                        name="ArrowLeft"
                        class="transition-all text-neutral-100 dark:text-neutral-800 ease-in-out duration-300 group-hover:text-brand group-hover:scale-125"
                        :size="18"
                    />
                </button>
                <div class="flex flex-row items-center gap-4">
                    <NuxtLink
                        v-if="project.githubLink"
                        v-motion
                        :initial="{
                            opacity: 0,
                            x: -5,
                        }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 200,
                            },
                        }"
                        :href="project.githubLink"
                        target="_blank"
                        class="text-neutral-900 dark:text-neutral-100 hover:text-brand transition-all ease-in-out duration-300"
                    >
                        <LucideIcon name="Github" :size="24" />
                    </NuxtLink>
                    <NuxtLink
                        v-if="project.productionLink"
                        v-motion
                        :href="project.productionLink"
                        :initial="{
                            opacity: 0,
                            x: 5,
                        }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 250,
                            },
                        }"
                        target="_blank"
                        class="text-neutral-900 dark:text-neutral-100 hover:text-brand transition-all ease-in-out duration-300"
                    >
                        <LucideIcon name="Link" :size="24" />
                    </NuxtLink>
                </div>
            </div>
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
                {{ project.title }}
            </h1>
        </div>
        <div v-else class="w-full flex flex-row items-center justify-between">
            <div class="flex flex-row gap-4 items-center">
                <button
                    class="group p-2 rounded-md bg-neutral-800 dark:bg-neutral-100"
                    @click="goBack"
                >
                    <LucideIcon
                        name="ArrowLeft"
                        class="transition-all text-neutral-100 dark:text-neutral-800 ease-in-out duration-300 group-hover:text-brand group-hover:scale-125"
                        :size="18"
                    />
                </button>

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
                    {{ project.title }}
                </h1>
            </div>

            <div class="flex flex-row items-center gap-4">
                <NuxtLink
                    v-if="project.githubLink"
                    v-motion
                    :initial="{
                        opacity: 0,
                        x: -5,
                    }"
                    :enter="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: 200,
                        },
                    }"
                    :href="project.githubLink"
                    target="_blank"
                    class="text-neutral-900 dark:text-neutral-100 hover:text-brand transition-all ease-in-out duration-300"
                >
                    <LucideIcon name="Github" :size="24" />
                </NuxtLink>

                <NuxtLink
                    v-if="project.productionLink"
                    v-motion
                    :href="project.productionLink"
                    :initial="{
                        opacity: 0,
                        x: 5,
                    }"
                    :enter="{
                        opacity: 1,
                        x: 0,
                        transition: {
                            delay: 250,
                        },
                    }"
                    target="_blank"
                    class="text-neutral-900 dark:text-neutral-100 hover:text-brand transition-all ease-in-out duration-300"
                >
                    <LucideIcon name="Link" :size="24" />
                </NuxtLink>
            </div>
        </div>
        <SanityImage
            v-motion
            :initial="{
                opacity: 0,
                scale: 0,
            }"
            :enter="{
                opacity: 1,
                scale: 1,
                transition: {
                    delay: 250,
                },
            }"
            :image="project.image"
            :asset-id="project.image.asset._ref"
            auto="format"
            class="rounded-xl transition-all ease-in duration-200 border-2 border-transparent hover:border-brand"
        />
        <div
            v-motion
            class="w-full my-4 flex flex-col gap-4"
            :initial="{
                opacity: 0,
                y: -50,
            }"
            :enter="{
                opacity: 1,
                y: 0,
                transition: {
                    delay: 300,
                },
            }"
        >
            <p
                class="font-array text-[20px] lg:text-[24px] italic font-medium dark:text-neutral-100 text-neutral-800"
            >
                About the project:
            </p>
            <SanityContent :blocks="project.description" />
        </div>

        <div class="w-full my-4 flex flex-col gap-4">
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
                        delay: 350,
                    },
                }"
                class="font-array text-[16px] italic font-medium dark:text-neutral-100 text-neutral-800"
            >
                Built with:
            </p>
            <div
                class="w-full grid grid-cols-3 md:flex flex-row items-center flex-wrap gap-2 md:gap-8"
            >
                <template
                    v-for="(item, indexP) in project.techStack"
                    :key="indexP"
                >
                    <TechnologyItem :tool="item" :index="indexP" />
                </template>
            </div>
        </div>
    </div>
    <div v-else-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">{{ error }}</div>
    <div v-else>Something went wrong</div>
</template>
