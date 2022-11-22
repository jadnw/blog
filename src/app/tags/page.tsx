import Typo from 'components/Typo'
import CountTags from 'components/CountTags'
import mdx from 'lib/mdx'
import { Category } from 'shared/enums'

const TagList = async () => {
  const tags = mdx.getCountTags()

  return (
    <div className="mx-auto w-wrapper space-y-24 py-24">
      <div className="space-y-8">
        <Typo text="Post Tags" />
        <CountTags type={Category.Post} tags={tags.post} />
      </div>
      <div className="space-y-8">
        <Typo text="Note Tags" />
        <CountTags type={Category.Note} tags={tags.note} />
      </div>
    </div>
  )
}

export default TagList
