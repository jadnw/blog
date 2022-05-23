import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import NotesLayout from '@/layouts/NotesLayout'

import { getMdxFrontmatters } from '@/lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getMdxFrontmatters('note')

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

const Notes: NextPage = ({
  pagination,
  frontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <NotesLayout pagination={pagination} frontmatters={frontmatters} />
)

export default Notes
