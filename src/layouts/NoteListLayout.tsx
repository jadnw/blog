import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import Grid from '@/components/Grid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getItemsByPage } from '@/lib/utils'
import type { PaginatedFrontmatters } from '../types'

type NoteListLayoutProps = PaginatedFrontmatters

const NoteListLayout = ({ pagination, frontmatters }: NoteListLayoutProps) => {
  const populatedFrontmatters = getItemsByPage(frontmatters, pagination.page)
  return (
    <Layout title="Notes | Jaden Wu">
      <section className="mx-auto py-12 w-wrapper">
        <Typography text="Notes">
          <SearchField
            placeholder="Search notes ..."
            value=""
            handler={() => {}}
          />
        </Typography>
        <Grid type="notes" frontmatters={populatedFrontmatters} />
        <Pagination route="notes" pagination={pagination} />
      </section>
    </Layout>
  )
}

export default NoteListLayout
