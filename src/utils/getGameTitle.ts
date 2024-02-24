export function getGameTitle(input: string) {
  let result
  switch (input) {
    case 'dailyShuffle':
      result = 'daily'
      break
    case 'lite-shuffle':
      result = 'lite'
      break
    case 'classic-shuffle':
      result = 'classic'
      break
    default:
      result = ''
  }
  return result
}
