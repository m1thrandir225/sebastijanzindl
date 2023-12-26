<template>
    <div
        class="w-full h-full min-h-screen overflow-hidden lg:overflow-auto lg:h-screen bg-neutral-100 dark:bg-neutral-900"
    >
        <div class="container relative h-full max-h-[80%] mx-auto">
            <GlobalHeader />
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
