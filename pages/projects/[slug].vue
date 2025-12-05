<template>
    <div
        v-if="status !== 'pending' && project"
        class="relative flex flex-col items-start w-full h-full px-4 md:px-8 lg:max-w-screen-xl gap-4 mx-auto justift-start"
    >
        <div class="w-full flex flex-row items-center justify-between">
            <div class="flex flex-row gap-4 items-center">
                <button
                    class="group p-2 rounded-md bg-neutral-800 dark:bg-neutral-100"
                    @click="goBack"
                >
                    <LucideIcon
                        name="ArrowLeft"
                        class="transition-all text-neutral-100 dark:text-neutral-800 ease-in-out duration-300 group-hover:text-[#fbbf23] group-hover:scale-125"
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
                    class="font-titan text-3xl dark:text-neutral-100 text-neutral-800"
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
                    class="text-neutral-900 dark:text-neutral-100 hover:text-[#fbbf23] transition-all ease-in-out duration-300"
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
                    class="text-neutral-900 dark:text-neutral-100 hover:text-[#fbbf23] transition-all ease-in-out duration-300"
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
            class="rounded-xl transition-all ease-in duration-200 border-2 border-transparent hover:border-neutral-800/50 hover:dark:border-neutral-100/50"
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
                class="font-array text-[18px] lg:text-[24px] italic md:text-lg font-medium dark:text-neutral-100 text-neutral-800"
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
                class="font-array text-[18px] lg:text-[24px] italic md:text-lg font-medium dark:text-neutral-100 text-neutral-800"
            >
                Built with:
            </p>
            <div
                class="w-full grid grid-cols-4 md:flex flex-row items-center flex-wrap gap-2 md:gap-8"
            >
                <VTooltip
                    v-for="(item, indexP) in project.techStack"
                    :key="indexP"
                    v-motion
                    :initial="{
                        opacity: 0,
                        scale: 0,
                    }"
                    :enter="{
                        opacity: 100,
                        scale: 1,
                        transition: {
                            delay: 400 + 75 * indexP,
                        },
                    }"
                    :triggers="isMobile ? ['click'] : ['hover']"
                >
                    <template #popper>
                        <span class="font-array">{{ item.hoverText }}</span>
                    </template>
                    <div
                        class="relative z-[150] p-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 flex flex-row items-center justify-center"
                    >
                        <SanityImage
                            v-if="isDark"
                            auto="format"
                            :image="item.lightImage"
                            :asset-id="item.lightImage.asset._ref"
                            w="32"
                            h="32"
                            class="self-center w-8 h-8 md:w-10 md:h-10 rounded-md"
                            :alt="item.lightImage.alt"
                        />
                        <SanityImage
                            v-else
                            class="self-center w-8 h-8 md:w-10 md:h-10 rounded-md"
                            auto="format"
                            w="32"
                            h="32"
                            :image="item.darkImage"
                            :asset-id="item.darkImage.asset._ref"
                            :alt="item.darkImage.alt"
                        />
                    </div>
                </VTooltip>
            </div>
        </div>
    </div>
    <div v-else-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">{{ error }}</div>
    <div v-else>Something went wrong</div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { useRoute } from 'vue-router'

import LucideIcon from '@/components/lucide-icon.vue'
import type { Project } from '~/types/content/project'

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

const isDark = useDark()

const router = useRouter()

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

const { isMobile } = useDevice()
useSeoMeta({
    title: pageTitle,
    description: pageDescription,
})
</script>
