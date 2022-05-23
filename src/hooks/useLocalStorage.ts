import { useState } from 'react'

const useLocalStorage = (
  key: string,
  initialValue: string | number | boolean,
) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window == 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.log(err)
      return initialValue
    }
  })

  const setValue = (
    value: string | number | boolean | ((value: string) => void),
  ) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (typeof window !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (err) {
      console.log(err)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
