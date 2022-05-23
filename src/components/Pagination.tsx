import Link from 'next/link'

interface PaginationProps {
  page: number
  totalPages: number
  hasNextPage: boolean
}

const Pagination = ({ page, totalPages, hasNextPage }: PaginationProps) => {
  return (
    <div className="flex items-center justify-between text-sm font-semibold">
      <Link href={`/blog/page/${page > 1 ? page - 1 : 1}`}>
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
      <Link href={`/blog/page/${hasNextPage ? page + 1 : page}`}>
        <a
          className={`${
            hasNextPage
              ? 'text-primary-500'
              : 'text-ink-400 line-through pointer-events-none'
          }`}
        >
          Next
        </a>
      </Link>
    </div>
  )
}

export default Pagination
