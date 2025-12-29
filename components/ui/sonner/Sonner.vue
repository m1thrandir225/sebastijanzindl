<script lang="ts" setup>
import type { ToasterProps } from 'vue-sonner'
import { reactiveOmit } from '@vueuse/core'
import {
    CheckCircle,
    InfoIcon,
    Loader2Icon,
    OctagonIcon,
    XIcon,
    AlertTriangleIcon,
} from 'lucide-vue-next'
import { Toaster as Sonner } from 'vue-sonner'

const props = defineProps<ToasterProps>()
const delegatedProps = reactiveOmit(props, 'toastOptions')
</script>

<template>
    <Sonner
        class="toaster group"
        :toast-options="{
            classes: {
                toast: 'group border !border-brand toast  group-[.toaster]  group-[.toaster]:text-foreground group-[.toaster]:border-neutral-500 group-[.toaster]:shadow-lg font-array',
                description: 'group-[.toast]:text-muted-foreground !font-array',
                actionButton:
                    'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                cancelButton:
                    'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
            },
        }"
        v-bind="delegatedProps"
    >
        <template #success-icon>
            <CheckCircle class="size-4" />
        </template>
        <template #info-icon>
            <InfoIcon class="size-4" />
        </template>
        <template #warning-icon>
            <AlertTriangleIcon class="size-4" />
        </template>
        <template #error-icon>
            <OctagonIcon class="size-4" />
        </template>
        <template #loading-icon>
            <div>
                <Loader2Icon class="size-4 animate-spin" />
            </div>
        </template>
        <template #close-icon>
            <XIcon class="size-4" />
        </template>
    </Sonner>
</template>
