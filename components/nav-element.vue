<template>
    <div v-motion :enter="enter" :initial="initial">
        <NuxtLink
            active-class="underline decoration-wavy decoration-blue-400 decoration-1"
            class="px-4 py-2 font-sans font-bold transition-colors duration-200 rounded-md text-neutral-900 dark:text-neutral-100 hover:opacity-90 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:underline hover:decoration-wavy hover:decoration-pink-400 hover:decoration-1"
            :to="props.to"
        >
            <span class="font-sans text-bold">{{ props.text }}</span>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    to: string
    text: string
}>()

const initial = ref({
    x: -200,
    opacity: 0,
})

const enter = ref({
    x: 0,
    opacity: 1,
    transition: {
        duration: 300,
        type: 'keyframes',
        ease: 'easeIn',
    },
})
</script>

<style></style>
