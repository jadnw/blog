import Image from 'next/image'
import dayjs from 'dayjs'

import { Category } from 'shared/enums'
import { IPost } from 'shared/types'
import Tags from 'components/Tags'
import Profile from 'components/Profile'
import TOC from 'components/TOC'
import MDXRemoteRenderer from './MDXRemoteRenderer'
import Github from 'components/svgs/Github'
import Comments from 'app/Comments'
import 'devicon/devicon.min.css'

export interface SinglePostLayoutProps {
  post: IPost
}

const SinglePostLayout = ({ post: { frontmatter, toc, source } }: SinglePostLayoutProps) => (
  <article className="space-y-6">
    {frontmatter.category === Category.Post ? (
      <div className="relative aspect-[16/9] overflow-hidden rounded">
        <Image src={frontmatter.cover} alt={frontmatter.title} fill object-fit="cover" />
      </div>
    ) : null}

    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-5xl">{frontmatter.title}</h1>
      <div className="flex items-center space-x-4">
        <Profile />
        <span>&bull;</span>
        <span>{dayjs(frontmatter.date).format('MMMM DD, YYYY')}</span>
        <span>&bull;</span>
        <a
          href={frontmatter.title}
          className="flex items-center space-x-2 duration-200 hover:underline"
        >
          <Github className="h-4 w-4" />
          <span>Edit on Github</span>
        </a>
      </div>
      <Tags category={frontmatter.category} tags={frontmatter.tags} />
    </div>
    <div className="mx-auto w-post">
      <TOC toc={toc} />
      <MDXRemoteRenderer source={source} />
      <div className="mt-8 border-t border-ink-300 pt-1 text-center text-sm text-ink-500 dark:border-ink-700 dark:text-ink-600">
        This is the end of the article
      </div>
      <Comments />
    </div>
  </article>
)

export default SinglePostLayout
