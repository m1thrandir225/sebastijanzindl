<template>
    <div
        class="relative z-50 w-full h-full p-8 mx-auto transition-colors duration-200 ease-in-out border-2 border-transparent border-opacity-50 rounded-lg lg:max-w-screen-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-100 hover:border-neutral-200 dark:hover:border-neutral-700 dark:bg-neutral-800"
    >
        <h1
            class="font-sans text-3xl font-bold text-neutral-900 dark:text-neutral-100"
        >
            Sebastijan Zindl
        </h1>
        <div class="my-4">
            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                Hi, I am Sebastijan Zindl, a software engineer
                <span
                    class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 hover:decoration-orange-400"
                    :class="{
                        'decoration-neutral-500': !showInProgress,
                        'decoration-green-400': showInProgress,
                    }"
                    @click="toggle"
                    >{{ inProgressValue }}</span
                >.
            </p>
        </div>

        <div class="my-4">
            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                I am currently working at:
                <NuxtLink
                    class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 hover:decoration-pink-400"
                    to="https://piksel.mk"
                    target="_blank"
                    >Piksel</NuxtLink
                >
            </p>
            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                Currently learning:
                <span
                    class="mr-2 underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 hover:decoration-green-400"
                    >Swift,</span
                >
                <span
                    class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 hover:decoration-green-400"
                    >Go</span
                >
            </p>

            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                Curently side project:
                <NuxtLink
                    class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 hover:decoration-purple-400"
                    to="https://github.com/m1thrandir225/AoC2023"
                    target="_blank"
                    >Advent of Code 2023
                </NuxtLink>
            </p>
        </div>

        <div class="my-4">
            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                I am a software engineer with a passion for building things.
                Currently, I am working at Piksel as a full-stack developer. I
                am also a student at the Faculty of Computer Science and
                Engineering in Skopje, Macedonia.
            </p>
        </div>
        <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
            Beyond my programming pursuits, I find joy in the realms of video
            games, anime, philosophy, and history. Additionally, I channel my
            passion into collecting mechanical keyboards and proudly declare
            myself a devoted Gandalf enthusiast.
        </p>

        <div class="my-4">
            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                Find me on:
            </p>
            <div class="flex flex-row flex-wrap w-full gap-2 my-2">
                <NuxtLink
                    to="https://github.com/m1thrandir225"
                    target="_blank"
                    class="flex flex-row items-center gap-2 group text-neutral-900 dark:text-neutral-100"
                >
                    <LucideIcon
                        name="Github"
                        class="text-neutral-900 dark:text-neutral-100"
                        :size="24"
                    />
                    <span
                        class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 group-hover:decoration-blue-400"
                        >Github</span
                    >
                </NuxtLink>
            </div>
        </div>

        <div class="my-4">
            <p class="text-sm text-neutral-600">
                2023 - PRESENT © Sebastijan Zindl
            </p>
        </div>

        <div
            class="absolute top-[200px] left-[50%] bg-purple-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-left animation-delay-5000"
        />

        <!-- <div
            class="absolute top-[100px] left-[50%] bg-green-400/50 rounded-full w-64 h-64 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-left"
        /> -->

        <div
            class="absolute top-[100px] left-[34%] bg-blue-400/50 rounded-full w-72 h-72 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-left"
        />

        <div
            class="absolute bottom-[50px] right-[25%] bg-orange-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-right animation-delay-4000"
        />

        <div
            class="absolute bottom-[100px] right-[50%] bg-pink-400/50 rounded-full w-64 h-64 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-right animation-delay-2000"
        />
    </div>
</template>

<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'

const showInProgress = ref(false)

const toggle = () => {
    showInProgress.value = !showInProgress.value
}

const inProgressValue = computed(() => {
    return !showInProgress.value ? '(in progress)' : '(still in school 😕)'
})
</script>

<style scoped lang="css">
.animate-zoom-left {
    animation: subtleZoomLeft 7s infinite;
}

.animate-zoom-right {
    animation: subtleZoomRight 8s ease-in-out infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-3000 {
    animation-delay: 3s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

.animation-delay-5000 {
    animation-delay: 5s;
}
@keyframes subtleZoomLeft {
    0% {
        transform: translateY(0px) scale(1);
    }
    33% {
        transform: translateY(50px) scale(1.1);
    }
    66% {
        transform: translateY(124px) scale(0.95);
    }
    100% {
        transform: translateY(0px) scale(1);
    }
}

@keyframes subtleZoomRight {
    0% {
        transform: translateY(0px) scale(1);
    }
    33% {
        transform: translateY(-90px) scale(1.2);
    }
    66% {
        transform: translateY(-136px) scale(0.95);
    }
    100% {
        transform: translateY(0px) scale(1);
    }
}
</style>
