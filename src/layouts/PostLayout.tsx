import Image from 'next/image'

import Layout from '@/layouts/Layout'
import TagsLine from '@/components/TagsLine'
import Toc from '@/components/Toc'
import MdxRenderer from '@/components/MdxRenderer'

import type { MDXPost } from '../types'
import { formatDate } from '@/lib/utils'
import { GITHUB_REPO_URL } from '@/lib/config'
import Github from '@/assets/svgr/github.svg'

interface PostLayoutProps {
  route: 'posts' | 'notes'
  post: MDXPost
}

const PostLayout = ({
  route,
  post: {
    toc,
    frontmatter: { slug, title, image, date, tags, summary, readingTime },
    body,
  },
}: PostLayoutProps) => {
  return (
    <Layout title={title}>
      <article className="mx-auto py-12 w-wrapper">
        <div className="pb-4 text-center font-bold text-3xl border-b border-ink-200 dark:border-ink-600">
          <h1 className="mx-auto pb-4 w-content">{title}</h1>
          <div className="mx-auto w-content flex items-center justify-between text-sm font-medium text-ink-400">
            <div className="flex items-center space-x-2">
              <span>Tags:</span>
              <TagsLine tags={tags} />
            </div>
            <time dateTime={date}>{formatDate(date)}</time>
            <span>{readingTime}</span>
            <a
              className="flex items-center space-x-2 hover:text-ink-600 dark:hover:text-ink-200 hover:underline"
              href={`${GITHUB_REPO_URL}/_${route}/${slug}.mdx`}
            >
              <Github className="w-4 h-4" />
              <span>Edit on Github</span>
            </a>
          </div>
        </div>
        <div className="mx-auto w-content leading-loose">
          {route === 'posts' && image && (
            <div className="my-4 aspect-[2/1] rounded overflow-hidden">
              <Image src={image} alt={title} width="768" height="384" />
            </div>
          )}
          <p className="pt-4 border-t border-ink-200 dark:border-ink-700">
            {summary}
          </p>
          <Toc toc={toc} />
          <MdxRenderer code={body} />
        </div>
      </article>
    </Layout>
  )
}

export default PostLayout
