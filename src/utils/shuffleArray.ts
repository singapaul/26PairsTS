// https://flaviocopes.com/how-to-shuffle-array-javascript/

// @ts-ignore
const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5)

export default shuffleArray
