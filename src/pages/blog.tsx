import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import BlogLayout from '@/layouts/BlogLayout'

import { getMdxFrontmattersWithPagination } from '@/lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMdxFrontmattersWithPagination()

  return {
    props: {
      ...data,
    },
  }
}

const Blog: NextPage = ({
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

export default Blog
