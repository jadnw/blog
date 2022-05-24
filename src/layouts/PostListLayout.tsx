import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import Grid from '@/components/Grid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getItemsByPage } from '@/lib/utils'
import type { PaginatedFrontmatters } from '../types'

type PostListLayoutProps = PaginatedFrontmatters

const PostListLayout = ({ pagination, frontmatters }: PostListLayoutProps) => {
  const populatedFrontmatters = getItemsByPage(frontmatters, pagination.page)
  return (
    <Layout title="Blog | Jaden Wu">
      <section className="mx-auto py-12 w-wrapper">
        <Typography text="Blog">
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
