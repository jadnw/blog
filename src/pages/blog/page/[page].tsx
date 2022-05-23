import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import BlogLayout from '@/layouts/BlogLayout'

import { getTotalPages, getMdxFrontmattersWithPagination } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = await getTotalPages()

  return {
    paths: Array.from({ length: totalPages })
      .map((_elem, index) => index + 1)
      .map((page: number) => ({ params: { page: page.toString() } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getMdxFrontmattersWithPagination(
    context.params!.page as string,
  )

  return {
    props: {
      ...data,
    },
  }
}

const BlogWithPagination: NextPage = ({
  page,
  totalPages,
  hasNextPage,
  frontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <BlogLayout
    page={page}
    totalPages={totalPages}
    hasNextPage={hasNextPage}
    frontmatters={frontmatters}
  />
)

export default BlogWithPagination
