export interface svglIcon {
    id: number
    title: string
    category: string
    route:
        | string
        | {
              dark: string
              light: string
          }
    url: string
}

export interface svglCategory {
    category: string
    total: number
}
