import type { CustomImageSanity } from '~/types/custom-image'

export type Technology = {
    _id: string
    _type: 'technology'
    title: string,
    hoverText: string
    lightImage: CustomImageSanity,
    darkImage: CustomImageSanity
}
