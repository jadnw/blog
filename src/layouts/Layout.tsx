import Head from 'next/head'

import Header from '@/layouts/Header'
import Subscribe from '@/layouts/Subscribe'
import Footer from '@/layouts/Footer'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

const DEFAULT_TITLE = 'Jaden Wu'
const DEFAULT_DESC = 'Blog'

const Layout = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  children,
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="min-h-screen text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 text-base">
      {children}
    </main>
    <Subscribe />
    <Footer />
  </>
)

export default Layout
