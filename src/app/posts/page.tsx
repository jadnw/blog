import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

const Blog = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout type={Category.Post} />
    </>
  )
}

export default Blog
