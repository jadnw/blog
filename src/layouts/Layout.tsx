import Head from 'next/head'

interface LayoutProps {
  title?: string
  description?: string
  children: React.ReactNode
}

const DEFAULT_TITLE = 'Jaden Wu'
const DEFAULT_DESC = 'Blog'

const Layout = ({ title = DEFAULT_TITLE, description = DEFAULT_DESC, children }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>{children}</main>
  </>
)

export default Layout
