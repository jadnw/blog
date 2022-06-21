import React from 'react'
import LinkIcon from '@/assets/svgr/link.svg'
import { useHover } from '@/hooks/index'

const headingFontSizes = {
  h1: 'text-2xl md:text-3xl',
  h2: 'text-xl md:text-2xl',
  h3: 'text-lg md:text-xl',
}

interface TypoProps {
  as: 'h1' | 'h2' | 'h3'
  id: string
  children: React.ReactNode
}

const Typo = ({ as, id, children }: TypoProps) => {
  const [hoverRef, isHovered] = useHover<HTMLHeadingElement>()

  return (
    <h1
      ref={hoverRef}
      className={`relative mt-8 mb-2 font-bold ${headingFontSizes[as]} scroll-mt-4`}
      id={id}
    >
      {isHovered && (
        <a
          href={`#${id}`}
          className="absolute top-1/2 -left-12 -translate-y-1/2 p-4"
        >
          <LinkIcon className="w-4 h-4" />
        </a>
      )}
      {React.Children.toArray(children)[1]}
    </h1>
  )
}

export default Typo
