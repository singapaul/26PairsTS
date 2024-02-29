import { getCurrentDate } from './getCurrentDate'


// @ts-ignore
export const checkPlayedToday = (difficulty) => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem('scoreHistory')
    if (!storedData) {
      return false
    }
    // Parse the JSON string back into an array
    const scoreHistory = JSON.parse(storedData)
    const today = getCurrentDate()

    const filteredByDifficulty = scoreHistory.filter(
      // @ts-ignore
      (score) => score.difficulty === 'dailyShuffle',
    )
    // @ts-ignore
    return filteredByDifficulty.some((entry) => entry.date === today)
  }
}
