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
  <div className="py-12 flex flex-col-reverse md:flex-row items-center space-x-0 md:space-x-8 space-y-reverse space-y-4 md:space-y-0">
    <div className="w-full md:w-7/12">
      <div className="flex items-center justify-between text-sm">
        <TagsLine tags={tags} />
        <time className="text-ink-500 dark:text-ink-400" dateTime={date}>
          {formatDate(date)}
        </time>
      </div>
      <div className="py-4">
        <Link href={`/blog/${slug}`}>
          <a>
            <h3 className="text-xl font-bold hover:underline">{title}</h3>
          </a>
        </Link>
        <p className="pt-2 text-ink-600 dark:text-ink-300 leading-relaxed">
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
    <div className="w-full md:w-5/12">
      <Link href={`/blog/${slug}`}>
        <a className="block aspect-[2/1] rounded overflow-hidden">
          <Image
            src={image!}
            alt={title}
            width="400"
            height="200"
            layout="responsive"
          />
        </a>
      </Link>
    </div>
  </div>
)

export default PostCard
