import { useTheme } from 'next-themes'

import Moon from '@/assets/svgr/moon.svg'
import SunBright from '@/assets/svgr/sun-bright.svg'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme()
  const darkModeEnabled = theme === 'dark'

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      className={`px-4 py-1 ${
        darkModeEnabled ? 'rotate-90' : 'rotate-0'
      } duration-200`}
      onClick={toggleDarkMode}
    >
      {darkModeEnabled ? (
        <SunBright className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}

export default DarkModeButton
