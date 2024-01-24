<template>
    <div
        class="flex items-center justify-center p-2 transition-colors duration-200 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <button v-show="colorMode.preference === 'dark'" :size="24" color="blue" class="text-white" @click="toggleTheme">
            <LucideIcon name="Sun" :size="24" color="white" />
        </button>

        <button v-show="colorMode.preference === 'light'" :size="24" color="blue" @click="toggleTheme">
            <LucideIcon name="Moon" :size="24" color="black" />
        </button>
    </div>
</template>

<script setup lang="ts">
import LucideIcon from './lucide-icon.vue'

const colorMode = useColorMode()
const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>
