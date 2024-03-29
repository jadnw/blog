import { useState } from 'react'
import { IToc } from 'shared/types'

export interface FloatTOCProps {
  toc: IToc[]
  visible: boolean
}

const FloatTOC = ({ toc, visible }: FloatTOCProps) => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div
      className={`fixed bottom-2 z-100 flex w-post flex-col items-stretch rounded border border-ink-400 bg-ink-100 shadow-lg duration-200 dark:border-ink-600 dark:bg-ink-800 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      } shadow-sm`}
    >
      <div
        className={`px-4 leading-loose ${
          dropdown
            ? 'h-auto border-b border-ink-300 py-4 dark:border-ink-700'
            : 'h-0 overflow-hidden pb-0'
        }`}
      >
        <ul>
          {toc.map(({ value, id, depth }) => (
            <li
              key={id}
              className="before:mr-2 before:content-['•']"
              style={{ marginLeft: `${(depth - 2) * 1}rem` }}
            >
              <a
                href={`#${id}`}
                className="duration-200 hover:underline"
                onClick={() => setDropdown(false)}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="px-4 py-2 text-left font-bold uppercase"
        onClick={() => setDropdown(!dropdown)}
      >
        Table of Contents
      </button>
    </div>
  )
}

export default FloatTOC
