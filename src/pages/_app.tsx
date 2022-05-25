import { ThemeProvider } from 'next-themes'

import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import '@/styles/gemstones-emerald.css'
import { siteMetadata } from '@/lib/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
