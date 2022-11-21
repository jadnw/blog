'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface MDXRemoteRendererProps {
  source: MDXRemoteSerializeResult
}

const MDXRemoteRenderer = ({ source }: MDXRemoteRendererProps) => <MDXRemote {...source} />

export default MDXRemoteRenderer
