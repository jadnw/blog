import Link from 'next/link'
import { IPaginate, IFrontMatter } from 'shared/types'

export interface PaginationProps {
  path?: string
  metadata: IPaginate<IFrontMatter>['metadata']
}

const Pagination = ({
  path = '/posts',
  metadata: { count, page, pagesCount, pageSize, hasNext, hasPrev },
}: PaginationProps) =>
  pagesCount > 1 ? (
    <div className="flex items-center justify-between">
      <Link
        href={`${path}/page/${page - 1}`}
        className={`rounded border border-ink-400 px-6 py-1 dark:border-ink-600 dark:bg-ink-800 ${
          hasPrev
            ? 'pointer-events-auto opacity-100 hover:bg-ink-200 dark:hover:bg-ink-700'
            : 'pointer-events-none line-through opacity-60'
        } duration-200`}
      >
        Prev
      </Link>
      <span>
        {pageSize * (page - 1) + 1}
        {pageSize * page <= count ? ` - ${pageSize * page}` : ''}{' '}
        <span className="text-ink-400 dark:text-ink-600">of</span> {count} posts
      </span>
      <Link
        href={`${path}/page/${page + 1}`}
        className={`rounded border border-ink-400 px-6 py-1 dark:border-ink-600 dark:bg-ink-800 ${
          hasNext
            ? 'pointer-events-auto opacity-100 hover:bg-ink-200 dark:hover:bg-ink-700'
            : 'pointer-events-none line-through opacity-60'
        } duration-200`}
      >
        Next
      </Link>
    </div>
  ) : null

export default Pagination
