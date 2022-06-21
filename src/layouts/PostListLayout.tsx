import { useState } from 'react'

import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import Grid from '@/components/Grid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getItemsByPage } from '@/lib/utils'
import type { PaginatedFrontmatters } from '../types'

type PostListLayoutProps = PaginatedFrontmatters & {
  route: string
  title?: string
  searchFieldVisible?: boolean
}

const PostListLayout = ({
  route = 'blog',
  title = 'Blog',
  searchFieldVisible = true,
  pagination,
  frontmatters,
}: PostListLayoutProps) => {
  const [keyword, setKeyword] = useState('')
  const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  const paginatedFrontmatters = getItemsByPage(frontmatters, pagination.page)
  const foundFrontmatters = frontmatters.filter((fm) =>
    fm.title.toLowerCase().includes(keyword.toLowerCase()),
  )
  const populatedFrontmatters =
    keyword !== '' ? foundFrontmatters : paginatedFrontmatters

  const ResultSection = () =>
    populatedFrontmatters.length > 0 ? (
      <>
        <Grid frontmatters={populatedFrontmatters} />
        <Pagination route={route} pagination={pagination} />
      </>
    ) : (
      <div className="mt-12 text-center">No posts found</div>
    )

  return (
    <Layout title={title}>
      <section className="mx-auto py-16 px-4 lg:px-0 w-full lg:w-wrapper">
        <Typography text={title}>
          {searchFieldVisible ? (
            <SearchField
              placeholder="Search posts ..."
              value={keyword}
              handler={onSearchFieldChange}
            />
          ) : (
            <div>&nbsp;</div>
          )}
        </Typography>
        <ResultSection />
      </section>
    </Layout>
  )
}

export default PostListLayout
