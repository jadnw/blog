import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import PostListLayout from '@/layouts/PostListLayout'

import { getMdxFrontmatters } from '@/lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMdxFrontmatters()

  return {
    props: {
      pagination: {
        page: 1,
        totalPages: data.totalPages,
      },
      frontmatters: data.frontmatters,
    },
  }
}

const Blog: NextPage = ({
  pagination,
  frontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PostListLayout
    route="blog"
    pagination={pagination}
    frontmatters={frontmatters}
  />
)

export default Blog
