import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Category } from './enums'

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

export interface IBlogPostFrontMatter {
  category: Category.Post
  id: string
  slug: string
  title: string
  cover: string
  tags: string[]
  excerpt: string
  readingTime: string
  published: boolean
  date: string
}

export interface INotePostFrontMatter {
  category: Category.Note
  id: string
  slug: string
  title: string
  tags: string[]
  excerpt: string
  readingTime: string
  published: boolean
  date: string
}

export type IFrontMatter = IBlogPostFrontMatter | INotePostFrontMatter

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
