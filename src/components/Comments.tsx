import { useState, useEffect, useCallback } from 'react'
import { useTheme } from 'next-themes'

import { siteMetadata } from '@/lib/config'

const Comments = () => {
  const [enabled, setEnabled] = useState(true)
  const { theme, resolvedTheme } = useTheme()
  const commentsTheme =
    theme === 'dark' || resolvedTheme === 'dark'
      ? siteMetadata.comments.theme.dark
      : siteMetadata.comments.theme.light

  const loadComments = useCallback(() => {
    setEnabled(false)

    const comments = document.getElementById(siteMetadata.comments.id)
    if (comments) comments.innerHTML = ''
    const script = document.createElement('script')
    ;(script.src = siteMetadata.comments.url),
      script.setAttribute('repo', siteMetadata.comments.repo)
    script.setAttribute('issue-term', siteMetadata.comments.issueTerm)
    script.setAttribute('label', siteMetadata.comments.label)
    script.setAttribute('theme', commentsTheme)
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
    const iframe = document.querySelector('iframe.utterances-frame')
    if (!iframe) return
    loadComments()
  }, [loadComments])
  return (
    <div className="py-12 text-center text-ink-700 dark:text-ink-300">
      {enabled && <button onClick={loadComments}>Load Comments</button>}
      <div
        className="utterances-frame relative"
        id={siteMetadata.comments.id}
      />
    </div>
  )
}

export default Comments
