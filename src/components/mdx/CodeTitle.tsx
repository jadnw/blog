import DevIcon from 'components/DevIcon'

const CodeTitle = ({ ...props }) => (
  <div
    className={`${props.className} relative z-10 mt-4 -mb-5 flex select-none items-baseline space-x-2 rounded-t border-b border-ink-700 bg-ink-800 px-4 py-1.5 text-sm font-medium text-ink-300`}
  >
    <DevIcon filename={props.children} colored />
    <span>{props.children}</span>
  </div>
)

export default CodeTitle
