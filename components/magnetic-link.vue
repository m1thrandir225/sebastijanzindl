<template>
    <div
        ref="magnetic"
        :style="
            isMobile
                ? {}
                : {
                      transform: `translate(${(spring.values as any).x}px, ${(spring.values as any).y}`,
                  }
        "
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useElementBounding } from '@vueuse/core'
import { useSpring } from '@vueuse/motion'

const { isMobile } = useDevice()

const magnetic = ref<HTMLElement | null>(null)

let elementBounds: ReturnType<typeof useElementBounding> | null = null

const { motionProperties } = useMotionProperties(magnetic, {
    x: 0,
    y: 0,
})

const spring = useSpring(motionProperties, { damping: 20, stiffness: 50 })
const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event

    if (!elementBounds && magnetic.value) {
        elementBounds = useElementBounding(magnetic)
    }

    if (elementBounds) {
        const { left, top, width, height } = elementBounds
        const x = clientX - (left.value + width.value / 2)
        const y = clientY - (top.value + height.value / 2)

        spring.set({
            x: x,
            y: y,
        })
    }
}

const onMouseLeave = () => {
    spring.set({
        x: 0,
        y: 0,
    })
}

onMounted(() => {
    if (magnetic.value) {
        elementBounds = useElementBounding(magnetic)
    }
})

onBeforeUnmount(() => {
    elementBounds = null
})
</script>

<style scoped>
div {
    display: inline-block;
    will-change: transform;
    transition: transform 0.1s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
}
</style>
