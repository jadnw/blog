import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from 'next'

import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import PostGrid from '@/components/PostGrid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getTotalPages, getMdxFrontmattersWithPagination } from '@/lib/mdx'

export const getStaticPaths: GetStaticPaths = async () => {
  const totalPages = await getTotalPages()

  return {
    paths: Array.from({ length: totalPages })
      .map((_elem, index) => index + 1)
      .map((page: number) => ({ params: { page: page.toString() } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getMdxFrontmattersWithPagination(
    context.params!.page as string,
  )

  return {
    props: {
      ...data,
    },
  }
}

const Blog: NextPage = ({
  page,
  totalPages,
  hasNextPage,
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
      <Pagination
        page={page}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
      />
    </section>
  </Layout>
)

export default Blog
