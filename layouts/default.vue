<template>
    <div
        class="w-full h-full min-h-screen overflow-hidden lg:overflow-auto lg:h-screen bg-neutral-100 dark:bg-neutral-900 no-scrollbar"
    >
        <div class="container relative mx-auto">
            <GlobalHeader />
            <slot />
            <GlobalFooter />
        </div>
    </div>
</template>

<script lang="ts" setup></script>
