import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import NotesLayout from '@/layouts/NotesLayout'

import { getMdxFrontmatters } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = async () => {
  const { totalPages } = await getMdxFrontmatters('note')

  return {
    paths: Array.from({ length: totalPages })
      .map((_elem, index) => index + 1)
      .map((page: number) => ({ params: { page: page.toString() } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getMdxFrontmatters('note')

  return {
    props: {
      pagination: {
        page: Number(context.params!.page),
        totalPages: data.totalPages,
      },
      frontmatters: data.frontmatters,
    },
  }
}

const NotesWithPagination: NextPage = ({
  pagination,
  frontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <NotesLayout pagination={pagination} frontmatters={frontmatters} />
)

export default NotesWithPagination
