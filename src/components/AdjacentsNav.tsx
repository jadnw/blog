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
  <div className="mt-12 py-2 flex flex-col items-stretch space-y-2 border-t border-ink-400 text-ink-500 dark:text-ink-400">
    {prev && (
      <div className="flex items-center justify-between">
        <Link href={`/${route}/${prev.slug}`}>
          <a className="flex items-center font-medium hover:underline hover:text-ink-900 dark:hover:text-white duration-75">
            <ArrowLeft className="w-4 h-4" />
            <span className="ml-2">{prev.title}</span>
          </a>
        </Link>
        <span className="text-ink-400 text-sm">{prev.readingTime}</span>
      </div>
    )}
    {next && (
      <div className="flex items-center justify-between">
        <span className="text-ink-400 text-sm">{next.readingTime}</span>
        <Link href={`/${route}/${next.slug}`}>
          <a className="flex items-center font-medium hover:underline hover:text-ink-900 dark:hover:text-white duration-75">
            <span className="mr-2">{next.title}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </Link>
      </div>
    )}
  </div>
)

export default AdjacentsNav
