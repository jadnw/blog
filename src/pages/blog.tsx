import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import Layout from '@/layouts/Layout'
import PostGrid from '@/components/PostGrid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getMdxFrontmatters } from '@/lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  const frontmatters = await getMdxFrontmatters()

  return {
    props: {
      frontmatters,
    },
  }
}

const Blog: NextPage = ({
  frontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Blog | Jaden Wu">
    <section className="mx-auto py-12 w-wrapper">
      <Typography text="Blog">
        <SearchField
          placeholder="Search Posts ..."
          value=""
          handler={() => {}}
        />
      </Typography>
      <PostGrid frontmatters={frontmatters} />
    </section>
  </Layout>
)

export default Blog
