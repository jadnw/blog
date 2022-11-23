import Image from 'next/image'
import dayjs from 'dayjs'

import { Category } from 'shared/enums'
import { IPost } from 'shared/types'
import Tags from 'components/Tags'
import Profile from 'components/Profile'
import TOC from 'components/TOC'
import MDXRemoteRenderer from './MDXRemoteRenderer'

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
        <a href={frontmatter.title} className="duration-200 hover:underline">
          Edit on Github
        </a>
      </div>
      <Tags category={frontmatter.category} tags={frontmatter.tags} />
    </div>
    <div className="mx-auto w-post text-lg">
      <TOC toc={toc} />
      <MDXRemoteRenderer source={source} />
    </div>
  </article>
)

export default SinglePostLayout
