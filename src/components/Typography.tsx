interface TypographyProps {
  text: string
  children?: React.ReactNode
}

const Typography = ({ text, children }: TypographyProps) => (
  <div className="pb-2 flex items-end justify-between border-b border-ink-300">
    <h1 className="font-heading text-4xl font-bold">{text}</h1>
    <div>{children ?? ' '}</div>
  </div>
)

export default Typography
