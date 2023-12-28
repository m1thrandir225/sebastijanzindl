<template>
    <div v-if="status !== 'pending'">
        {{ post?.title }}
    </div>
    <div v-else-if="status === 'pending'">Loading...</div>
    <div v-else-if="status === 'error'">{{ error }}</div>
    <div v-else>Something went wrong</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Post } from '~/types/post'
const route = useRoute()

const query = groq`*[_type == "post" && slug.current == $slug][0]`

const {
    data: post,
    status,
    error,
} = useSanityQuery<Post>(query, {
    slug: route.params.slug,
})
</script>
