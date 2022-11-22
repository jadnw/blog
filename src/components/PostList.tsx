import { IFrontMatter } from 'shared/types'
import PostCard from './PostCard'

export interface PostListProps {
  frontmatters: IFrontMatter[]
}

const PostList = ({ frontmatters }: PostListProps) => (
  <div className="flex flex-col items-stretch divide-y divide-ink-300 dark:divide-ink-700">
    {frontmatters.map((p) => (
      <PostCard key={p.id} frontmatter={p} />
    ))}
  </div>
)

export default PostList
