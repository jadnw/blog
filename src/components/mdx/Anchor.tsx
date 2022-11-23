const Anchor = (props: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    className="text-teal-600 duration-200 hover:underline dark:text-teal-400"
    target="_blank"
    rel="noreferrer"
    {...props}
  />
)

export default Anchor
