import NoteCard from '@/components/NoteCard'
import PostCard from '@/components/PostCard'
import type { MDXFrontmatter } from '../types'

interface GridProps {
  type?: 'posts' | 'notes'
  frontmatters: MDXFrontmatter[]
}

const Grid = ({ type = 'post', frontmatters }: GridProps) => (
  <div className="flex flex-col items-stretch divide-y divide-ink-200 dark:divide-ink-700">
    {frontmatters.map((frontmatter) =>
      type === 'post' ? (
        <PostCard key={frontmatter.slug} frontmatter={frontmatter} />
      ) : (
        <NoteCard key={frontmatter.slug} frontmatter={frontmatter} />
      ),
    )}
  </div>
)

export default Grid
