export const ITEMS_PER_PAGE = 6
export const GITHUB_REPO_URL = 'https://github.com/jadnw/blog/main'

export const siteMetadata = {
  title: 'Jaden Wu',
  author: 'Jaden Wu',
  headerTitle: 'Jaden.Wu',
  description: "Jaden Wu's personal programming blog",
  language: 'en-us',
  theme: 'system',
  url: 'https://jadnw.vercel.app',
  repo: 'https://github.com/jadnw/blog',
  logo: '/favicon.ico',
  email: 'jadenwu137@protonmail.com',
  github: 'https:/github.com/jadnw',
  locale: 'en-US',
  comments: {
    url: 'https://utteranc.es/client.js',
    id: 'comments',
    repo: process.env.NEXT_PUBLIC_REPO ?? 'jadnw/blog',
    issueTerm: 'pathname',
    label: 'Comments',
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
}
