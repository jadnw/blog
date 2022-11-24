import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export const revalidate = 3600

export interface PaginatePostsByTagProps {
  params: {
    tag: string
    page: string
  }
}

const PaginatePostsByTag = async ({ params: { tag, page } }: PaginatePostsByTagProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout
        category={Category.Post}
        title={`Tag: ${tag}`}
        tag={tag}
        page={Number(page)}
      />
    </>
  )
}

export default PaginatePostsByTag
