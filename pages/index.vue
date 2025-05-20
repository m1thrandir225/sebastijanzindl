<script lang="ts" setup>
import type { HomePageProperties } from '~/types/pages/homePage'

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
            <HomeShortIntro :section="homePage.shortIntroSection" />

            <div v-if="homePage.socialSection" class="my-4">
                <HomeSocialLinks :section="homePage.socialSection" />
            </div>

            <HomeBackgroundBlobs />
        </div>
        <div class="col-span-1 flex items-center justify-center">
            <SanityImage
                class="w-72 h-72 rounded-full object-cover border-2 border-neutral-200"
                :image="homePage.shortIntroSection.avatar"
                :asset-id="homePage.shortIntroSection.avatar.asset._ref"
            />
        </div>
        <div
            v-if="homePage.favouriteToolsSection"
            v-motion-slide-visible-top
            class="relative z-[150] max-w-[90%] md:max-w-full flex flex-col w-full h-auto gap-4 p-8 mx-auto transition-colors duration-200 ease-in-out border-2 dark:border-neutral-800 border-neutral-200 border-opacity-50 rounded-xl xl:max-w-screen-xl dark:bg-opacity-50 backdrop-blur-3xl bg-zinc-100/20 lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:bg-neutral-800/50"
        >
            <HomeFavouriteTools :section="homePage.favouriteToolsSection" />
        </div>
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
