<template>
    <div v-motion :enter="enter" :initial="initial">
        <NuxtLink
            active-class="underline decoration-wavy decoration-blue-400 decoration-1 bg-neutral-200 dark:bg-neutral-800"
            class="px-4 py-2 font-sans font-bold transition-colors duration-200 rounded-md text-neutral-900 dark:text-neutral-100 hover:opacity-90 hover:bg-neutral-200 dark:hover:bg-neutral-800 group"
            :to="props.to"
        >
            <MagneticLink>
                <p
                    class="font-sans text-bold group-hover:underline group-hover:decoration-wavy group-hover:decoration-pink-400 group-hover:decoration-1"
                >
                    {{ props.text }}
                </p>
            </MagneticLink>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import MagneticLink from './magnetic-link.vue'

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
