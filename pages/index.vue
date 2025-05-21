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
        class="flex w-full flex-col items-start gap-12"
    >
        <HomeShortIntro
            v-if="homePage.shortIntroSection && homePage.socialSection"
            :intro-section="homePage.shortIntroSection"
            :social-section="homePage.socialSection"
        />

        <div
            v-if="homePage.favouriteToolsSection"
            v-motion-slide-visible-top
            class="relative z-[150] max-w-[90%] md:max-w-full flex flex-col w-full h-auto gap-4 p-8 mx-auto transition-colors duration-200 ease-in-out border-2 dark:border-neutral-800 border-neutral-200 border-opacity-50 rounded-xl dark:bg-opacity-50 backdrop-blur-3xl bg-zinc-100/20 lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:bg-neutral-800/50"
        >
            <HomeFavouriteTools :section="homePage.favouriteToolsSection" />
        </div>
    </div>
    <div v-else-if="pageStatus == 'error'" class="">
        <h1>There was a problem loading the page.</h1>
    </div>
</template>

<style lang="css">
div.shortIntro p {
    margin: 12px 0px !important;
}
</style>
