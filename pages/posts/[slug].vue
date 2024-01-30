<template>
    <div
        v-if="status !== 'pending'"
        class="gap-4 flex flex-col justify-start w-full h-full p-8 mx-auto transition-colors duration-200 ease-in-out lg:rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-200 dark:bg-neutral-800 overflow-y-auto md:max-h-[90%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar dark:scrollbar-track-neutral-700/20"
    >
        <div
            class="flex flex-col items-start justify-between w-full md:items-center md:flex-row"
        >
            <h1
                class="font-sans text-xl font-bold text-neutral-900 dark:text-neutral-100"
            >
                {{ post?.title }}
            </h1>
            <p
                v-if="post?.publishedAt"
                class="text-md md:text-lg text-neutral-900 dark:text-neutral-100"
            >
                Published on:
                {{ new Date(post?.publishedAt).toLocaleString('en-US') }}
            </p>
        </div>
        <div
            v-if="post?.body"
            class="text-lg text-neutral-900 dark:text-neutral-100"
        >
            <SanityContent :blocks="post.body" />
        </div>
    </div>
    <div v-else-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">{{ error }}</div>
    <div v-else>Something went wrong</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Post } from '~/types/post'
const route = useRoute()

const query = groq`*[_type == "post" && slug.current == $slug][0]`

const {
    data: post,
    status,
    error,
} = useSanityQuery<Post>(query, {
    slug: route.params.slug,
})
</script>
