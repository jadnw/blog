import type { MDXFrontmatter } from '../types'

interface PostCardProps {
  frontmatter: MDXFrontmatter
}

const PostCard = ({
  frontmatter: { slug, title, date, tags, summary, readingTime },
}: PostCardProps) => <div></div>

export default PostCard
