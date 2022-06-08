import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '@/layouts/Header'
import Subscribe from '@/layouts/Subscribe'
import Footer from '@/layouts/Footer'

import { siteMetadata } from '@/lib/config'

interface LayoutProps {
  title?: string
  description?: string
  ogType?: string
  ogImage?: string
  twImage?: string
  canonicalUrl?: string
  children: React.ReactNode
}

const Layout = ({
  title,
  description = siteMetadata.description,
  ogType = siteMetadata.ogType,
  ogImage = siteMetadata.ogImage,
  twImage = siteMetadata.twImage,
  canonicalUrl = siteMetadata.canonicalUrl,
  children,
}: LayoutProps) => {
  const router = useRouter()

  const siteTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`${siteMetadata.url}${router.asPath}`}
        />
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteMetadata.description} />
        {Array.isArray(ogImage) ? (
          ogImage.map(({ url }: { url: string }) => (
            <meta property="og:image" content={url} key={url} />
          ))
        ) : (
          <meta property="og:image" content={ogImage} key={ogImage} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteMetadata.twitter} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={twImage} />
        <link
          rel="canonical"
          href={
            canonicalUrl ? canonicalUrl : `${siteMetadata.url}${router.asPath}`
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 text-lg">
        {children}
      </main>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Layout
