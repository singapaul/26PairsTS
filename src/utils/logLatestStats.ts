import getCurrentDate from './getCurrentDate'

// @ts-ignore
export const logLatestStats = (gameScore, time, turnsCount, gameDifficulty) => {
  const formattedDate = getCurrentDate()

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('scoreHistory') == null) {
      // Write new value
      const firstVal = [
        {
          time: time.toString(),
          moves: (turnsCount + 1).toString(),
          score: gameScore.toString(),
          difficulty: gameDifficulty.toString(),
          date: formattedDate,
        },
      ]
      const initialiseValues = JSON.stringify(firstVal)
      localStorage.setItem('scoreHistory', initialiseValues)
    } else {
      // get the current value, add to it and resave
      const val = localStorage.getItem('scoreHistory')
      const newScore = {
        time: time.toString(),
        // add one to account for function being called after last move
        moves: (turnsCount + 1).toString(),
        score: gameScore.toString(),
        difficulty: gameDifficulty.toString(),
        date: formattedDate,
      }
      // @ts-ignore
      const valT = JSON.parse(val)
      valT.push(newScore)
      const updatedScores = JSON.stringify(valT)
      localStorage.setItem('scoreHistory', updatedScores)
    }
  }
}
