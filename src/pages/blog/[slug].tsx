import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import PostLayout from '@/layouts/PostLayout'

import { getSlugs, getMdxBySlug } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getMdxBySlug(context.params!.slug as string)

  return {
    props: {
      post: post,
    },
  }
}

const Post: NextPage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <PostLayout route="posts" post={post} />
)

export default Post
