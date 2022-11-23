'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Anchor from 'components/mdx/Anchor'
import Heading from 'components/mdx/Heading'
import Img from 'components/mdx/Img'
import Paragraph from 'components/mdx/Paragraph'
import Quote from 'components/mdx/Quote'
import Code from 'components/mdx/Code'
import Pre from 'components/mdx/Pre'
import 'styles/aesthetic.css'
import CodeTitle from 'components/mdx/CodeTitle'
import UnorderedList from 'components/mdx/UnorderedList'
import OrderedList from 'components/mdx/OrderedList'
import CodeSandbox from 'components/mdx/CodeSandbox'
import Youtube from 'components/mdx/Youtube'

export interface MDXRemoteRendererProps {
  source: MDXRemoteSerializeResult
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h1" {...props} />,
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h2" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h3" {...props} />,
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h4" {...props} />,
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h5" {...props} />,
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => <Heading as="h6" {...props} />,
  p: Paragraph,
  a: Anchor,
  blockquote: Quote,
  img: Img,
  code: Code,
  pre: Pre,
  div: (props: React.HTMLAttributes<HTMLDivElement>) =>
    props.className?.includes('rehype-code-title') ? <CodeTitle {...props} /> : <div {...props} />,
  ul: UnorderedList,
  ol: OrderedList,
  CodeSandbox,
  Youtube,
}

const MDXRemoteRenderer = ({ source }: MDXRemoteRendererProps) => (
  <MDXRemote {...source} components={components} />
)

export default MDXRemoteRenderer
