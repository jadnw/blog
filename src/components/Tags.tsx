import Link from 'next/link'
import { Category } from 'shared/enums'

export interface TagsProps {
  category: Category
  tags: string[]
}

const Tags = ({ category, tags }: TagsProps) => (
  <ul className="flex items-center space-x-2 text-sm">
    {tags.map((tag) => (
      <li key={tag}>
        <Link
          href={`/tags/${tag}?category=${category}`}
          className="rounded-sm border border-ink-400 px-2 py-1 duration-200 hover:bg-ink-100 dark:border-ink-600 dark:hover:bg-ink-800"
        >
          {tag}
        </Link>
      </li>
    ))}
  </ul>
)

export default Tags
