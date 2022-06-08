interface CodeSandboxProps {
  sandbox: string
  title?: string
  view?: 'both' | 'preview' | 'editor'
}

const CodeSandbox = ({
  sandbox,
  title = 'Code Sandbox',
  view = 'both',
}: CodeSandboxProps) => {
  const getViewQuery = () => {
    if (view === 'preview') {
      return '&view=preview'
    }

    if (view === 'editor') {
      return '&view=editor'
    }

    return ''
  }

  return (
    <iframe
      className="py-4 w-full aspect-[16/9]"
      src={`https://codesandbox.io/embed/${sandbox}?fontsize=14&hidenavigation=1&theme=dark${getViewQuery()}`}
      title={title}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  )
}

export default CodeSandbox
