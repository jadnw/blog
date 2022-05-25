import { useState } from 'react'
import Link from 'next/link'

import Logo from '@/assets/svgr/logo.svg'
import NavLink from '@/layouts/NavLink'
import DarkModeButton from '@/layouts/DarkModeButton'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <header className="relative text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 z-50">
      <div className="mx-auto py-4 sm:py-8 px-4 lg:px-0 w-full lg:px-4 lg:px-0 w-full lg:w-wrapper flex items-center">
        <Link href="/">
          <a className="flex items-center space-x-4 font-heading font-extrabold text-2xl md:text-3xl">
            <Logo className="w-6 md:w-8 h-6 md:h-8" />
            <span>Jaden.Wu</span>
          </a>
        </Link>
        <nav
          className={`absolute sm:relative top-full ml-0 sm:ml-auto w-full sm:w-auto ${
            navOpen ? 'left-0' : '-left-full'
          } h-screen sm:h-auto font-sans font-medium text-xl sm:text-sm md:text-base bg-ink-900 sm:bg-ink-800 overflow-hidden duration-200`}
        >
          <ul className="flex flex-col sm:flex-row items-center">
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="/tags">Tags</NavLink>
            </li>
            <li>
              <NavLink href="/notes">Notes</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <DarkModeButton />
        <button className="p-2 block sm:hidden" onClick={toggleNav}>
          <div className="relative w-6 h-4">
            <span
              className={`absolute left-0 ${
                navOpen ? 'top-1/2 rotate-45 -translate-y-1/2' : 'top-0'
              } w-full h-0.5 block bg-ink-100 rounded duration-200`}
            >
              &nbsp;
            </span>
            <span
              className={`absolute left-0 ${
                navOpen ? 'bottom-1/2 -rotate-45 translate-y-1/2' : 'bottom-0'
              } w-full h-0.5 block bg-ink-100 rounded duration-200`}
            >
              &nbsp;
            </span>
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header
