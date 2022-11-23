const devicons = {
  babel: 'babel-plain',
  bash: 'bash-plain',
  cpp: 'cplusplus-plain',
  css: 'css3-plain',
  dart: 'dart-plain',
  docker: 'docker-plain',
  eslint: 'eslint-original',
  javascript: 'javascript-plain',
  jest: 'jest-plain',
  gatsby: 'gatsby-plain',
  graphql: 'graphql-plain',
  html: 'html5-plain',
  less: 'less-plain-wordmark',
  lua: 'lua-plain',
  next: 'nextjs-original',
  npm: 'npm-original-wordmark',
  markdown: 'markdown-original',
  python: 'python-plain',
  sass: 'sass-original',
  solidity: 'solidity-plain',
  react: 'react-original',
  typescript: 'typescript-plain',
  webpack: 'webpack-plain',
  vim: 'vim-plain',
  vue: 'vuejs-plain',
}

const icons: { [key: string]: string } = {
  'babel.config.json': devicons.babel,
  'babel.config.js': devicons.babel,
  '.babelrc.json': devicons.babel,
  '.babelrc.js': devicons.babel,
  '.sh': devicons.bash,
  '.fish': devicons.bash,
  '.cpp': devicons.cpp,
  '.cxx': devicons.cpp,
  '.hpp': devicons.cpp,
  '.hxx': devicons.cpp,
  '.css': devicons.css,
  '.dart': devicons.dart,
  'docker.compose.yml': devicons.docker,
  'docker.compose.yaml': devicons.docker,
  '.dockercomposeignore': devicons.docker,
  '.eslintrc.js': devicons.eslint,
  '.eslintrc.cjs': devicons.eslint,
  '.eslintrc.yaml': devicons.eslint,
  '.eslintrc.yml': devicons.eslint,
  '.eslintrc.json': devicons.eslint,
  '.eslintignore': devicons.eslint,
  '.js': devicons.javascript,
  'jest.config.js': devicons.jest,
  'jest.config.ts': devicons.jest,
  'gatsby-config.js': devicons.gatsby,
  '.graphql': devicons.graphql,
  '.html': devicons.html,
  '.less': devicons.less,
  '.lua': devicons.lua,
  'next.config.js': devicons.next,
  'package.json': devicons.npm,
  'package-lock.json': devicons.npm,
  'yarn.lock': devicons.npm,
  'pnpm-lock.yaml': devicons.npm,
  '.mdx': devicons.markdown,
  '.md': devicons.markdown,
  '.py': devicons.python,
  '.ts': devicons.typescript,
  'webpack.config.js': devicons.webpack,
  '.vim': devicons.vim,
  '.vue': devicons.vue,
  '.sol': devicons.solidity,
}

const devicon = (filename: string) => {
  const className = 'devicon-'
  const specificFilenameIcon = icons[filename]

  if (specificFilenameIcon) {
    return className + specificFilenameIcon
  }

  const ext = filename.split('.').pop()
  const iconByExt = icons['.' + ext]

  if (iconByExt) {
    return className + iconByExt
  }

  return null
}

export default devicon
