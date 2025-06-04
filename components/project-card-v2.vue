<template>
    <Dialog>
        <DialogTrigger
            v-motion
            :initial="{
                opacity: 0,
                scale: 0,
            }"
            :visible-once="{
                opacity: 100,
                scale: 1,
                transition: {
                    delay: index < 7 ? 400 + 75 * index : 250 + 15 * index,
                },
            }"
            class="w-full flex flex-row items-center justify-between p-6 dark:outline-neutral-700 rounded-xl group hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all ease-in-out duration-300 cursor-pointer"
        >
            <h1
                class="font-array text-left font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#fbbf23] transition-all ease-in-out duration-300 group-hover:dark:text-[#fbbf23] group-hover:underline group-hover:decoration-wavy group-hover:decoration-pink-400"
            >
                {{ project.title }}
            </h1>
            <LucideIcon
                name="ArrowRight"
                class="rotate-180 group-hover:rotate-0 transition-all ease-in-out duration-300 group-hover:text-[#fbbf23] group-hover:scale-125"
                :size="24"
            />
        </DialogTrigger>
        <DialogContent
            class="max-w-[90%] sm:max-w-[65%] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"
        >
            <SanityImage
                v-motion
                :initial="{
                    opacity: 0,
                    scale: 0,
                }"
                :enter="{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        delay: 250,
                    },
                }"
                :image="project.image"
                :asset-id="project.image.asset._ref"
                auto="format"
                class="rounded-t-lg"
            />
            <DialogHeader
                class="p-6 md:pb-0 flex h-full flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0"
            >
                <div class="flex flex-col items-start gap-2">
                    <DialogTitle
                        v-motion
                        class="font-titan tracking-wide"
                        :initial="{
                            opacity: 0,
                            y: -50,
                        }"
                        :enter="{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 300,
                            },
                        }"
                        >{{ project.title }}</DialogTitle
                    >
                    <DialogDescription
                        v-motion
                        class="text-left font-array"
                        :initial="{
                            opacity: 0,
                            y: 50,
                        }"
                        :enter="{
                            opacity: 1,
                            y: 0,
                            transition: {
                                delay: 350,
                            },
                        }"
                        >{{ project.shortDescription }}</DialogDescription
                    >
                </div>
                <div class="flex flex-row items-center gap-4">
                    <NuxtLink
                        v-if="project.githubLink"
                        v-motion
                        :initial="{
                            opacity: 0,
                            x: -5,
                        }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 400,
                            },
                        }"
                        :href="project.githubLink"
                        target="_blank"
                        class="text-neutral-900 dark:text-neutral-100 hover:text-[#fbbf23] transition-all ease-in-out duration-300"
                    >
                        <LucideIcon name="Github" :size="24" />
                    </NuxtLink>

                    <NuxtLink
                        v-if="project.productionLink"
                        v-motion
                        :href="project.productionLink"
                        :initial="{
                            opacity: 0,
                            x: 5,
                        }"
                        :enter="{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 450,
                            },
                        }"
                        target="_blank"
                        class="text-neutral-900 dark:text-neutral-100 hover:text-[#fbbf23] transition-all ease-in-out duration-300"
                    >
                        <LucideIcon name="Link" :size="24" />
                    </NuxtLink>
                </div>
            </DialogHeader>
            <div
                class="p-6 flex flex-col items-start h-full overflow-y-auto max-h-[180px] md:max-h-fit"
            >
                <h1
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -25,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 500,
                        },
                    }"
                    class="text-lg font-bold dark:text-neutral-200 text-neutral-800 font-array"
                >
                    Overview:
                </h1>
                <div
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: 25,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 550,
                        },
                    }"
                    class="max-h-[150px] md:max-h-fit"
                >
                    <SanityContent :blocks="project.description" />
                </div>
            </div>
            <DialogFooter
                class="w-full p-4 sm:p-6 flex !flex-col items-start gap-2"
            >
                <h1
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -50,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 600,
                        },
                    }"
                    class="text-lg font-bold dark:text-neutral-200 text-neutral-800 font-array"
                >
                    Built with:
                </h1>
                <div
                    class="w-full grid grid-cols-4 md:flex flex-row items-center flex-wrap gap-2 md:gap-8"
                >
                    <VTooltip
                        v-for="(item, indexP) in project.techStack"
                        :key="indexP"
                        v-motion
                        :initial="{
                            opacity: 0,
                            scale: 0,
                        }"
                        :enter="{
                            opacity: 100,
                            scale: 1,
                            transition: {
                                delay: 650 + 75 * indexP,
                            },
                        }"
                        :triggers="isMobile ? ['click'] : ['hover']"
                    >
                        <template #popper>
                            <span class="font-array">{{ item.hoverText }}</span>
                        </template>
                        <div
                            class="relative z-[150] p-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 flex flex-row items-center justify-center"
                        >
                            <SanityImage
                                v-if="isDark"
                                auto="format"
                                :image="item.lightImage"
                                :asset-id="item.lightImage.asset._ref"
                                w="32"
                                h="32"
                                class="self-center w-8 h-8 md:w-10 md:h-10 rounded-md"
                                :alt="item.lightImage.alt"
                            />
                            <SanityImage
                                v-else
                                class="self-center w-8 h-8 md:w-10 md:h-10 rounded-md"
                                auto="format"
                                w="32"
                                h="32"
                                :image="item.darkImage"
                                :asset-id="item.darkImage.asset._ref"
                            />
                        </div>
                    </VTooltip>
                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import {
    DialogTitle,
    DialogContent,
    DialogTrigger,
    Dialog,
    DialogHeader,
    DialogFooter,
} from '@/components/ui/dialog'
import LucideIcon from '@/components/lucide-icon.vue'
import type { Project } from '~/types/content/project'
import { useDark } from '@vueuse/core'

defineProps<{
    project: Project
    index: number
}>()

const isDark = useDark()

const { isMobile } = useDevice()
</script>
