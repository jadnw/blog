export default {
  metadata: {
    name: 'Jaden Blog',
    title: 'Jaden Blog',
    author: 'Jaden Wu',
    description: 'Yet another programming blog you can found on the Internet.',
    keywords: 'HTML, CSS, JavaScript, Nextjs, Reactjs, Neovim, Programming',
    meta: {
      og: { type: 'website', image: '' },
      twitter: {
        card: 'summary',
        author: '@jadnw',
      },
      canonicalUrl: '',
    },
    lang: 'en',
    locale: 'en-US',
    url: 'https://jadnw.vercel.app',
    repository: 'https://github.com/jadnw/posts',
    logo: '/favicon.ico',
    email: 'jadenwu137@protonmail.com',
    portfolio: 'https://jadnw.github.io',
    github: 'https://github.com/jadnw',
    facebook: 'https://facebook.com/jadnw',
    twitter: 'https://twitter.com/jadnw',
    discord: 'https://discord.com/jadnw',
  },
  pageSize: process.env.PAGE_SIZE ? Number(process.env.PAGE_SIZE) : 2,
  sendinblue: {
    endpoint: process.env.NEXT_PUBLIC_SENDINBLUE_ENDPOINT ?? '',
    apiKey: process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY ?? '',
  },
  comments: {
    url: 'https://giscus.app/client.js',
    id: 'comments',
    repo: process.env.NEXT_PUBLIC_GITHUB_REPOSITORY ?? '',
    repoId: process.env.NEXT_PUBLIC_GITHUB_REPOSITORY_ID ?? '',
    category: process.env.NEXT_PUBLIC_GITHUB_DISCUSSION_CATEGORY ?? '',
    categoryId: process.env.NEXT_PUBLIC_GITHUB_DISCUSSION_CATEGORY_ID ?? '',
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
