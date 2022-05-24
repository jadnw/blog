import Link from 'next/link'

interface TagsLineProps {
  tags: string[]
  disabled?: boolean
}

const Tag = ({ tag }: { tag: string }) => (
  <Link href={`/tags/${tag}`}>
    <a className="hover:underline">{tag}</a>
  </Link>
)

const TagsLine = ({ tags, disabled = false }: TagsLineProps) => (
  <div
    className={`flex items-center space-x-4 font-semibold text-primary-500 dark:text-primary-400 ${
      disabled ? 'pointer-events-none' : ''
    }`}
  >
    {tags.map((t) => (
      <Tag key={t} tag={t} />
    ))}
  </div>
)

export default TagsLine
