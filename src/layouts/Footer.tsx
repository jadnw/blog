import Link from 'next/link'

import Logo from '@/assets/svgr/logo.svg'

const Footer = () => (
  <footer className="text-ink-600 border-t border-ink-300">
    <div className="mx-auto py-4 w-wrapper flex items-center justify-between">
      <Link href="/">
        <a>
          <Logo className="w-6 h-6" />
        </a>
      </Link>
      <span className="text-ink-500">Jaden Wu &bull; &copy; 2022</span>
    </div>
  </footer>
)

export default Footer
