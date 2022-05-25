import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import ContentLayout from '@/layouts/ContentLayout'

import { getSlugs, getMdxBySlug, getAdjacentFrontmatters } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getSlugs('note')

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const note = await getMdxBySlug(context.params!.slug as string, 'note')
  const adjacents = await getAdjacentFrontmatters(
    context.params!.slug as string,
    'note',
  )

  return {
    props: {
      note,
      adjacents,
    },
  }
}

const Note: NextPage = ({
  note,
  adjacents,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <ContentLayout route="notes" post={note} adjacents={adjacents} />
)

export default Note
