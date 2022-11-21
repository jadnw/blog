import mdx from 'lib/mdx'
import { PostType } from 'shared/enums'
import MDXRemoteRenderer from 'app/MDXRemoteRenderer'

export interface NoteProps {
  params: {
    slug: string
  }
}

const Note = async ({ params: { slug } }: NoteProps) => {
  const post = await mdx.getSingleMdxBySlug(PostType.Note, slug)
  return (
    <div>
      {JSON.stringify(post.frontmatter)}
      {JSON.stringify(post.toc)}
      <MDXRemoteRenderer source={post.source} />
    </div>
  )
}

export default Note
