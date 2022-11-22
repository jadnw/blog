import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export interface PostsByTagProps {
  params: {
    tag: string
  }
  searchParams: {
    category: Category
  }
}

const PostsByTag = async ({ params: { tag }, searchParams: { category } }: PostsByTagProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout category={category} title={`${category} Tag: ${tag}`} tag={tag} />
    </>
  )
}

export default PostsByTag
