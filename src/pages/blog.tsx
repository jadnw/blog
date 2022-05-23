import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import BlogLayout from '@/layouts/BlogLayout'

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
  <BlogLayout pagination={pagination} frontmatters={frontmatters} />
)

export default Blog
