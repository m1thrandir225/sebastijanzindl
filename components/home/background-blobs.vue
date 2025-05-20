<script setup lang="ts"></script>

<template>
    <div
        class="hidden lg:block absolute z-40 top-[200px] left-[50%] bg-purple-300 dark:bg-purple-400/50 rounded-full w-96 h-96 mix-blend-hue dark:mix-blend-soft-light blur-3xl filter animate-zoom-left animation-delay-5000"
    />

    <div
        class="hidden lg:block absolute z-40 top-[100px] left-[34%] bg-blue-300 dark:bg-blue-400/50 rounded-full w-72 h-72 mix-blend-hue dark:mix-blend-soft-light blur-3xl filter animate-zoom-left"
    />

    <div
        class="hidden lg:block absolute z-40 bottom-[50px] right-[25%] bg-orange-300 dark:bg-orange-400/50 rounded-full w-96 h-96 mix-blend-hue dark:mix-blend-soft-light blur-3xl filter animate-zoom-right animation-delay-4000"
    />

    <div
        class="hidden lg:block absolute z-40 bottom-[100px] right-[50%] bg-pink-300 dark:bg-pink-400/50 rounded-full w-64 h-64 mix-blend-hue dark:mix-blend-soft-light blur-3xl filter animate-zoom-right animation-delay-2000"
    />

    <div
        v-motion-fade-visible-once
        class="block lg:hidden absolute z-40 top-[200px] left-[50%] bg-purple-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
    />

    <div
        v-motion-fade-visible-once
        class="block lg:hidden absolute z-40 top-[100px] left-[34%] bg-blue-400/50 rounded-full w-72 h-72 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
    />

    <div
        v-motion-fade-visible-once
        class="block lg:hidden absolute z-40 bottom-[50px] right-[25%] bg-orange-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
    />

    <div
        v-motion-fade-visible-once
        class="block lg:hidden absolute z-40 bottom-[100px] right-[50%] bg-pink-400/50 rounded-full w-64 h-64 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
    />
</template>

<style scoped lang="css"></style>
