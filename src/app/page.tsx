import mdx from 'lib/mdx'
import { PostType } from 'shared/enums'

export default function Home() {
  const frontmatters = mdx.paginateFrontmatters(PostType.Post)
  return (
    <div>
      {JSON.stringify(frontmatters)}
      {JSON.stringify(mdx.getCountTags())}
    </div>
  )
}
