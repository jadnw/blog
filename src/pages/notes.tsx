import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import NoteListLayout from '@/layouts/NoteListLayout'

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
  <NoteListLayout pagination={pagination} frontmatters={frontmatters} />
)

export default Notes
