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
  const populatedFrontmatters = getItemsByPage(frontmatters, pagination.page)
  return (
    <Layout title={title}>
      <section className="mx-auto py-12 w-wrapper">
        <Typography text={title}>
          {searchFieldVisible ? (
            <SearchField
              placeholder="Search posts ..."
              value=""
              handler={() => {}}
            />
          ) : (
            <div>&nbsp;</div>
          )}
        </Typography>
        <Grid frontmatters={populatedFrontmatters} />
        <Pagination route={route} pagination={pagination} />
      </section>
    </Layout>
  )
}

export default PostListLayout
