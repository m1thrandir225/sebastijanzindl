import {
    type PortableTextBlock,
    type Slug,
    type ImageAsset,
} from '@sanity/types'

export interface Post {
    publishedAt: string
    _id: string
    _type: 'post'
    _createdAt: string
    title?: string
    slug: Slug
    excerpt?: string
    mainImage?: ImageAsset
    body: PortableTextBlock[]
}
