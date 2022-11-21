import fs from 'fs'
import path from 'path'

import { globbySync } from 'globby'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'

import remarkGfm from 'remark-gfm'
import remarkToc from './remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import config from 'lib/config'
import { PostType } from 'shared/enums'
import { IFrontMatter, IPaginate, IPost } from 'shared/types'

const ROOT = process.cwd()
const SOURCES = {
  [PostType.Post]: path.join(ROOT, 'contents', 'posts'),
  [PostType.Note]: path.join(ROOT, 'contents', 'notes'),
}

const getMdxFiles = (directory: string): string[] =>
  globbySync(directory, {
    expandDirectories: {
      extensions: ['mdx', 'md'],
    },
  })

const getSlug = (path: string): string => {
  const filename = path.split('/').pop()
  if (!filename) {
    throw new Error('A MDX file name is invalid.')
  }
  const [slug] = filename.split('.')
  return slug
}

const getFrontmatters = (type: PostType): IFrontMatter[] => {
  const directory = SOURCES[type]
  const paths = getMdxFiles(directory)

  const frontmatters = paths
    .map((p) => {
      const source = fs.readFileSync(p, 'utf8')
      const { data, content } = matter(source)
      return {
        id: data.id,
        slug: getSlug(p),
        title: data.title,
        cover: data.cover,
        tags: data.tags,
        excerpt: data.excerpt,
        date: data.date.toString(),
        published: data.published,
        readingTime: readingTime(content).text,
      }
    })
    .filter((f) => f.published)

  return frontmatters
}

const paginateFrontmatters = (type: PostType, page = 1): IPaginate<IFrontMatter> => {
  const frontmatters = getFrontmatters(type)
  const pageSize = config.pageSize
  const count = frontmatters.length
  const pagesCount = Math.ceil(count / pageSize)

  return {
    metadata: {
      page,
      pageSize,
      count,
      pagesCount,
      hasNext: page >= 1 && page <= pagesCount,
      hasPrev: page > 1 && page < pagesCount,
    },
    data: frontmatters.slice(0, 2),
  }
}

const paginateFrontmattersByTag = (type: PostType, tag: string, page = 1) => {
  const frontmatters = getFrontmatters(type).filter((fm) => fm.tags.includes(tag))
  const pageSize = config.pageSize
  const count = frontmatters.length
  const pagesCount = Math.ceil(count / pageSize)

  return {
    metadata: {
      page,
      pageSize,
      count,
      pagesCount,
      hasNext: page >= 1 && page <= pagesCount,
      hasPrev: page > 1 && page < pagesCount,
    },
    data: frontmatters.slice(0, 2),
  }
}

export type CountTags = { [prop: string]: number }

const getCountTagsByPostType = (type: PostType): CountTags => {
  const frontmatters = getFrontmatters(type)

  return frontmatters
    .reduce((accTags: string[], fm) => [...accTags, ...fm.tags], [])
    .reduce((acc: { [prop: string]: number }, t) => {
      if (!acc[t]) {
        acc[t] = 1
        return acc
      }

      ++acc[t]
      return acc
    }, {})
}

const getCountTags = (): { post: CountTags; note: CountTags } => {
  return {
    post: getCountTagsByPostType(PostType.Post),
    note: getCountTagsByPostType(PostType.Note),
  }
}

const getSingleMdxBySlug = async (type: PostType, slug: string): Promise<IPost> => {
  const directory = SOURCES[type]
  const filepath = path.join(directory, `${slug}.mdx`)
  const source = fs.readFileSync(filepath, 'utf8')

  const toc: IPost['toc'] = []
  const { data: frontmatter, content } = matter(source)
  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, [remarkToc, { exportRef: toc }]],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeCodeTitles, rehypePrism],
      format: 'mdx',
    },
    parseFrontmatter: true,
  })

  if (!frontmatter) {
    throw new Error('No frontmatter to parse.')
  }

  return {
    frontmatter: {
      id: frontmatter.id,
      slug,
      title: frontmatter.title,
      cover: frontmatter.cover,
      tags: frontmatter.tags,
      excerpt: frontmatter.excerpt,
      published: frontmatter.published,
      readingTime: readingTime(content).text,
      date: frontmatter.date.toString(),
    },
    toc,
    source: mdxSource,
  }
}

export default {
  paginateFrontmatters,
  paginateFrontmattersByTag,
  getCountTags,
  getSingleMdxBySlug,
}
