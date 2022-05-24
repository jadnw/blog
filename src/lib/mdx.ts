import fs from 'fs'
import path from 'path'

import { globbySync } from 'globby'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'

import remarkGfm from 'remark-gfm'
import remarkToc from './remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import type { TocHeading, MDXFrontmatter, MDXPost, Tag } from '../types'
import { ITEMS_PER_PAGE } from '@/lib/config'

const ROOT = process.cwd()
const SOURCES = {
  post: path.join(ROOT, '_posts'),
  note: path.join(ROOT, '_notes'),
}

const sortDesc = (a: any, b: any) => {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

const getMdxFiles = (directory: string): string[] => {
  return globbySync(directory, {
    expandDirectories: {
      extensions: ['mdx', 'md'],
    },
  })
}

const getSlugFromPath = (filePath: string): string => {
  const file = filePath.split('/').pop()
  const [slug, _ext] = file!.split('.')
  return slug
}

export const getSlugs = (type: 'post' | 'note' = 'post'): string[] => {
  const directory = SOURCES[type]
  const postPaths = getMdxFiles(directory)
  return postPaths.map((p) => getSlugFromPath(p))
}

export const getMdxBySlug = async (
  slug: string,
  type: 'post' | 'note' = 'post',
): Promise<MDXPost> => {
  const directory = SOURCES[type]
  const filePath = path.join(directory, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'esbuild.exe',
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild',
    )
  }

  let toc: TocHeading[] = []
  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: path.join(ROOT, 'src', 'components', 'mdx'),
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        [remarkToc, { exportRef: toc }],
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeCodeTitles,
        rehypePrism,
      ]
      return options
    },
    esbuildOptions(options) {
      options.minify = true
      options.loader = {
        ...options.loader,
        '.ts': 'tsx',
      }

      return options
    },
  })

  return {
    toc,
    frontmatter: {
      slug: slug,
      title: frontmatter.title,
      image: frontmatter.image ?? null,
      date: frontmatter.date.toString(),
      tags: frontmatter.tags,
      summary: frontmatter.summary,
      readingTime: readingTime(code).text,
    },
    body: code,
  }
}

export const getMdxFrontmatters = async (type: 'post' | 'note' = 'post') => {
  const directory = SOURCES[type]
  const paths = getMdxFiles(directory)

  let frontmatters = paths.reduce((result: MDXFrontmatter[], filePath) => {
    const source = fs.readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(source)
    const fm = {
      slug: getSlugFromPath(filePath),
      title: frontmatter.title,
      image: frontmatter.image ?? null,
      date: frontmatter.date.toString(),
      tags: frontmatter.tags,
      summary: frontmatter.summary,
      readingTime: readingTime(content).text,
    }

    if (!frontmatter.draft) {
      return [...result, fm]
    }

    return result
  }, [])

  frontmatters = frontmatters.sort((pfm, nfm) => sortDesc(pfm.date, nfm.date))

  const totalPages = Math.ceil(frontmatters.length / ITEMS_PER_PAGE)

  return {
    totalPages,
    frontmatters,
  }
}

export const getPostTags = async (): Promise<Tag[]> => {
  const { frontmatters } = await getMdxFrontmatters()

  const tagsWithNumOfPosts = frontmatters
    .map((fm) => fm.tags)
    .flat(1)
    .reduce((result: { [key: string]: number }, label) => {
      if (!result.hasOwnProperty(label)) {
        result[label] = 1
      } else {
        ++result[label]
      }
      return result
    }, {})

  return Object.keys(tagsWithNumOfPosts).map((label) => ({
    label,
    numOfPosts: tagsWithNumOfPosts[label],
  }))
}

export const getMdxFrontmattersByTag = async (tag: string) => {
  let { frontmatters } = await getMdxFrontmatters()
  frontmatters = frontmatters.filter((fm) => fm.tags.includes(tag))
  const totalPages = Math.ceil(frontmatters.length / ITEMS_PER_PAGE)

  return {
    totalPages,
    frontmatters,
  }
}
