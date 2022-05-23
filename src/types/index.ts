export interface TocHeading {
  value: string
  id: string
  depth: number
}

export interface MDXFrontmatter {
  slug: string
  title: string
  image?: string
  date: string
  tags: string[]
  summary: string
  readingTime: string
}

export interface MDXPost {
  toc: TocHeading[]
  frontmatter: MDXFrontmatter
  body: string
}

export interface PaginatedFrontmatters {
  pagination: {
    page: number
    totalPages: number
  }
  frontmatters: MDXFrontmatter[]
}
