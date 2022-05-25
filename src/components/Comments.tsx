import { useState, useEffect, useCallback } from 'react'

import { siteMetadata } from '@/lib/config'
import useDarkMode from '@/hooks/useDarkMode'

const Comments = () => {
  const [enabled, setEnabled] = useState(true)
  const [darkModeEnabled, _] = useDarkMode()
  const theme = darkModeEnabled
    ? siteMetadata.comments.theme.dark
    : siteMetadata.comments.theme.light

  const loadComments = useCallback(() => {
    setEnabled(false)
    const script = document.createElement('script')
    ;(script.src = siteMetadata.comments.url),
      script.setAttribute('repo', siteMetadata.comments.repo)
    script.setAttribute('issue-term', siteMetadata.comments.issueTerm)
    script.setAttribute('label', siteMetadata.comments.label)
    script.setAttribute('theme', theme)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(siteMetadata.comments.id)
    comments?.appendChild(script)

    return () => {
      const comments = document.getElementById(siteMetadata.comments.id)

      if (comments) {
        comments.innerHTML = ''
      }
    }
  }, [theme])

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
