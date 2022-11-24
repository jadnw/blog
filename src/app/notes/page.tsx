import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export const revalidate = 3600

const Notes = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout category={Category.Note} title="Notes" />
    </>
  )
}

export default Notes
