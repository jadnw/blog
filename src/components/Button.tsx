import Link from 'next/link'

interface ButtonProps {
  text: string
  handler?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
}

const Button = ({ handler, href, text }: ButtonProps) =>
  href ? (
    <Link href={href}>
      <a
        data-content={text}
        className="relative px-8 py-2 font-semibold text-base bg-ink-600 dark:bg-ink-200 rounded font-cursive after:content-[attr(data-content)] after:absolute after:top-0 after:left-0 after:translate-x-1 after:-translate-y-1 hover:after:translate-x-0 hover:after:translate-y-0 after:w-full after:h-full after:flex after:items-center after:justify-center after:rounded dark:after:bg-ink-900 after:bg-white after:border-2 after:border-ink-600 dark:after:border-ink-400 after:z-10 after:duration-75"
      >
        {text}
      </a>
    </Link>
  ) : (
    <button
      className="relative px-8 py-2 font-semibold text-base bg-ink-600 dark:bg-ink-200 rounded font-cursive after:content-[attr(data-content)] after:absolute after:top-0 after:left-0 after:translate-x-1 after:-translate-y-1 hover:after:translate-x-0 hover:after:translate-y-0 after:w-full after:h-full after:flex after:items-center after:justify-center after:rounded dark:after:bg-ink-900 after:bg-white after:border-2 after:border-ink-600 dark:after:border-ink-400 after:z-10 after:duration-75"
      onClick={handler}
    >
      {text}
    </button>
  )

export default Button
