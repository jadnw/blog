import { ITEMS_PER_PAGE } from '@/lib/config'

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  return (
    monthNames[date.getMonth()] +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear()
  )
}

export const getItemsByPage = (items: any[], page = 1) => {
  return items.slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page)
}
