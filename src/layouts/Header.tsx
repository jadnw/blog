import Link from 'next/link'

import Logo from '@/assets/svgr/logo.svg'
import NavLink from '@/layouts/NavLink'
import DarkModeButton from '@/layouts/DarkModeButton'

const Header = () => (
  <header className="text-ink-700 dark:text-ink-200 bg-white dark:bg-ink-800">
    <div className="mx-auto py-8 w-wrapper flex items-center justify-between">
      <Link href="/">
        <a className="flex items-center space-x-4 font-heading font-extrabold text-3xl">
          <Logo className="w-10 h-10" />
          <span>Jaden.Wu</span>
        </a>
      </Link>
      <nav className="font-sans font-medium text-base">
        <ul className="flex items-center">
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
          <DarkModeButton />
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
