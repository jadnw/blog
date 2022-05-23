import PostCard from '@/components/PostCard'
import type { MDXFrontmatter } from '../types'

interface PostGridProps {
  frontmatters: MDXFrontmatter[]
}

const PostGrid = ({ frontmatters }: PostGridProps) => (
  <div className="flex flex-col items-stretch divide-y divide-ink-200">
    {frontmatters.map((frontmatter) => (
      <PostCard key={frontmatter.slug} frontmatter={frontmatter} />
    ))}
  </div>
)

export default PostGrid
