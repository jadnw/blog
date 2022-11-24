import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export const revalidate = 3600

const Blog = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout category={Category.Post} />
    </>
  )
}

export default Blog
