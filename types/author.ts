export type Author = {
    _id: string
    _type: 'author'
    name: string
    slug: {
        _type: 'slug'
        current: string
    }
    image: {
        _type: 'image'
        asset: {
            _ref: string
            _type: 'reference'
        }
    }
}
