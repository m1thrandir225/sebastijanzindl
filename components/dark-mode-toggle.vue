<template>
    <div
        class="group flex items-center justify-center p-2 transition-colors duration-200 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800"
    >
        <UseDark v-slot="{ isDark, toggleDark }">
            <button name="dark-mode-toggle" @click="toggleDark()">
                <LucideIcon
                    v-if="!isDark"
                    v-motion
                    name="Moon"
                    :size="24"
                    color="black"
                    class="group-hover:scale-105 transition-all ease-in-out duration-100"
                    :initial="{
                        opacity: 0,
                        rotate: -45,
                        transition: {
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                            mass: 0.5,
                        },
                    }"
                    :enter="{
                        opacity: 1,
                        rotate: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                            mass: 0.5,
                        },
                    }"
                    :tapped="{
                        opacity: 0,
                        rotate: 45,
                        transition: {
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                            mass: 0.5,
                        },
                    }"
                />
                <LucideIcon
                    v-if="isDark"
                    v-motion
                    name="Sun"
                    :size="24"
                    color="white"
                    class="group-hover:scale-105 transition-all ease-in-out duration-100"
                    :initial="{
                        opacity: 0,
                        rotate: -45,
                        transition: {
                            type: 'spring',
                            stiffness: 550,
                            damping: 25,
                            mass: 0.5,
                        },
                    }"
                    :enter="{
                        opacity: 1,
                        rotate: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                            mass: 0.5,
                        },
                    }"
                    :tapped="{
                        opacity: 0,
                        rotate: 45,
                        transition: {
                            type: 'spring',
                            stiffness: 250,
                            damping: 25,
                            mass: 0.5,
                        },
                    }"
                />
            </button>
        </UseDark>
    </div>
</template>

<script setup lang="ts">
import { UseDark } from '@vueuse/components'
</script>
