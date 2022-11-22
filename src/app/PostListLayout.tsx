import Typo from 'components/Typo'
import PostList from 'components/PostList'
import Pagination from 'components/Pagination'

import mdx from 'lib/mdx'
import { Category } from 'shared/enums'

export interface PostListLayoutProps {
  category: Category
  title?: string
  tag?: string
  page?: number
}

const PostListLayout = async ({ category, title = 'Blog', tag, page = 1 }: PostListLayoutProps) => {
  const fetchData = async () =>
    tag
      ? mdx.paginateFrontmattersByTag(category, tag, page)
      : mdx.paginateFrontmatters(category, page)
  const data = await fetchData()

  return (
    <div className="mx-auto w-wrapper py-24">
      <Typo text={title} />
      <PostList frontmatters={data.data} />
      <Pagination
        path={tag ? `/tags/${tag}` : category === Category.Post ? '/posts' : '/notes'}
        metadata={data.metadata}
      />
    </div>
  )
}

export default PostListLayout
