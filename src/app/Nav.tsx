'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavLinkProps {
  href: string
  active?: boolean
  children: React.ReactNode
}

const NavLink = ({ href, active = false, children }: NavLinkProps) => (
  <li>
    <Link
      href={href}
      className={`px-6 py-1.5 ${
        active ? 'bg-ink-700 text-white dark:bg-ink-800' : 'hover:text-ink-900 dark:text-white'
      } rounded duration-200`}
    >
      {children}
    </Link>
  </li>
)

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex items-center">
        <NavLink href="/" active={pathname === '/'}>
          Home
        </NavLink>
        <NavLink href="/posts" active={pathname?.startsWith('/posts')}>
          Posts
        </NavLink>
        <NavLink href="/notes" active={pathname?.startsWith('/notes')}>
          Notes
        </NavLink>
        <NavLink href="/tags" active={pathname?.startsWith('/tags')}>
          Tags
        </NavLink>
        <NavLink href="/contact" active={pathname?.startsWith('/contact')}>
          Contact
        </NavLink>
      </ul>
    </nav>
  )
}

export default Nav
