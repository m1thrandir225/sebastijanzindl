<template>
    <div class="flex flex-row items-center justify-between w-full px-4 py-8">
        <NuxtLink to="/">
            <GlobalLogo
                :width="64"
                :height="64"
                :theme="isDark ? 'dark' : 'light'"
            />
        </NuxtLink>
        <div class="flex flex-row items-center justify-between gap-4">
            <nav v-for="link in navLinks" :key="link.to">
                <NavElement :to="link.to" :text="link.text" />
            </nav>
            <DarkModeToggle />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const isDark = useDark()

const navLinks = [
    {
        to: '/projects',
        text: 'Projects',
    },
    {
        to: '/blog/',
        text: 'Blog',
    },
]
</script>

<style></style>
