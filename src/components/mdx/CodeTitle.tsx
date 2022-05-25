const CodeTitle = ({ ...props }) => (
  <div
    className={`${props.className} mt-4 -mb-4 flex items-baseline space-x-2 italic`}
  >
    <i className="devicon-typescript-plain colored"></i>
    <span>{props.children}</span>
  </div>
)

export default CodeTitle
