import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import PostListLayout from '@/layouts/PostListLayout'

import { getPaginatedPostTags, getMdxFrontmattersByTag } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = async () => {
  const paginatedTags = await getPaginatedPostTags()
  const tagWithPageNumbers: { tag: string; page: number }[] = []
  paginatedTags.forEach(({ tag, totalPages }) => {
    Array.from({ length: totalPages })
      .map((_, index) => index + 1)
      .forEach((page) => {
        tagWithPageNumbers.push({ tag, page })
      })
  })

  return {
    paths: tagWithPageNumbers.map(({ tag, page }) => ({
      params: { tag, page: page.toString() },
    })),
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
        page: context.params!.page,
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
    pagination={pagination}
    frontmatters={frontmatters}
  />
)

export default Tag
