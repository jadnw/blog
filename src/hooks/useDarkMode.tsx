import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const [enabled, setEnabled] = useState(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem('theme') === 'dark'
        ? true
        : false
      : false
  )

  const toggle = () => setEnabled(!enabled)

  useEffect(() => {
    setMounted(true)
    if (enabled) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }, [enabled])

  return [mounted ? enabled : false, toggle]
}
