import { useState } from 'react'
import Link from 'next/link'

import CaretDown from '@/assets/svgr/caret-down.svg'
import type { TocHeading } from '../types'

interface TocProps {
  toc: TocHeading[]
}

const Toc = ({ toc }: TocProps) => {
  const [tocDropdown, setTocDropdown] = useState(false)
  const toggleToc = () => {
    setTocDropdown(!tocDropdown)
  }

  return (
    <div id="toc" className="my-4 bg-ink-100 dark:bg-ink-700 rounded">
      <button
        className="w-full px-4 py-2 flex items-center space-x-2 font-bold text-base text-ink-800 dark:text-white"
        onClick={toggleToc}
      >
        <CaretDown
          className={`w-5 h-5 ${tocDropdown ? 'rotate-180' : ''} duration-200`}
        />
        <span>Table of Contents</span>
      </button>
      <div
        className={`${
          tocDropdown ? 'px-6 py-4 pt-0 h-auto' : 'p-0 h-0'
        } overflow-hidden leading-relaxed`}
      >
        <ul>
          {toc.map(({ value, id, depth }) => (
            <li
              key={id}
              className="before:content-['•'] before:mr-2"
              style={{ marginLeft: `${(depth - 2) * 1}rem` }}
            >
              <Link href={`#${id}`}>
                <a className="text-ink-600 dark:text-ink-300 hover:text-primary-500 dark:hover:text-primary-400 hover:underline duration-75">
                  {value}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Toc
