import type { SocialLink } from './socialLink'

export interface CustomPropertiesHome {
    socialLinks: SocialLink[]
    currentlyLearning: string[]
    currentlyWorkingOn: {
        currentlyWorkingOnItem: string
        currentlyWorkingOnItemLink: string
        _key: string
    }[]
}
