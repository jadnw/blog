import Link from 'next/link'
import { Category } from 'shared/enums'

export interface CountTagsProps {
  category: Category
  tags: {
    name: string
    count: number
  }[]
}

const CountTags = ({ category, tags }: CountTagsProps) => (
  <ul className="flex items-center space-x-2 text-sm">
    {tags.map(({ name, count }) => (
      <li key={name}>
        <Link
          href={`/tags/${name}?category=${category}`}
          className="rounded-sm border border-ink-400 px-2 py-1 duration-200 hover:bg-ink-100 dark:border-ink-600 dark:hover:bg-ink-800"
        >
          {name} ({count})
        </Link>
      </li>
    ))}
  </ul>
)

export default CountTags
