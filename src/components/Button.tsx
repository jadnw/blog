import Link from 'next/link'

interface ButtonProps {
  handler?: React.MouseEventHandler<HTMLButtonElement>
  href?: string
  label: string
}

const Button = ({ handler, href, label }: ButtonProps) =>
  href ? (
    <Link href={href}>
      <a
        data-content={label}
        className="relative px-8 py-1 text-lg xs:text-xl bg-gray-800 dark:bg-gray-200 rounded font-cursive after:content-[attr(data-content)] after:absolute after:top-0 after:left-0 after:translate-x-1 after:-translate-y-1 hover:after:translate-x-0 hover:after:translate-y-0 after:w-full after:h-full after:flex after:items-center after:justify-center after:rounded dark:after:bg-gray-900 after:bg-white after:border-2 after:border-gray-600 dark:after:border-gray-400 after:z-10 after:duration-75"
      >
        {label}
      </a>
    </Link>
  ) : (
    <button
      className="relative px-8 py-1 text-lg xs:text-xl bg-gray-800 dark:bg-gray-200 rounded font-cursive after:content-[attr(data-content)] after:absolute after:top-0 after:left-0 after:translate-x-1 after:-translate-y-1 hover:after:translate-x-0 hover:after:translate-y-0 after:w-full after:h-full after:flex after:items-center after:justify-center after:rounded dark:after:bg-gray-900 after:bg-white after:border-2 after:border-gray-600 dark:after:border-gray-400 after:z-10 after:duration-75"
      onClick={handler}
    >
      {label}
    </button>
  )

export default Button
