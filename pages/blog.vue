<template>
    <div>
        <p v-for="post in posts" :key="post.slug">
            {{ post.title }}
            {{ post.slug }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post'

const query = groq`*[_type == "post"]`

const { data: posts } = useSanityQuery<Post[]>(query)
</script>

<style></style>
