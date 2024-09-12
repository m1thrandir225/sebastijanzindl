<template>
    <div v-if="pageStatus == 'success' && blogPage" class="flex flex-col items-start justify-start w-full h-full max-w-screen-xl gap-2 mx-auto">
        <div class="flex flex-col items-start justify-start gap-2 p-4 md:p-0">
            <h1 class="font-sans text-3xl font-bold dark:text-neutral-100 text-neutral-800">
                {{blogPage.title}}
            </h1>
            <p class="font-sans text-lg font-medium dark:text-neutral-100 text-neutral-800">
              {{blogPage.subtitle}}
            </p>
        </div>
        <div
            class="gap-4 flex flex-col justify-start w-full h-full p-8 mx-auto transition-colors duration-200 ease-in-out lg:rounded-lg bg-opacity-80 dark:bg-opacity-50 backdrop-blur-3xl bg-neutral-200 dark:bg-neutral-800 overflow-y-auto md:max-h-[90%] hover:scrollbar-thumb-neutral-900 active:scrollbar-thumb-neutral-900 scrollbar scrollbar-thumb-neutral-900 scrollbar-track-neutral-400/20 dark:scrollbar-thumb-neutral-100 dark:active:scrollbar-thumb-neutral-100 dark:scrollbar dark:scrollbar-track-neutral-700/20">
            <PostCard v-for="post in posts" :key="post.slug.current" :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/content/post'
import type { BlogPageProperties } from '~/types/pages/blogPage'

const query = groq`*[_type == "post"]`
const pageQuery = groq`*[_type == "blogPage"][0]`

const { data: posts } = useSanityQuery<Post[]>(query)
const { data: blogPage, status: pageStatus } = useSanityQuery<BlogPageProperties>(pageQuery)

useServerSeoMeta({
      title: blogPage.value?.seo.pageTitle ?? "Sebastijan Zindl | Blog",
      description: blogPage.value?.seo.metaDescription ?? "",
      ogTitle: blogPage.value?.seo.pageTitle ?? "Sebastijan Zindl | Blog",
      ogType: "website",
      ogUrl: "https://sebastijanzindl.me/blog"
})

</script>
