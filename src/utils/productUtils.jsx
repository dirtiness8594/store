export const calculateDayOfWeek = (daysForward) => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const currentDate = new Date()
  const newDate = new Date(
    currentDate.setDate(currentDate.getDate() + daysForward)
  )

  const dayOfWeekIndex = newDate.getDay()

  return daysOfWeek[dayOfWeekIndex]
}

export const generateBreadcrumb = ({ info, category }) => {
  const breadcrumb = [{ label: 'Voltar', url: '/' }, { label: 'Home', url: '/' }]

  if (category && category.name && category.path) {
    breadcrumb.push({ label: category.name, url: `/category/${category.path}` })
  }

  if (info && info.name && info.url) {
    breadcrumb.push({ label: info.name, url: `/products/${info.url}` })
  }

  return breadcrumb
}
