import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import PostLayout from '@/layouts/PostLayout'

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
  <PostLayout route="notes" post={note} />
)

export default Note
