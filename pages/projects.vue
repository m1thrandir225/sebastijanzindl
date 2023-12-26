<template>
    <div
        class="relative z-50 flex flex-col justify-center w-full h-full max-w-screen-lg p-8 mx-auto transition-colors duration-200 ease-in-out rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-100 dark:bg-neutral-800"
    >
        <div
            v-if="projects.length === 0"
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

        <div v-else>
            <div
                class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'

useHead({
    title: 'Sebastijan Zindl - Projects',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Sebastijan Zindl - Projects',
        },
    ],
})
const projects = ref([])
</script>

<style></style>
