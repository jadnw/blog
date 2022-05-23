import Moon from '@/assets/svgr/moon.svg'
import SunBright from '@/assets/svgr/sun-bright.svg'

import useDarkMode from '@/hooks/useDarkMode'

const DarkModeButton = () => {
  const [enabled, toggle] = useDarkMode()

  return (
    <button
      className={`px-4 py-1 ${enabled ? 'rotate-90' : 'rotate-0'} duration-200`}
      onClick={toggle}
    >
      {enabled ? (
        <SunBright className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}

export default DarkModeButton
