'use client'
import { useRef } from 'react'

import FloatTOC from './FloatTOC'
import type { IToc } from 'shared/types'
import { useScrollOver } from 'hooks'

interface TOCProps {
  toc: IToc[]
}

const TOC = ({ toc }: TOCProps) => {
  const ref = useRef(null)
  const scrollOver = useScrollOver(ref)

  return (
    <>
      <div
        ref={ref}
        id="toc"
        className="my-12 flex flex-col overflow-hidden rounded border border-ink-400 p-4 dark:border-ink-700"
      >
        <div className="py-1 text-xl font-bold uppercase">Table of Contents</div>
        <div className={`leading-loose`}>
          <ul>
            {toc.map(({ value, id, depth }) => (
              <li
                key={id}
                className="before:mr-2 before:content-['•']"
                style={{ marginLeft: `${(depth - 2) * 1}rem` }}
              >
                <a href={`#${id}`} className="duration-200 hover:underline">
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FloatTOC toc={toc} visible={scrollOver} />
    </>
  )
}

export default TOC
