import {
    type ImageAsset,
    type ImageMetadata,
    type ImagePalette,
} from '@sanity/types'
import type { SocialLink } from './socialLink'

export interface CustomPropertiesHome {
    socialLinks: SocialLink[]
    currentlyLearning: string[]
    currentlyWorkingOn: {
        currentlyWorkingOnItem: string
        currentlyWorkingOnItemLink: string
        _key: string
    }[]
    using: {
        name: string
        _key: string
        logo: {
            asset: ImageAsset & {
                metadata: ImageMetadata & {
                    pallete: ImagePalette
                    blurhash: string
                }
            }
            _type: 'image'
        }
    }[]
}
