<template>
    <div
        class="gap-4 flex flex-col justify-start w-full h-full p-8 mx-auto transition-colors duration-200 ease-in-out rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-200 dark:bg-neutral-800 overflow-y-auto md:max-h-[90%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar dark:scrollbar-track-neutral-700/20"
    >
        <PostOverview v-for="post in posts" :key="post.slug" :post="post" />
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

const query = groq`*[_type == "post"]`

const { data: posts } = useSanityQuery<Post[]>(query)
</script>

<style></style>
