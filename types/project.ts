import type { Technology } from './technology'

export type Project = {
    _id: string
    _type: 'project'
    title: string
    slug: {
        _type: 'slug'
        current: string
    }
    description: string
    mainImage: {
        _type: 'image'
        asset: {
            _ref: string
            _type: 'reference'
        }
    }
    tecnologies: Technology[]
    liveLink: string
    githubLink: string
}
