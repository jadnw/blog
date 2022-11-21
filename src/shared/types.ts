import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface IPaginate<T> {
  metadata: {
    page: number
    pageSize: number
    pagesCount: number
    count: number
    hasPrev: boolean
    hasNext: boolean
  }
  data: T[]
}

export interface IFrontMatter {
  id: string
  slug: string
  title: string
  cover?: string
  tags: string[]
  excerpt: string
  readingTime: string
  published: boolean
  date: string
}

export interface IToc {
  id: string
  value: string
  depth: number
}

export interface IPost {
  frontmatter: IFrontMatter
  toc: IToc[]
  source: MDXRemoteSerializeResult
}
