import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

const Notes = async () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout type={Category.Note} title="Notes" />
    </>
  )
}

export default Notes
