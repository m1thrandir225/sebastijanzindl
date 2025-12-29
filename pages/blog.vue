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
            class="gap-4 flex flex-col justify-start w-full h-full py-4 px-2 md:p-8 mx-auto transition-colors duration-200 ease-in-out lg:rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-100 dark:bg-neutral-900 md:bg-neutral-200 md:dark:bg-neutral-800 overflow-y-auto md:max-h-[90%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar dark:scrollbar-track-neutral-700/20"
        >
            <PostCard
                v-for="(post, index) in posts"
                :key="post.slug.current"
                v-motion
                :post="post"
                :initial="{
                    opacity: 0,
                    scale: 0,
                }"
                :enter="{
                    opacity: 100,
                    scale: 1,
                    transition: {
                        delay: 400 + 75 * index,
                    },
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/content/post'
import type { BlogPageProperties } from '~/types/pages/blogPage'

const query = groq`*[_type == "post"]`
const pageQuery = groq`*[_type == "blogPage"][0]`

const { data: posts } = useSanityQuery<Post[]>(query)
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
