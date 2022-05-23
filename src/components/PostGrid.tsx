import PostCard from '@/components/PostCard'
import type { MDXFrontmatter } from '../types'

interface PostGridProps {
  frontmatters: MDXFrontmatter[]
}

const PostGrid = ({ frontmatters }: PostGridProps) => (
  <div>
    {frontmatters.map((frontmatter) => (
      <PostCard key={frontmatter.slug} frontmatter={frontmatter} />
    ))}
  </div>
)

export default PostGrid
