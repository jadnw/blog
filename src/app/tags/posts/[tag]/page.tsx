import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export interface PostsByTagProps {
  params: {
    tag: string
  }
}

const PostsByTag = async ({ params: { tag } }: PostsByTagProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout type={Category.Post} title={`Post Tag: ${tag}`} tag={tag} />
    </>
  )
}

export default PostsByTag
