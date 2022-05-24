import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import Layout from '@/layouts/Layout'
import Typography from '@/components/Typography'
import SearchField from '@/components/SearchField'
import TagGrid from '@/components/TagGrid'

import { getPostTags } from '@/lib/mdx'

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getPostTags()

  return {
    props: {
      tags,
    },
  }
}

const Tags: NextPage = ({
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Tags | Jaden Wu">
    <section className="mx-auto py-12 w-wrapper">
      <Typography text="Tags">
        <SearchField
          placeholder="Search tags ..."
          value=""
          handler={() => {}}
        />
      </Typography>
      <TagGrid tags={tags} />
    </section>
  </Layout>
)

export default Tags
