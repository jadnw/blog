import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import PostGrid from '@/components/PostGrid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import type { FrontmattersWithPagination } from '../types'

type BlogLayoutProps = FrontmattersWithPagination

const BlogLayout = ({
  page,
  totalPages,
  hasNextPage,
  frontmatters,
}: BlogLayoutProps) => (
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
      <Pagination
        page={page}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
      />
    </section>
  </Layout>
)

export default BlogLayout
