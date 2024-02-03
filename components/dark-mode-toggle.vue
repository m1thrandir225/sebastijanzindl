<template>
    <div
        class="flex items-center justify-center p-2 transition-colors duration-200 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
        <UseDark v-slot="{ isDark, toggleDark }">
            <button @click="toggleDark()">
                <LucideIcon
                    v-if="!isDark"
                    name="Moon"
                    :size="24"
                    color="black"
                />

                <LucideIcon v-if="isDark" name="Sun" :size="24" color="white" />
            </button>
        </UseDark>
    </div>
</template>

<script setup lang="ts">
import { UseDark } from '@vueuse/components'
</script>
