import React from 'react'
import WebLink from 'components/svgs/WebLink'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({ as, id, children }: HeadingProps) => {
  switch (as) {
    case 'h1':
      return (
        <h1 id={id} className="relative mt-8 text-4xl text-teal-600 dark:text-teal-400">
          <a
            href={`#${id}`}
            className="absolute top-1/2 -left-8 block -translate-y-1/2 p-1 opacity-40 duration-200 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
          >
            <WebLink className="h-4 w-4" />
          </a>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 id={id} className="relative mt-6 text-3xl text-teal-600 dark:text-teal-400">
          <a
            href={`#${id}`}
            className="absolute top-1/2 -left-8 block -translate-y-1/2 p-1 opacity-40 duration-200 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
          >
            <WebLink className="h-4 w-4" />
          </a>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 id={id} className="relative mt-4 text-2xl text-teal-600 dark:text-teal-400">
          <a
            href={`#${id}`}
            className="absolute top-1/2 -left-8 block -translate-y-1/2 p-1 opacity-40 duration-200 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
          >
            <WebLink className="h-4 w-4" />
          </a>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 id={id} className="relative mt-4 text-xl text-teal-600 dark:text-teal-400">
          <a
            href={`#${id}`}
            className="absolute top-1/2 -left-8 block -translate-y-1/2 p-1 opacity-40 duration-200 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
          >
            <WebLink className="h-4 w-4" />
          </a>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 id={id} className="relative mt-4 text-lg text-teal-600 dark:text-teal-400">
          <a
            href={`#${id}`}
            className="absolute top-1/2 -left-8 block -translate-y-1/2 p-1 opacity-40 duration-200 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
          >
            <WebLink className="h-4 w-4" />
          </a>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 id={id} className="relative mt-4 text-base text-teal-600 dark:text-teal-400">
          <a
            href={`#${id}`}
            className="absolute top-1/2 -left-8 block -translate-y-1/2 p-1 opacity-40 duration-200 hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
          >
            <WebLink className="h-4 w-4" />
          </a>
          {children}
        </h6>
      )
  }
}

export default Heading
