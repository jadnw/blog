import DevIcon from '@/components/DevIcon'

const CodeTitle = ({ ...props }) => (
  <div
    className={`${props.className} mt-4 -mb-4 flex items-baseline space-x-2 italic`}
  >
    <DevIcon filename={props.children} colored />
    <span>{props.children}</span>
  </div>
)

export default CodeTitle
