import Link from 'next/link'

import Logo from '../assets/svgr/logo.svg'
import Moon from '../assets/svgr/moon.svg'
import NavLink from './NavLink'

const Header = () => (
  <header className="text-ink-700">
    <div className="mx-auto py-8 w-wrapper flex items-center justify-between">
      <Link href="/">
        <a className="flex items-center space-x-4 font-heading font-extrabold text-3xl">
          <Logo className="w-10 h-10" />
          <span>Jaden.Wu</span>
        </a>
      </Link>
      <nav className="font-sans font-medium">
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
          <button>
            <Moon className="w-5 h-5" />
          </button>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
