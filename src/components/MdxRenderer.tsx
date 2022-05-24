import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import Pre from '@/components/mdx/Pre'
import Paragraph from '@/components/mdx/Paragraph'
import Typo from '@/components/mdx/Typo'
import Ul from '@/components/mdx/Ul'

const components = {
  h1: (props: any) => <Typo as="h1" {...props} />,
  h2: (props: any) => <Typo as="h2" {...props} />,
  h3: (props: any) => <Typo as="h3" {...props} />,
  p: Paragraph,
  ul: Ul,
  pre: Pre,
}

const MdxRenderer = ({ code }: { code: string }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return <Component components={components} code={code} />
}

export default MdxRenderer
