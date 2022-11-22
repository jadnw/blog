import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [enabled, setEnabled] = useState(
    typeof localStorage !== 'undefined'
      ? localStorage.theme && localStorage.theme === 'dark'
        ? true
        : false
      : false
  )

  const toggle = () => setEnabled(!enabled)

  useEffect(() => {
    if (
      enabled ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [enabled])

  return [enabled, toggle]
}
