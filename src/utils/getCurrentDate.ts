export function getCurrentDate() {
  const currentDate = new Date()

  const day = String(currentDate.getDate()).padStart(2, '0')
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const year = currentDate.getFullYear()

  return `${day}/${month}/${year}`
}

export default getCurrentDate
