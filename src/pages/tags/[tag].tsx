import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import PostListLayout from '@/layouts/PostListLayout'

import { getPostTags, getMdxFrontmattersByTag } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getPostTags()
  const labels = tags.map(({ label }) => label)

  return {
    paths: labels.map((tag) => ({ params: { tag } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { totalPages, frontmatters } = await getMdxFrontmattersByTag(
    context.params!.tag as string,
  )

  return {
    props: {
      tag: context.params!.tag,
      pagination: {
        page: 1,
        totalPages,
      },
      frontmatters,
    },
  }
}

const Tag: NextPage = ({
  tag,
  pagination,
  frontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PostListLayout
    route={`tags/${tag}`}
    title={`Tag: ${tag}`}
    searchFieldVisible={false}
    pagination={pagination}
    frontmatters={frontmatters}
  />
)

export default Tag
