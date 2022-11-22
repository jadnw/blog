interface TypoProps {
  text: string
  children?: React.ReactNode
}

const Typo = ({ text, children }: TypoProps) => (
  <div className="flex items-end justify-between space-x-4 border-b border-ink-300 pb-2 dark:border-ink-700">
    <h1 className="text-2xl font-bold xs:text-3xl sm:text-4xl">{text}</h1>
    <div>{children ?? ' '}</div>
  </div>
)

export default Typo
