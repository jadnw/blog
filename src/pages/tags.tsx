import { useState } from 'react'
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import Layout from '@/layouts/Layout'
import Typography from '@/components/Typography'
import SearchField from '@/components/SearchField'
import TagGrid from '@/components/TagGrid'

import { getPostTags } from '@/lib/mdx'
import type { Tag } from '../types'

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
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [keyword, setKeyword] = useState('')
  const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const populatedTags =
    keyword !== ''
      ? tags.filter(({ label }: Tag) =>
          label.toLowerCase().includes(keyword.toLowerCase()),
        )
      : tags

  const ResultSection = () =>
    populatedTags.length > 0 ? (
      <TagGrid tags={populatedTags} />
    ) : (
      <div className="mt-12 text-center">No tags found</div>
    )

  return (
    <Layout title="Tags | Jaden Wu">
      <section className="mx-auto py-12 px-4 lg:px-0 w-full lg:w-wrapper">
        <Typography text="Tags">
          <SearchField
            placeholder="Search tags ..."
            value={keyword}
            handler={onSearchFieldChange}
          />
        </Typography>
        <ResultSection />
      </section>
    </Layout>
  )
}

export default Tags
