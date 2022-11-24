import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export const revalidate = 3600

export interface PaginateNotesProps {
  params: {
    page: string
  }
}

const PaginateNotes = async ({ params: { page } }: PaginateNotesProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout category={Category.Note} page={Number(page)} />
    </>
  )
}

export default PaginateNotes
