<template>
    <div class="flex flex-col w-full h-full gap-8 py-4 lg:gap-4">
        <div
            class="relative z-[150] w-full h-auto p-8 mx-auto transition-colors duration-200 ease-in-out border-2 border-transparent border-opacity-50 lg:rounded-lg lg:max-w-screen-xl bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-100/50 lg:bg-neutral-100 lg:hover:border-neutral-200 lg:dark:hover:border-neutral-700 dark:bg-neutral-800"
        >
            <h1
                class="font-sans text-3xl font-bold text-neutral-900 dark:text-neutral-100"
            >
                Sebastijan Zindl
            </h1>
            <div class="my-4">
                <p
                    class="font-sans text-lg text-neutral-900 dark:text-neutral-100"
                >
                    Hi, I am Sebastijan Zindl, a software engineer
                    <span
                        class="underline relative z-[100] transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 hover:decoration-orange-400"
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
                <p
                    class="font-sans text-lg text-neutral-900 dark:text-neutral-100 relative z-[80]"
                >
                    Currently learning:
                    <span
                        v-for="learning in customPropertiesHome?.currentlyLearning"
                        :key="learning"
                        class="mr-2 underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 hover:decoration-green-400"
                        >{{ learning }}</span
                    >
                </p>

                <p
                    class="font-sans text-lg text-neutral-900 dark:text-neutral-100 relative z-[80]"
                >
                    Current side project:
                    <NuxtLink
                        v-for="workingOn in customPropertiesHome?.currentlyWorkingOn"
                        :key="workingOn._key"
                        :to="workingOn.currentlyWorkingOnItemLink"
                        target="_blank"
                        class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 hover:decoration-pink-400"
                    >
                        {{ workingOn.currentlyWorkingOnItem }}</NuxtLink
                    >
                </p>
            </div>

            <div class="my-4">
                <p
                    class="font-sans text-lg text-neutral-900 dark:text-neutral-100"
                >
                    {{ customPropertiesHome?.aboutMeParagraph }}
                </p>
            </div>
            <p class="font-sans text-lg text-neutral-900 dark:text-neutral-100">
                {{ customPropertiesHome?.hobbiesParagraph }}
            </p>

            <div class="my-4">
                <p
                    class="font-sans text-lg text-neutral-900 dark:text-neutral-100"
                >
                    Find me on:
                </p>
                <div
                    class="flex flex-col flex-wrap w-full gap-2 my-2 lg:flex-row"
                >
                    <NuxtLink
                        v-for="link in customPropertiesHome?.socialLinks"
                        :key="link._key"
                        :to="link.url"
                        target="_blank"
                        class="flex flex-row items-center gap-2 group text-neutral-900 dark:text-neutral-100"
                    >
                        <LucideIcon
                            :name="link.lucideIcon"
                            class="text-neutral-900 dark:text-neutral-100"
                            :size="24"
                        />
                        <span
                            class="underline transition-all duration-150 ease-in-out cursor-pointer decoration-wavy decoration-1 decoration-neutral-500 group-hover:decoration-blue-400"
                            >{{ link.title }}</span
                        >
                    </NuxtLink>
                </div>
            </div>

            <div
                class="hidden lg:block absolute z-40 top-[200px] left-[50%] bg-purple-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-left animation-delay-5000"
            />

            <div
                class="hidden lg:block absolute z-40 top-[100px] left-[34%] bg-blue-400/50 rounded-full w-72 h-72 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-left"
            />

            <div
                class="hidden lg:block absolute z-40 bottom-[50px] right-[25%] bg-orange-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-right animation-delay-4000"
            />

            <div
                class="hidden lg:block absolute z-40 bottom-[100px] right-[50%] bg-pink-400/50 rounded-full w-64 h-64 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter animate-zoom-right animation-delay-2000"
            />
        </div>
        <div
            class="relative z-[150] flex flex-col w-full h-auto gap-4 p-8 mx-auto transition-colors duration-200 ease-in-out border-2 border-transparent border-opacity-50 lg:rounded-lg lg:max-w-screen-xl bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-transparent lg:hover:border-neutral-200 lg:dark:hover:border-neutral-700 lg:dark:bg-neutral-800/20 dark:bg-neutral-800"
        >
            <h1
                class="font-sans text-2xl font-bold text-neutral-900 dark:text-neutral-100"
            >
                Favorite tools:
            </h1>
            <div
                class="grid grid-cols-3 justify-center md:flex md:flex-row md:flex-wrap items-start gap-2 relative z-[150]"
            >
                <VTooltip
                    v-for="tool in customPropertiesHome?.using"
                    :key="tool._key"
                >
                    <template #popper>
                        {{ tool.name }}
                    </template>
                    <div
                        class="relative z-[150] p-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 flex flex-row items-center justify-center"
                    >
                        <SanityImage
                            :image="tool.logo"
                            :asset-id="tool.logo.asset._ref as string"
                            class="self-center w-10 h-10"
                            alt="tool.name"
                        />
                    </div>
                </VTooltip>
            </div>
        </div>

        <div
            class="block lg:hidden absolute z-40 top-[200px] left-[50%] bg-purple-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
        />

        <div
            class="block lg:hidden absolute z-40 top-[100px] left-[34%] bg-blue-400/50 rounded-full w-72 h-72 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
        />

        <div
            class="block lg:hidden absolute z-40 bottom-[50px] right-[25%] bg-orange-400/50 rounded-full w-96 h-96 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
        />

        <div
            class="block lg:hidden absolute z-40 bottom-[100px] right-[50%] bg-pink-400/50 rounded-full w-64 h-64 mix-blend-multiply dark:mix-blend-soft-light blur-3xl filter"
        />
    </div>
</template>

<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'
import type { CustomPropertiesHome } from '~/types/customPropertiesHome'

const query = groq`*[_type == "home"][0]`

const { data: customPropertiesHome } =
    useSanityQuery<CustomPropertiesHome>(query)

useHead({
    title: 'Sebastijan Zindl',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: "Sebastijan Zindl's den",
        },
    ],
})

useSeoMeta({
    title: 'Sebastijan Zindl',
    description: 'Engineer in progress',
    ogSiteName: 'Sebastijan Zindl',
    ogTitle: 'Sebastijan Zindl',
    ogDescription: 'Engineer in progress',
    ogImage:
        'https://media.licdn.com/dms/image/C4D03AQErid4ScMfwFA/profile-displayphoto-shrink_200_200/0/1663787571765?e=1712188800&v=beta&t=-UkF775zenXbBcEJWgityd5G6i1VOU-B4_h1eZ9Z-I4',
    ogUrl: 'https://sebastijanzindl.me',
})

const showInProgress = ref(false)

const toggle = () => {
    showInProgress.value = !showInProgress.value
}

const inProgressValue = computed(() => {
    return !showInProgress.value ? '(in progress)' : '(still in school 😕)'
})
</script>

<style scoped lang="css">
@media only screen and (min-width: 768px) {
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
}
</style>
