<template>
    <div
        class="flex items-center justify-center p-2 transition-colors duration-200 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
        <button
            :size="24"
            color="blue"
            class="text-white"
            @click="toggleTheme()"
        >
            <LucideIcon v-if="!isDark" name="Moon" :size="24" color="black" />
            <LucideIcon v-if="isDark" name="Sun" :size="24" color="white" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import LucideIcon from './lucide-icon.vue'

const isDark = useDark()

const toggleTheme = useToggle(isDark)
</script>
