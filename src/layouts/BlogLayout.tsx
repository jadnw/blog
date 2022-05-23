import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import PostGrid from '@/components/PostGrid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getItemsByPage } from '@/lib/utils'
import type { PaginatedFrontmatters } from '../types'

type BlogLayoutProps = PaginatedFrontmatters

const BlogLayout = ({ pagination, frontmatters }: BlogLayoutProps) => {
  const populatedFrontmatters = getItemsByPage(frontmatters, pagination.page)
  return (
    <Layout title="Blog | Jaden Wu">
      <section className="mx-auto py-12 w-wrapper">
        <Typography text="Blog">
          <SearchField
            placeholder="Search Posts ..."
            value=""
            handler={() => {}}
          />
        </Typography>
        <PostGrid frontmatters={populatedFrontmatters} />
        <Pagination pagination={pagination} />
      </section>
    </Layout>
  )
}

export default BlogLayout
