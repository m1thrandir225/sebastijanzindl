<template>
    <div v-motion :enter="enter" :initial="initial">
        <NuxtLink
            active-class="underline decoration-wavy decoration-pink-400 decoration-1 bg-neutral-200 dark:bg-neutral-800"
            class="p-2 sm:px-4 sm:py-2 md:px-6 md:py-3 font-bold transition-colors duration-200 rounded-md text-neutral-900 dark:text-neutral-100 hover:opacity-90 hover:bg-neutral-200 dark:hover:bg-neutral-800 font-array"
            :to="props.to"
        >
            {{ props.text }}
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
