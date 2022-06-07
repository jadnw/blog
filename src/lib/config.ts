export const ITEMS_PER_PAGE = 6
export const GITHUB_REPO_URL = 'https://github.com/jadnw/blog/blob/main'
import {
  GITHUB_REPO,
  GITHUB_REPO_ID,
  GITHUB_DISCUSSION_CATEGORY,
  GITHUB_DISCUSSION_CATEGORY_ID,
} from '@/lib/secrets'

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
  portfolio: 'https://jadnw.github.io',
  twitter: 'https://twitter.com/jadnw',
  github: 'https:/github.com/jadnw',
  locale: 'en-US',
  comments: {
    url: 'https://giscus.app/client.js',
    id: 'comments',
    repo: GITHUB_REPO,
    repoId: GITHUB_REPO_ID,
    category: GITHUB_DISCUSSION_CATEGORY,
    categoryId: GITHUB_DISCUSSION_CATEGORY_ID,
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    lang: 'en',
    theme: {
      light: 'light',
      dark: 'transparent_dark',
    },
  },
}
