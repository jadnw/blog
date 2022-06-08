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
        className={`px-3 py-4 sm:py-1 border-b-2 ${
          active
            ? ' text-primary-500 dark:text-primary-400 border-primary-500 dark:border-primary-400'
            : 'border-transparent'
        } block`}
      >
        {children}
      </a>
    </Link>
  )
}

export default NavLink
