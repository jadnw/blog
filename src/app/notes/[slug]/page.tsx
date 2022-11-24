import mdx from 'lib/mdx'
import { Category } from 'shared/enums'
import SinglePostLayout from 'app/SinglePostLayout'

export const revalidate = 3600

export interface PostProps {
  params: {
    slug: string
  }
}

const Note = async ({ params: { slug } }: PostProps) => {
  const post = await mdx.getSingleMdxBySlug(Category.Note, slug)
  return (
    <div className="mx-auto w-wrapper pt-24">
      <SinglePostLayout post={post} />
    </div>
  )
}

export default Note
