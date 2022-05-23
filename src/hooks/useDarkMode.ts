import { useEffect } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage('darkMode', false)
  const enabled = typeof enabledState !== undefined ? enabledState : false

  const toggle = () => {
    setEnabledState(!enabled)
  }

  useEffect(() => {
    const className = 'dark'
    const elem = document.documentElement

    if (enabled) {
      elem.classList.add(className)
    } else {
      elem.classList.remove(className)
    }
  }, [enabled])

  return [enabled, toggle]
}

export default useDarkMode
