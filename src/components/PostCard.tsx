import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'

import Profile from './Profile'
import { IFrontMatter } from 'shared/types'
import Tags from './Tags'
import { Category } from 'shared/enums'

export interface PostCardProps {
  frontmatter: IFrontMatter
}

const PostCard = ({ frontmatter }: PostCardProps) => {
  const href = `${frontmatter.type === Category.Post ? '/posts' : '/notes'}/${frontmatter.slug}`

  return (
    <div className="flex items-center space-x-8 py-12">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <Profile />
          <span className="text-sm text-ink-500">
            {dayjs(frontmatter.date).format('MMMM DD, YYYY')}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-3xl duration-200 hover:text-ink-700 hover:underline dark:hover:text-ink-200">
            <Link href={href}>{frontmatter.title}</Link>
          </h3>
          <p className="leading-relaxed">
            <Link href={href}>{frontmatter.excerpt}</Link>
          </p>
        </div>
        <Tags type={frontmatter.type} tags={frontmatter.tags} />
      </div>
      {frontmatter.type === Category.Post && frontmatter.cover ? (
        <Link href={href} className="relative aspect-[16/9] w-5/12 overflow-hidden rounded">
          <Image
            src={frontmatter.cover}
            alt={frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
            className="duration-300 hover:rotate-12 hover:scale-150"
          />
        </Link>
      ) : null}
    </div>
  )
}

export default PostCard
