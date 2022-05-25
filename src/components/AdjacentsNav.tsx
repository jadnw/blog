import Link from 'next/link'

import ArrowLeft from '@/assets/svgr/arrow-left.svg'
import ArrowRight from '@/assets/svgr/arrow-right.svg'

import type { Adjacents } from '../types'

type AdjacentsNavProps = {
  route: string
  adjacents: Adjacents
}

const AdjacentsNav = ({
  route,
  adjacents: { prev, next },
}: AdjacentsNavProps) => (
  <div className="mt-16 py-2 flex flex-col items-start border-t border-b border-ink-400 text-ink-600 dark:text-ink-400 text-sm leading-normal">
    {prev && (
      <div className="flex items-center space-x-2">
        <Link href={`/${route}/${prev.slug}`}>
          <a className="py-1 flex items-center font-medium hover:underline hover:text-ink-900 dark:hover:text-white duration-75">
            <ArrowLeft className="w-4 h-4" />
            <span className="ml-2">{prev.title}</span>
          </a>
        </Link>
        <span className="hidden sm:inline text-ink-400 dark:text-ink-500">
          ({prev.readingTime})
        </span>
      </div>
    )}
    {prev && next && (
      <span className="block w-1/2 h-px translate-x-1/2 bg-ink-100 dark:bg-ink-700">
        &nbsp;
      </span>
    )}
    {next && (
      <div className="self-end flex items-center space-x-2">
        <span className="hidden sm:inline text-ink-400 dark:text-ink-500">
          ({next.readingTime})
        </span>
        <Link href={`/${route}/${next.slug}`}>
          <a className="py-1 flex items-center font-medium hover:underline hover:text-ink-900 dark:hover:text-white duration-75">
            <span className="mr-2">{next.title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Link>
      </div>
    )}
  </div>
)

export default AdjacentsNav
