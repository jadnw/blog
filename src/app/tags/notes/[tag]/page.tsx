import PostListLayout from 'app/PostListLayout'
import { Category } from 'shared/enums'

export interface NotesByTagProps {
  params: {
    tag: string
  }
}

const NotesByTag = async ({ params: { tag } }: NotesByTagProps) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PostListLayout type={Category.Note} title={`Note Tag: ${tag}`} tag={tag} />
    </>
  )
}

export default NotesByTag
