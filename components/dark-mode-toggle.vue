<template>
    <div
        class="group flex items-center justify-center p-2 transition-colors duration-200 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
        <UseDark v-slot="{ isDark, toggleDark }">
            <button @click="toggleDark()">
                <LucideIcon
                    v-if="!isDark"
                    name="Moon"
                    :size="24"
                    color="black"
                    class="group-hover:scale-105 transition-all ease-in-out duration-100"
                />
                <LucideIcon v-if="isDark" name="Sun" :size="24" color="white"  class="group-hover:scale-105 transition-all ease-in-out duration-100"/>
            </button>
        </UseDark>
    </div>
</template>

<script setup lang="ts">
import { UseDark } from '@vueuse/components'
</script>
