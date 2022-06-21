import DevIcon from '@/components/DevIcon'

const CodeTitle = ({ ...props }) => (
  <div
    className={`${props.className} relative mt-4 -mb-5 px-4 py-1.5 flex items-baseline bg-pre text-sm font-medium text-ink-300 space-x-2 rounded-tl rounded-tr border-b border-ink-600 select-none z-10`}
  >
    <DevIcon filename={props.children} colored />
    <span>{props.children}</span>
  </div>
)

export default CodeTitle
