<template>
    <div
        class="flex flex-row items-center justify-between w-full px-4 py-8 mx-auto lg:max-w-screen-xl"
    >
        <NuxtLink to="/" aria-label="Clickable logo to go to the homepage">
            <GlobalLogo :width="64" :height="64" />
        </NuxtLink>
        <div class="flex flex-row items-center justify-between gap-2 xs:gap-4">
            <nav v-for="link in navLinks" :key="link.to">
                <NavElement :to="link.to" :text="link.text" />
            </nav>
            <DarkModeToggle />
        </div>
    </div>
</template>

<script lang="ts" setup>
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
