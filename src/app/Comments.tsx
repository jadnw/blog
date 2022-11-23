'use client'
import { useEffect, useCallback } from 'react'

import config from 'lib/config'
import { useDarkMode } from 'hooks'

const Comments = () => {
  const [darkModeEnabled] = useDarkMode()
  const theme = darkModeEnabled ? config.comments.theme.dark : config.comments.theme.light

  const loadComments = useCallback(() => {
    const commentsElem = document.getElementById(config.comments.id)

    if (commentsElem) {
      commentsElem.innerHTML = ''
    }

    const script = document.createElement('script')
    script.src = config.comments.url
    script.setAttribute('data-repo', config.comments.repo)
    script.setAttribute('data-repo-id', config.comments.repoId)
    script.setAttribute('data-category', config.comments.category)
    script.setAttribute('data-category-id', config.comments.categoryId)
    script.setAttribute('data-mapping', config.comments.mapping)
    script.setAttribute('data-reactions-enabled', config.comments.reactionsEnabled ? '1' : '0')
    script.setAttribute('data-emit-metadata', config.comments.emitMetadata ? '1' : '0')
    script.setAttribute('data-input-position', config.comments.inputPosition)
    script.setAttribute('data-theme', theme)
    script.setAttribute('data-lang', config.comments.lang)
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    commentsElem?.appendChild(script)

    return () => {
      if (commentsElem) commentsElem.innerHTML = ''
    }
  }, [theme])

  useEffect(() => {
    loadComments()
  }, [loadComments])

  return (
    <div className="py-24 text-center text-ink-600 dark:text-ink-300">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div id={config.comments.id} className="giscus-frame relative" />
    </div>
  )
}

export default Comments
