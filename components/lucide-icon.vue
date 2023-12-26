<script setup lang="ts">
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        default: 24,
    },
    color: {
        type: String,
        default: 'currentColor',
    },
    strokeWidth: {
        type: Number,
        default: 2,
    },
    defaultClass: {
        type: String,
        default: '',
    },
})

const icon = computed(() => (icons as Record<any, any>)[props.name])
</script>

<template>
    <component
        :is="icon"
        :size="size"
        :color="color"
        :stroke-width="strokeWidth"
        :default-class="defaultClass"
    />
</template>
