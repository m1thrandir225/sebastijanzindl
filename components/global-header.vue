<template>
    <div class="flex flex-row items-center justify-between w-full px-4 py-8">
        <NuxtLink to="/">
            <GlobalLogo :width="64" :height="64" :theme="preference" />
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
const colorMode = useColorMode()

const preference = computed(() =>
    colorMode.preference === 'dark' ? 'dark' : 'light',
)

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
