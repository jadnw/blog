import Image from 'next/image'

import Layout from '@/layouts/Layout'
import TagsLine from '@/components/TagsLine'
import Toc from '@/components/Toc'
import MdxRenderer from '@/components/MdxRenderer'
import AdjacentsNav from '@/components/AdjacentsNav'
import Comments from '@/components/Comments'
import NavButtons from '@/components/NavButtons'

import type { Adjacents, MDXPost } from '../types'
import { formatDate } from '@/lib/utils'
import { GITHUB_REPO_URL } from '@/lib/config'
import Github from '@/assets/svgr/github.svg'

interface ContentLayoutProps {
  route: 'blog' | 'notes'
  post: MDXPost
  adjacents: Adjacents
}

const ContentLayout = ({
  route,
  post: {
    toc,
    frontmatter: { slug, title, image, date, tags, summary, readingTime },
    body,
  },
  adjacents,
}: ContentLayoutProps) => (
  <Layout title={title}>
    <article className="mx-auto py-12 px-4 lg:px-0 w-full lg:w-wrapper">
      <div className="pb-4 text-center font-bold text-2xl xs:text-3xl sm:text-4xl border-b border-ink-200 dark:border-ink-600">
        <h1 className="mx-auto pb-4 w-full md:w-content">{title}</h1>
        <div className="mx-auto w-full md:w-content grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-0 sm:flex sm:items-center sm:justify-between text-base font-medium text-ink-400 text-left">
          <div className="flex items-center space-x-2">
            <span>Tags:</span>
            <TagsLine tags={tags} />
          </div>
          <time dateTime={date}>{formatDate(date)}</time>
          <span>{readingTime}</span>
          <a
            className="flex items-center space-x-2 hover:text-ink-600 dark:hover:text-ink-200 hover:underline"
            href={`${GITHUB_REPO_URL}/_${
              route === 'blog' ? 'posts' : route
            }/${slug}.mdx`}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-4 h-4" />
            <span>Edit on Github</span>
          </a>
        </div>
      </div>
      <div className="mx-auto w-full md:w-content leading-loose">
        {route === 'blog' && image && (
          <div className="my-4 aspect-[2/1] rounded overflow-hidden">
            <Image src={image} alt={title} width="768" height="384" />
          </div>
        )}
        {route === 'blog' && (
          <hr className="border-t border-ink-200 dark:border-ink-700" />
        )}
        <p className="pt-4">{summary}</p>
        <Toc toc={toc} />
        <MdxRenderer code={body} />
        <AdjacentsNav route={route} adjacents={adjacents} />
        <Comments />
      </div>
    </article>
    <NavButtons />
  </Layout>
)

export default ContentLayout
