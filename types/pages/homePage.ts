import type { PageSEOSanity } from '../components/page-seo'
import type { TextBlock } from '../components/custom-text-block'
import type { Technology } from '../content/technology'
import type { SocialLink } from '../content/socialLink'
import type { CustomImageSanity } from '../components/custom-image'

export type HomeShortIntroSection = {
    title: string
    subtitle: string
    shortIntro: TextBlock
    imageShowcase: CustomImageSanity[]
}

export type HomeSocialSection = {
    title: string
    socialLinks: SocialLink[]
}

export type HomeFavouriteToolsSection = {
    title: string
    subtitle: string
    tools: Technology[]
}

export type HomePageProperties = {
    title: string
    seo: PageSEOSanity
    shortIntroSection: HomeShortIntroSection
    socialSection: HomeSocialSection
    favouriteToolsSection: HomeFavouriteToolsSection
}
