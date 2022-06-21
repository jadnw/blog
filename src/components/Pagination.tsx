import Link from 'next/link'

interface PaginationProps {
  route?: string
  pagination: {
    page: number
    totalPages: number
  }
}

const Pagination = ({
  route = 'blog',
  pagination: { page, totalPages },
}: PaginationProps) => {
  return (
    <div className="flex flex-col">
      <span className="block w-7/12 h-px bg-ink-100 dark:bg-ink-700"></span>
      <div className="py-2 flex items-center justify-between text-sm font-medium">
        <Link href={`/${route}/page/${page > 1 ? page - 1 : 1}`}>
          <a
            className={`px-6 py-1 hover:text-white dark:hover:text-ink-800 hover:bg-secondary-500 hover:dark:bg-primary-400 border border-secondary-500 dark:border-primary-400 rounded ${
              page > 1 ? '' : 'line-through pointer-events-none'
            }`}
          >
            Prev
          </a>
        </Link>
        <span className="font-medium">
          Page {page} of {totalPages}
        </span>
        <Link href={`/${route}/page/${page < totalPages ? page + 1 : page}`}>
          <a
            className={`px-6 py-1 hover:text-white dark:hover:text-ink-800 hover:bg-secondary-500 hover:dark:bg-primary-400 border border-secondary-500 dark:border-primary-400 rounded ${
              page < totalPages ? '' : 'line-through pointer-events-none'
            }`}
          >
            Next
          </a>
        </Link>
      </div>
      <span className="self-end block w-7/12 h-px bg-ink-100 dark:bg-ink-700"></span>
    </div>
  )
}

export default Pagination
