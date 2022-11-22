import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export interface PaginateNotesByTagProps {
  params: {
    tag: string
    page: string
  }
}

const PaginateNotesByTag = async ({ params: { tag, page } }: PaginateNotesByTagProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout
        type={Category.Note}
        title={`Note Tag: ${tag}`}
        tag={tag}
        page={Number(page)}
      />
    </>
  )
}

export default PaginateNotesByTag
