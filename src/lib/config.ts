export const ITEMS_PER_PAGE = 6
export const GITHUB_REPO_URL = 'https://github.com/jadnw/blog/blob/main'
import { GITHUB_REPO } from '@/lib/secrets'

export const siteMetadata = {
  title: 'Jaden Wu ☆  Programming Blog',
  author: 'Jaden Wu',
  logoText: 'Jaden.Wu',
  description: "Jaden Wu's personal programming blog",
  ogType: 'website',
  ogImage: '',
  twImage: '',
  canonicalUrl: '',
  language: 'en-us',
  theme: 'system',
  url: 'https://jadnw.vercel.app',
  repo: 'https://github.com/jadnw/blog',
  logo: '/favicon.ico',
  email: 'jadenwu137@protonmail.com',
  twitter: 'https://twitter.com/jadnw',
  github: 'https:/github.com/jadnw',
  locale: 'en-US',
  comments: {
    url: 'https://utteranc.es/client.js',
    id: 'comments',
    repo: GITHUB_REPO ?? 'jadnw/blog',
    issueTerm: 'pathname',
    label: 'Comments',
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
}
