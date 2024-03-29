import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export const revalidate = 3600

export interface PaginatePostsProps {
  params: {
    page: string
  }
}

const PaginatePosts = async ({ params: { page } }: PaginatePostsProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout category={Category.Post} page={Number(page)} />
    </>
  )
}

export default PaginatePosts
