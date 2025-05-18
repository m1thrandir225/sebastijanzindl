<template>
    <Dialog>
        <DialogTrigger>
            <div class="w-full">
                {{ project.title }}
            </div>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
            <DialogTitle>{{ project.title }}</DialogTitle>
        </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import {
    DialogTitle,
    DialogContent,
    DialogTrigger,
    Dialog,
} from '@/components/ui/dialog'
import type { Project } from '~/types/content/project'

defineProps<{
    project: Project
}>()
</script>
