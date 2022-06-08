import ManifyingGlass from '@/assets/svgr/magnifying-glass.svg'

interface SearchFieldProps {
  value: string
  placeholder: string
  handler: React.ChangeEventHandler<HTMLInputElement>
}

const SearchField = ({ value, placeholder, handler }: SearchFieldProps) => (
  <div className="pr-4 w-full sm:w-96 flex items-center bg-white dark:bg-ink-800 border border-ink-100 dark:border-ink-700 rounded-sm">
    <input
      className="flex-1 px-4 py-1 xs:py-2 w-full text-base bg-white dark:bg-ink-800 outline-none"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
    <ManifyingGlass className="w-4 h-4 text-ink-500 dark:text-ink-300" />
  </div>
)

export default SearchField
