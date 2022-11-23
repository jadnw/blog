import devicon from 'lib/devicon'

interface DevIconProps {
  filename: string
  colored?: boolean
}

const DevIcon = ({ filename, colored = true }: DevIconProps) => {
  const getClassName = () => {
    let icon = devicon(filename)
    const coloredFlag = colored ? ' colored' : ''

    if (!icon) {
      icon = 'devicon-devicon-plain'
    }

    return `${icon}${coloredFlag}`
  }

  return <i className={getClassName()}></i>
}

export default DevIcon
