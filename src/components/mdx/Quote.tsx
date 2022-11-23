const Quote = (props: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    className="relative my-8 rounded border border-ink-400 bg-white p-4 before:absolute before:top-1.5 before:left-1.5 before:-z-10 before:h-full before:w-full before:rounded before:bg-ink-600 before:content-[''] dark:bg-ink-900 before:dark:bg-ink-400"
    {...props}
  />
)

export default Quote
