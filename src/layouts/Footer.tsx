import Link from 'next/link'

import Logo from '@/assets/svgr/logo.svg'

const Footer = () => (
  <footer className="text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 border-t border-ink-300 dark:border-ink-600">
    <div className="mx-auto py-4 px-4 lg:px-0 w-full lg:w-wrapper flex items-center justify-center xs:justify-between">
      <Link href="/">
        <a className="hidden xs:block">
          <Logo className="w-6 h-6" />
        </a>
      </Link>
      <span className="text-ink-500 dark:text-ink-300">
        Created by Jaden Wu with 🔥 &bull; &copy; 2022
      </span>
    </div>
  </footer>
)

export default Footer
