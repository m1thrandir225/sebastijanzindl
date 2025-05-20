<template>
    <Dialog>
        <DialogTrigger
            class="w-full flex flex-row items-center justify-between p-6 border-2 dark:border-neutral-700 rounded-xl group hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all ease-in-out duration-300 cursor-pointer"
        >
            <h1
                class="font-sans font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#fbbf23] transition-all ease-in-out duration-300 group-hover:dark:text-[#fbbf23]"
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
                :image="project.image"
                :asset-id="project.image.asset._ref"
                class="rounded-t-lg"
            />
            <DialogHeader
                class="p-6 md:pb-0 flex h-full flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0"
            >
                <div class="flex flex-col items-start gap-2">
                    <DialogTitle>{{ project.title }}</DialogTitle>
                    <DialogDescription class="text-left">{{
                        project.shortDescription
                    }}</DialogDescription>
                </div>
                <div class="flex flex-row items-center gap-4">
                    <NuxtLink
                        v-if="project.githubLink"
                        :href="project.githubLink"
                        target="_blank"
                        class="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                        <LucideIcon name="Github" :size="24" />
                    </NuxtLink>

                    <NuxtLink
                        v-if="project.productionLink"
                        :href="project.productionLink"
                        target="_blank"
                        class="text-neutral-900 dark:text-neutral-100 hover:text-neutral-700 dark:hover:text-neutral-300"
                    >
                        <LucideIcon name="Link" :size="24" />
                    </NuxtLink>
                </div>
            </DialogHeader>
            <div
                class="p-6 flex flex-col items-start h-full overflow-y-auto max-h-[180px] md:max-h-fit"
            >
                <h1
                    class="text-lg font-bold dark:text-neutral-200 text-neutral-800"
                >
                    Overview:
                </h1>
                <div class="max-h-[150px] md:max-h-fit">
                    <SanityContent :blocks="project.description" />
                </div>
            </div>
            <DialogFooter
                class="w-full p-4 sm:p-6 flex !flex-col items-start gap-2"
            >
                <h1
                    class="text-lg font-bold dark:text-neutral-200 text-neutral-800"
                >
                    Built with:
                </h1>
                <div
                    class="w-full grid grid-cols-4 md:flex flex-row items-center flex-wrap gap-2 md:gap-8"
                >
                    <VTooltip
                        v-for="(item, index) in project.techStack"
                        :key="index"
                        :triggers="isMobile ? ['click'] : ['hover']"
                    >
                        <template #popper>
                            {{ item.hoverText }}
                        </template>
                        <div
                            class="relative z-[150] p-2 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-lg hover:dark:bg-neutral-100/20 hover:dark:border-neutral-200/50 hover:border-neutral-800/50 hover:bg-neutral-600/20 flex flex-row items-center justify-center"
                        >
                            <SanityImage
                                v-if="isDark"
                                :image="item.lightImage"
                                :asset-id="item.lightImage.asset._ref"
                                class="self-center w-8 h-8 md:w-10 md:h-10 rounded-md"
                                :alt="item.lightImage.alt"
                            />
                            <SanityImage
                                v-else
                                class="self-center w-8 h-8 md:w-10 md:h-10 rounded-md"
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
}>()

const isDark = useDark()

const { isMobile } = useDevice()
</script>
