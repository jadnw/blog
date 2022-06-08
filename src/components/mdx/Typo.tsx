const headingFontSizes = {
  h1: 'text-3xl md:text-4xl',
  h2: 'text-2xl md:text-3xl',
  h3: 'text-lg md:text-2xl',
}

interface TypoProps {
  as: 'h1' | 'h2' | 'h3'
}

const Typo = ({ as, ...props }: TypoProps) => (
  <h1
    className={`z-10 mt-8 mb-2 font-bold ${headingFontSizes[as]} scroll-mt-4`}
    {...props}
  />
)

export default Typo
