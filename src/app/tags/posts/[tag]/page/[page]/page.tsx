import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

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
        type={Category.Post}
        title={`Post Tag: ${tag}`}
        tag={tag}
        page={Number(page)}
      />
    </>
  )
}

export default PaginatePostsByTag
