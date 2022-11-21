import mdx from 'lib/mdx'
import { PostType } from 'shared/enums'
import MDXRemoteRenderer from 'app/MDXRemoteRenderer'

export interface PostProps {
  params: {
    slug: string
  }
}

const Post = async ({ params: { slug } }: PostProps) => {
  const post = await mdx.getSingleMdxBySlug(PostType.Post, slug)
  return (
    <div>
      {JSON.stringify(post.frontmatter)}
      {JSON.stringify(post.toc)}
      <MDXRemoteRenderer source={post.source} />
    </div>
  )
}

export default Post
