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
      <a className="p-4">{children}</a>
    </Link>
  )
}

export default NavLink
