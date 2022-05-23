import Link from 'next/link'

interface TagsProps {
  tags: string[]
}

const Tag = ({ tag }: { tag: string }) => (
  <Link href={`/tags/${tag}`}>
    <a className="hover:underline">{tag}</a>
  </Link>
)

const Tags = ({ tags }: TagsProps) => (
  <div className="flex items-center space-x-4 font-semibold text-primary-500">
    {tags.map((t) => (
      <Tag key={t} tag={t} />
    ))}
  </div>
)

export default Tags
