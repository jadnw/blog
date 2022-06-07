import { useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'

import { siteMetadata } from '@/lib/config'

const Comments = () => {
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme =
    theme === 'dark' || resolvedTheme === 'dark'
      ? siteMetadata.comments.theme.dark
      : siteMetadata.comments.theme.light

  const loadComments = useCallback(() => {
    const comments = document.getElementById(siteMetadata.comments.id)
    if (comments) comments.innerHTML = ''
    const script = document.createElement('script')
    script.src = siteMetadata.comments.url
    script.setAttribute('data-repo', siteMetadata.comments.repo!)
    script.setAttribute('data-repo-id', siteMetadata.comments.repoId!)
    script.setAttribute('data-category', siteMetadata.comments.category!)
    script.setAttribute('data-category-id', siteMetadata.comments.categoryId!)
    script.setAttribute('data-mapping', siteMetadata.comments.mapping)
    script.setAttribute(
      'data-reactions-enabled',
      siteMetadata.comments.reactionsEnabled ? '1' : '0',
    )
    script.setAttribute(
      'data-emit-metadata',
      siteMetadata.comments.emitMetadata ? '1' : '0',
    )
    script.setAttribute(
      'data-input-position',
      siteMetadata.comments.inputPosition,
    )
    script.setAttribute('data-theme', commentsTheme)
    script.setAttribute('data-lang', siteMetadata.comments.lang)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    comments?.appendChild(script)

    return () => {
      const comments = document.getElementById(siteMetadata.comments.id)

      if (comments) {
        comments.innerHTML = ''
      }
    }
  }, [commentsTheme])

  useEffect(() => {
    loadComments()
  }, [loadComments])
  return (
    <div className="py-12 text-center text-ink-600 dark:text-ink-300">
      <div className="giscus-frame relative" id={siteMetadata.comments.id} />
    </div>
  )
}

export default Comments
