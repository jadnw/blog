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
      <div className="py-2 flex items-center justify-between text-lg font-semibold">
        <Link href={`/${route}/page/${page > 1 ? page - 1 : 1}`}>
          <a
            className={`${
              page > 1
                ? 'text-primary-500'
                : 'text-ink-400 line-through pointer-events-none'
            }`}
          >
            Prev
          </a>
        </Link>
        <span>
          Page {page} of {totalPages}
        </span>
        <Link href={`/${route}/page/${page < totalPages ? page + 1 : page}`}>
          <a
            className={`${
              page < totalPages
                ? 'text-primary-500'
                : 'text-ink-400 line-through pointer-events-none'
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
