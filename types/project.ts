import type { Technology } from './technology'
import type { CustomImageSanity } from '~/types/custom-image'

export type Project = {
    _id: string
    _type: 'project'
    title: string
    slug: {
        _type: 'slug'
        current: string
    }
    description: string
    image: CustomImageSanity,
    techStack: Technology[]
    productionLink: string
    githubLink: string
}
