import { useState, useEffect } from 'react'
import Link from 'next/link'

import Logo from '@/assets/svgr/logo.svg'
import NavLink from '@/layouts/NavLink'
import DarkModeButton from '@/layouts/DarkModeButton'

import { siteMetadata } from '@/lib/config'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    const body = document.body
    body.className = navOpen
      ? 'overflow-hidden sm:overflow-auto'
      : 'overflow-auto'
  }, [navOpen])

  return (
    <header className="relative text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 z-50 border-b sm:border-b-0 border-ink-100 dark:border-ink-700">
      <div className="mx-auto py-4 sm:py-8 px-4 lg:px-0 w-full lg:w-wrapper flex items-center">
        <Link href="/">
          <a className="flex items-center space-x-1 sm:space-x-2 font-heading font-extrabold text-xl xs:text-2xl md:text-3xl">
            <Logo className="w-4 xs:w-6 md:w-8" />
            <span>{siteMetadata.logoText}</span>
          </a>
        </Link>
        <nav
          className={`absolute sm:relative top-full ml-0 sm:ml-auto w-full sm:w-auto ${
            navOpen ? 'left-0' : '-left-full sm:left-0'
          } h-screen sm:h-auto font-sans font-medium text-lg xs:text-xl sm:text-base bg-white dark:bg-ink-900 dark:sm:bg-ink-800 overflow-hidden duration-200`}
        >
          <ul className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 divide-ink-100 dark:divide-ink-700">
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
          <div className="relative w-4 xs:w-6 h-3 xs:h-4">
            <span
              className={`absolute left-0 ${
                navOpen ? 'top-1/2 rotate-45 -translate-y-1/2' : 'top-0'
              } w-full h-1 block bg-ink-600 dark:bg-ink-200 rounded-lg duration-200`}
            >
              &nbsp;
            </span>
            <span
              className={`absolute left-0 ${
                navOpen ? 'bottom-1/2 -rotate-45 translate-y-1/2' : 'bottom-0'
              } w-full h-1 block bg-ink-600 dark:bg-ink-200 rounded-lg duration-200`}
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
