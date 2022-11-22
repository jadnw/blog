import mdx from 'lib/mdx'
import { Category } from 'shared/enums'
import SinglePostLayout from 'app/SinglePostLayout'

export interface PostProps {
  params: {
    slug: string
  }
}

const Post = async ({ params: { slug } }: PostProps) => {
  const post = await mdx.getSingleMdxBySlug(Category.Post, slug)
  return (
    <div className="mx-auto w-wrapper">
      <SinglePostLayout post={post} />
    </div>
  )
}

export default Post
