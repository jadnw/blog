import Link from 'next/link'

import TagsLine from '@/components/TagsLine'
import type { MDXFrontmatter } from '../types'
import { formatDate } from '@/lib/utils'

interface NoteCardProps {
  frontmatter: MDXFrontmatter
}

const NoteCard = ({
  frontmatter: { slug, title, date, tags, summary, readingTime },
}: NoteCardProps) => (
  <div className="py-12 flex items-baseline space-x-8">
    <time
      className="w-2/12 text-ink-500 dark:text-ink-400 text-sm"
      dateTime={date}
    >
      {formatDate(date)}
    </time>
    <div className="flex-1">
      <div className="flex items-center justify-between text-sm">
        <TagsLine tags={tags} disabled />
      </div>
      <div className="py-4">
        <Link href={`/notes/${slug}`}>
          <a>
            <h3 className="text-2xl font-bold hover:underline">{title}</h3>
          </a>
        </Link>
        <p className="pt-2  text-ink-600 dark:text-ink-300">{summary}</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink-500 dark:text-ink-400">{readingTime}</span>
        <Link href={`/notes/${slug}`}>
          <a className="font-semibold hover:text-primary-500 dark:hover:text-primary-400 duration-100">
            Read More &rarr;
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default NoteCard
