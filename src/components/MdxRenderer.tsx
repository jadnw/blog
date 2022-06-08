import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import Anchor from '@/components/mdx/Anchor'
import Code from '@/components/mdx/Code'
import CodeSandbox from '@/components/mdx/CodeSandbox'
import CodeTitle from '@/components/mdx/CodeTitle'
import Em from '@/components/mdx/Em'
import Img from '@/components/mdx/Img'
import Pre from '@/components/mdx/Pre'
import Paragraph from '@/components/mdx/Paragraph'
import Typo from '@/components/mdx/Typo'
import Ul from '@/components/mdx/Ul'
import Youtube from '@/components/mdx/Youtube'

const components = {
  h1: (props: any) => <Typo as="h1" {...props} />,
  h2: (props: any) => <Typo as="h2" {...props} />,
  h3: (props: any) => <Typo as="h3" {...props} />,
  p: Paragraph,
  ul: Ul,
  a: Anchor,
  code: Code,
  pre: Pre,
  em: Em,
  div: (props: any) =>
    props.className === 'rehype-code-title' ? (
      <CodeTitle {...props} />
    ) : (
      <div {...props} />
    ),
  img: (props: any) => <Img {...props} />,
  Youtube,
  CodeSandbox,
}

const MdxRenderer = ({ code }: { code: string }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return <Component components={components} code={code} />
}

export default MdxRenderer
