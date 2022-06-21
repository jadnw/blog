import Link from 'next/link'
import type { Tag } from '../types'

interface TagItemProps {
  tag: Tag
}

interface TagGridProps {
  tags: Tag[]
}

const TagItem = ({ tag: { label, numOfPosts } }: TagItemProps) => (
  <div>
    <Link href={`/tags/${label}`}>
      <a className="hover:underline">
        <span className="text-secondary-500 dark:text-primary-400">
          # {label}
        </span>{' '}
      </a>
    </Link>
    <span className="text-ink-500 dark:text-ink-300">({numOfPosts})</span>
  </div>
)

const TagGrid = ({ tags }: TagGridProps) => (
  <div className="pt-12 flex items-center flex-wrap gap-8 font-medium">
    {tags.map((tag) => (
      <TagItem key={tag.label} tag={tag} />
    ))}
  </div>
)

export default TagGrid
