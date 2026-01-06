<template>
    <div
        v-if="(pageStatus == 'success' || pageStatus == 'idle') && blogPage"
        class="flex flex-col items-start justify-start w-full h-full gap-2 mx-auto"
    >
        <div class="flex flex-col items-start justify-start gap-2 p-4 md:p-0">
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
                class="font-array font-semibold text-3xl dark:text-neutral-100 text-neutral-800"
            >
                {{ blogPage.title }}
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
                class="font-array italic text-sm md:text-lg font-medium dark:text-neutral-100 text-neutral-800"
            >
                {{ blogPage.subtitle }}
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
                v-else-if="status === 'success' && posts && posts.length > 0"
                class="relative z-50 flex flex-col py-2 md:py-4 md:grid-cols-2 lg:grid-cols-1 items-start justify-start h-full gap-4 md:overflow-y-auto md:max-h-[95%] px-4 lg:px-0 transition-height ease-in-out duration-200 scrollbar-thin scrollbar-track-rounded-full sm:overflow-y-scroll scrollbar-track-neutral-200 dark:scrollbar-track-neutral-600 scrollbar-thumb-brand"
            >
                <div class="pr-2 w-full">
                    <PostCard
                        v-for="(project, index) in posts"
                        :key="project._id"
                        v-motion
                        :post="project"
                        :index="index"
                    />
                </div>
            </div>
            <div
                v-else-if="status === 'success' && !posts"
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

<script setup lang="ts">
import PostCard from '~/components/post-card.vue'
import type { Post } from '~/types/content/post'
import type { BlogPageProperties } from '~/types/pages/blogPage'

const query = groq`*[_type == "post"]`
const pageQuery = groq`*[_type == "blogPage"][0]`

const { data: posts, status: status } = useSanityQuery<Post[]>(query)
const { data: blogPage, status: pageStatus } =
    useSanityQuery<BlogPageProperties>(pageQuery)

const pageTitle = computed(() => {
    return blogPage.value?.seo.pageTitle ?? 'Blog - Sebastijan Zindl'
})

const pageDescription = computed(() => {
    return blogPage.value?.seo.metaDescription ?? ''
})

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageDescription,
    ogType: 'website',
    ogUrl: 'https://sebastijanzindl.me/blog',
})
</script>
