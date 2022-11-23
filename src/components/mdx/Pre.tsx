const Pre = ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
  <pre {...props} className={`${className} mt-4 rounded py-4`} />
)

export default Pre
