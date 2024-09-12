<template>
    <div
        class="flex flex-row items-center justify-between w-full gap-4 p-6 rounded-md bg-neutral-100 dark:bg-neutral-800"
    >
        <div class="flex flex-col items-start justify-start gap-2">
            <p
                class="font-sans text-md sm:text-sm text-neutral-900 dark:text-neutral-100"
            >
                Published on:
                {{ new Date(props.post.publishedAt).toLocaleString('en-US') }}
            </p>
            <h1
                class="font-sans text-lg font-bold text-neutral-900 dark:text-neutral-100"
            >
                {{ props.post.title }}
            </h1>
        </div>
        <NuxtLink
            :to="'/posts/' + props.post.slug.current"
            class="text-neutral-900 dark:text-neutral-100 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
            <LucideIcon name="ExternalLink" :size="24" />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import LucideIcon from '~/components/lucide-icon.vue'
import type { Post } from '~/types/post'

const props = defineProps<{
    post: Post
}>()
</script>
