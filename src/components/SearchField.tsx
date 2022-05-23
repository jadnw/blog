import ManifyingGlass from '@/assets/svgr/magnifying-glass.svg'

interface SearchFieldProps {
  value: string
  placeholder: string
  handler: React.ChangeEventHandler<HTMLInputElement>
}

const SearchField = ({ value, placeholder, handler }: SearchFieldProps) => (
  <div className="pr-4 w-96 flex items-center border-2 border-ink-100 rounded">
    <input
      className="flex-1 px-4 py-2 text-sm outline-none"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handler}
    />
    <ManifyingGlass className="w-4 h-4 text-ink-500" />
  </div>
)

export default SearchField
