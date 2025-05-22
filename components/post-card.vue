<template>
    <NuxtLink
        :to="'/posts/' + props.post.slug.current"
        class="flex flex-row items-center justify-between w-full gap-4 p-6 rounded-md bg-neutral-100 shadow-lg md:shadow-none dark:bg-neutral-600 group"
    >
        <div class="flex flex-col items-start justify-start gap-2">
            <p
                class="font-array text-md sm:text-sm text-neutral-900 dark:text-neutral-100"
            >
                Published on:
                {{ new Date(props.post.publishedAt).toLocaleDateString() }}
            </p>
            <h1
                class="font-array text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-pink-400 transition-all ease-in-out duration-300"
            >
                {{ props.post.title }}
            </h1>
        </div>

        <LucideIcon
            name="ArrowRight"
            class="rotate-180 group-hover:rotate-0 transition-all ease-in-out duration-300 group-hover:text-[#fbbf23]"
            :size="24"
        />
    </NuxtLink>
</template>

<script setup lang="ts">
import LucideIcon from '~/components/lucide-icon.vue'
import type { Post } from '~/types/content/post'

const props = defineProps<{
    post: Post
}>()
</script>
