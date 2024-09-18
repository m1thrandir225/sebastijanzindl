<script lang="ts" setup>
import LucideIcon from '~/components/lucide-icon.vue'
import type { HomePageProperties } from '~/types/pages/homePage'
import { useDark } from '@vueuse/core'

const pageQuery = groq`*[_type == 'homePage'][0] {
  ...,
  favouriteToolsSection {
    ...,
    tools[] -> {
      ...,
      tool->
    }
  }
}
`

const isDark = useDark()
const { data: homePage, status: pageStatus } =
    useSanityQuery<HomePageProperties>(pageQuery)

useServerSeoMeta({
    title: homePage.value?.seo.pageTitle ?? 'Sebastijan Zindl',
    ogTitle: homePage.value?.seo.pageTitle ?? 'Sebastijan Zindl',
    description: homePage.value?.seo.metaDescription ?? '',
    ogType: 'website',
    ogUrl: 'https://sebastijanzindl.me',
    ogDescription: homePage.value?.seo.metaDescription ?? '',
})
</script>

<template>
    <div
        v-if="(pageStatus == 'success' || pageStatus == 'idle') && homePage"
        class="grid grid-cols-1 lg:grid-cols-3 w-full h-full gap-8 py-4 lg:gap-4"
    >
        <div
            v-if="homePage.shortIntroSection"
            v-motion-slide-visible-top
            class="relative z-[150] max-w-[90%] md:max-w-full lg:col-span-2 w-full h-auto p-8 mx-auto transition-colors duration-200 ease-in-out border-2 dark:border-neutral-800 border-neutral-200 border-opacity-50 rounded-xl lg:max-w-screen-xl backdrop-blur-7xl bg-zinc-100/20 lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:bg-neutral-800/50"
        >
            <h1
                v-motion
                :initial="{
                    opacity: 0,
                    y: -50,
                }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0,
                    },
                }"
                class="font-sans text-3xl font-bold text-neutral-900 dark:text-neutral-100"
            >
                {{ homePage.shortIntroSection.title }}
            </h1>
            <div class="my-4">
                <p
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -50,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 200,
                        },
                    }"
                    class="italic text-md text-neutral-900 dark:text-neutral-100"
                >
                    {{ homePage.shortIntroSection.subtitle }}
                </p>
            </div>
            <div
                id="shortIntro"
                v-motion
                class="my-4 font-sans text-lg text-neutral-900 dark:text-neutral-100 shortIntro"
                :initial="{
                    opacity: 0,
                    y: -50,
                }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 400,
                    },
                }"
            >
                <SanityContent
                    :blocks="homePage.shortIntroSection.shortIntro"
                />
            </div>

            <div v-if="homePage.socialSection" class="my-4">
                <p
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -50,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 600,
                        },
                    }"
                    class="font-sans text-lg text-neutral-900 dark:text-neutral-100"
                >
                    {{ homePage.socialSection.title }}
                </p>
                <div
                    class="flex flex-col flex-wrap w-full gap-2 my-2 lg:flex-row"
                >
                    <NuxtLink
                        v-for="(link, index) in homePage.socialSection
                            ?.socialLinks"
                        :key="link._key"
                        v-motion
                        :to="link.url"
                        :initial="{
                            opacity: 0,
                            scale: 0,
                        }"
                        :enter="{
                            opacity: 100,
                            scale: 1,
                            transition: {
                                delay: 800 + 100 * index,
                            },
                        }"
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
            v-if="homePage.favouriteToolsSection"
            v-motion-slide-visible-top
            class="relative z-[150] max-w-[90%] md:max-w-full flex flex-col w-full h-auto gap-4 p-8 mx-auto transition-colors duration-200 ease-in-out border-2 dark:border-neutral-800 border-neutral-200 border-opacity-50 rounded-xl xl:max-w-screen-xl dark:bg-opacity-50 backdrop-blur-3xl bg-zinc-100/20 lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:bg-neutral-800/50"
        >
            <div class="flex flex-col items-start gap-2">
                <h1
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -50,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 1000,
                        },
                    }"
                    class="font-sans text-2xl font-bold text-neutral-900 dark:text-neutral-100"
                >
                    {{ homePage.favouriteToolsSection.title }}
                </h1>
                <p
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -50,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 1200,
                        },
                    }"
                    class="italic text-sm text-neutral-900 dark:text-neutral-100"
                >
                    {{ homePage.favouriteToolsSection.subtitle }}
                </p>
            </div>
            <div
                class="grid grid-cols-3 justify-center md:flex md:flex-row md:flex-wrap items-start gap-[12px] relative z-[150]"
            >
                <VTooltip
                    v-for="(tool, index) in homePage.favouriteToolsSection
                        .tools"
                    :key="index"
                    v-motion
                    :initial="{
                        opacity: 0,
                        scale: 0,
                    }"
                    :enter="{
                        opacity: 100,
                        scale: 1,
                        transition: {
                            delay: 1400 + 75 * index,
                        },
                    }"
                >
                    <template #popper>
                        {{ tool.title }}
                    </template>
                    <div
                        class="relative z-[150] p-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 flex flex-row items-center justify-center"
                    >
                        <SanityImage
                            v-if="isDark"
                            :image="tool.lightImage"
                            :asset-id="tool.lightImage.asset._ref"
                            class="self-center w-10 h-10 rounded-md"
                            :alt="tool.lightImage.alt"
                        />
                        <SanityImage
                            v-else
                            class="self-center w-10 h-10 rounded-md"
                            :image="tool.darkImage"
                            :asset-id="tool.darkImage.asset._ref"
                        />
                    </div>
                </VTooltip>
            </div>
        </div>

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
    </div>
    <div v-else-if="pageStatus == 'error'" class="">
        <h1>There was a problem loading the page.</h1>
    </div>
</template>

<style lang="css">
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

div.shortIntro p {
    margin: 12px 0px !important;
}
</style>
