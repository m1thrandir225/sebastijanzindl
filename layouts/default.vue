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

<script lang="ts" setup>
const INACTIVE_TITLE = '👀 Hey! Comeback please.'
const isInactive = ref(false)
const originalTitle = ref<string>('')

function overrideTitle() {
    if (isInactive.value) {
        document.title = INACTIVE_TITLE
    } else {
        document.title = originalTitle.value
    }
}

function handleVisibilityChange() {
    if (document.hidden) {
        originalTitle.value = document.title
        isInactive.value = true
    } else {
        isInactive.value = false
    }

    overrideTitle()
}

onMounted(() => {
    originalTitle.value = document.title
    document.addEventListener('visibilitychange', handleVisibilityChange)
})

onUnmounted(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>
