import type { Technology } from './technology'
import type { CustomImageSanity } from '~/types/components/custom-image'
import type { PortableTextBlock } from '@portabletext/types'

export type Project = {
    _id: string
    _type: 'project'
    title: string
    slug: {
        _type: 'slug'
        current: string
    }
    description: PortableTextBlock[]
    image: CustomImageSanity
    techStack: Technology[]
    productionLink: string
    githubLink: string
}
