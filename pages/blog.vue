<template>
    <div class="flex flex-col items-start justify-start w-full h-full max-w-screen-xl gap-2 mx-auto">
        <div class="flex flex-col items-start justify-start gap-2 p-4 md:p-0">
            <h1 class="font-sans text-3xl font-bold dark:text-neutral-100 text-neutral-800">
                Blog
            </h1>
            <p class="font-sans text-lg font-medium dark:text-neutral-100 text-neutral-800">
                Hopefully this will be a thriving blog some day.
            </p>
        </div>
        <div
            class="gap-4 flex flex-col justify-start w-full h-full p-8 mx-auto transition-colors duration-200 ease-in-out lg:rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-200 dark:bg-neutral-800 overflow-y-auto md:max-h-[90%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar dark:scrollbar-track-neutral-700/20">
            <PostOverview v-for="post in posts" :key="post.slug.current" :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

useHead({
    title: 'Sebastijan Zindl - Blog',
    meta: [
        {
            name: 'description',
            content: "Maybe I'll write something here, maybe not.",
        },
    ],
})

useSeoMeta({
    title: 'Sebastijan Zindl - Blog',
    description: "My Personal Blog",
    ogTitle: 'Sebastijan Zindl - Blog',
    ogDescription: "My Personal Blog",
    ogType: 'website',
    ogUrl: 'https://sebastijanzindl.me/blog',
})

const query = groq`*[_type == "post"]`

const { data: posts } = useSanityQuery<Post[]>(query)
</script>
