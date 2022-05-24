import Link from 'next/link'
import Image from 'next/image'

import TagsLine from '@/components/TagsLine'
import type { MDXFrontmatter } from '../types'
import { formatDate } from '@/lib/utils'

interface PostCardProps {
  frontmatter: MDXFrontmatter
}

const PostCard = ({
  frontmatter: { slug, title, image, date, tags, summary, readingTime },
}: PostCardProps) => (
  <div className="py-12 flex items-center space-x-8">
    <div className="w-2/3">
      <div className="flex items-center justify-between text-sm">
        <TagsLine tags={tags} />
        <time className="text-ink-500 dark:text-ink-400" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <div className="py-4">
        <Link href={`/blog/${slug}`}>
          <a>
            <h3 className="text-2xl font-bold hover:underline">{title}</h3>
          </a>
        </Link>
        <p className="pt-2 text-base text-ink-600 dark:text-ink-300">
          {summary}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink-500 dark:text-ink-400">{readingTime}</span>
        <Link href={`/blog/${slug}`}>
          <a className="font-semibold hover:text-primary-500 dark:hover:text-primary-400 duration-100">
            Read More &rarr;
          </a>
        </Link>
      </div>
    </div>
    <Link href={`/blog/${slug}`}>
      <a className="aspect-[2/1] rounded overflow-hidden">
        <Image src={image!} alt={title} width="400" height="200" />
      </a>
    </Link>
  </div>
)

export default PostCard
