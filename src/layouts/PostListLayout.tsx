import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import Grid from '@/components/Grid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getItemsByPage } from '@/lib/utils'
import type { PaginatedFrontmatters } from '../types'

type PostListLayoutProps = PaginatedFrontmatters & {
  title?: string
}

const PostListLayout = ({
  title = 'Blog',
  pagination,
  frontmatters,
}: PostListLayoutProps) => {
  const populatedFrontmatters = getItemsByPage(frontmatters, pagination.page)
  return (
    <Layout title={title}>
      <section className="mx-auto py-12 w-wrapper">
        <Typography text={title}>
          <SearchField
            placeholder="Search posts ..."
            value=""
            handler={() => {}}
          />
        </Typography>
        <Grid frontmatters={populatedFrontmatters} />
        <Pagination pagination={pagination} />
      </section>
    </Layout>
  )
}

export default PostListLayout
