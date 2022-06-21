import { useState } from 'react'

import Layout from '@/layouts/Layout'
import Pagination from '@/components/Pagination'
import Grid from '@/components/Grid'
import SearchField from '@/components/SearchField'
import Typography from '@/components/Typography'

import { getItemsByPage } from '@/lib/utils'
import type { PaginatedFrontmatters } from '../types'

type NoteListLayoutProps = PaginatedFrontmatters

const NoteListLayout = ({ pagination, frontmatters }: NoteListLayoutProps) => {
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
        <Grid type="notes" frontmatters={populatedFrontmatters} />
        <Pagination route="notes" pagination={pagination} />
      </>
    ) : (
      <div className="mt-12 text-center">No notes found</div>
    )

  return (
    <Layout title="Notes">
      <section className="mx-auto py-16 px-4 lg:px-0 w-full lg:w-wrapper">
        <Typography text="Notes">
          <SearchField
            placeholder="Search notes ..."
            value={keyword}
            handler={onSearchFieldChange}
          />
        </Typography>
        <ResultSection />
      </section>
    </Layout>
  )
}

export default NoteListLayout
