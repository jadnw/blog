import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export interface PaginateBlogProps {
  params: {
    page: string
  }
}

const PaginateBlog = async ({ params: { page } }: PaginateBlogProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout type={Category.Post} page={Number(page)} />
    </>
  )
}

export default PaginateBlog
