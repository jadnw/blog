'use client'

import Link from 'next/link'

import Logo from 'components/svgs/Logo'
import Nav from './Nav'
import Sun from 'components/svgs/Sun'
import Moon from 'components/svgs/Moon'

import { useDarkMode } from 'hooks'

const Header = () => {
  const [darkModeEnabled, toggleDarkModeEnabled] = useDarkMode()
  return (
    <header className="h-16 border-b border-ink-200 dark:border-ink-800">
      <div className="mx-auto flex h-full w-wrapper items-center justify-between">
        <Link href="/">
          <Logo className="h-8 w-8" />
        </Link>
        <Nav />
        <div className="flex items-center space-x-2">
          <button onClick={toggleDarkModeEnabled as () => void}>
            <span className={`block ${darkModeEnabled ? 'rotate-180' : 'rotate-0'} duration-200`}>
              {darkModeEnabled ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
