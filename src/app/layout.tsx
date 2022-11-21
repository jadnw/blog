import { Noto_Sans_Display } from '@next/font/google'
import localFont from '@next/font/local'
import 'styles/globals.css'

const notoSansDisplay = Noto_Sans_Display({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-noto-sans-display',
})

const jetka = localFont({
  src: [
    {
      path: '../assets/fonts/jetka-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/jetka-italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-jetka',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSansDisplay.variable} ${jetka.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
