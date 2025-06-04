<script setup lang="ts">
import type {
    HomeShortIntroSection,
    HomeSocialSection,
} from '~/types/pages/homePage'

defineProps<{
    introSection: HomeShortIntroSection
    socialSection: HomeSocialSection
}>()

const avatarIsHovered = ref<boolean>(false)

const hoverAvatar = () => {
    console.log('hello')
    avatarIsHovered.value = true
}

const hoverAvatarLeave = () => {
    console.log('helloo')
    avatarIsHovered.value = false
}
</script>

<template>
    <div
        class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 w-full h-full gap-6 py-4 lg:gap-0"
    >
        <div
            v-motion-slide-visible-top
            class="relative z-[150] max-w-[90%] md:max-w-full lg:col-span-2 w-full h-auto p-8 mx-auto transition-colors duration-200 ease-in-out border-2 dark:border-neutral-800 border-neutral-200 border-opacity-50 rounded-xl lg:max-w-screen-xl backdrop-blur-7xl bg-zinc-100/20 lg:hover:border-neutral-300 lg:dark:hover:border-neutral-700 dark:bg-neutral-800/50"
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
                        delay: 0,
                    },
                }"
                :class="{ '!text-amber-400 tracking-wide': avatarIsHovered }"
                class="font-titan relative z-[150] text-3xl transition-all ease-in-out duration-300 text-neutral-900 dark:text-neutral-100"
            >
                {{ introSection.title }}
            </h1>
            <div class="my-4">
                <p
                    v-motion
                    :initial="{
                        opacity: 0,
                        y: -50,
                    }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 200,
                        },
                    }"
                    class="italic font-array text-md text-neutral-900 dark:text-neutral-100"
                >
                    {{ introSection.subtitle }}
                </p>
            </div>
            <div
                id="shortIntro"
                v-motion
                class="relative z-[150] my-4 font-sans text-lg text-neutral-900 dark:text-neutral-100 shortIntro"
                :initial="{
                    opacity: 0,
                    y: -50,
                }"
                :enter="{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 400,
                    },
                }"
            >
                <SanityContent :blocks="introSection.shortIntro" />
            </div>
            <HomeSocialLinks :section="socialSection" />
            <HomeBackgroundBlobs />
        </div>

        <HomePersonalAvatar
            :images="introSection.imageShowcase"
            @hover="hoverAvatar"
            @hover-leave="hoverAvatarLeave"
        />
    </div>
</template>
