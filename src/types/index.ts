export interface TocHeading {
  value: string
  id: string
  depth: number
}

export interface MDXFrontMatter {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  readingTime: string
}

export interface MDXPost {
  toc: TocHeading[]
  frontmatter: MDXFrontMatter
  body: string
}
