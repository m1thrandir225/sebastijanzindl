<template>
    <nav
        class="flex flex-row items-center justify-between w-full px-4 py-8 mx-auto lg:px-0"
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
    </nav>
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
