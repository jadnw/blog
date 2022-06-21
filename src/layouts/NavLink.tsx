import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavLinkProps {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const NavLink = ({ href, exact = false, children }: NavLinkProps) => {
  const { pathname } = useRouter()
  const active = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link href={href}>
      <a
        className={`px-4 py-3 sm:py-0.5 ${
          active
            ? ' text-white dark:text-ink-800 bg-secondary-500 dark:bg-primary-400'
            : 'bg-transparent'
        } block text-center sm:text-left rounded-none sm:rounded`}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
