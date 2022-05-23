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
