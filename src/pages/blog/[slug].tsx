import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import ContentLayout from '@/layouts/ContentLayout'

import { getSlugs, getMdxBySlug, getAdjacentFrontmatters } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getMdxBySlug(context.params!.slug as string)
  const adjacents = await getAdjacentFrontmatters(
    context.params!.slug as string,
  )

  return {
    props: {
      post,
      adjacents,
    },
  }
}

const Post: NextPage = ({
  post,
  adjacents,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <ContentLayout route="blog" post={post} adjacents={adjacents} />
)

export default Post
