<script setup lang="ts">
import type { CustomImageSanity } from '~/types/components/custom-image'
import Autoplay from 'embla-carousel-autoplay'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '~/components/ui/carousel'
defineProps<{
    images: CustomImageSanity[]
    onHover: () => void
    onHoverLeave: () => void
}>()
</script>

<template>
    <div
        v-motion
        class="col-span-1 flex items-center justify-center z-10 md:px-0 w-auto h-full"
        :initial="{
            opacity: 0,
            y: -50,
        }"
        :enter="{
            opacity: 1,
            y: 0,
            transition: {
                delay: 800,
            },
        }"
    >
        <Carousel
            :opts="{ align: 'center' }"
            :plugins="[Autoplay({ delay: 10000 })]"
        >
            <CarouselContent class="w-80 h-80 md:w-full md:h-full">
                <CarouselItem
                    v-for="(item, index) in images"
                    :key="item.asset._ref"
                    class="basis-full rounded-xl object-cover"
                >
                    <SanityImage
                        class="w-full h-full rounded-xl object-cover border-4 dark:border-neutral-800 border-neutral-200 border-opacity-50 lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:bg-neutral-800/50 transition-all ease-in-out duration-300"
                        :image="item"
                        auto="format"
                        q="100"
                        w="640"
                        h="640"
                        :alt="`carousel-item-${index}`"
                        :asset-id="item.asset._ref"
                        @mouseenter="onHover"
                        @mouseleave="onHoverLeave"
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    </div>
</template>
