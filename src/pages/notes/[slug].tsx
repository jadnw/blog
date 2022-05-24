import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import ContentLayout from '@/layouts/ContentLayout'

import { getSlugs, getMdxBySlug } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getSlugs('note')

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const note = await getMdxBySlug(context.params!.slug as string, 'note')

  return {
    props: {
      note,
    },
  }
}

const Note: NextPage = ({
  note,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <ContentLayout route="notes" post={note} />
)

export default Note
