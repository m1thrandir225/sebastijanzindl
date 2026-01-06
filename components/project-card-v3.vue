<script setup lang="ts">
import LucideIcon from '@/components/lucide-icon.vue'
import type { Project } from '~/types/content/project'

const props = defineProps<{
    project: Project
    index: number
}>()

const { isMobile } = useDevice()
</script>

<template>
    <NuxtLink
        :key="props.project._id"
        v-motion
        :to="{
            name: 'projects-slug',
            params: { slug: props.project.slug.current },
        }"
        :initial="{
            opacity: 0,
            scale: 0.95,
            filter: 'blur(8px)',
        }"
        :visible-once="{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                delay: (() => {
                    if (isMobile) {
                        return index < 4 ? 100 + 75 * index : 0
                    } else {
                        return index < 6 ? 100 + 75 * index : 0
                    }
                })(),
                duration: 300,
            },
        }"
        class="w-full flex flex-row items-center justify-between p-6 dark:outline-neutral-700 rounded-xl group hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all ease-in-out duration-300 cursor-pointer"
    >
        <div class="flex flex-col gap-2">
            <h1
                class="font-array text-left font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-brand transition-all ease-in-out duration-300 group-hover:dark:text-brand group-hover:underline group-hover:decoration-wavy group-hover:decoration-pink-400"
            >
                {{ project.title }}
            </h1>
            <p class="font-medium italic text-[14px] opacity-85">
                {{ project.shortDescription }}
            </p>
        </div>
        <LucideIcon
            name="ArrowRight"
            class="rotate-180 group-hover:rotate-0 transition-all ease-in-out duration-300 group-hover:text-brand group-hover:scale-125"
            :size="24"
        />
    </NuxtLink>
</template>
