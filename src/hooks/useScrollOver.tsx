import { useEffect, useState } from 'react'

export const useScrollOver = (ref: React.RefObject<HTMLElement>) => {
  const [scrollOver, setScrollOver] = useState(false)

  useEffect(() => {
    const listener = () => {
      if (ref.current) {
        const elem = ref.current
        const distance = elem.offsetTop + elem.getBoundingClientRect().height
        if (window.pageYOffset > distance + 20) {
          setScrollOver(true)
        } else {
          setScrollOver(false)
        }
      }
    }
    window.addEventListener('scroll', listener)

    return () => window.removeEventListener('scroll', listener)
  }, [ref])

  return scrollOver
}
