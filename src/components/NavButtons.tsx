import Link from 'next/link'

import AnglesUp from '@/assets/svgr/angles-up.svg'
import Bars from '@/assets/svgr/bars.svg'

const NavButtons = () => (
  <aside className="fixed bottom-4 right-4 flex flex-col space-y-2 opacity-50 md:opacity-100">
    <Link href="#toc">
      <a className="p-2 rounded bg-ink-800 dark:bg-white text-ink-200 dark:text-ink-600">
        <Bars className="w-4 h-4" />
      </a>
    </Link>
    <button
      className="p-2 rounded bg-ink-800 dark:bg-white text-ink-200 dark:text-ink-600"
      onClick={() => scrollTo({ top: 0 })}
    >
      <AnglesUp className="w-4 h-4" />
    </button>
  </aside>
)

export default NavButtons
